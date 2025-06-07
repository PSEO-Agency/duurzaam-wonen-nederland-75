
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Form } from '@/components/ui/form';
import { productSchema, ProductFormData } from './product-form/types';
import { useProductForm } from './product-form/useProductForm';
import { BasicTab } from './product-form/BasicTab';
import { HeroTab } from './product-form/HeroTab';
import { ContentTab } from './product-form/ContentTab';
import { SEOTab } from './product-form/SEOTab';

interface ProductFormProps {
  product?: any;
  onSuccess: () => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({ product, onSuccess }) => {
  const form = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: product?.name || '',
      slug: product?.slug || '',
      description: product?.description || '',
      hero_title: product?.hero_title || '',
      hero_description: product?.hero_description || '',
      hero_image_url: product?.hero_image_url || '',
      intro_text: product?.intro_text || '',
      what_are_description: product?.what_are_description || '',
      pricing_info: product?.pricing_info || '',
      meta_title: product?.meta_title || '',
      meta_description: product?.meta_description || '',
      category_id: product?.category_id || '',
      is_active: product?.is_active ?? true,
      sort_order: product?.sort_order || 0,
      benefits: product?.benefits || [],
      features: product?.features || [],
      faq: product?.faq || [],
      workflow_steps: product?.workflow_steps || [],
      quick_links: product?.quick_links || [],
    },
  });

  const { categories, saveMutation } = useProductForm(product, onSuccess);

  const onSubmit = (data: ProductFormData) => {
    console.log('Form submitted with data:', data);
    saveMutation.mutate(data);
  };

  // Generate slug from name
  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Basis</TabsTrigger>
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <BasicTab 
              form={form} 
              categories={categories} 
              product={product} 
              generateSlug={generateSlug} 
            />
          </TabsContent>

          <TabsContent value="hero" className="space-y-4">
            <HeroTab form={form} />
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <ContentTab form={form} />
          </TabsContent>

          <TabsContent value="seo" className="space-y-4">
            <SEOTab form={form} />
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-4">
          <Button type="submit" disabled={saveMutation.isPending}>
            {saveMutation.isPending ? 'Opslaan...' : 'Product Opslaan'}
          </Button>
        </div>
      </form>
    </Form>
  );
};
