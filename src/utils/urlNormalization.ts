
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
