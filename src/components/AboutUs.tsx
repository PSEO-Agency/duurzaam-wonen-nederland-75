
import React from 'react';
import { Check, TrendingUp, Award, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in-right">
            <div className="relative">
              <img
                src="/lovable-uploads/eb1088c6-1a05-459c-9120-85a3e455b54d.png"
                alt="Kunststof Kozijnen Team Duurzaam Wonen Nederland"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-left" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Over Duurzaam Wonen Nederland</h2>
            <p className="text-gray-600 mb-6">
              Wat begon als een klein bedrijf gespecialiseerd in kunststof kozijnen, is uitgegroeid tot een gerenommeerde onderneming in woningverduurzaming. Innovatie en kwaliteit staan centraal, waarbij altijd de nieuwste technieken en trends worden toegepast.
            </p>
            <p className="text-gray-600 mb-8">
              Het bedrijf streeft ernaar om woningen comfortabeler, energiezuiniger en onderhoudsvriendelijker te maken. Met ons team van ervaren vakmensen bieden wij hoogwaardige maatwerkoplossingen voor elke woning.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-brand-green/10 p-2 rounded-full mr-3 mt-1">
                  <TrendingUp className="h-5 w-5 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Innovatieve oplossingen</h4>
                  <p className="text-sm text-gray-600">Toepassing van moderne technieken</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-green/10 p-2 rounded-full mr-3 mt-1">
                  <Award className="h-5 w-5 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Hoogste kwaliteit</h4>
                  <p className="text-sm text-gray-600">Premium materialen en afwerking</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-green/10 p-2 rounded-full mr-3 mt-1">
                  <Users className="h-5 w-5 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Eigen montageteam</h4>
                  <p className="text-sm text-gray-600">Professionele en zorgvuldige installatie</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-green/10 p-2 rounded-full mr-3 mt-1">
                  <Check className="h-5 w-5 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Maatwerk oplossingen</h4>
                  <p className="text-sm text-gray-600">Afgestemd op uw specifieke wensen</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <p className="italic text-gray-700">
                "Wij geloven in groei op de lange termijn. Door de juiste samenwerkingen aan te gaan en technische expertise in huis te halen, kan iedereen elke dag Duurzaam wonen."
              </p>
              <p className="text-right text-brand-green-dark font-medium mt-2">- Directeur Duurzaam Wonen Nederland</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
