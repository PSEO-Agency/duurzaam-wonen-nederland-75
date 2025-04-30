
// Types for services

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon?: string;
  imageUrl?: string;
  features: ServiceFeature[];
  benefits?: string[];
  price?: {
    startFrom?: number;
    currency: string;
  };
  metaTitle?: string;
  metaDescription?: string;
}

export interface CityService {
  id: string;
  serviceId: string;
  cityId: string;
  title?: string; // Override the default service title if needed
  description?: string; // City-specific description
  customFeatures?: ServiceFeature[]; // City-specific features
  customBenefits?: string[]; // City-specific benefits
  customContent?: string; // Any custom HTML content for this city-service
  price?: {
    startFrom?: number;
    currency: string;
  };
  metaTitle?: string;
  metaDescription?: string;
}

export interface NeighborhoodService {
  id: string;
  cityServiceId: string;
  neighborhoodId: string;
  customDescription?: string;
  customContent?: string;
  metaTitle?: string;
  metaDescription?: string;
}
