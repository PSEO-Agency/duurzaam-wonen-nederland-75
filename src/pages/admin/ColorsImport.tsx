import React, { useState } from 'react';
import { Upload, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import Papa from 'papaparse';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface ParsedRow {
  kleur: string;
  ral: string;
  categorie: string;
  imageUrl: string;
  hex?: string;
  kleurcode?: string;
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

interface ValidatedRow extends ParsedRow {
  validation: ValidationResult;
}

const ColorsImport: React.FC = () => {
  const [parsedData, setParsedData] = useState<ValidatedRow[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const { toast } = useToast();

  const VALID_CATEGORIES = ['white', 'grey', 'blue', 'other'];

  const generateSlug = (name: string): string => {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const normalizeRal = (ral: string): string => {
    return ral.toString().trim().replace(/\s+/g, '').toUpperCase();
  };

  const validateRow = (row: ParsedRow): ValidationResult => {
    const errors: string[] = [];

    if (!row.kleur || row.kleur.trim() === '') {
      errors.push('Kleur is verplicht');
    }
    if (!row.ral || row.ral.trim() === '') {
      errors.push('RAL is verplicht');
    }
    if (!row.categorie || row.categorie.trim() === '') {
      errors.push('Categorie is verplicht');
    } else if (!VALID_CATEGORIES.includes(row.categorie.toLowerCase())) {
      errors.push(`Categorie moet één van de volgende zijn: ${VALID_CATEGORIES.join(', ')}`);
    }
    if (row.imageUrl && row.imageUrl.trim() !== '') {
      try {
        new URL(row.imageUrl);
      } catch {
        errors.push('Ongeldige Image URL');
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: 'Bestand te groot',
        description: 'Het bestand mag maximaal 5MB groot zijn.',
        variant: 'destructive'
      });
      return;
    }

    if (!file.name.endsWith('.csv')) {
      toast({
        title: 'Ongeldig bestandstype',
        description: 'Alleen CSV bestanden zijn toegestaan.',
        variant: 'destructive'
      });
      return;
    }

    setIsUploading(true);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const data = results.data as any[];
          const parsed: ValidatedRow[] = data.map((row) => {
            const parsedRow: ParsedRow = {
              kleur: row.Kleur || row.kleur || '',
              ral: row.RAL || row.ral || '',
              categorie: row.Categorie || row.categorie || '',
              imageUrl: row['Image URL'] || row['image url'] || row.imageUrl || ''
            };

            return {
              ...parsedRow,
              validation: validateRow(parsedRow)
            };
          });

          setParsedData(parsed);
          
          const validCount = parsed.filter(r => r.validation.isValid).length;
          const invalidCount = parsed.length - validCount;

          toast({
            title: 'CSV verwerkt',
            description: `${validCount} geldige rijen, ${invalidCount} ongeldige rijen`
          });
        } catch (error) {
          toast({
            title: 'Fout bij verwerken',
            description: 'Er is een fout opgetreden bij het verwerken van het CSV bestand.',
            variant: 'destructive'
          });
        } finally {
          setIsUploading(false);
        }
      },
      error: () => {
        toast({
          title: 'Fout bij lezen',
          description: 'Er is een fout opgetreden bij het lezen van het CSV bestand.',
          variant: 'destructive'
        });
        setIsUploading(false);
      }
    });
  };

  const executeImport = async () => {
    setIsImporting(true);
    setShowConfirmDialog(false);

    try {
      // Check auth session to satisfy RLS
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast({
          title: 'Niet ingelogd',
          description: 'Log in om kleuren te kunnen importeren.',
          variant: 'destructive'
        });
        setIsImporting(false);
        return;
      }

      // Delete all existing colors
      const { error: deleteError } = await supabase
        .from('colors')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all (using impossible UUID)

      if (deleteError) throw deleteError;

      // Prepare data for insertion with unique slugs across the whole batch
      const validRows = parsedData.filter(r => r.validation.isValid);

      // Start with any existing slugs (in case delete didn't remove all due to RLS/constraints)
      const usedSlugs = new Set<string>();
      const { data: existingSlugs } = await supabase.from('colors').select('slug');
      existingSlugs?.forEach((r: { slug: string }) => usedSlugs.add(r.slug));
      const makeUniqueSlug = (base: string) => {
        let slug = base;
        let i = 2;
        while (usedSlugs.has(slug)) {
          slug = `${base}-${i++}`;
        }
        usedSlugs.add(slug);
        return slug;
      };

      const usedRalsNorm = new Set<string>();
      const uniqueByRal = validRows.filter((row) => {
        const norm = normalizeRal(row.ral);
        if (usedRalsNorm.has(norm)) return false;
        usedRalsNorm.add(norm);
        return true;
      });

      const colorsToInsert = uniqueByRal.map((row, index) => {
        const baseSlug = generateSlug(row.kleur);
        const uniqueSlug = makeUniqueSlug(baseSlug);
        return {
          name: row.kleur.trim(),
          slug: uniqueSlug,
          ral_code: row.ral.trim(),
          category: row.categorie.toLowerCase().trim(),
          image_url: row.imageUrl && row.imageUrl.trim() !== '' ? row.imageUrl.trim() : null,
          hex: row.hex?.trim() || row.kleurcode?.trim() || '#CCCCCC',
          description: null,
          sort_order: index,
          has_wood_texture: row.categorie.toLowerCase() === 'white',
          is_active: true
        };
      });

      // Insert new colors
      const { error: insertError } = await supabase
        .from('colors')
        .insert(colorsToInsert);

      if (insertError) throw insertError;

      toast({
        title: 'Import geslaagd',
        description: `${colorsToInsert.length} kleuren succesvol geïmporteerd.${validRows.length > colorsToInsert.length ? ` ${validRows.length - colorsToInsert.length} dubbele RAL-codes overgeslagen.` : ''}`
      });

      // Clear the data
      setParsedData([]);
    } catch (error) {
      console.error('Import error:', error);
      toast({
        title: 'Import mislukt',
        description: (error as any)?.message || 'Er is een fout opgetreden bij het importeren van de kleuren.',
        variant: 'destructive'
      });
    } finally {
      setIsImporting(false);
    }
  };

  const handleImportClick = () => {
    const validRows = parsedData.filter(r => r.validation.isValid);
    if (validRows.length === 0) {
      toast({
        title: 'Geen geldige rijen',
        description: 'Er zijn geen geldige rijen om te importeren.',
        variant: 'destructive'
      });
      return;
    }

    setShowConfirmDialog(true);
  };

  const handleCancel = () => {
    setParsedData([]);
  };

  const validCount = parsedData.filter(r => r.validation.isValid).length;
  const invalidCount = parsedData.length - validCount;
  const hasInvalidRows = invalidCount > 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Kleuren Import</h1>
        <p className="text-muted-foreground mt-2">
          Importeer kleuren vanuit een CSV bestand met kolommen: Kleur, RAL, Categorie, Image URL
        </p>
      </div>

      {parsedData.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>CSV bestand uploaden</CardTitle>
            <CardDescription>
              Upload een CSV bestand met de volgende kolommen: Kleur, RAL, Categorie (white/grey/blue/other), Image URL
            </CardDescription>
          </CardHeader>
          <CardContent>
            <label
              htmlFor="csv-upload"
              className={cn(
                "flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
                "hover:bg-accent/50",
                isUploading ? "opacity-50 pointer-events-none" : ""
              )}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-12 h-12 mb-4 text-muted-foreground" />
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-semibold">Klik om te uploaden</span> of sleep het bestand hier
                </p>
                <p className="text-xs text-muted-foreground">CSV (MAX. 5MB)</p>
              </div>
              <input
                id="csv-upload"
                type="file"
                className="hidden"
                accept=".csv"
                onChange={handleFileUpload}
                disabled={isUploading}
              />
            </label>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Geïmporteerde data</CardTitle>
                  <CardDescription>
                    {validCount} geldige rijen, {invalidCount} ongeldige rijen
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={handleCancel}>
                    Annuleren
                  </Button>
                  <Button
                    onClick={handleImportClick}
                    disabled={validCount === 0 || isImporting}
                  >
                    {isImporting ? 'Importeren...' : 'Importeren'}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {hasInvalidRows && (
                <div className="flex items-start gap-2 p-4 mb-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Let op: Er zijn ongeldige rijen</p>
                    <p className="text-sm text-muted-foreground">
                      Alleen geldige rijen worden geïmporteerd. Controleer de fouten hieronder.
                    </p>
                  </div>
                </div>
              )}

              <div className="border rounded-lg overflow-auto max-h-[600px]">
                <Table>
                  <TableHeader className="sticky top-0 bg-background">
                    <TableRow>
                      <TableHead className="w-12">Status</TableHead>
                      <TableHead>Kleur</TableHead>
                      <TableHead>RAL</TableHead>
                      <TableHead>Categorie</TableHead>
                      <TableHead>Image URL</TableHead>
                      <TableHead>Fouten</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {parsedData.map((row, index) => (
                      <TableRow key={index} className={!row.validation.isValid ? 'bg-destructive/5' : ''}>
                        <TableCell>
                          {row.validation.isValid ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-destructive" />
                          )}
                        </TableCell>
                        <TableCell className="font-medium">{row.kleur}</TableCell>
                        <TableCell>{row.ral}</TableCell>
                        <TableCell>{row.categorie}</TableCell>
                        <TableCell className="max-w-xs truncate text-xs">
                          {row.imageUrl || '-'}
                        </TableCell>
                        <TableCell>
                          {row.validation.errors.length > 0 && (
                            <ul className="text-xs text-destructive">
                              {row.validation.errors.map((error, i) => (
                                <li key={i}>• {error}</li>
                              ))}
                            </ul>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Bevestig import</AlertDialogTitle>
            <AlertDialogDescription>
              Dit zal <strong>alle bestaande kleuren verwijderen</strong> en vervangen door de nieuwe data 
              ({validCount} kleuren). Deze actie kan niet ongedaan worden gemaakt. Weet u het zeker?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuleren</AlertDialogCancel>
            <AlertDialogAction onClick={executeImport}>
              Ja, importeren
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ColorsImport;
