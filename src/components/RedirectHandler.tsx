import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { findRedirectMapping, performClientRedirect, logRedirect } from '@/utils/redirectUtils';

const RedirectHandler: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const search = location.search;
    
    console.log(`[RedirectHandler] Checking path: ${currentPath}`);
    
    // Find if this path needs redirection
    const redirectMapping = findRedirectMapping(currentPath);
    
    if (redirectMapping) {
      const targetUrl = redirectMapping.to + search; // Preserve query parameters
      
      logRedirect(currentPath, targetUrl, 'client');
      
      // Perform the redirect
      performClientRedirect(targetUrl, navigate, redirectMapping.permanent);
      
      return;
    }
    
    // Check for common PHP patterns that might not be in our exact mapping
    if (currentPath.includes('.php')) {
      console.log(`[RedirectHandler] PHP file detected but no specific mapping found: ${currentPath}`);
      
      // Try to guess the redirect by removing .php extension
      const withoutPhp = currentPath.replace(/\.php$/, '');
      
      // If the path without .php would be a valid route, redirect there
      if (withoutPhp && withoutPhp !== '/') {
        const targetUrl = withoutPhp + search;
        logRedirect(currentPath, targetUrl, 'client');
        performClientRedirect(targetUrl, navigate, true);
        return;
      }
      
      // Otherwise redirect to home
      logRedirect(currentPath, '/', 'client');
      performClientRedirect('/' + search, navigate, true);
    }
  }, [location, navigate]);

  return null; // This component doesn't render anything
};

export default RedirectHandler;
