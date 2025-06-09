
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

interface ProductHeroProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({ title, description, imageUrl }) => {
  return (
    <section className="bg-brand-green py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <AnimatedSection animation="fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                {title}
              </h1>
              <p className="text-base md:text-lg lg:text-xl mb-8 text-white/90">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-brand-green hover:bg-gray-100">
                  <Link to="/offerte">
                    Vraag offerte aan
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">
                    Gratis advies
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
          
          {imageUrl && (
            <div className="lg:w-1/2">
              <AnimatedSection animation="fade-in" delay={200}>
                <img 
                  src={imageUrl} 
                  alt={title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </AnimatedSection>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
