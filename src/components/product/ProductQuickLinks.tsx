
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Snelle Acties</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {quickLinks.map((link, index) => (
                <Button key={index} asChild size="lg">
                  <Link to={link.href}>
                    {link.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductQuickLinks;
