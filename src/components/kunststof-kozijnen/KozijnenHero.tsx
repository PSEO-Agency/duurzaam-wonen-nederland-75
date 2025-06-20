
import React from 'react';
import { ArrowRight, Check, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '../AnimatedSection';
import { Link } from 'react-router-dom';

const KozijnenHero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen pt-16 sm:pt-20 flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-8 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <AnimatedSection animation="fade-in-right">
              <span className="inline-block px-3 py-1 sm:px-4 bg-brand-green/90 text-white rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Specialist in kunststof kozijnen
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Kunststof Kozijnen - Duurzaam, Betaalbaar en Stijlvol
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl leading-relaxed">
                Hoogwaardige, energiezuinige en onderhoudsarme kunststof kozijnen voor uw woning. Met meer dan 20 jaar ervaring leveren wij kwaliteitsproducten die duurzaam en betrouwbaar zijn.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white w-full sm:w-auto">
                  <Link to="/offerte">
                    <span>Offerte aanvragen</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20 w-full sm:w-auto">
                  Ontdek alles over kunststof kozijnen
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-white mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <div className="bg-brand-green/20 p-1 rounded-full">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-brand-green" />
                  </div>
                  <span className="text-sm sm:text-base">15 jaar productgarantie</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-brand-green/20 p-1 rounded-full">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-brand-green" />
                  </div>
                  <span className="text-sm sm:text-base">Gratis advies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-brand-green/20 p-1 rounded-full">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-brand-green" />
                  </div>
                  <span className="text-sm sm:text-base">10 jaar servicegarantie</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-5 mt-6 lg:mt-0">
            <AnimatedSection animation="fade-in-left" delay={300}>
              <div className="glass-card p-4 sm:p-6 backdrop-blur-lg bg-white/10 border border-white/20">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                  Voordelen van kunststof kozijnen
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    'Energiebesparend - Warmte blijft binnen',
                    'Onderhoudsarm - Nooit meer schilderen',
                    'Lange levensduur - 15 jaar productgarantie',
                    'Uitstekende isolatie - Minder geluid',
                    'Diverse kleuren en stijlen beschikbaar',
                    '10 jaar servicegarantie op montage'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <div className="bg-brand-green p-0.5 sm:p-1 rounded-full mt-0.5 sm:mt-1 flex-shrink-0">
                        <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                      </div>
                      <span className="text-white/90 text-sm sm:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/20">
                  <div className="bg-white/10 p-3 sm:p-4 rounded-lg backdrop-blur-sm">
                    <h4 className="text-xs sm:text-sm font-medium text-white mb-2 sm:mb-3">Keurmerken:</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                      <div className="bg-white rounded p-1 sm:p-2 h-12 sm:h-16 flex items-center justify-center" title="Schüco Kozijnen">
                        <img src="/lovable-uploads/10906789-676e-4aef-b797-6bc0815255ea.png" alt="Schuco Kozijnen" className="h-6 sm:h-10 max-w-full object-contain" />
                      </div>
                      <div className="bg-white rounded p-1 sm:p-2 h-12 sm:h-16 flex items-center justify-center" title="KOMO Keurmerk">
                        <img src="/lovable-uploads/4d42855f-0a4b-48ef-b632-25f5f01975fc.png" alt="KOMO Keurmerk" className="h-6 sm:h-10 max-w-full object-contain" />
                      </div>
                      <div className="bg-white rounded p-1 sm:p-2 h-12 sm:h-16 flex items-center justify-center" title="Politiekeurmerk">
                        <img src="/lovable-uploads/a680436d-6948-4799-a383-6aad791b1e0e.png" alt="Politiekeurmerk" className="h-8 sm:h-12 max-w-full object-contain" />
                      </div>
                      <div className="bg-white rounded p-1 sm:p-2 h-12 sm:h-16 flex items-center justify-center" title="Nationaal Warmtefonds">
                        <img src="/lovable-uploads/84861c8c-4187-4055-a956-1249dbe30fe3.png" alt="Nationaal Warmtefonds" className="h-8 sm:h-12 max-w-full object-contain" />
                      </div>
                      <div className="bg-white rounded p-1 sm:p-2 h-12 sm:h-16 flex items-center justify-center" title="CE Keurmerk">
                        <img src="/lovable-uploads/f1d54abc-69ab-4254-931b-2ff6d32891f1.png" alt="CE Keurmerk" className="h-6 sm:h-10 max-w-full object-contain" />
                      </div>
                      <div className="bg-white rounded p-1 sm:p-2 h-12 sm:h-16 flex items-center justify-center" title="Keralit Keurmerk">
                        <img src="/lovable-uploads/98a9ef9a-6f19-4139-bb2b-e081b52e6637.png" alt="Keralit Keurmerk" className="h-6 sm:h-10 max-w-full object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KozijnenHero;
