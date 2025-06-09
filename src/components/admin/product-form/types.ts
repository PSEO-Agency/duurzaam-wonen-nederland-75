
import { z } from 'zod';

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
  step: z.number().min(1, 'Stapnummer is verplicht'),
  title: z.string().min(1, 'Titel is verplicht'),
  description: z.string().min(1, 'Beschrijving is verplicht'),
});

const quickLinkSchema = z.object({
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
  benefits: z.array(benefitSchema).default([]),
  features: z.array(featureSchema).default([]),
  faq: z.array(faqSchema).default([]),
  workflow_steps: z.array(workflowStepSchema).default([]),
  quick_links: z.array(quickLinkSchema).default([]),
});

export type ProductFormData = z.infer<typeof productSchema>;
