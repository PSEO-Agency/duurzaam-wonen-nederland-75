/**
 * Utility for generating varied meta descriptions for city/service pages
 * Uses different templates to avoid repetitive content and keep descriptions under 160 characters
 */

interface MetaDescriptionParams {
  serviceName: string;
  cityName: string;
  regionName?: string;
}

/**
 * Generate a varied meta description using different templates
 * Returns descriptions under 160 characters with natural variation
 */
export const generateCityServiceMetaDescription = ({ 
  serviceName, 
  cityName, 
  regionName 
}: MetaDescriptionParams): string => {
  // Create a simple hash from city and service name for consistent template selection
  const hash = (cityName + serviceName).split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  const templateIndex = Math.abs(hash) % 3;
  
  const templates = [
    // Template 1: Direct service focus (under 160 chars)
    `${serviceName} in ${cityName}${regionName ? ` (${regionName})` : ''}. Vakkundige installatie met garantie. Vraag direct offerte aan.`,
    
    // Template 2: Local expertise focus (under 160 chars)  
    `Lokale specialist voor ${serviceName} in ${cityName}. Jarenlange ervaring${regionName ? ` in ${regionName}` : ''}. Gratis advies en offerte.`,
    
    // Template 3: Quality focus (under 160 chars)
    `Hoogwaardige ${serviceName} ${cityName}. Duurzame oplossingen${regionName ? ` voor ${regionName}` : ''} met vakkundige montage. Offerte aanvragen.`
  ];
  
  return templates[templateIndex];
};

/**
 * Generate a meta title for city/service pages
 * Keeps titles under 60 characters for optimal SEO
 */
export const generateCityServiceMetaTitle = ({ 
  serviceName, 
  cityName, 
  regionName 
}: MetaDescriptionParams): string => {
  const baseTitle = `${serviceName} ${cityName}`;
  const regionSuffix = regionName ? ` ${regionName}` : '';
  const brandSuffix = ' - Duurzaam Wonen';
  
  // If the full title would be too long, prioritize service and city
  if ((baseTitle + regionSuffix + brandSuffix).length > 60) {
    if ((baseTitle + brandSuffix).length <= 60) {
      return baseTitle + brandSuffix;
    }
    // If even without region it's too long, truncate brand suffix
    return baseTitle + ' - DWN';
  }
  
  return baseTitle + regionSuffix + brandSuffix;
};