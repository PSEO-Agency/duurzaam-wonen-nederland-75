
import React from 'react';
import { Shield, Clock, Leaf, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Tevredenheidsgarantie",
      description: "Wij staan volledig achter de kwaliteit van onze producten en werkmanschap."
    },
    {
      icon: Clock,
      title: "Meer dan 20 jaar ervaring",
      description: "Jarenlange expertise in woningverduurzaming en vakkundig advies."
    },
    {
      icon: Leaf,
      title: "Duurzame materialen",
      description: "Hoogwaardige, onderhoudsarme materialen voor een lange levensduur."
    },
    {
      icon: Award,
      title: "Gecertificeerde kwaliteit",
      description: "Erkende keurmerken en certificaten voor optimale kwaliteitsborging."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Waarom kiezen voor Duurzaam Wonen Nederland?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Ontdek waarom duizenden klanten voor onze expertise en kwaliteit kiezen
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection
              key={index}
              animation="fade-in"
              delay={index * 100}
            >
              <div className="text-center group">
                <div className="bg-brand-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green/20 transition-colors">
                  <benefit.icon className="h-8 w-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
