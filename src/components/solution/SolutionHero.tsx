
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

interface QuickLink {
  label: string;
  href: string;
}

interface SolutionHeroProps {
  solution: {
    name: string;
    hero_title: string;
    hero_description: string;
    hero_image_url: string;
    quick_links?: QuickLink[];
    pricing_info?: string;
  };
}

const SolutionHero: React.FC<SolutionHeroProps> = ({ solution }) => {
  return (
    <section 
      className="relative min-h-[70vh] flex items-center"
      style={{
        backgroundImage: solution.hero_image_url 
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${solution.hero_image_url}")` 
          : 'linear-gradient(135deg, #2D5016 0%, #4A7C23 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <AnimatedSection animation="fade-in-right">
              <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                Duurzaam Wonen Nederland
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {solution.hero_title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                {solution.hero_description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white">
                  <Link to="/offerte">
                    <span>Offerte aanvragen</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20">
                  <Link to="/contact">
                    Gratis advies
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-green" />
                  <span>10 jaar garantie</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-green" />
                  <span>Gratis advies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-green" />
                  <span>Vakkundige montage</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-5">
            <AnimatedSection animation="fade-in-left" delay={300}>
              <div className="glass-card p-6 backdrop-blur-lg bg-white/10 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Waarom kiezen voor {solution.name}?
                </h3>
                
                {solution.quick_links && solution.quick_links.length > 0 && (
                  <div className="space-y-3 mb-6">
                    {solution.quick_links.map((link, index) => (
                      <Link
                        key={index}
                        to={link.href}
                        className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                      >
                        <ArrowRight className="h-4 w-4 text-brand-green" />
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
                
                <div className="pt-4 border-t border-white/20">
                  <p className="text-white/80 text-sm mb-4">
                    {solution.pricing_info || "Vraag een vrijblijvende offerte aan en ontdek wat wij voor u kunnen betekenen."}
                  </p>
                  <Button asChild className="w-full bg-white text-brand-green hover:bg-gray-100">
                    <Link to="/offerte">
                      Offerte Aanvragen
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;
