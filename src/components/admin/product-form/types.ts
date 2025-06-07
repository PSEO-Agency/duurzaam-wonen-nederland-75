
import * as z from 'zod';

export const productBenefitSchema = z.object({
  title: z.string().min(1, 'Titel is verplicht'),
  description: z.string().min(1, 'Beschrijving is verplicht'),
  icon: z.string().optional(),
});

export const productFeatureSchema = z.object({
  title: z.string().min(1, 'Titel is verplicht'),
  description: z.string().min(1, 'Beschrijving is verplicht'),
});

export const productFaqSchema = z.object({
  question: z.string().min(1, 'Vraag is verplicht'),
  answer: z.string().min(1, 'Antwoord is verplicht'),
});

export const productWorkflowStepSchema = z.object({
  step: z.number().min(1),
  title: z.string().min(1, 'Titel is verplicht'),
  description: z.string().min(1, 'Beschrijving is verplicht'),
});

export const productQuickLinkSchema = z.object({
  label: z.string().min(1, 'Label is verplicht'),
  href: z.string().min(1, 'URL is verplicht'),
});

export const productSchema = z.object({
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
  benefits: z.array(productBenefitSchema).default([]),
  features: z.array(productFeatureSchema).default([]),
  faq: z.array(productFaqSchema).default([]),
  workflow_steps: z.array(productWorkflowStepSchema).default([]),
  quick_links: z.array(productQuickLinkSchema).default([]),
});

export type ProductFormData = z.infer<typeof productSchema>;
export type ProductBenefitData = z.infer<typeof productBenefitSchema>;
export type ProductFeatureData = z.infer<typeof productFeatureSchema>;
export type ProductFAQData = z.infer<typeof productFaqSchema>;
export type ProductWorkflowStepData = z.infer<typeof productWorkflowStepSchema>;
export type ProductQuickLinkData = z.infer<typeof productQuickLinkSchema>;
