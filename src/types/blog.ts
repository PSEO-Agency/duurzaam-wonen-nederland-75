
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    title: string;
  };
  publishedDate: string;
  readTime: number;
  featured: boolean;
  relatedPosts?: string[];
}

export type BlogCategory = 'tips' | 'nieuws' | 'verduurzaming' | 'projecten' | 'kozijnen' | 'interieur';
