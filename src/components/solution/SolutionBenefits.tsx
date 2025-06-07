
import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import { useIsMobile } from '@/hooks/use-mobile';

interface Benefit {
  title: string;
  description: string;
  icon?: string;
}

interface SolutionBenefitsProps {
  benefits: Benefit[];
}

const SolutionBenefits: React.FC<SolutionBenefitsProps> = ({ benefits }) => {
  const isMobile = useIsMobile();

  if (!benefits || benefits.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold mb-12 text-center">Voordelen</h2>
          <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                      <Check className="h-6 w-6 text-brand-green" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SolutionBenefits;
