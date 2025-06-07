
import React from 'react';
import { Check } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useIsMobile } from '@/hooks/use-mobile';

const SolutionsBenefits: React.FC = () => {
  const isMobile = useIsMobile();

  const benefits = [
    {
      title: "20+ jaar ervaring",
      description: "Ruime ervaring in woningverduurzaming"
    },
    {
      title: "10 jaar garantie",
      description: "Uitgebreide garantie op al onze producten"
    },
    {
      title: "Vakkundige montage",
      description: "Professionele installatie door experts"
    },
    {
      title: "Gratis advies",
      description: "Persoonlijk advies op maat voor uw situatie"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Waarom kiezen voor Duurzaam Wonen Nederland?
            </h2>
          </div>
          
          <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-4'} gap-8`}>
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SolutionsBenefits;
