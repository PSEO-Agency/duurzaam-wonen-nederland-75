
import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator";
import { Home, ChevronRight } from 'lucide-react';

const navigationItems = [
  { id: 'wat-zijn', label: 'Wat zijn Kunststof Kozijnen?' },
  { id: 'voordelen', label: 'Voordelen' },
  { id: 'diensten', label: 'Onze Diensten' },
  { id: 'soorten', label: 'Soorten' },
  { id: 'kleuren', label: 'Kleuren' },
  { id: 'montage', label: 'Montage' },
  { id: 'merken', label: 'Merken' },
  { id: 'regios', label: 'Regio\'s' },
];

const StickyNavigation: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  });

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={ref}>
      <nav className={`sticky top-20 z-20 bg-white border-b shadow-sm transition-all duration-300 ${!inView ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4">
          {/* Breadcrumb navigation */}
          <div className="py-2 border-b">
            <div className="flex items-center text-sm text-gray-500">
              <Link to="/" className="flex items-center hover:text-brand-green transition-colors">
                <Home className="h-3.5 w-3.5" />
              </Link>
              <ChevronRight className="mx-2 h-3.5 w-3.5" />
              <Link to="/producten" className="hover:text-brand-green transition-colors">
                Producten
              </Link>
              <ChevronRight className="mx-2 h-3.5 w-3.5" />
              <span className="font-medium text-foreground">
                Kunststof Kozijnen
              </span>
            </div>
          </div>
          
          {/* Navigation items */}
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center overflow-x-auto scrollbar-hide">
              <div className="flex space-x-6 whitespace-nowrap px-2">
                {navigationItems.map((item) => (
                  <button 
                    key={item.id} 
                    onClick={() => scrollToSection(item.id)} 
                    className="text-sm font-medium hover:text-brand-green transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <Button size="sm" className="bg-brand-green hover:bg-brand-green-dark shrink-0">
              Direct offerte
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default StickyNavigation;
