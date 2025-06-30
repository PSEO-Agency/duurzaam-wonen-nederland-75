
import React, { useEffect } from 'react';
import { generateRobotsTxt } from '@/utils/sitemapGenerator';

const RobotsTxt: React.FC = () => {
  const robotsContent = generateRobotsTxt();

  useEffect(() => {
    // Set document title for this page
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
