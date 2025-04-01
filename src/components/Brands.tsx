
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Brands: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="glass-card bg-white shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-brand-green p-8 md:p-12 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Wij bouwen aan een duurzame toekomst</h2>
                <p className="mb-6">
                  Onze producten en oplossingen zijn geselecteerd op basis van kwaliteit, duurzaamheid en innovatie. 
                  We werken samen met toonaangevende merken voor optimale resultaten.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <p className="text-sm">Schüco - Premium kozijnsystemen</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <p className="text-sm">Keralit - Duurzame gevelbekleding</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <p className="text-sm">Hörmann - Hoogwaardige deursystemen</p>
                  </div>
                </div>
              </div>
              
              <div className="col-span-2 p-8 md:p-12 flex flex-col items-center justify-center">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-medium text-gray-600 mb-1">Onze keurmerken en partners</h3>
                  <p className="text-sm text-gray-500">
                    Wij werken uitsluitend met gecertificeerde materialen en erkende merken
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 items-center">
                  <div className="flex justify-center">
                    <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-600 font-bold">
                      SCHÜCO
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-600 font-bold">
                      KERALIT
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-600 font-bold">
                      HÖRMANN
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-600 font-bold">
                      HEROAL
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-600 font-bold">
                      SOMFY
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-600 font-bold">
                      LUXAFLEX
                    </div>
                  </div>
                  {/* Added Twents Design logo */}
                  <div className="flex justify-center">
                    <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/a38f538b-3291-42a1-9330-6fbd4be048f6.png" 
                        alt="Twents Design" 
                        className="h-10 max-w-full object-contain" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Brands;
