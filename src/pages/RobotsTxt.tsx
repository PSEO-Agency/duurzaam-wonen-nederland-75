
import React, { useEffect } from 'react';

const RobotsTxt: React.FC = () => {
  const robotsContent = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://duurzaamwonen.info/sitemap.xml

# Disallow admin and internal pages
Disallow: /admin/
Disallow: /offerte/success
Disallow: /api/

# Crawl delay (optional)
Crawl-delay: 1`;

  useEffect(() => {
    document.contentType = 'text/plain';
    document.title = 'Robots.txt';
  }, []);

  return (
    <div style={{ 
      fontFamily: 'monospace', 
      whiteSpace: 'pre-wrap',
      fontSize: '14px',
      lineHeight: '1.4',
      padding: '0',
      margin: '0',
      background: 'white'
    }}>
      {robotsContent}
    </div>
  );
};

export default RobotsTxt;
