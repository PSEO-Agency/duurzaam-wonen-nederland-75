
import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { Plus, Minus } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const benefitSchema = z.object({
  title: z.string().min(1, 'Titel is verplicht'),
  description: z.string().min(1, 'Beschrijving is verplicht'),
  icon: z.string().optional(),
});

const featureSchema = z.object({
  title: z.string().min(1, 'Titel is verplicht'),
  description: z.string().min(1, 'Beschrijving is verplicht'),
});

const faqSchema = z.object({
  question: z.string().min(1, 'Vraag is verplicht'),
  answer: z.string().min(1, 'Antwoord is verplicht'),
});

const workflowStepSchema = z.object({
  step: z.number().min(1),
  title: z.string().min(1, 'Titel is verplicht'),
  description: z.string().min(1, 'Beschrijving is verplicht'),
});

const quickLinkSchema = z.object({
  label: z.string().min(1, 'Label is verplicht'),
  href: z.string().min(1, 'URL is verplicht'),
});

const solutionSchema = z.object({
  name: z.string().min(1, 'Naam is verplicht'),
  slug: z.string().min(1, 'Slug is verplicht'),
  description: z.string().optional(),
  hero_title: z.string().optional(),
  hero_description: z.string().optional(),
  hero_image_url: z.string().optional(),
  intro_text: z.string().optional(),
  what_are_description: z.string().optional(),
  pricing_info: z.string().optional(),
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
  category_id: z.string().optional(),
  is_active: z.boolean().default(true),
  sort_order: z.number().default(0),
  benefits: z.array(benefitSchema).default([]),
  features: z.array(featureSchema).default([]),
  faq: z.array(faqSchema).default([]),
  workflow_steps: z.array(workflowStepSchema).default([]),
  quick_links: z.array(quickLinkSchema).default([]),
});

type SolutionFormData = z.infer<typeof solutionSchema>;

interface SolutionFormProps {
  solution?: any;
  onSuccess: () => void;
}

export const SolutionForm: React.FC<SolutionFormProps> = ({ solution, onSuccess }) => {
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
      benefits: solution?.benefits || [],
      features: solution?.features || [],
      faq: solution?.faq || [],
      workflow_steps: solution?.workflow_steps || [],
      quick_links: solution?.quick_links || [],
    },
  });

  const { fields: benefitFields, append: appendBenefit, remove: removeBenefit } = useFieldArray({
    control: form.control,
    name: 'benefits',
  });

  const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({
    control: form.control,
    name: 'features',
  });

  const { fields: faqFields, append: appendFaq, remove: removeFaq } = useFieldArray({
    control: form.control,
    name: 'faq',
  });

  const { fields: workflowFields, append: appendWorkflow, remove: removeWorkflow } = useFieldArray({
    control: form.control,
    name: 'workflow_steps',
  });

  const { fields: quickLinkFields, append: appendQuickLink, remove: removeQuickLink } = useFieldArray({
    control: form.control,
    name: 'quick_links',
  });

  const { data: categories = [] } = useQuery({
    queryKey: ['solution-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('solution_categories')
        .select('*')
        .eq('is_active', true)
        .order('sort_order');
      
      if (error) throw error;
      return data;
    },
  });

  const saveMutation = useMutation({
    mutationFn: async (data: SolutionFormData) => {
      console.log('Saving solution with data:', data);
      
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
        benefits: data.benefits.length > 0 ? JSON.stringify(data.benefits) : null,
        features: data.features.length > 0 ? JSON.stringify(data.features) : null,
        faq: data.faq.length > 0 ? JSON.stringify(data.faq) : null,
        workflow_steps: data.workflow_steps.length > 0 ? JSON.stringify(data.workflow_steps) : null,
        quick_links: data.quick_links.length > 0 ? JSON.stringify(data.quick_links) : null,
      };

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
            <Card>
              <CardHeader>
                <CardTitle>Basis Informatie</CardTitle>
                <CardDescription>Algemene informatie over de oplossing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Naam</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            onChange={(e) => {
                              field.onChange(e);
                              if (!solution) {
                                form.setValue('slug', generateSlug(e.target.value));
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Slug</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>URL pad voor deze oplossing</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Beschrijving</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={3} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="category_id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Categorie</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecteer categorie" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category.id} value={category.id}>
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="sort_order"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sorteervolgorde</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            {...field} 
                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="is_active"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Actief</FormLabel>
                        <FormDescription>
                          Of deze oplossing zichtbaar is op de website
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hero" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Hero Sectie</CardTitle>
                <CardDescription>Hoofdafbeelding en intro tekst</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="hero_title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hero Titel</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hero_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hero Beschrijving</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={3} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hero_image_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hero Afbeelding URL</FormLabel>
                      <FormControl>
                        <Input {...field} type="url" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Content Secties</CardTitle>
                <CardDescription>Hoofdinhoud van de oplossing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="intro_text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Intro Tekst</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={4} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="what_are_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Wat Zijn... Beschrijving</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={4} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="pricing_info"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prijsinformatie</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={3} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Separator />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-medium">Voordelen</h4>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => appendBenefit({ title: '', description: '', icon: '' })}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Voordeel Toevoegen
                    </Button>
                  </div>
                  
                  {benefitFields.map((field, index) => (
                    <div key={field.id} className="flex gap-4 items-end mb-4">
                      <FormField
                        control={form.control}
                        name={`benefits.${index}.title`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel>Titel</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name={`benefits.${index}.description`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel>Beschrijving</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeBenefit(index)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <Separator />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-medium">FAQ</h4>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => appendFaq({ question: '', answer: '' })}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      FAQ Toevoegen
                    </Button>
                  </div>
                  
                  {faqFields.map((field, index) => (
                    <div key={field.id} className="space-y-2 mb-4 p-4 border rounded">
                      <div className="flex justify-between items-start">
                        <h5 className="font-medium">FAQ #{index + 1}</h5>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeFaq(index)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <FormField
                        control={form.control}
                        name={`faq.${index}.question`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Vraag</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name={`faq.${index}.answer`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Antwoord</FormLabel>
                            <FormControl>
                              <Textarea {...field} rows={3} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
                <CardDescription>Kenmerken en eigenschappen</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-medium">Product Features</h4>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => appendFeature({ title: '', description: '' })}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Feature Toevoegen
                  </Button>
                </div>
                
                {featureFields.map((field, index) => (
                  <div key={field.id} className="flex gap-4 items-end mb-4">
                    <FormField
                      control={form.control}
                      name={`features.${index}.title`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Titel</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name={`features.${index}.description`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Beschrijving</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeFeature(index)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workflow" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Werkwijze</CardTitle>
                <CardDescription>Stappen in het proces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-medium">Workflow Stappen</h4>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const nextStep = workflowFields.length + 1;
                      appendWorkflow({ step: nextStep, title: '', description: '' });
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Stap Toevoegen
                  </Button>
                </div>
                
                {workflowFields.map((field, index) => (
                  <div key={field.id} className="space-y-2 mb-4 p-4 border rounded">
                    <div className="flex justify-between items-start">
                      <h5 className="font-medium">Stap {index + 1}</h5>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeWorkflow(index)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-2">
                        <FormField
                          control={form.control}
                          name={`workflow_steps.${index}.step`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Stap #</FormLabel>
                              <FormControl>
                                <Input 
                                  type="number" 
                                  {...field} 
                                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="col-span-10">
                        <FormField
                          control={form.control}
                          name={`workflow_steps.${index}.title`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Titel</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name={`workflow_steps.${index}.description`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Beschrijving</FormLabel>
                          <FormControl>
                            <Textarea {...field} rows={2} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seo" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>SEO & Meta</CardTitle>
                <CardDescription>Zoekmachine optimalisatie</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="meta_title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meta Titel</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>Maximaal 60 karakters aanbevolen</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="meta_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meta Beschrijving</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={3} />
                      </FormControl>
                      <FormDescription>Maximaal 160 karakters aanbevolen</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-4">
          <Button type="submit" disabled={saveMutation.isPending}>
            {saveMutation.isPending ? 'Opslaan...' : 'Oplossing Opslaan'}
          </Button>
        </div>
      </form>
    </Form>
  );
};
