
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
                {/* The flex container with numbered list items has been removed */}
              </div>
              
              <div className="col-span-2 p-8 md:p-12 flex flex-col items-center justify-center">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-medium text-gray-600 mb-1">Onze keurmerken en partners</h3>
                  <p className="text-sm text-gray-500">
                    Wij werken uitsluitend met gecertificeerde materialen en erkende merken
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center">
                  {/* Politie Keurmerk Veilig Wonen */}
                  <div className="flex justify-center">
                    <div className="h-24 w-64 bg-white rounded flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                      <img 
                        src="/lovable-uploads/7cd55f75-0c54-4a64-be4e-5057e3c59694.png" 
                        alt="Politie Keurmerk Veilig Wonen" 
                        className="h-20 max-w-full object-contain" 
                      />
                    </div>
                  </div>
                  {/* Nationaal Warmtefonds */}
                  <div className="flex justify-center">
                    <div className="h-24 w-64 bg-white rounded flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                      <img 
                        src="/lovable-uploads/46f89f87-b190-45ea-85ef-ee5be5a33fa4.png" 
                        alt="Nationaal Warmtefonds" 
                        className="h-20 max-w-full object-contain" 
                      />
                    </div>
                  </div>
                  {/* CE Marking */}
                  <div className="flex justify-center">
                    <div className="h-24 w-64 bg-white rounded flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                      <img 
                        src="/lovable-uploads/f46d5a29-a82d-4971-8733-b8c51cdc8579.png" 
                        alt="CE Marking" 
                        className="h-20 max-w-full object-contain" 
                      />
                    </div>
                  </div>
                  {/* KOMO */}
                  <div className="flex justify-center">
                    <div className="h-24 w-64 bg-white rounded flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                      <img 
                        src="/lovable-uploads/20b5ed0b-f1b4-4549-8a01-6179411d6ef7.png" 
                        alt="KOMO" 
                        className="h-20 max-w-full object-contain" 
                      />
                    </div>
                  </div>
                  {/* Schüco */}
                  <div className="flex justify-center">
                    <div className="h-24 w-64 bg-white rounded flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                      <img 
                        src="/lovable-uploads/df206dad-2259-46bb-aa5c-70017520feb4.png" 
                        alt="Schüco" 
                        className="h-20 max-w-full object-contain" 
                      />
                    </div>
                  </div>
                  {/* Twents Design logo */}
                  <div className="flex justify-center">
                    <div className="h-24 w-64 bg-white rounded flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                      <img 
                        src="/lovable-uploads/a38f538b-3291-42a1-9330-6fbd4be048f6.png" 
                        alt="Twents Design" 
                        className="h-20 max-w-full object-contain" 
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
