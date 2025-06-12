
import React from 'react';

interface ReactSnapRootProps {
  children: React.ReactNode;
}

const ReactSnapRoot: React.FC<ReactSnapRootProps> = ({ children }) => {
  // Check if we're in a React-snap environment
  const isReactSnap = typeof window !== 'undefined' && window.navigator.userAgent === 'ReactSnap';
  
  if (isReactSnap) {
    // Provide a simplified version for React-snap rendering
    return (
      <div className="react-snap-root">
        {children}
      </div>
    );
  }
  
  return <>{children}</>;
};

export default ReactSnapRoot;
