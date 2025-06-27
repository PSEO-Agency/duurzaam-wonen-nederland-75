
/**
 * Normalizes URLs by removing trailing slashes and converting to lowercase
 */
export const normalizeUrl = (url: string): string => {
  return url
    .toLowerCase()
    .replace(/\/+$/, '') // Remove trailing slashes
    .replace(/\/+/g, '/'); // Replace multiple slashes with single slash
};

/**
 * Checks if a URL is a legacy PHP URL that needs redirection
 */
export const isLegacyPhpUrl = (url: string): boolean => {
  return url.includes('.php');
};

/**
 * Extracts the pathname from a full URL
 */
export const getPathnameFromUrl = (url: string): string => {
  try {
    const urlObj = new URL(url, window.location.origin);
    return urlObj.pathname;
  } catch {
    return url;
  }
};

/**
 * Validates if a redirect is working correctly
 */
export const validateRedirect = async (fromUrl: string, expectedToUrl: string): Promise<boolean> => {
  try {
    const response = await fetch(fromUrl, { 
      method: 'HEAD',
      redirect: 'manual' 
    });
    
    if (response.status === 301 || response.status === 302) {
      const locationHeader = response.headers.get('location');
      return locationHeader?.includes(expectedToUrl) || false;
    }
    
    return false;
  } catch (error) {
    console.error('Redirect validation failed:', error);
    return false;
  }
};

/**
 * Test multiple redirects for debugging
 */
export const testRedirects = async (redirectMappings: Array<{from: string, to: string}>): Promise<void> => {
  console.log('Testing redirects...');
  
  for (const mapping of redirectMappings) {
    const isWorking = await validateRedirect(mapping.from, mapping.to);
    console.log(`${mapping.from} → ${mapping.to}: ${isWorking ? '✅' : '❌'}`);
  }
};
