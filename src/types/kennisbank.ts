
export interface KennisbankArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: KennisbankCategory;
  subCategory: string;
  featuredImage?: string;
  publishedDate: string;
  lastUpdated?: string;
  readTime: number;
  featured: boolean;
  relatedArticles?: string[];
}

export type KennisbankCategory = 
  | 'inleiding'
  | 'voordelen'
  | 'nadelen'
  | 'soorten'
  | 'technisch'
  | 'installatie'
  | 'onderhoud'
  | 'kosten'
  | 'milieu'
  | 'faq'
  | 'cases'
  | 'normen'
  | 'innovaties';
