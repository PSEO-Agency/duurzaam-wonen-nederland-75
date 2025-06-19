
import React from 'react';
import { ServicePageTemplateProps } from '@/components/templates/ServicePageTemplate';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

interface ProductData {
  id: string;
  name: string;
  slug: string;
  description?: string;
  seo_title?: string;
  seo_description?: string;
  seo_canonical_url?: string;
  hero_badge?: string;
  hero_title?: string;
  hero_description?: string;
  hero_background_image?: string;
  hero_primary_button_text?: string;
  hero_primary_button_link?: string;
  hero_secondary_button_text?: string;
  hero_secondary_button_link?: string;
  hero_guarantees?: any;
  benefits?: any;
  hero_certification_logos?: any;
  introduction_title?: string;
  introduction_content?: any;
  introduction_quick_links?: any;
  introduction_cta_text?: string;
  introduction_cta_link?: string;
  what_are_title?: string;
  what_are_content?: any;
  features?: any;
  what_are_video_url?: string;
  what_are_video_title?: string;
  benefits_title?: string;
  benefits_description?: string;
  benefits_main_content?: any;
  benefits_stats?: any;
  benefits_cta_text?: string;
  benefits_cta_link?: string;
  options_title?: string;
  options_description?: string;
  options_categories?: any;
  services_title?: string;
  services_description?: string;
  services_items?: any;
  information_title?: string;
  information_image?: string;
  information_image_alt?: string;
  information_tabs?: any;
  information_did_you_know?: any;
  faq_title?: string;
  faq_description?: string;
  faq?: any;
  show_regions?: boolean;
  template_type?: string;
}

export const convertProductToServicePageConfig = (product: ProductData): ServicePageTemplateProps => {
  // Parse JSON fields safely
  const parseJSON = (field: any, fallback: any = []) => {
    if (!field) return fallback;
    if (typeof field === 'string') {
      try {
        return JSON.parse(field);
      } catch {
        return fallback;
      }
    }
    return field;
  };

  return {
    seo: {
      title: product.seo_title || product.name,
      description: product.seo_description || product.description || '',
      canonicalUrl: product.seo_canonical_url || `https://duurzaamwonen.info/${product.slug}`
    },
    
    hero: {
      backgroundImage: product.hero_background_image || '/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png',
      badge: product.hero_badge || 'Specialist',
      title: product.hero_title || product.name,
      description: product.hero_description || product.description || '',
      primaryButtonText: product.hero_primary_button_text || 'Offerte aanvragen',
      primaryButtonLink: product.hero_primary_button_link || '/offerte',
      secondaryButtonText: product.hero_secondary_button_text || 'Meer informatie',
      secondaryButtonLink: product.hero_secondary_button_link,
      guarantees: parseJSON(product.hero_guarantees, ['15 jaar productgarantie', 'Gratis advies', '10 jaar servicegarantie']),
      benefits: parseJSON(product.benefits, [
        'Energiebesparend - Warmte blijft binnen',
        'Onderhoudsarm - Nooit meer schilderen',
        'Lange levensduur - 15 jaar productgarantie'
      ]),
      certificationLogos: parseJSON(product.hero_certification_logos, [])
    },
    
    introduction: {
      title: product.introduction_title || 'Introductie',
      content: parseJSON(product.introduction_content, [product.description || '']),
      quickLinks: parseJSON(product.introduction_quick_links, []),
      ctaText: product.introduction_cta_text || 'Vraag nu vrijblijvend een offerte aan',
      ctaLink: product.introduction_cta_link || '/offerte'
    },
    
    whatAre: {
      title: product.what_are_title || `Wat zijn ${product.name}?`,
      content: parseJSON(product.what_are_content, [product.description || '']),
      features: parseJSON(product.features, []),
      videoUrl: product.what_are_video_url,
      videoTitle: product.what_are_video_title
    },
    
    benefits: {
      title: product.benefits_title || 'Voordelen',
      description: product.benefits_description || '',
      mainContent: parseJSON(product.benefits_main_content, []),
      stats: parseJSON(product.benefits_stats, []),
      ctaText: product.benefits_cta_text || 'Vraag vrijblijvend een offerte aan!',
      ctaLink: product.benefits_cta_link || '/offerte'
    },
    
    ...(product.options_title && {
      options: {
        title: product.options_title,
        description: product.options_description || '',
        categories: parseJSON(product.options_categories, [])
      }
    }),
    
    services: {
      title: product.services_title || 'Onze Diensten',
      description: product.services_description || '',
      serviceItems: parseJSON(product.services_items, [])
    },
    
    ...(product.information_title && {
      information: {
        title: product.information_title,
        image: product.information_image || '/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png',
        imageAlt: product.information_image_alt || product.name,
        tabs: parseJSON(product.information_tabs, []),
        didYouKnow: parseJSON(product.information_did_you_know, { title: 'Wist u dat?', facts: [] })
      }
    }),
    
    faq: {
      title: product.faq_title || 'Veelgestelde vragen',
      description: product.faq_description || '',
      questions: parseJSON(product.faq, [])
    },
    
    showRegions: product.show_regions !== false
  };
};

export const createServicePageFromProduct = (product: ProductData) => {
  const config = convertProductToServicePageConfig(product);
  
  const ServicePage: React.FC = () => {
    return <ServicePageTemplate {...config} />;
  };
  
  return ServicePage;
};
