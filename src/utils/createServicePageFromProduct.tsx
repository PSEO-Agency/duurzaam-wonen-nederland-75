
import React from 'react';
import ServicePageTemplate, { ServicePageTemplateProps } from '@/components/templates/ServicePageTemplate';

// Helper function to safely parse JSON strings
const safeJsonParse = (jsonString: string | null, fallback: any = []) => {
  if (!jsonString) return fallback;
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.warn('Failed to parse JSON:', jsonString, error);
    return fallback;
  }
};

// Helper function to safely access array elements
const safeArray = (value: any, fallback: any[] = []): any[] => {
  return Array.isArray(value) ? value : fallback;
};

// Helper function to safely access string values
const safeString = (value: any, fallback: string = ''): string => {
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return String(value);
  return fallback;
};

/**
 * Creates a service page component from a product database record
 */
export const createServicePageFromProduct = (product: any) => {
  const ServicePage: React.FC = () => {
    // Parse JSON fields safely
    const heroGuarantees = safeJsonParse(product.hero_guarantees, []);
    const heroBenefits = safeJsonParse(product.hero_benefits, []);
    const heroCertificationLogos = safeJsonParse(product.hero_certification_logos, []);
    const introductionContent = safeJsonParse(product.introduction_content, []);
    const introductionQuickLinks = safeJsonParse(product.introduction_quick_links, []);
    const whatAreContent = safeJsonParse(product.what_are_content, []);
    const whatAreFeatures = safeJsonParse(product.what_are_features, []);
    const benefitsMainContent = safeJsonParse(product.benefits_main_content, []);
    const benefitsStats = safeJsonParse(product.benefits_stats, []);
    const optionsCategories = safeJsonParse(product.options_categories, []);
    const servicesServiceItems = safeJsonParse(product.services_service_items, []);
    const informationTabs = safeJsonParse(product.information_tabs, []);
    const informationDidYouKnow = safeJsonParse(product.information_did_you_know, {});
    const faqQuestions = safeJsonParse(product.faq_questions, []);

    const config: ServicePageTemplateProps = {
      productName: safeString(product.name),
      productSlug: safeString(product.slug),
      seo: {
        title: safeString(product.seo_title),
        description: safeString(product.seo_description),
        canonicalUrl: safeString(product.seo_canonical_url)
      },
      hero: {
        backgroundImage: safeString(product.hero_background_image),
        badge: safeString(product.hero_badge),
        title: safeString(product.hero_title),
        description: safeString(product.hero_description),
        primaryButtonText: safeString(product.hero_primary_button_text),
        primaryButtonLink: safeString(product.hero_primary_button_link),
        secondaryButtonText: safeString(product.hero_secondary_button_text),
        secondaryButtonLink: safeString(product.hero_secondary_button_link),
        guarantees: safeArray(heroGuarantees),
        benefits: safeArray(heroBenefits),
        certificationLogos: safeArray(heroCertificationLogos)
      },
      introduction: {
        title: safeString(product.introduction_title),
        content: safeArray(introductionContent),
        quickLinks: safeArray(introductionQuickLinks),
        ctaText: safeString(product.introduction_cta_text),
        ctaLink: safeString(product.introduction_cta_link)
      },
      whatAre: {
        title: safeString(product.what_are_title),
        content: safeArray(whatAreContent),
        features: safeArray(whatAreFeatures),
        videoUrl: safeString(product.what_are_video_url),
        videoTitle: safeString(product.what_are_video_title)
      },
      benefits: {
        title: safeString(product.benefits_title),
        description: safeString(product.benefits_description),
        mainContent: safeArray(benefitsMainContent),
        stats: safeArray(benefitsStats),
        ctaText: safeString(product.benefits_cta_text),
        ctaLink: safeString(product.benefits_cta_link)
      },
      options: optionsCategories.length > 0 ? {
        title: safeString(product.options_title),
        description: safeString(product.options_description),
        categories: safeArray(optionsCategories)
      } : undefined,
      services: {
        title: safeString(product.services_title),
        description: safeString(product.services_description),
        serviceItems: safeArray(servicesServiceItems)
      },
      information: informationTabs.length > 0 ? {
        title: safeString(product.information_title),
        image: safeString(product.information_image),
        imageAlt: safeString(product.information_image_alt),
        tabs: safeArray(informationTabs),
        didYouKnow: informationDidYouKnow
      } : undefined,
      faq: {
        title: safeString(product.faq_title),
        description: safeString(product.faq_description),
        questions: safeArray(faqQuestions)
      },
      showRegions: product.show_regions !== false
    };

    return <ServicePageTemplate {...config} />;
  };
  
  ServicePage.displayName = `ServicePage_${product.name}`;
  
  return ServicePage;
};
