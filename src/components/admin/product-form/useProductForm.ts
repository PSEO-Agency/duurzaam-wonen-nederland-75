
import { useMutation, useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { ProductFormData } from './types';

export const useProductForm = (product: any, onSuccess: () => void) => {
  const { data: categories = [] } = useQuery({
    queryKey: ['product-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('product_categories')
        .select('*')
        .eq('is_active', true)
        .order('sort_order');
      
      if (error) throw error;
      return data;
    },
  });

  const saveMutation = useMutation({
    mutationFn: async (data: ProductFormData) => {
      console.log('Saving product with data:', data);
      
      // Prepare the data for database insertion
      const dbData = {
        name: data.name,
        slug: data.slug,
        description: data.description || null,
        hero_title: data.hero_title || null,
        hero_description: data.hero_description || null,
        hero_image_url: data.hero_image_url || null,
        intro_text: data.intro_text || null,
        what_are_description: data.what_are_description || null,
        pricing_info: data.pricing_info || null,
        meta_title: data.meta_title || null,
        meta_description: data.meta_description || null,
        category_id: data.category_id || null,
        is_active: data.is_active,
        sort_order: data.sort_order,
        benefits: data.benefits.length > 0 ? JSON.stringify(data.benefits) : null,
        features: data.features.length > 0 ? JSON.stringify(data.features) : null,
        faq: data.faq.length > 0 ? JSON.stringify(data.faq) : null,
        workflow_steps: data.workflow_steps.length > 0 ? JSON.stringify(data.workflow_steps) : null,
        quick_links: data.quick_links.length > 0 ? JSON.stringify(data.quick_links) : null,
      };

      if (product?.id) {
        console.log('Updating existing product:', product.id);
        const { error } = await supabase
          .from('products')
          .update(dbData)
          .eq('id', product.id);
        
        if (error) {
          console.error('Update error:', error);
          throw error;
        }
      } else {
        console.log('Creating new product');
        const { error } = await supabase
          .from('products')
          .insert(dbData);
        
        if (error) {
          console.error('Insert error:', error);
          throw error;
        }
      }
    },
    onSuccess: () => {
      console.log('Product saved successfully');
      toast.success(product ? 'Product bijgewerkt' : 'Product aangemaakt');
      onSuccess();
    },
    onError: (error) => {
      console.error('Save error:', error);
      toast.error('Fout bij opslaan: ' + error.message);
    },
  });

  return {
    categories,
    saveMutation,
  };
};
