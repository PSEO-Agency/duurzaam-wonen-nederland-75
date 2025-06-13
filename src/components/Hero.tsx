
import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
import { useLocation, Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const location = useLocation();
  const isKozijnenPage = location.pathname.includes('kunststof-kozijnen');
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Preload the hero image
  useEffect(() => {
    const imageUrl = isKozijnenPage ? 
      '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png' : 
      '/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png';
    
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setImageLoaded(true);
  }, [isKozijnenPage]);

  const heroImageUrl = isKozijnenPage ? 
    '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png' : 
    '/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png';
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-20 flex items-center" 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${heroImageUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'opacity 0.3s ease-in-out',
        opacity: imageLoaded ? 1 : 0.5,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      
      {/* Low-quality placeholder to show immediately */}
      {!imageLoaded && (
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to right, #1a1a1a, #333333)',
          }}
        ></div>
      )}
      
      <div className="container mx-auto py-16 relative z-10 px-[32px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <AnimatedSection animation="fade-in-right" noDelay={true}>
              <span className="inline-block px-4 py-1 bg-brand-green/90 text-white rounded-full text-sm font-medium mb-4">
                {isKozijnenPage ? 'Specialist in kunststof kozijnen' : 'Specialist in woningverduurzaming'}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {isKozijnenPage ? 'Kunststof Kozijnen - Duurzaam, Betaalbaar en Stijlvol' : 'Verduurzamen van woningen'}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                {isKozijnenPage ? 'Hoogwaardige, energiezuinige en onderhoudsarme kunststof kozijnen voor uw woning. Met meer dan 20 jaar ervaring leveren wij kwaliteitsproducten die duurzaam en betrouwbaar zijn.' : 'Meer dan 20 jaar ervaring in het verduurzamen van woningen met hoogwaardige en onderhoudsarme oplossingen voor een comfortabeler huis en lagere energiekosten.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white">
                  <Link to="/offerte">
                    <span>Offerte aanvragen</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20">
                  <Link to="/projecten">
                    {isKozijnenPage ? 'Ontdek alles over kunststof kozijnen' : 'Onze projecten'}
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-white mb-8">
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
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-5">
            <AnimatedSection animation="fade-in-left" delay={300} noDelay={true}>
              <div className="glass-card p-6 backdrop-blur-lg bg-white/10 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {isKozijnenPage ? 'Voordelen van kunststof kozijnen' : 'Voordelen'}
                </h3>
                <ul className="space-y-3">
                  {(isKozijnenPage ? ['Energiebesparend - Warmte blijft binnen', 'Onderhoudsarm - Nooit meer schilderen', 'Lange levensduur - Minimaal 30 jaar', 'Uitstekende isolatie - Minder geluid', 'Diverse kleuren en stijlen beschikbaar', '10 jaar servicegarantie en 15 jaar productgarantie'] : ['Energiebesparend - Lagere energiekosten', 'Onderhoudsarm en duurzaam - Geen schilderwerk', 'Waardeverhoging van de woning', 'Veilig en innovatief - Hoogwaardige sloten', 'Ruime keuze aan kleuren en stijlen', '10 jaar servicegarantie en 15 jaar productgarantie']).map((item, index) => <li key={index} className="flex items-start gap-3">
                      <div className="bg-brand-green p-1 rounded-full mt-1 flex-shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/90">{item}</span>
                    </li>)}
                </ul>
                <div className="mt-6 pt-4 border-t border-white/20">
                  <div className="flex flex-col gap-4">
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="text-sm font-medium text-white mb-3">Keurmerken:</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white rounded p-2 h-16 flex items-center justify-center" title="KOMO-certificaat">
                          <img src="/lovable-uploads/f1d54abc-69ab-4254-931b-2ff6d32891f1.png" alt="KOMO-certificaat" className="h-10 max-w-full object-contain" />
                        </div>
                        <div className="bg-white rounded p-2 h-16 flex items-center justify-center" title="CE-markering">
                          <img src="/lovable-uploads/10906789-676e-4aef-b797-6bc0815255ea.png" alt="CE-markering" className="h-10 max-w-full object-contain" />
                        </div>
                        <div className="bg-white rounded p-2 h-16 flex items-center justify-center" title="PKVW Keurmerk">
                          <img src="/lovable-uploads/a680436d-6948-4799-a383-6aad791b1e0e.png" alt="PKVW Keurmerk" className="h-12 max-w-full object-contain" />
                        </div>
                        <div className="bg-white rounded p-2 h-16 flex items-center justify-center" title="Nationaal Warmtefonds">
                          <img src="/lovable-uploads/84861c8c-4187-4055-a956-1249dbe30fe3.png" alt="Nationaal Warmtefonds" className="h-12 max-w-full object-contain" />
                        </div>
                        <div className="bg-white rounded p-2 h-16 flex items-center justify-center" title="Schüco">
                          <img src="/lovable-uploads/4d42855f-0a4b-48ef-b632-25f5f01975fc.png" alt="Schüco" className="h-10 max-w-full object-contain" />
                        </div>
                        <div className="bg-white rounded p-2 h-16 flex items-center justify-center" title="Keralit">
                          <img src="/lovable-uploads/16c4e987-ea24-4f28-adf8-f1e4a100cc98.png" alt="Keralit" className="h-10 max-w-full object-contain" />
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

export default Hero;
