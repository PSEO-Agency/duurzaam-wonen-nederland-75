import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '../AnimatedSection';

const RaamdecoratieHero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-16 sm:pt-20 flex items-center" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/lovable-uploads/8db39c70-870c-4ac1-93f1-0c5fd8a46dd0.png")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-8 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <AnimatedSection animation="fade-in-right">
              <span className="inline-block px-3 py-1 sm:px-4 bg-brand-green/90 text-white rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Specialist in Raamdecoratie
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Raamdecoratie op Maat
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl leading-relaxed">Professionele raamdecoratie op maat voor uw woning. Van luxe in-frame raamdecoratie tot moderne jaloeziën en plisségordijnen. Realisatie door onze partner Twents Design.</p>
              
              {/* Twents Design Logo */}
              <div className="flex justify-center sm:justify-start mb-4 sm:mb-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg">
                  <img src="/lovable-uploads/5067fa22-85d5-4218-b58a-b597e2d181bb.png" alt="Twents Design Logo" className="h-16 sm:h-20 w-auto object-contain" />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white w-full sm:w-auto">
                  <a href="https://www.facebook.com/twentsdesign" target="_blank" rel="noopener noreferrer">
                    <span>Offerte aanvragen</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-white mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <div className="bg-brand-green/20 p-1 rounded-full">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-brand-green" />
                  </div>
                  <span className="text-sm sm:text-base">Gratis advies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-brand-green/20 p-1 rounded-full">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-brand-green" />
                  </div>
                  <span className="text-sm sm:text-base">Op maat gemaakt</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-5 mt-6 lg:mt-0">
            <AnimatedSection animation="fade-in-left" delay={300}>
              <div className="glass-card p-4 sm:p-6 backdrop-blur-lg bg-white/10 border border-white/20">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                  Voordelen van onze raamdecoratie
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {['Op maat gemaakt voor perfecte pasvorm', 'Hoogwaardige materialen en afwerking', 'Breed assortiment kleuren en stijlen', 'Professionele montage door experts', 'Uitstekende prijs-kwaliteitverhouding', 'Persoonlijk advies en service'].map((item, index) => <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <div className="bg-brand-green p-0.5 sm:p-1 rounded-full mt-0.5 sm:mt-1 flex-shrink-0">
                        <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                      </div>
                      <span className="text-white/90 text-sm sm:text-base leading-relaxed">{item}</span>
                    </li>)}
                </ul>
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/20">
                  <div className="bg-white/10 p-3 sm:p-4 rounded-lg backdrop-blur-sm">
                    <h4 className="text-xs sm:text-sm font-medium text-white mb-2 sm:mb-3">Keurmerken:</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                      <div className="bg-white rounded p-1 sm:p-2 h-12 sm:h-16 flex items-center justify-center" title="Politie Keurmerk Veilig Wonen">
                        <img src="/lovable-uploads/7cd55f75-0c54-4a64-be4e-5057e3c59694.png" alt="Politie Keurmerk Veilig Wonen" className="h-8 sm:h-12 max-w-full object-contain" />
                      </div>
                      <div className="bg-white rounded p-1 sm:p-2 h-12 sm:h-16 flex items-center justify-center" title="Nationaal Warmtefonds">
                        <img src="/lovable-uploads/46f89f87-b190-45ea-85ef-ee5be5a33fa4.png" alt="Nationaal Warmtefonds" className="h-8 sm:h-12 max-w-full object-contain" />
                      </div>
                      <div className="bg-white rounded p-1 sm:p-2 h-12 sm:h-16 flex items-center justify-center" title="CE Marking">
                        <img src="/lovable-uploads/f46d5a29-a82d-4971-8733-b8c51cdc8579.png" alt="CE Marking" className="h-6 sm:h-10 max-w-full object-contain" />
                      </div>
                      <div className="bg-white rounded p-1 sm:p-2 h-12 sm:h-16 flex items-center justify-center" title="KOMO">
                        <img src="/lovable-uploads/20b5ed0b-f1b4-4549-8a01-6179411d6ef7.png" alt="KOMO" className="h-6 sm:h-10 max-w-full object-contain" />
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
