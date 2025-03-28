
import React from 'react';
import { Zap, Shield, Home, Sparkles, Palette, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const benefitsData = [
  {
    icon: <Zap className="h-8 w-8 text-brand-green" />,
    title: 'Energiebesparend',
    description: 'Lagere energiekosten door hoogwaardige isolerende materialen en moderne techniek.'
  },
  {
    icon: <Shield className="h-8 w-8 text-brand-green" />,
    title: 'Onderhoudsarm en duurzaam',
    description: 'Lange levensduur, hoge kwaliteit en geen regelmatig schilderwerk nodig.'
  },
  {
    icon: <Home className="h-8 w-8 text-brand-green" />,
    title: 'Waardeverhoging woning',
    description: 'Moderne en tijdloze designs die de waarde van uw woning verhogen.'
  },
  {
    icon: <Sparkles className="h-8 w-8 text-brand-green" />,
    title: 'Veilig en innovatief',
    description: 'Hoogwaardige sloten en slimme bediening via smartphone voor extra veiligheid.'
  },
  {
    icon: <Palette className="h-8 w-8 text-brand-green" />,
    title: 'Ruime keuze',
    description: 'Maatwerk met 64 kleuropties en diverse stijlen passend bij uw woning.'
  },
  {
    icon: <Award className="h-8 w-8 text-brand-green" />,
    title: '10 jaar garantie',
    description: 'Volledige tevredenheidsgarantie op al onze producten en installaties.'
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="section-container bg-gray-50 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="slide-up">
          <h2 className="section-title">
            <span className="relative inline-block">
              Voordelen 
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-green to-transparent"></span>
            </span>
            {' '}van Duurzaam Wonen Nederland
          </h2>
          <p className="section-subtitle">
            Ervaar de vele voordelen van onze hoogwaardige verduurzamingsoplossingen voor uw woning
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {benefitsData.map((benefit, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 100} 
              animation={index % 2 === 0 ? "fade-in-right" : "fade-in-left"}
              threshold={0.1}
            >
              <div className="glass-card h-full p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="bg-gradient-to-br from-brand-green/20 to-brand-green/5 p-4 rounded-full w-fit mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Added CTA at the bottom of the Benefits section for better conversion */}
        <AnimatedSection delay={600} animation="slide-up" className="mt-16">
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Ontdek hoe deze voordelen specifiek voor uw woning kunnen gelden met een vrijblijvend adviesgesprek.
            </p>
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-brand-green-dark text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              Vrijblijvend adviesgesprek
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Benefits;
