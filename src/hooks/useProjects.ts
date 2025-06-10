
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('is_active', true)
        .order('sort_order');
      
      if (error) throw error;
      return data;
    }
  });
};

export const useProductProjects = (productId: string) => {
  return useQuery({
    queryKey: ['product-projects', productId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('product_projects')
        .select(`
          *,
          projects (*)
        `)
        .eq('product_id', productId)
        .order('sort_order');
      
      if (error) throw error;
      return data;
    },
    enabled: !!productId
  });
};
