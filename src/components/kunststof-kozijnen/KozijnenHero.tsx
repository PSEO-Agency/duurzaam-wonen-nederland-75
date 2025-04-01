
import React from 'react';
import { ArrowRight, Check, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '../AnimatedSection';
import { Link } from 'react-router-dom';

const KozijnenHero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen pt-20 flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png")`,
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
                Specialist in kunststof kozijnen
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Kunststof Kozijnen - Duurzaam, Betaalbaar en Stijlvol
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                Hoogwaardige, energiezuinige en onderhoudsarme kunststof kozijnen voor uw woning. Met meer dan 20 jaar ervaring leveren wij kwaliteitsproducten die duurzaam en betrouwbaar zijn.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white">
                  <Link to="/offerte">
                    <span>Offerte aanvragen</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20">
                  Ontdek alles over kunststof kozijnen
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-white mb-8">
                <div className="flex items-center gap-2">
                  <div className="bg-brand-green/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-brand-green" />
                  </div>
                  <span>10 jaar garantie</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-brand-green/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-brand-green" />
                  </div>
                  <span>Gratis advies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-brand-green/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-brand-green" />
                  </div>
                  <span>Vakkundige montage</span>
                </div>
              </div>
              
              {/* Facebook Rating Widget - Positioned directly below the guarantees */}
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 w-full max-w-md">
                <div className="elfsight-app-4bd45e33-f576-4478-bdd9-4d9257b33093" data-elfsight-app-lazy></div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-5">
            <AnimatedSection animation="fade-in-left" delay={300}>
              <div className="glass-card p-6 backdrop-blur-lg bg-white/10 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Voordelen van kunststof kozijnen
                </h3>
                <ul className="space-y-3">
                  {[
                    'Energiebesparend - Warmte blijft binnen',
                    'Onderhoudsarm - Nooit meer schilderen',
                    'Lange levensduur - 15 jaar fabrieksgarantie',
                    'Uitstekende isolatie - Minder geluid',
                    'Diverse kleuren en stijlen beschikbaar',
                    '10 jaar service- en montagegarantie'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-brand-green p-1 rounded-full mt-1 flex-shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-white/20">
                  <div className="flex flex-col gap-4">
                    {/* Certification Logos Section - Moved from Benefits */}
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="text-sm font-medium text-white mb-3">Gecertificeerd door:</h4>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="bg-white/20 rounded p-2 h-10 flex items-center backdrop-blur-sm" title="KOMO-certificaat">
                          <Shield className="h-4 w-4 text-brand-green mr-1" />
                          <span className="text-xs font-bold text-white">KOMO</span>
                        </div>
                        <div className="bg-white/20 rounded p-2 h-10 flex items-center backdrop-blur-sm" title="CE-markering">
                          <span className="text-xs font-bold text-white px-1">CE</span>
                        </div>
                        <div className="bg-white/20 rounded p-2 h-10 flex items-center backdrop-blur-sm" title="VKG Keurmerk">
                          <span className="text-xs font-bold text-white px-1">VKG</span>
                        </div>
                        <div className="bg-white/20 rounded p-2 h-10 flex items-center backdrop-blur-sm" title="Politiekeurmerk">
                          <Shield className="h-4 w-4 text-white mr-1" />
                          <span className="text-xs font-bold text-white">PKVW</span>
                        </div>
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
