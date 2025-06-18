
import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutUs: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: "1000+",
      label: "Tevreden klanten"
    },
    {
      icon: Award,
      number: "20+",
      label: "Jaar ervaring"
    },
    {
      icon: Clock,
      number: "2-4",
      label: "Weken levertijd"
    },
    {
      icon: Heart,
      number: "100%",
      label: "Tevredenheid"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Over Duurzaam Wonen Nederland
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Met meer dan 20 jaar ervaring in de woningverduurzaming zijn wij uw specialist 
                voor kunststof kozijnen, HR++ glas, dakkapellen en gevelbekleding. Ons vakkundige 
                team zorgt voor een zorgeloze ervaring van advies tot montage.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We werken uitsluitend met A-merken en bieden hoogwaardige, onderhoudsarme 
                oplossingen die zorgen voor een comfortabeler huis en lagere energiekosten.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                    <div className="text-center">
                      <div className="bg-brand-green/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <stat.icon className="h-6 w-6 text-brand-green" />
                      </div>
                      <div className="text-2xl font-bold text-brand-green mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200}>
            <div className="relative">
              <img 
                src="/lovable-uploads/e39f3289-8c7c-49f2-a6e4-bf9295d9e482.png" 
                alt="Kunststof Kozijnen Team Duurzaam Wonen Nederland"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
