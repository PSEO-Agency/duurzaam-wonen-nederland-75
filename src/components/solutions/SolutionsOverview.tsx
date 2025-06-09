
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import { useIsMobile } from '@/hooks/use-mobile';

interface OverviewItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  hero_image_url?: string;
  icon_name?: string;
}

interface CategoryWithItems {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon_name: string;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
  solutions?: OverviewItem[];
}

interface SolutionsOverviewProps {
  items?: OverviewItem[];
  isLoading?: boolean;
  itemType?: 'solution' | 'product';
  basePath?: string;
  solutionsByCategory?: CategoryWithItems[];
}

const SolutionsOverview: React.FC<SolutionsOverviewProps> = ({ 
  items = [], 
  isLoading = false, 
  itemType = 'solution',
  basePath = '',
  solutionsByCategory = []
}) => {
  const isMobile = useIsMobile();

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-lg text-gray-500">Laden...</div>
          </div>
        </div>
      </section>
    );
  }

  const getItemPath = (item: OverviewItem) => {
    if (basePath) {
      return `${basePath}/${item.slug}`;
    }
    return `/${item.slug}`;
  };

  const itemTypeName = itemType === 'product' ? 'product' : 'oplossing';
  const itemTypeNamePlural = itemType === 'product' ? 'producten' : 'oplossingen';

  // If we have solutionsByCategory, render by category
  if (solutionsByCategory.length > 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Onze {itemTypeNamePlural.charAt(0).toUpperCase() + itemTypeNamePlural.slice(1)}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ontdek ons uitgebreide aanbod aan duurzame {itemTypeNamePlural} die perfect aansluiten bij uw wensen en behoeften.
              </p>
            </div>

            {solutionsByCategory.map((category) => {
              if (!category.solutions || category.solutions.length === 0) return null;
              
              return (
                <div key={category.id} className="mb-16">
                  <h3 className="text-2xl font-bold mb-8 text-center">{category.name}</h3>
                  <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
                    {category.solutions.map((item, index) => (
                      <AnimatedSection key={item.id} animation="fade-in" delay={index * 100}>
                        <Card className="h-full hover:shadow-lg transition-shadow group">
                          {item.hero_image_url && (
                            <div className="aspect-video overflow-hidden rounded-t-lg">
                              <img 
                                src={item.hero_image_url} 
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <CardHeader>
                            <CardTitle className="text-xl group-hover:text-brand-green transition-colors">
                              {item.name}
                            </CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Button asChild className="w-full">
                              <Link to={getItemPath(item)}>
                                <span>Meer over deze {itemTypeName}</span>
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              );
            })}
          </AnimatedSection>
        </div>
      </section>
    );
  }

  // Default rendering for simple items list
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Onze {itemTypeNamePlural.charAt(0).toUpperCase() + itemTypeNamePlural.slice(1)}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ontdek ons uitgebreide aanbod aan duurzame {itemTypeNamePlural} die perfect aansluiten bij uw wensen en behoeften.
            </p>
          </div>

          <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
            {items.map((item, index) => (
              <AnimatedSection key={item.id} animation="fade-in" delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  {item.hero_image_url && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={item.hero_image_url} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-brand-green transition-colors">
                      {item.name}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link to={getItemPath(item)}>
                        <span>Meer over deze {itemTypeName}</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {items.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">
                Er zijn momenteel geen {itemTypeNamePlural} beschikbaar.
              </p>
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SolutionsOverview;
