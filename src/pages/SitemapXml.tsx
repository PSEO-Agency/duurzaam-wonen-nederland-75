
import React, { useEffect } from 'react';
import { generateSitemap, staticRoutes, generateDynamicRoutes } from '@/utils/generateSitemap';

const SitemapXml: React.FC = () => {
  useEffect(() => {
    const generateAndServeSitemap = async () => {
      try {
        const dynamicRoutes = await generateDynamicRoutes();
        const allRoutes = [...staticRoutes, ...dynamicRoutes];
        const sitemap = generateSitemap(allRoutes);
        
        // Set the content type to XML
        document.title = 'Sitemap';
        
        // Replace the entire document with the sitemap XML
        document.open();
        document.write(sitemap);
        document.close();
        
        // Set the content type header if possible
        if (document.querySelector('meta[http-equiv="Content-Type"]')) {
          document.querySelector('meta[http-equiv="Content-Type"]')?.setAttribute('content', 'application/xml');
        } else {
          const meta = document.createElement('meta');
          meta.setAttribute('http-equiv', 'Content-Type');
          meta.setAttribute('content', 'application/xml');
          document.head.appendChild(meta);
        }
      } catch (error) {
        console.error('Error generating sitemap:', error);
      }
    };

    generateAndServeSitemap();
  }, []);

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', padding: '20px' }}>
      Loading sitemap...
    </div>
  );
};

export default SitemapXml;
