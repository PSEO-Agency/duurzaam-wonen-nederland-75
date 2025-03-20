
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
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-brand-green/10 rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Over Duurzaam Wonen Nederland"
                className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 glass-card p-4 shadow-lg">
                <div className="flex gap-4 items-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-green">20+</div>
                    <div className="text-sm text-gray-600">Jaar ervaring</div>
                  </div>
                  <div className="h-12 w-px bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-green">1000+</div>
                    <div className="text-sm text-gray-600">Projecten</div>
                  </div>
                </div>
              </div>
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
