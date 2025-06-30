
import React, { useEffect, useState } from 'react';

const RobotsTxt: React.FC = () => {
  const [robotsContent, setRobotsContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStaticRobots = async () => {
      try {
        setIsLoading(true);
        // Fetch the static robots.txt file from root
        const response = await fetch('/robots.txt');
        if (response.ok) {
          const content = await response.text();
          setRobotsContent(content);
        } else {
          throw new Error('Failed to load robots.txt from root');
        }
      } catch (error) {
        console.error('Error loading static robots.txt from root:', error);
        setRobotsContent('User-agent: *\nAllow: /');
      } finally {
        setIsLoading(false);
      }
    };

    loadStaticRobots();
  }, []);

  useEffect(() => {
    // Set document title for this page
    if (!isLoading) {
      document.title = 'Robots.txt - Root Location';
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div style={{ 
        fontFamily: 'monospace', 
        whiteSpace: 'pre-wrap',
        padding: '20px',
        background: '#f5f5f5'
      }}>
        Loading robots.txt from root location...
      </div>
    );
  }

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
