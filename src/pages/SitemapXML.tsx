
import React, { useEffect, useState } from 'react';

const SitemapXML: React.FC = () => {
  const [sitemapXML, setSitemapXML] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStaticSitemap = async () => {
      try {
        setIsLoading(true);
        // Fetch the static sitemap.xml file
        const response = await fetch('/sitemap.xml');
        if (response.ok) {
          const xml = await response.text();
          setSitemapXML(xml);
        } else {
          throw new Error('Failed to load sitemap');
        }
      } catch (error) {
        console.error('Error loading static sitemap:', error);
        setSitemapXML('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');
      } finally {
        setIsLoading(false);
      }
    };

    loadStaticSitemap();
  }, []);

  // Set document title when sitemap is loaded
  useEffect(() => {
    if (sitemapXML && !isLoading) {
      document.title = 'Sitemap XML';
    }
  }, [sitemapXML, isLoading]);

  if (isLoading) {
    return (
      <div style={{ 
        fontFamily: 'monospace', 
        whiteSpace: 'pre-wrap',
        padding: '20px',
        background: '#f5f5f5'
      }}>
        Loading sitemap...
      </div>
    );
  }

  return (
    <div style={{ 
      fontFamily: 'monospace', 
      whiteSpace: 'pre-wrap',
      fontSize: '12px',
      lineHeight: '1.4',
      padding: '0',
      margin: '0',
      background: 'white'
    }}>
      {sitemapXML}
    </div>
  );
};

export default SitemapXML;
