
import { useMutation, useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { SolutionFormData } from './types';

export const useSolutionForm = (solution: any, onSuccess: () => void) => {
  const { data: categories = [] } = useQuery({
    queryKey: ['solution-categories'],
    queryFn: async () => {
      console.log('Fetching solution categories...');
      const { data, error } = await supabase
        .from('solution_categories')
        .select('*')
        .eq('is_active', true)
        .order('sort_order');
      
      if (error) {
        console.error('Error fetching categories:', error);
        throw error;
      }
      
      console.log('Fetched categories:', data);
      return data;
    },
  });

  const saveMutation = useMutation({
    mutationFn: async (data: SolutionFormData) => {
      console.log('Saving solution with data:', data);
      
      // Parse JSON fields safely
      const parseJsonField = (field: any) => {
        if (!field || (Array.isArray(field) && field.length === 0)) {
          return null;
        }
        return Array.isArray(field) ? field : JSON.parse(field);
      };

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
        benefits: data.benefits && data.benefits.length > 0 ? data.benefits : null,
        features: data.features && data.features.length > 0 ? data.features : null,
        faq: data.faq && data.faq.length > 0 ? data.faq : null,
        workflow_steps: data.workflow_steps && data.workflow_steps.length > 0 ? data.workflow_steps : null,
        quick_links: data.quick_links && data.quick_links.length > 0 ? data.quick_links : null,
      };

      console.log('Prepared database data:', dbData);

      if (solution?.id) {
        console.log('Updating existing solution:', solution.id);
        const { error } = await supabase
          .from('services')
          .update(dbData)
          .eq('id', solution.id);
        
        if (error) {
          console.error('Update error:', error);
          throw error;
        }
      } else {
        console.log('Creating new solution');
        const { error } = await supabase
          .from('services')
          .insert(dbData);
        
        if (error) {
          console.error('Insert error:', error);
          throw error;
        }
      }
    },
    onSuccess: () => {
      console.log('Solution saved successfully');
      toast.success(solution ? 'Oplossing bijgewerkt' : 'Oplossing aangemaakt');
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
