
export interface Template {
  id: string;
  name: string;
  description: string;
  sections: Section[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  templateId: string;
  metaDescription: string;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Section {
  id: string;
  name: string;
  type: 'hero' | 'content' | 'faq' | 'cta' | 'gallery' | 'products' | 'benefits';
  config: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}
