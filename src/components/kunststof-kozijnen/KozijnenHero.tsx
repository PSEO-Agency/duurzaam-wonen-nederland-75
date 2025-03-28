
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '../AnimatedSection';

const KozijnenHero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <AnimatedSection animation="fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Kunststof Kozijnen - <span className="text-brand-green">Duurzaam, Betaalbaar en Stijlvol</span>
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                Kunststof kozijnen bieden de perfecte combinatie van duurzaamheid, isolatie en stijl voor uw woning. 
                Vrijwel onderhoudsvrij, energiebesparend en verkrijgbaar in talloze designs en kleuren.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Met onze hoogwaardige kunststof kozijnen verhoogt u direct de waarde van uw woning én bespaart u op uw energiekosten. 
                Duurzaam Wonen Nederland levert alleen topkwaliteit voor een betaalbare prijs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-brand-green hover:bg-brand-green-dark text-white">
                  Offerte aanvragen
                </Button>
                <Button variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green/10">
                  Ontdek alles over kunststof kozijnen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
          <div className="md:w-1/2">
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="relative">
                <img 
                  src="/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png" 
                  alt="Kunststof kozijnen in moderne woning" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-sm font-semibold text-brand-green">Tot 30% energiebesparing</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KozijnenHero;
