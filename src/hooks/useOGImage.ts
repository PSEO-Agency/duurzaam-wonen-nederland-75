
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface OGImageParams {
  pageType: string;
  pageSlug?: string;
  pageId?: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

export const useOGImage = (params: OGImageParams) => {
  const queryClient = useQueryClient();

  const { data: ogImage, isLoading } = useQuery({
    queryKey: ['og-image', params.pageType, params.pageSlug, params.pageId],
    queryFn: async () => {
      console.log('Fetching OG image for:', params);
      
      let query = supabase
        .from('og_images')
        .select('*')
        .eq('page_type', params.pageType);

      if (params.pageSlug) {
        query = query.eq('page_slug', params.pageSlug);
      }
      if (params.pageId) {
        query = query.eq('page_id', params.pageId);
      }

      const { data, error } = await query.maybeSingle();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching OG image:', error);
        throw error;
      }

      return data;
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const generateOGImageMutation = useMutation({
    mutationFn: async (generateParams: OGImageParams) => {
      console.log('Generating OG image with params:', generateParams);
      
      const { data, error } = await supabase.functions.invoke('generate-og-image', {
        body: generateParams
      });

      if (error) {
        console.error('Error generating OG image:', error);
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['og-image', params.pageType, params.pageSlug, params.pageId]
      });
    },
  });

  const generateOGImage = () => {
    if (!ogImage && !generateOGImageMutation.isPending) {
      generateOGImageMutation.mutate(params);
    }
  };

  return {
    ogImage,
    isLoading,
    generateOGImage,
    isGenerating: generateOGImageMutation.isPending,
  };
};
