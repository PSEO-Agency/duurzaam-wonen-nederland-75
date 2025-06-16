
import React, { useEffect, useState } from 'react';
import { generateSitemapData, generateSitemapXML } from '@/utils/sitemapGenerator';

const SitemapXML: React.FC = () => {
  const [sitemapXML, setSitemapXML] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateSitemap = async () => {
      try {
        setIsLoading(true);
        const urls = await generateSitemapData();
        const xml = generateSitemapXML(urls);
        setSitemapXML(xml);
      } catch (error) {
        console.error('Error generating sitemap:', error);
        setSitemapXML('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');
      } finally {
        setIsLoading(false);
      }
    };

    generateSitemap();
  }, []);

  // Set content type to XML
  useEffect(() => {
    if (sitemapXML && !isLoading) {
      document.contentType = 'application/xml';
      // Set the document title to indicate this is XML
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
        Generating sitemap...
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
