
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const RedirectHandler: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const search = location.search;
    
    // Define redirect mappings from old PHP URLs to new React Router paths
    const redirectMap: Record<string, string> = {
      '/kunststof-kozijnen.php': '/kunststof-kozijnen',
      '/aluminium-kozijnen.php': '/aluminium-kozijnen',
      '/kunststof-schuifpuien.php': '/kunststof-schuifpuien',
      '/over-ons.php': '/over-ons',
      '/contact.php': '/contact',
      '/offerte.php': '/offerte',
      '/werkwijze.php': '/werkwijze',
      '/vacatures.php': '/vacatures',
      '/werkgebied.php': '/werkgebied',
      '/privacy-policy.php': '/privacy-policy',
      '/sitemap.php': '/sitemap',
      '/rentevrije-financiering.php': '/rentevrije-financiering',
      '/projecten.php': '/projecten',
      '/oplossingen.php': '/oplossingen',
      
      // Kunststof kozijnen subpages
      '/kunststof-kozijnen/types.php': '/kunststof-kozijnen/types',
      '/kunststof-kozijnen/kleuren.php': '/kunststof-kozijnen/kleuren',
      '/kunststof-kozijnen/afmetingen.php': '/kunststof-kozijnen/afmetingen',
      '/kunststof-kozijnen/montage.php': '/kunststof-kozijnen/montage',
      '/kunststof-kozijnen/prijzen.php': '/kunststof-kozijnen/prijzen',
      '/kunststof-kozijnen/merken.php': '/kunststof-kozijnen/merken',
      '/kunststof-kozijnen/profielen.php': '/kunststof-kozijnen/profielen',
      
      // Product pages
      '/gevelbekleding.php': '/gevelbekleding',
      '/hr-beglazing.php': '/hr-beglazing',
      '/dakkapel.php': '/dakkapel',
      '/kunststof-deuren.php': '/kunststof-deuren',
      '/raamdecoratie.php': '/raamdecoratie',
      
      // Job pages
      '/vacatures/kunststof-kozijnen-monteur.php': '/vacatures/kunststof-kozijnen-monteur',
      '/vacatures/commercieel-medewerker.php': '/vacatures/commercieel-medewerker',
      
      // Specific type pages
      '/kunststof-kozijnen/types/draaikiepraam.php': '/kunststof-kozijnen/types/draaikiepraam',
      
      // Size pages
      '/kunststof-kozijnen/afmetingen/100x100.php': '/kunststof-kozijnen/afmetingen/100x100',
      
      // Price subpages
      '/kunststof-kozijnen/prijzen/afbetaling.php': '/kunststof-kozijnen/prijzen/afbetaling',
      '/kunststof-kozijnen/prijzen/subsidie.php': '/kunststof-kozijnen/prijzen/subsidie',
      
      // Brand pages
      '/kunststof-kozijnen/schuco.php': '/kunststof-kozijnen/schuco',
      
      // Location pages
      '/kunststof-kozijnen/locaties/enschede.php': '/kunststof-kozijnen/locaties/enschede',
      
      // Profile pages
      '/kunststof-kozijnen/profielen/schuco-living-kozijnprofiel.php': '/kunststof-kozijnen/profielen/schuco-living-kozijnprofiel',
      '/kunststof-kozijnen/profielen/schuco-ct70-kozijnprofiel.php': '/kunststof-kozijnen/profielen/schuco-ct70-kozijnprofiel'
    };

    // Check if current path needs redirection
    const newPath = redirectMap[path];
    
    if (newPath) {
      // Preserve query parameters if any
      const redirectUrl = newPath + search;
      
      // Perform the redirect
      navigate(redirectUrl, { replace: true });
      
      // Also update the browser history to create a proper 301-like redirect
      if (window.history.replaceState) {
        window.history.replaceState(null, '', redirectUrl);
      }
    }
  }, [location, navigate]);

  return null; // This component doesn't render anything
};

export default RedirectHandler;
