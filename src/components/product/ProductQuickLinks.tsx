
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, Phone } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

interface QuickLink {
  label: string;
  href: string;
}

interface ProductQuickLinksProps {
  quickLinks: QuickLink[];
}

const ProductQuickLinks: React.FC<ProductQuickLinksProps> = ({ quickLinks }) => {
  if (!quickLinks || quickLinks.length === 0) {
    return null;
  }

  // Add icons based on link content
  const getIconForLink = (label: string) => {
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.includes('offerte') || lowerLabel.includes('prijzen')) {
      return <Calculator className="h-4 w-4 mr-2" />;
    }
    if (lowerLabel.includes('contact') || lowerLabel.includes('advies')) {
      return <Phone className="h-4 w-4 mr-2" />;
    }
    return <ArrowRight className="h-4 w-4 mr-2" />;
  };

  return (
    <section className="py-12 bg-brand-green">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
              Snelle Acties
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Kies hieronder de actie die het beste bij uw situatie past
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full bg-white text-brand-green hover:bg-gray-100 font-semibold py-4 h-auto"
                  >
                    <Link to={link.href} className="flex items-center justify-center">
                      {getIconForLink(link.label)}
                      <span>{link.label}</span>
                    </Link>
                  </Button>
                </AnimatedSection>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-white/80 text-sm">
                ✓ Gratis advies en inmeten &nbsp;|&nbsp; ✓ 10 jaar garantie &nbsp;|&nbsp; ✓ Vakkundige montage
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductQuickLinks;
