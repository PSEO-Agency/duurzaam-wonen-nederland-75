
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useFaqs = () => {
  return useQuery({
    queryKey: ['faqs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('faqs')
        .select('*')
        .eq('is_active', true)
        .order('sort_order');
      
      if (error) throw error;
      return data;
    }
  });
};

export const useProductFaqs = (productId: string) => {
  return useQuery({
    queryKey: ['product-faqs', productId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('product_faqs')
        .select(`
          *,
          faqs (*)
        `)
        .eq('product_id', productId)
        .order('sort_order');
      
      if (error) throw error;
      return data;
    },
    enabled: !!productId
  });
};
