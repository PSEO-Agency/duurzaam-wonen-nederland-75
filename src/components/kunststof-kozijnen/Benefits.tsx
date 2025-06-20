
import React from 'react';
import { ArrowRight, ShieldCheck, Leaf, Clock, PiggyBank, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '../AnimatedSection';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, delay = 0 }) => (
  <AnimatedSection animation="fade-in" delay={delay}>
    <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
      <div className="bg-brand-green/10 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  </AnimatedSection>
);

const Benefits: React.FC = () => {
  const isMobile = useIsMobile();
  
  const benefits = [
    {
      icon: <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-brand-green" />,
      title: "Onderhoudsarm",
      description: "Geen schilderwerk nodig, alleen schoonmaken met water en zeep voor langdurig gebruik."
    },
    {
      icon: <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-brand-green" />,
      title: "Energiezuinig",
      description: "Uitstekende isolatie zorgt voor lagere energiekosten en comfortabel binnenklimaat."
    },
    {
      icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-brand-green" />,
      title: "Lange levensduur",
      description: "Gaat 30-50 jaar mee zonder functieverlies, rot niet en verkleurt nauwelijks."
    },
    {
      icon: <PiggyBank className="h-6 w-6 sm:h-8 sm:w-8 text-brand-green" />,
      title: "Betaalbaar",
      description: "Gunstiger in aanschaf en door lage onderhoudskosten zeer kosteneffectief."
    },
    {
      icon: <Recycle className="h-6 w-6 sm:h-8 sm:w-8 text-brand-green" />,
      title: "Duurzaam",
      description: "Volledig recyclebaar met uitstekende isolatie voor lagere CO2-uitstoot."
    }
  ];

  return (
    <section id="voordelen" className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">Voordelen van Kunststof Kozijnen</h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8 sm:mb-12 px-2 leading-relaxed">
            Ontdek waarom steeds meer huiseigenaren kiezen voor kunststof kozijnen als duurzame en praktische oplossing.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-12">
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
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm max-w-2xl mx-auto mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Garantie op onze kunststof kozijnen</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Wij bieden 15 jaar productgarantie op alle kozijnen en 10 jaar servicegarantie op de montage voor uw volledige gemoedsrust.
            </p>
          </div>
          <Button asChild size={isMobile ? "default" : "lg"} className="bg-brand-green hover:bg-brand-green-dark w-full sm:w-auto px-2 sm:px-6 py-3 min-h-[48px] sm:min-h-[44px]">
            <Link to="/offerte" className="flex items-center justify-center gap-1 sm:gap-2">
              <span className="text-center leading-snug text-xs sm:text-sm md:text-base hyphens-auto break-words">Vraag vrijblijvend een offerte aan</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-5 flex-shrink-0" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Benefits;
