
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

interface SolutionsHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
}

const SolutionsHero: React.FC<SolutionsHeroProps> = ({
  title = "Onze Oplossingen voor Woningverduurzaming",
  description = "Ontdek onze complete range van duurzame oplossingen voor uw woning. Van energiezuinige kozijnen tot moderne gevelbekleding - wij hebben de perfecte oplossing voor elke situatie.",
  backgroundImage
}) => {
  const heroStyle = backgroundImage 
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${backgroundImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    : {};

  return (
    <section 
      className="bg-brand-green py-12 md:py-20"
      style={heroStyle}
    >
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {title}
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 opacity-90 px-2">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SolutionsHero;
