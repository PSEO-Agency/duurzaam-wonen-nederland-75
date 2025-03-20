
import React from 'react';
import { CornerDownRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const servicesData = [
  {
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    title: 'Kunststof kozijnen',
    description: 'Hoogwaardige kozijnen met uitstekende warmte- en geluidsisolatie.',
    features: ['HR++ of triple glas', 'Onderhoudsvrij', 'Diverse kleuren en stijlen']
  },
  {
    image: 'https://images.unsplash.com/photo-1542128962-9d50ad7bf014?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    title: 'Dakkapellen',
    description: 'Maatwerk dakkapellen voor extra ruimte en lichtinval in uw woning.',
    features: ['Uitstekende isolatie', 'Snelle montage', 'Diverse afwerkingen']
  },
  {
    image: 'https://images.unsplash.com/photo-1548086488-5b31b1b4776a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    title: 'Gevelbekleding',
    description: 'Duurzame gevelbekleding voor verbeterde isolatie en een moderne uitstraling.',
    features: ['Onderhoudsarm', '64 kleuropties', 'Verbetert isolatiewaarde']
  },
  {
    image: 'https://images.unsplash.com/photo-1558642692-9105423fb14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    title: 'Zonwering',
    description: 'Optimale klimaatbeheersing met rolluiken en screens voor uw woning.',
    features: ['Energiebesparend', 'Automatisering mogelijk', 'UV-bescherming']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section-container">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="section-title">Onze diensten</h2>
          <p className="section-subtitle">
            Duurzaam Wonen Nederland biedt een breed scala aan hoogwaardige verduurzamingsoplossingen
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {servicesData.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="glass-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CornerDownRight className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Button variant="ghost" className="text-brand-green hover:text-brand-green-dark hover:bg-brand-green/10 -ml-3">
                    Meer informatie <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
