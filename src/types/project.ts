
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  location: string | null;
  project_type: string | null;
  completion_date: string | null;
  image_url: string | null;
  featured_image: string | null;
  gallery_images: any;
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export type ProjectCategory = 'renovatie' | 'nieuwbouw' | 'verduurzaming' | 'kozijnen' | 'dakkapel' | 'aanbouw';
