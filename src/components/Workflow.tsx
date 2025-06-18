
import React from 'react';
import { Phone, Home, Wrench, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Workflow: React.FC = () => {
  const steps = [
    {
      icon: Phone,
      title: "Gratis advies & offerte",
      description: "Persoonlijk advies op maat en een vrijblijvende offerte binnen 24 uur."
    },
    {
      icon: Home,
      title: "Inmeten & planning", 
      description: "Professioneel inmeten en planning van het project volgens uw wensen."
    },
    {
      icon: Wrench,
      title: "Vakkundige montage",
      description: "Installatie door gecertificeerde monteurs met oog voor detail."
    },
    {
      icon: CheckCircle,
      title: "Nazorg & garantie",
      description: "Goede nazorg en waarborging van volledige tevredenheid."
    }
  ];

  return (
    <section id="workflow" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Onze werkwijze
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Van eerste contact tot nazorg: een zorgeloze ervaring in 4 stappen
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection
              key={index}
              animation="fade-in"
              delay={index * 100}
            >
              <div className="text-center relative">
                <div className="bg-brand-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <step.icon className="h-8 w-8 text-brand-green" />
                </div>
                
                {/* Step number */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                  {index + 1}
                </div>
                
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 z-0" />
                )}
                
                <h3 className="text-xl font-semibold mb-3 mt-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
