
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface SolutionData {
  id: string;
  name: string;
  slug: string;
  description: string;
  hero_title: string;
  hero_description: string;
  hero_image_url: string;
  intro_text: string;
  what_are_description: string;
  quick_links: any[];
  benefits: any[];
  features: any[];
  pricing_info: string;
  faq: any[];
  workflow_steps: any[];
  meta_title: string;
  meta_description: string;
  icon_name: string;
  is_active: boolean;
  sort_order: number;
  category_id: string;
  projects?: any[];
}

export const useSolutions = () => {
  return useQuery({
    queryKey: ['solutions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data as SolutionData[];
    },
  });
};

export const useSolution = (slug: string) => {
  return useQuery({
    queryKey: ['solution', slug],
    queryFn: async () => {
      // Get the main solution data
      const { data: solutionData, error: solutionError } = await supabase
        .from('services')
        .select('*')
        .eq('slug', slug)
        .eq('is_active', true)
        .single();
      
      if (solutionError) throw solutionError;
      
      // Get related projects for this solution
      const { data: projectsData, error: projectsError } = await supabase
        .from('solution_projects')
        .select('*')
        .eq('service_id', solutionData.id)
        .order('completion_date', { ascending: false })
        .limit(6);
      
      if (projectsError) {
        console.warn('Error fetching projects:', projectsError);
      }
      
      return {
        ...solutionData,
        projects: projectsData || []
      } as SolutionData;
    },
    enabled: !!slug,
  });
};

export const useRelatedSolutions = (currentSolutionId: string, categoryId?: string) => {
  return useQuery({
    queryKey: ['related-solutions', currentSolutionId, categoryId],
    queryFn: async () => {
      let query = supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .neq('id', currentSolutionId)
        .order('sort_order', { ascending: true })
        .limit(3);
      
      if (categoryId) {
        query = query.eq('category_id', categoryId);
      }
      
      const { data, error } = await query;
      
      if (error) throw error;
      return data as SolutionData[];
    },
    enabled: !!currentSolutionId,
  });
};

export const useSolutionCategories = () => {
  return useQuery({
    queryKey: ['solution-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('solution_categories')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });
};
