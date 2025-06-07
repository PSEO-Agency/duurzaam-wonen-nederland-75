
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import { useIsMobile } from '@/hooks/use-mobile';

interface SolutionData {
  id: string;
  name: string;
  slug: string;
  description: string;
  hero_image_url: string;
  category_id: string;
}

interface Category {
  id: string;
  name: string;
  description?: string;
}

interface SolutionsOverviewProps {
  solutionsByCategory: Array<Category & { solutions: SolutionData[] }>;
}

const SolutionsOverview: React.FC<SolutionsOverviewProps> = ({ solutionsByCategory }) => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Oplossingen die passen bij uw woning
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Met meer dan 20 jaar ervaring bieden wij hoogwaardige en onderhoudsarme oplossingen 
              voor een comfortabeler huis en lagere energiekosten.
            </p>
          </div>
        </AnimatedSection>

        {solutionsByCategory.map((category, categoryIndex) => (
          category.solutions.length > 0 && (
            <div key={category.id} className="mb-16">
              <AnimatedSection animation="fade-in" delay={categoryIndex * 200}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{category.name}</h3>
                  {category.description && (
                    <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                  )}
                </div>
              </AnimatedSection>

              <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
                {category.solutions.map((solution, solutionIndex) => (
                  <AnimatedSection 
                    key={solution.id} 
                    animation="fade-in" 
                    delay={(categoryIndex * 200) + (solutionIndex * 100)}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow group">
                      {solution.hero_image_url && (
                        <div className="aspect-video overflow-hidden rounded-t-lg">
                          <img 
                            src={solution.hero_image_url} 
                            alt={solution.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{category.name}</Badge>
                          <div className="flex items-center gap-1 text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-sm">★</span>
                            ))}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-brand-green transition-colors">
                          {solution.name}
                        </CardTitle>
                        <CardDescription>{solution.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="h-4 w-4 text-brand-green" />
                            <span>10 jaar garantie</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="h-4 w-4 text-brand-green" />
                            <span>Professionele montage</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="h-4 w-4 text-brand-green" />
                            <span>Energiebesparend</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-3">
                          <Button asChild className="w-full">
                            <Link to={`/${solution.slug}`}>
                              <span>Meer informatie</span>
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button asChild variant="outline" className="w-full">
                            <Link to="/offerte">
                              Offerte aanvragen
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default SolutionsOverview;
