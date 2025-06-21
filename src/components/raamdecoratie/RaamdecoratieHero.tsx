
import React from 'react';
import { ArrowRight, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';

const RaamdecoratieHero = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png')`
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7">
            <AnimatedSection animation="fade-in-right">
              <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                Specialist in raamdecoratie
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hoogwaardige <span className="text-brand-green">raamdecoratie</span> voor uw woning
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                Ontdek onze uitgebreide collectie raamdecoratie. Van luxe gordijnen tot functionele jaloezieën - wij hebben de perfecte oplossing voor elke ruimte.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white">
                  <Link to="/offerte">
                    <span>Gratis advies aanvragen</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                  <Link to="/contact">
                    <span>Bekijk onze collectie</span>
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-white mb-8">
                <div className="flex items-center gap-2">
                  <div className="bg-brand-green/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-brand-green" />
                  </div>
                  <span>Gratis advies aan huis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-brand-green/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-brand-green" />
                  </div>
                  <span>Vakkundige montage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-brand-green/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-brand-green" />
                  </div>
                  <span>Topkwaliteit materialen</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Right Column - Glass Card */}
          <div className="lg:col-span-5">
            <AnimatedSection animation="fade-in-left" delay={300}>
              <div className="glass-card p-6 backdrop-blur-lg bg-white/10 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Waarom kiezen voor onze raamdecoratie?
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-brand-green p-1 rounded-full mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/90">Complete privacy en lichtregeling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-brand-green p-1 rounded-full mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/90">Energiebesparend door isolerende werking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-brand-green p-1 rounded-full mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/90">Onderhoudsarm en duurzaam</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-brand-green p-1 rounded-full mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/90">Stijlvol design voor elke interieurstijl</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-brand-green p-1 rounded-full mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/90">Professionele montage door specialisten</span>
                  </li>
                </ul>
                
                {/* Trust Indicators */}
                <div className="border-t border-white/20 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-white/90 text-sm ml-2">4.8/5 (150+ reviews)</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <h4 className="text-sm font-medium text-white mb-3">Gecertificeerd door:</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white rounded p-2 h-12 flex items-center justify-center">
                        <img src="/lovable-uploads/a680436d-6948-4799-a383-6aad791b1e0e.png" alt="Kwaliteitsmerk" className="h-8 max-w-full object-contain" />
                      </div>
                      <div className="bg-white rounded p-2 h-12 flex items-center justify-center">
                        <img src="/lovable-uploads/df206dad-2259-46bb-aa5c-70017520feb4.png" alt="KOMO Keur" className="h-8 max-w-full object-contain" />
                      </div>
                      <div className="bg-white rounded p-2 h-12 flex items-center justify-center">
                        <img src="/lovable-uploads/20b5ed0b-f1b4-4549-8a01-6179411d6ef7.png" alt="VHG Keurmerk" className="h-8 max-w-full object-contain" />
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

export default RaamdecoratieHero;
