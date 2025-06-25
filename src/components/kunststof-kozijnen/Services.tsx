
import React from 'react';
import { Ruler, Wrench, Settings } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Ruler className="h-10 w-10 text-brand-green" />,
      title: "Kozijnen Inmeten",
      description: "Onze experts komen bij u thuis voor nauwkeurig inmeten. Perfect passende kozijnen gegarandeerd, rekening houdend met alle bouwkundige details."
    },
    {
      icon: <Wrench className="h-10 w-10 text-brand-green" />,
      title: "Kozijnen Montage",
      description: "Vakkundige montage door ons ervaren team. Snel, schoon en met minimale overlast. Inclusief afwerking en oplevering volgens de hoogste standaarden."
    },
    {
      icon: <Settings className="h-10 w-10 text-brand-green" />,
      title: "Kozijnen Reparatie",
      description: "Professionele reparatie- en onderhoudsdienst. Ook voor kozijnen die niet door ons zijn geplaatst. Snelle service en eerlijke prijzen."
    },
  ];

  return (
    <section id="diensten" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold text-center mb-4">Onze Oplossingen</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12 px-2">
            Van inmeten tot montage en onderhoud - wij begeleiden u door het hele proces met deskundig advies en service.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="fade-in" delay={index * 150}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="bg-brand-green/10 p-4 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
