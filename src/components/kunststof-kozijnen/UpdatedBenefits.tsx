
import React from 'react';
import { Shield, Clock, Leaf, Award, Home, Users } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const UpdatedBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Duurzaam en onderhoudsvrij",
      description: "Kunststof kozijnen gaan een leven lang mee en hoeven nooit opnieuw geschilderd te worden."
    },
    {
      icon: Clock,
      title: "Goede nazorg en waarborging van volledige tevredenheid",
      description: "Wij staan volledig achter onze producten en service voor maximale gemoedsrust."
    },
    {
      icon: Leaf,
      title: "Uitstekende isolatie",
      description: "Bespaar tot 30% op uw energierekening dankzij de superieure isolatiewaarden."
    },
    {
      icon: Award,
      title: "Topkwaliteit merken",
      description: "Wij werken uitsluitend met A-merken zoals Schüco, bekend om hun kwaliteit en betrouwbaarheid."
    },
    {
      icon: Home,
      title: "Maatwerk oplossingen",
      description: "Elk kozijn wordt op maat gemaakt en perfect afgestemd op uw woning en wensen."
    },
    {
      icon: Users,
      title: "Vakkundige installatie",
      description: "Onze gecertificeerde monteurs zorgen voor een professionele en zorgenvrije plaatsing."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Waarom kiezen voor onze kunststof kozijnen?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Ontdek de vele voordelen van kunststof kozijnen en waarom zij de ideale keuze zijn voor uw woning.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection
              key={index}
              animation="fade-in"
              delay={index * 100}
            >
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex items-center mb-4">
                  <div className="bg-brand-green/10 p-3 rounded-lg mr-4">
                    <benefit.icon className="h-6 w-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpdatedBenefits;
