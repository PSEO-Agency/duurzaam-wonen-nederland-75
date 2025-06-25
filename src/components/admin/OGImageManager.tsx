
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase } from '@/integrations/supabase/client';
import { generateProductOGImages, generateOGImage } from '@/utils/ogImageGenerator';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Image, RefreshCw, Eye } from 'lucide-react';

const OGImageManager: React.FC = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isGeneratingAll, setIsGeneratingAll] = useState(false);

  const { data: ogImages, isLoading } = useQuery({
    queryKey: ['admin-og-images'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('og_images')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const regenerateImageMutation = useMutation({
    mutationFn: async (ogImage: any) => {
      // Delete old image from storage
      const fileName = ogImage.image_url.split('/').pop();
      await supabase.storage.from('og-images').remove([fileName]);
      
      // Delete from database
      await supabase.from('og_images').delete().eq('id', ogImage.id);
      
      // Generate new image
      return generateOGImage({
        pageType: ogImage.page_type,
        pageSlug: ogImage.page_slug,
        pageId: ogImage.page_id,
        title: ogImage.title,
        description: ogImage.description,
      });
    },
    onSuccess: () => {
      toast({
        title: 'OG image regenerated',
        description: 'The Open Graph image has been successfully regenerated.',
      });
      queryClient.invalidateQueries({ queryKey: ['admin-og-images'] });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: `Failed to regenerate OG image: ${error.message}`,
        variant: 'destructive',
      });
    },
  });

  const handleGenerateAllProducts = async () => {
    setIsGeneratingAll(true);
    try {
      const results = await generateProductOGImages();
      const successCount = results?.filter(r => r.success).length || 0;
      const totalCount = results?.length || 0;
      
      toast({
        title: 'Batch generation complete',
        description: `Generated ${successCount}/${totalCount} OG images successfully.`,
      });
      
      queryClient.invalidateQueries({ queryKey: ['admin-og-images'] });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to generate OG images for products.',
        variant: 'destructive',
      });
    } finally {
      setIsGeneratingAll(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Image className="h-5 w-5" />
            Open Graph Image Manager
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <Button 
              onClick={handleGenerateAllProducts}
              disabled={isGeneratingAll}
              className="bg-brand-green hover:bg-brand-green-dark"
            >
              {isGeneratingAll ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Generate All Product Images
                </>
              )}
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Preview</TableHead>
                  <TableHead>Page Type</TableHead>
                  <TableHead>Page Slug</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ogImages?.map((ogImage) => (
                  <TableRow key={ogImage.id}>
                    <TableCell>
                      <img 
                        src={ogImage.image_url} 
                        alt={ogImage.title}
                        className="w-16 h-8 object-cover rounded border"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{ogImage.page_type}</TableCell>
                    <TableCell>{ogImage.page_slug || ogImage.page_id || '-'}</TableCell>
                    <TableCell className="max-w-xs truncate">{ogImage.title}</TableCell>
                    <TableCell>{new Date(ogImage.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(ogImage.image_url, '_blank')}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => regenerateImageMutation.mutate(ogImage)}
                          disabled={regenerateImageMutation.isPending}
                        >
                          {regenerateImageMutation.isPending ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <RefreshCw className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OGImageManager;
