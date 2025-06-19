
import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Montage: React.FC = () => {
  const steps = [
    {
      title: 'Vrijblijvende offerte',
      description: 'Start met een vrijblijvende offerte op basis van uw wensen en budget.'
    },
    {
      title: 'Inmeten',
      description: 'Onze experts komen bij u langs om alles nauwkeurig in te meten.'
    },
    {
      title: 'Productie',
      description: 'Uw kozijnen worden op maat gemaakt in onze hoogwaardige productiefaciliteiten.'
    },
    {
      title: 'Levering & montage',
      description: 'De kozijnen worden geleverd en door onze vakkundige monteurs geïnstalleerd.'
    },
    {
      title: 'Afwerking',
      description: 'Zorgvuldige afwerking van alle details voor een perfect eindresultaat.'
    },
    {
      title: 'Oplevering & instructie',
      description: 'Controle van het werk en uitleg over gebruik en onderhoud.'
    }
  ];

  const benefits = [
    'Vakkundige montage door gecertificeerde monteurs',
    'Minimale overlast en snelle werkwijze',
    'Inclusief opruimen en afvoeren van oude kozijnen',
    'Netjes afgewerkt aan binnen- en buitenzijde',
    '10 jaar servicegarantie op montage',
    'Keurmerk Erkend Montagebedrijf'
  ];

  return (
    <section id="montage" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold text-center mb-4">Montage van Kunststof Kozijnen</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Professionele installatie is essentieel voor de optimale werking en levensduur van kunststof kozijnen. 
            Ontdek ons montageproces en de voordelen van onze installatieservice.
          </p>
        </AnimatedSection>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <AnimatedSection animation="fade-in" delay={100}>
              <h3 className="text-2xl font-semibold mb-6">Ons montageproces</h3>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="bg-brand-green text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
          
          <div className="lg:w-1/2">
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Voordelen van onze montageservice</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-brand-green mr-2 h-5 w-5 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-2">Inclusief montage of alleen levering?</h4>
                  <p className="text-gray-600 mb-4">
                    U kunt kiezen of u de kozijnen inclusief montage wilt afnemen of alleen de kozijnen wilt laten leveren. 
                    Wij raden altijd aan om gebruik te maken van onze professionele montageservice voor het beste resultaat.
                  </p>
                  <Button className="bg-brand-green hover:bg-brand-green-dark">
                    Vraag een offerte aan inclusief montage
                  </Button>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-300">
                  <p className="text-sm text-gray-600">
                    <strong>Garantie:</strong> 15 jaar productgarantie op de kozijnen en 10 jaar servicegarantie op de montage
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Montage;
