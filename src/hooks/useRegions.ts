
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useRegions = () => {
  return useQuery({
    queryKey: ['regions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('regions')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data;
    }
  });
};

export const useProductRegions = (productId: string) => {
  return useQuery({
    queryKey: ['product-regions', productId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('product_locations')
        .select(`
          *,
          regions (*)
        `)
        .eq('product_id', productId)
        .order('sort_order');
      
      if (error) throw error;
      return data;
    },
    enabled: !!productId
  });
};
