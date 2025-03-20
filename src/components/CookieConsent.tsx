
import React, { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show banner after slight delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={cn(
      'fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg transition-transform duration-500',
      isVisible ? 'translate-y-0' : 'translate-y-full'
    )}>
      <div className="container mx-auto px-4 py-4 md:py-3">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              Deze website gebruikt cookies om uw ervaring te verbeteren. Door op "Accepteren" te klikken, gaat u akkoord met het gebruik van alle cookies.
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-3 ml-8 md:ml-0">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleDecline}
              className="text-xs"
            >
              Weigeren
            </Button>
            <Button 
              size="sm" 
              onClick={handleAccept}
              className="bg-brand-green hover:bg-brand-green-dark text-xs"
            >
              Accepteren
            </Button>
            <button 
              onClick={handleClose} 
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Sluiten"
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
