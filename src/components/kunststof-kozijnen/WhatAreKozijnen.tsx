
import React from 'react';
import { Check } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const WhatAreKozijnen: React.FC = () => {
  const features = [
    'Kunststof kozijnen zijn gemaakt van hoogwaardig PVC materiaal',
    'Ze bieden uitstekende thermische en geluidsisolatie',
    'Verkrijgbaar in diverse kleuren en afwerkingen, waaronder houtlook',
    'Duurzame en onderhoudsarme alternatief voor traditionele kozijnen',
    'Draagt bij aan energiebesparing en comfort in uw woning'
  ];

  return (
    <section id="wat-zijn" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-6">Wat zijn Kunststof Kozijnen?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Kunststof kozijnen zijn moderne, duurzame kozijnen gemaakt van hoogwaardig PVC (polyvinylchloride). 
                Ze bieden een uitstekend alternatief voor traditionele houten kozijnen en worden steeds populairder 
                vanwege hun lange levensduur, uitstekende isolatie-eigenschappen en minimale onderhoudsbehoefte.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Door de unieke eigenschappen van kunststof zijn deze kozijnen bestand tegen weersinvloeden, 
                verkleuring en vervorming. Ze rotten of roesten niet en hoeven nooit geschilderd te worden.
              </p>
              
              <ul className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-brand-green mt-1 mr-2 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
          
          <div className="lg:w-1/2">
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png" 
                  alt="Kunststof kozijn detail" 
                  className="w-full h-auto" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-medium">Modern kunststof kozijn met drievoudig glas</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatAreKozijnen;
