
import React, { useEffect, useState } from 'react';

const SitemapXML: React.FC = () => {
  const [sitemapXML, setSitemapXML] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStaticSitemap = async () => {
      try {
        setIsLoading(true);
        // Fetch the static sitemap.xml file from root
        const response = await fetch('/sitemap.xml');
        if (response.ok) {
          const xml = await response.text();
          setSitemapXML(xml);
        } else {
          throw new Error('Failed to load sitemap from root');
        }
      } catch (error) {
        console.error('Error loading static sitemap from root:', error);
        setSitemapXML('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');
      } finally {
        setIsLoading(false);
      }
    };

    loadStaticSitemap();
  }, []);

  // Set content type to XML and return pure XML
  useEffect(() => {
    if (sitemapXML && !isLoading) {
      // Set content type for XML
      const meta = document.querySelector('meta[http-equiv="Content-Type"]');
      if (meta) {
        meta.setAttribute('content', 'application/xml; charset=utf-8');
      } else {
        const newMeta = document.createElement('meta');
        newMeta.setAttribute('http-equiv', 'Content-Type');
        newMeta.setAttribute('content', 'application/xml; charset=utf-8');
        document.head.appendChild(newMeta);
      }
    }
  }, [sitemapXML, isLoading]);

  // Return pure XML without any HTML styling
  if (isLoading) {
    return null; // Don't show loading for XML
  }

  // Return raw XML content
  return (
    <pre style={{ margin: 0, fontFamily: 'monospace' }}>
      {sitemapXML}
    </pre>
  );
};

export default SitemapXML;
