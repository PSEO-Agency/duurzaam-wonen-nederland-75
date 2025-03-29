
import React from 'react';
import { ArrowRight, ShieldCheck, Leaf, Clock, PiggyBank, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '../AnimatedSection';
import { Link } from 'react-router-dom';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, delay = 0 }) => (
  <AnimatedSection animation="fade-in" delay={delay}>
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-brand-green/10 p-4 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </AnimatedSection>
);

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-brand-green" />,
      title: "Onderhoudsarm",
      description: "Geen schilderwerk nodig, alleen af en toe schoonmaken met water en zeep. Bespaart tijd en geld op langere termijn."
    },
    {
      icon: <Leaf className="h-8 w-8 text-brand-green" />,
      title: "Energiezuinig",
      description: "Uitstekende isolerende eigenschappen die zorgen voor lagere energiekosten en een comfortabel binnenklimaat."
    },
    {
      icon: <Clock className="h-8 w-8 text-brand-green" />,
      title: "Lange levensduur",
      description: "Gaat gemiddeld 30-50 jaar mee zonder functieverlies. Rot of vervormt niet, verkleurt nauwelijks."
    },
    {
      icon: <PiggyBank className="h-8 w-8 text-brand-green" />,
      title: "Betaalbaar",
      description: "Gunstiger in aanschaf dan sommige alternatieven en door lage onderhoudskosten op lange termijn zeer kosteneffectief."
    },
    {
      icon: <Recycle className="h-8 w-8 text-brand-green" />,
      title: "Duurzaam",
      description: "Volledig recyclebaar en biedt uitstekende isolatie die bijdraagt aan een lagere CO2-uitstoot."
    }
  ];

  return (
    <section id="voordelen" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold text-center mb-4">Voordelen van Kunststof Kozijnen</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Ontdek waarom steeds meer huiseigenaren kiezen voor kunststof kozijnen als duurzame en praktische oplossing.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Benefit 
              key={index} 
              icon={benefit.icon} 
              title={benefit.title} 
              description={benefit.description} 
              delay={index * 100}
            />
          ))}
        </div>
        
        <AnimatedSection animation="fade-in" delay={600} className="text-center">
          <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green-dark">
            <Link to="/offerte">
              Vraag vrijblijvend een offerte aan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Benefits;
