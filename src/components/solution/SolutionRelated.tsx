
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import { useIsMobile } from '@/hooks/use-mobile';

interface SolutionData {
  id: string;
  name: string;
  slug: string;
  description: string;
  hero_image_url: string;
}

interface SolutionRelatedProps {
  solutions: SolutionData[];
}

const SolutionRelated: React.FC<SolutionRelatedProps> = ({ solutions }) => {
  const isMobile = useIsMobile();

  if (!solutions || solutions.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold mb-12 text-center">Onze Oplossingen</h2>
          <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
            {solutions.slice(0, 6).map((solutionItem, index) => (
              <AnimatedSection key={solutionItem.id} animation="fade-in" delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  {solutionItem.hero_image_url && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={solutionItem.hero_image_url} 
                        alt={solutionItem.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-brand-green transition-colors">
                      {solutionItem.name}
                    </CardTitle>
                    <CardDescription>{solutionItem.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link to={`/${solutionItem.slug}`}>
                        <span>Meer informatie</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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

export default SolutionRelated;
