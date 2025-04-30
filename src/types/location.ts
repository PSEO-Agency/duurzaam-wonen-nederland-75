
export interface Region {
  id: string;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

export interface City {
  id: string;
  region_id: string;
  name: string;
  slug: string;
  description: string | null;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
}

export interface Neighborhood {
  id: string;
  city_id: string;
  name: string;
  slug: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon_name: string | null;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
}

export interface CityService {
  id: string;
  city_id: string;
  service_id: string;
  custom_title: string | null;
  custom_description: string | null;
  custom_meta_title: string | null;
  custom_meta_description: string | null;
  pricing_info: string | null;
  benefits: any | null; // JSON field
  features: any | null; // JSON field
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CityServiceWithRelations extends CityService {
  cities: City;
  services: Service;
}
