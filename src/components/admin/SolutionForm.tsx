
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Form } from '@/components/ui/form';
import { solutionSchema, SolutionFormData } from './solution-form/types';
import { useSolutionForm } from './solution-form/useSolutionForm';
import { BasicTab } from './solution-form/BasicTab';
import { HeroTab } from './solution-form/HeroTab';
import { ContentTab } from './solution-form/ContentTab';
import { FeaturesTab } from './solution-form/FeaturesTab';
import { WorkflowTab } from './solution-form/WorkflowTab';
import { SEOTab } from './solution-form/SEOTab';

interface SolutionFormProps {
  solution?: any;
  onSuccess: () => void;
}

export const SolutionForm: React.FC<SolutionFormProps> = ({ solution, onSuccess }) => {
  console.log('SolutionForm rendered with solution:', solution);

  // Parse JSON fields safely for form defaults
  const parseJsonField = (field: any) => {
    if (!field) return [];
    if (Array.isArray(field)) return field;
    try {
      return JSON.parse(field);
    } catch {
      return [];
    }
  };

  const form = useForm<SolutionFormData>({
    resolver: zodResolver(solutionSchema),
    defaultValues: {
      name: solution?.name || '',
      slug: solution?.slug || '',
      description: solution?.description || '',
      hero_title: solution?.hero_title || '',
      hero_description: solution?.hero_description || '',
      hero_image_url: solution?.hero_image_url || '',
      intro_text: solution?.intro_text || '',
      what_are_description: solution?.what_are_description || '',
      pricing_info: solution?.pricing_info || '',
      meta_title: solution?.meta_title || '',
      meta_description: solution?.meta_description || '',
      category_id: solution?.category_id || '',
      is_active: solution?.is_active ?? true,
      sort_order: solution?.sort_order || 0,
      benefits: parseJsonField(solution?.benefits),
      features: parseJsonField(solution?.features),
      faq: parseJsonField(solution?.faq),
      workflow_steps: parseJsonField(solution?.workflow_steps),
      quick_links: parseJsonField(solution?.quick_links),
    },
  });

  const { categories, saveMutation } = useSolutionForm(solution, onSuccess);

  const onSubmit = (data: SolutionFormData) => {
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
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="basic">Basis</TabsTrigger>
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="workflow">Workflow</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <BasicTab 
              form={form} 
              categories={categories} 
              solution={solution} 
              generateSlug={generateSlug} 
            />
          </TabsContent>

          <TabsContent value="hero" className="space-y-4">
            <HeroTab form={form} />
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <ContentTab form={form} />
          </TabsContent>

          <TabsContent value="features" className="space-y-4">
            <FeaturesTab form={form} />
          </TabsContent>

          <TabsContent value="workflow" className="space-y-4">
            <WorkflowTab form={form} />
          </TabsContent>

          <TabsContent value="seo" className="space-y-4">
            <SEOTab form={form} />
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-4">
          <Button type="submit" disabled={saveMutation.isPending}>
            {saveMutation.isPending ? 'Opslaan...' : (solution ? 'Oplossing Bijwerken' : 'Oplossing Aanmaken')}
          </Button>
        </div>
      </form>
    </Form>
  );
};
