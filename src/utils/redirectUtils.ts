
/**
 * Utility functions for handling URL redirects
 */

export interface RedirectMapping {
  from: string;
  to: string;
  permanent?: boolean;
}

// Define all redirect mappings in one place
export const REDIRECT_MAPPINGS: RedirectMapping[] = [
  // Main pages
  { from: '/kunststof-kozijnen.php', to: '/kunststof-kozijnen', permanent: true },
  { from: '/aluminium-kozijnen.php', to: '/aluminium-kozijnen', permanent: true },
  { from: '/kunststof-schuifpuien.php', to: '/kunststof-schuifpuien', permanent: true },
  { from: '/over-ons.php', to: '/over-ons', permanent: true },
  { from: '/contact.php', to: '/contact', permanent: true },
  { from: '/offerte.php', to: '/offerte', permanent: true },
  { from: '/werkwijze.php', to: '/werkwijze', permanent: true },
  { from: '/vacatures.php', to: '/vacatures', permanent: true },
  { from: '/werkgebied.php', to: '/werkgebied', permanent: true },
  { from: '/privacy-policy.php', to: '/privacy-policy', permanent: true },
  { from: '/sitemap.php', to: '/sitemap', permanent: true },
  { from: '/rentevrije-financiering.php', to: '/rentevrije-financiering', permanent: true },
  { from: '/projecten.php', to: '/projecten', permanent: true },
  { from: '/oplossingen.php', to: '/oplossingen', permanent: true },
  
  // Kunststof kozijnen subpages
  { from: '/kunststof-kozijnen/types.php', to: '/kunststof-kozijnen/types', permanent: true },
  { from: '/kunststof-kozijnen/kleuren.php', to: '/kunststof-kozijnen/kleuren', permanent: true },
  { from: '/kunststof-kozijnen/afmetingen.php', to: '/kunststof-kozijnen/afmetingen', permanent: true },
  { from: '/kunststof-kozijnen/montage.php', to: '/kunststof-kozijnen/montage', permanent: true },
  { from: '/kunststof-kozijnen/prijzen.php', to: '/kunststof-kozijnen/prijzen', permanent: true },
  { from: '/kunststof-kozijnen/merken.php', to: '/kunststof-kozijnen/merken', permanent: true },
  { from: '/kunststof-kozijnen/profielen.php', to: '/kunststof-kozijnen/profielen', permanent: true },
  
  // Product pages
  { from: '/gevelbekleding.php', to: '/gevelbekleding', permanent: true },
  { from: '/hr-beglazing.php', to: '/hr-beglazing', permanent: true },
  { from: '/dakkapel.php', to: '/dakkapel', permanent: true },
  { from: '/kunststof-deuren.php', to: '/kunststof-deuren', permanent: true },
  { from: '/raamdecoratie.php', to: '/raamdecoratie', permanent: true },
  
  // Job pages
  { from: '/vacatures/kunststof-kozijnen-monteur.php', to: '/vacatures/kunststof-kozijnen-monteur', permanent: true },
  { from: '/vacatures/commercieel-medewerker.php', to: '/vacatures/commercieel-medewerker', permanent: true },
  
  // Specific type pages
  { from: '/kunststof-kozijnen/types/draaikiepraam.php', to: '/kunststof-kozijnen/types/draaikiepraam', permanent: true },
  
  // Size pages
  { from: '/kunststof-kozijnen/afmetingen/100x100.php', to: '/kunststof-kozijnen/afmetingen/100x100', permanent: true },
  
  // Price subpages
  { from: '/kunststof-kozijnen/prijzen/afbetaling.php', to: '/kunststof-kozijnen/prijzen/afbetaling', permanent: true },
  { from: '/kunststof-kozijnen/prijzen/subsidie.php', to: '/kunststof-kozijnen/prijzen/subsidie', permanent: true },
  
  // Brand pages
  { from: '/kunststof-kozijnen/schuco.php', to: '/kunststof-kozijnen/schuco', permanent: true },
  
  // Location pages
  { from: '/kunststof-kozijnen/locaties/enschede.php', to: '/kunststof-kozijnen/locaties/enschede', permanent: true },
  
  // Profile pages
  { from: '/kunststof-kozijnen/profielen/schuco-living-kozijnprofiel.php', to: '/kunststof-kozijnen/profielen/schuco-living-kozijnprofiel', permanent: true },
  { from: '/kunststof-kozijnen/profielen/schuco-ct70-kozijnprofiel.php', to: '/kunststof-kozijnen/profielen/schuco-ct70-kozijnprofiel', permanent: true },
  
  // Pages to redirect to homepage
  { from: '/brands/schuco', to: '/', permanent: true },
  { from: '/over-ons/vacatures', to: '/', permanent: true },
  { from: '/kunststof-kozijnen/services/inmeten', to: '/', permanent: true },
  { from: '/over-ons/duurzaamheid', to: '/', permanent: true },
  { from: '/kunststof-kozijnen/services/montage', to: '/', permanent: true },
  { from: '/over-ons/team', to: '/', permanent: true },
  { from: '/blog', to: '/', permanent: true },
  { from: '/kennisbank', to: '/', permanent: true },
  { from: '/over-ons/missie', to: '/', permanent: true }
];

/**
 * Find redirect mapping for a given path
 */
export const findRedirectMapping = (path: string): RedirectMapping | null => {
  const normalizedPath = path.toLowerCase().replace(/\/+$/, ''); // Remove trailing slashes and normalize
  
  // First, try exact match
  const exactMatch = REDIRECT_MAPPINGS.find(mapping => 
    mapping.from.toLowerCase() === normalizedPath
  );
  
  if (exactMatch) {
    return exactMatch;
  }
  
  // If it's a .php file that's not in our mappings, redirect to home
  if (normalizedPath.includes('.php')) {
    return { from: normalizedPath, to: '/', permanent: true };
  }
  
  return null;
};

/**
 * Perform a client-side redirect
 */
export const performClientRedirect = (
  to: string, 
  navigate: (path: string, options?: { replace: boolean }) => void,
  isPermanent: boolean = true
): void => {
  console.log(`Performing client-side redirect to: ${to}`);
  
  // Use replace for permanent redirects to avoid back button issues
  navigate(to, { replace: isPermanent });
  
  // Update browser history for SEO
  if (isPermanent && window.history.replaceState) {
    window.history.replaceState(null, '', to);
  }
};

/**
 * Check if current environment supports server-side redirects
 */
export const supportsServerRedirects = (): boolean => {
  // Check if we're in a server environment that supports _redirects
  return typeof window !== 'undefined' && 
         (window.location.hostname.includes('netlify') || 
          window.location.hostname.includes('vercel') ||
          window.location.hostname.includes('lovable'));
};

/**
 * Log redirect for debugging
 */
export const logRedirect = (from: string, to: string, type: 'server' | 'client'): void => {
  console.log(`[REDIRECT] ${type.toUpperCase()}: ${from} → ${to}`);
};
