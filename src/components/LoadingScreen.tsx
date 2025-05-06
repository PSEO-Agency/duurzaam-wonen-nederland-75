
import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 text-brand-green animate-spin" />
        <p className="text-lg font-medium">Laden...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
