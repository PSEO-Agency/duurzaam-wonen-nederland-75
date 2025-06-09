
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';

interface ProductContentProps {
  introText?: string;
  whatAreDescription?: string;
  pricingInfo?: string;
}

const ProductContent: React.FC<ProductContentProps> = ({ 
  introText, 
  whatAreDescription, 
  pricingInfo 
}) => {
  if (!introText && !whatAreDescription && !pricingInfo) {
    return null;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="max-w-4xl mx-auto">
            {introText && (
              <div className="mb-8">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>{introText}</p>
                </div>
              </div>
            )}
            
            {whatAreDescription && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Wat zijn deze producten?</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>{whatAreDescription}</p>
                </div>
              </div>
            )}
            
            {pricingInfo && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Prijsinformatie</h3>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>{pricingInfo}</p>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductContent;
