
import React from 'react';
import { Zap, Shield, Home, Sparkles, Palette, Award } from 'lucide-react';
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
    <section id="benefits" className="section-container bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="section-title">Voordelen van Duurzaam Wonen Nederland</h2>
          <p className="section-subtitle">
            Ervaar de vele voordelen van onze hoogwaardige verduurzamingsoplossingen voor uw woning
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {benefitsData.map((benefit, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="glass-card h-full p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
