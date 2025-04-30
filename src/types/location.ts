
// Types for locations (regions, cities, neighborhoods)

export interface Neighborhood {
  id: string;
  name: string;
  slug: string;
  cityId: string;
}

export interface City {
  id: string;
  name: string;
  slug: string;
  provinceId: string;
  neighborhoods?: Neighborhood[];
}

export interface Province {
  id: string;
  name: string;
  slug: string;
  cities?: City[];
}

// For static access when needed
export interface RegionData {
  provinces: Province[];
}
