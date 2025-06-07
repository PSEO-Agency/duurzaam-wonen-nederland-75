
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, Pencil, Trash2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase } from '@/integrations/supabase/client';
import { SolutionForm } from '@/components/admin/SolutionForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';

interface Solution {
  id: string;
  name: string;
  slug: string;
  description: string;
  is_active: boolean;
  category_id?: string;
  created_at: string;
  category?: {
    name: string;
  };
}

const Solutions: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: solutions = [], isLoading } = useQuery({
    queryKey: ['admin-solutions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('services')
        .select(`
          *,
          solution_categories!inner(name)
        `)
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data as Solution[];
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-solutions'] });
      toast.success('Oplossing verwijderd');
    },
    onError: (error) => {
      toast.error('Fout bij verwijderen: ' + error.message);
    },
  });

  const handleEdit = (solution: Solution) => {
    setSelectedSolution(solution);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Weet je zeker dat je deze oplossing wilt verwijderen?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleFormSuccess = () => {
    setIsFormOpen(false);
    setSelectedSolution(null);
    queryClient.invalidateQueries({ queryKey: ['admin-solutions'] });
  };

  if (isLoading) {
    return <div>Laden...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Oplossingen Beheer</h1>
          <p className="text-gray-600">Beheer alle oplossingen en hun content</p>
        </div>
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setSelectedSolution(null)}>
              <Plus className="h-4 w-4 mr-2" />
              Nieuwe Oplossing
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {selectedSolution ? 'Oplossing Bewerken' : 'Nieuwe Oplossing'}
              </DialogTitle>
            </DialogHeader>
            <SolutionForm 
              solution={selectedSolution} 
              onSuccess={handleFormSuccess}
            />
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Oplossingen Overzicht</CardTitle>
          <CardDescription>
            {solutions.length} oplossingen gevonden
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Naam</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Categorie</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Aangemaakt</TableHead>
                <TableHead className="text-right">Acties</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {solutions.map((solution) => (
                <TableRow key={solution.id}>
                  <TableCell className="font-medium">{solution.name}</TableCell>
                  <TableCell className="font-mono text-sm">{solution.slug}</TableCell>
                  <TableCell>
                    {solution.category_id && (
                      <Badge variant="secondary">
                        {(solution as any).solution_categories?.name}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant={solution.is_active ? "default" : "secondary"}>
                      {solution.is_active ? 'Actief' : 'Inactief'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(solution.created_at).toLocaleDateString('nl-NL')}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <a href={`/${solution.slug}`} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(solution)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(solution.id)}
                        disabled={deleteMutation.isPending}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Solutions;
