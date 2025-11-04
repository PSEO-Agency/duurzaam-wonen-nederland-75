import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Color {
  id: string;
  name: string;
  slug: string;
  hex: string;
  ral_code: string;
  category: string;
  description: string | null;
  sort_order: number;
  has_wood_texture: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useColors = () => {
  return useQuery({
    queryKey: ['colors'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('colors')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data as Color[];
    }
  });
};

export const useColorBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['color', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('colors')
        .select('*')
        .eq('slug', slug)
        .eq('is_active', true)
        .single();
      
      if (error) throw error;
      return data as Color;
    },
    enabled: !!slug
  });
};
