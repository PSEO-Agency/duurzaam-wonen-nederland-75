
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  featuredImage: string;
  images: string[];
  category: string;
  tags: string[];
  location: string;
  clientName: string;
  completionDate: string;
  featured: boolean;
  createdAt: string;
}

export type ProjectCategory = 'renovatie' | 'nieuwbouw' | 'verduurzaming' | 'kozijnen' | 'dakkapel' | 'aanbouw';
