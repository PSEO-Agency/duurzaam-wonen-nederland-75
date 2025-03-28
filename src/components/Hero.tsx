
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
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png")',
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
                Specialist in woningverduurzaming
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Verduurzamen van woningen
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                Meer dan 20 jaar ervaring in het verduurzamen van woningen met hoogwaardige en onderhoudsarme oplossingen voor een comfortabeler huis en lagere energiekosten.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white">
                  <span>Offerte aanvragen</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20">
                  Onze projecten
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
              
              {/* Facebook Rating Widget */}
              <div className="mt-6 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 w-full max-w-md">
                <div className="elfsight-app-4bd45e33-f576-4478-bdd9-4d9257b33093" data-elfsight-app-lazy></div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-5">
            <AnimatedSection animation="fade-in-left" delay={300}>
              <div className="glass-card p-6 backdrop-blur-lg bg-white/10 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Voordelen</h3>
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
                      <div className="bg-brand-green p-1 rounded-full mt-1 flex-shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <Button asChild size="sm" variant="link" className="text-white p-0">
                      <a href="#benefits">Meer voordelen <ArrowRight className="ml-1 h-3 w-3" /></a>
                    </Button>
                    <span className="text-white/80 text-sm">Enschede · regio Twente</span>
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
