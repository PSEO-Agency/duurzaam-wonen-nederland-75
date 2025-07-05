
import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <Loader2 className="h-8 w-8 text-brand-green animate-spin" />
    </div>
  );
};

export default LoadingScreen;
