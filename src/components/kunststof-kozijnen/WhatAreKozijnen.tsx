
import React from 'react';
import { Info, CheckCircle } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

const WhatAreKozijnen: React.FC = () => {
  return (
    <section id="wat-zijn" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <div className="flex items-center mb-6">
                <Info className="text-brand-green mr-3 h-6 w-6" />
                <h2 className="text-3xl font-bold">Wat zijn Kunststof Kozijnen?</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                Kunststof kozijnen zijn raam- en deurkozijnen gemaakt van hoogwaardige kunststof materialen, 
                met name PVC. Ze vormen een duurzaam, onderhoudsarm en energiebesparend alternatief voor traditionele 
                houten of aluminium kozijnen.
              </p>
              
              <p className="text-gray-700 mb-6">
                Modern kunststof is vrijwel niet te onderscheiden van hout, maar biedt aanzienlijke voordelen op 
                het gebied van isolatie, onderhoud en duurzaamheid.
              </p>
              
              <Card className="border-l-4 border-l-brand-green">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">De belangrijkste kenmerken:</h3>
                  <ul className="space-y-2">
                    {[
                      "Gemaakt van hoogwaardig PVC (polyvinylchloride)",
                      "Verkrijgbaar in diverse profieltypen en -diktes",
                      "Kan zowel voor nieuwbouw als renovatie worden toegepast",
                      "Vrijwel onbeperkte keuze aan kleuren en afwerkingen",
                      "Modern design met slanke profielen voor maximale lichtinval"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-brand-green mr-2 h-5 w-5 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png" 
                alt="Doorsnede kunststof kozijn profiel" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
              
              <div className="bg-gray-50 mt-6 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Wist u dat?</h3>
                <p className="text-gray-700">
                  Moderne kunststof kozijnen hebben een levensduur van gemiddeld 50 jaar en bestaan 
                  uit meerdere kamers (3 tot 7) die voor optimale isolatie zorgen. De versterkte stalen kern 
                  biedt stabiliteit en veiligheid, terwijl het materiaal 100% recyclebaar is.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhatAreKozijnen;
