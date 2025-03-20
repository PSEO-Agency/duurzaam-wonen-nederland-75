
import React from 'react';
import AnimatedSection from './AnimatedSection';

const workflowSteps = [
  {
    number: '01',
    title: 'Advies & offerte',
    description: 'Gratis en vrijblijvend advies om uw wensen in kaart te brengen'
  },
  {
    number: '02',
    title: 'Bezoek aan huis',
    description: 'Inmeting en persoonlijke aanbevelingen door onze experts'
  },
  {
    number: '03',
    title: 'Materiaalkeuze',
    description: 'Hoogwaardige merken zoals Schüco en Keralit voor optimale kwaliteit'
  },
  {
    number: '04',
    title: 'Goedkeuring & planning',
    description: 'Exacte maatvoering en heldere planning van de installatie'
  },
  {
    number: '05',
    title: 'Vakkundige uitvoering',
    description: 'Professionele en schone installatie door ons eigen montageteam'
  },
  {
    number: '06',
    title: 'Nazorg & garantie',
    description: '10 jaar garantie en volledige tevredenheidswaarborg'
  }
];

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="section-container bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-brand-green font-medium">Stap voor stap</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Onze werkwijze</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Bij Duurzaam Wonen Nederland werken we met een transparante en klantgerichte aanpak
              voor een zorgeloos verduurzamingsproces
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="glass-card p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-brand-green font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 ml-16">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
