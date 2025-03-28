
import React, { useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  // Load Facebook widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-20 flex items-center"
      style={{
        backgroundColor: '#F1F1F1',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23CCCCCC" fill-opacity="0.2" fill-rule="evenodd"/%3E%3C/svg%3E")'
      }}
    >
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <AnimatedSection animation="fade-in-right">
              <span className="inline-block px-4 py-1 bg-gray-400 text-white rounded-full text-sm font-medium mb-4 border border-gray-500">
                Specialist in woningverduurzaming
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Verduurzamen van woningen
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                Meer dan 20 jaar ervaring in het verduurzamen van woningen met hoogwaardige en onderhoudsarme oplossingen voor een comfortabeler huis en lagere energiekosten.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gray-800 hover:bg-gray-700 text-white border-2 border-gray-900">
                  <span>Offerte aanvragen</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-gray-800 border-2 border-gray-400 hover:bg-gray-100">
                  Onze projecten
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-gray-800 mb-8">
                <div className="flex items-center gap-2">
                  <div className="bg-gray-200 p-1 rounded-full border border-gray-400">
                    <Check className="h-4 w-4 text-gray-800" />
                  </div>
                  <span>10 jaar garantie</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-200 p-1 rounded-full border border-gray-400">
                    <Check className="h-4 w-4 text-gray-800" />
                  </div>
                  <span>Gratis advies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-200 p-1 rounded-full border border-gray-400">
                    <Check className="h-4 w-4 text-gray-800" />
                  </div>
                  <span>Vakkundige montage</span>
                </div>
              </div>
              
              {/* Facebook Rating Widget */}
              <div className="mt-6 p-3 bg-white rounded-lg border-2 border-gray-300 w-full max-w-md">
                <div className="elfsight-app-4bd45e33-f576-4478-bdd9-4d9257b33093" data-elfsight-app-lazy></div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-5">
            <AnimatedSection animation="fade-in-left" delay={300}>
              <div className="p-6 bg-white border-2 border-gray-300 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Voordelen</h3>
                <ul className="space-y-3">
                  {[
                    'Energiebesparend - Lagere energiekosten',
                    'Onderhoudsarm en duurzaam - Geen schilderwerk',
                    'Waardeverhoging van de woning',
                    'Veilig en innovatief - Hoogwaardige sloten',
                    'Ruime keuze aan kleuren en stijlen',
                    '10 jaar garantie op al onze producten'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-gray-200 p-1 rounded-full mt-1 flex-shrink-0 border border-gray-400">
                        <Check className="h-3 w-3 text-gray-800" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t-2 border-gray-300">
                  <div className="flex items-center justify-between">
                    <Button asChild size="sm" variant="link" className="text-gray-700 p-0">
                      <a href="#benefits">Meer voordelen <ArrowRight className="ml-1 h-3 w-3" /></a>
                    </Button>
                    <span className="text-gray-600 text-sm">Enschede · regio Twente</span>
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

export default Hero;
