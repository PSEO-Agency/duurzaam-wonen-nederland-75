import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from '../AnimatedSection';
import { Link } from 'react-router-dom';

const ProductFilters: React.FC = () => {
  const profiles = [
    {
      id: 'living-82',
      name: 'Schüco LivIng 82',
      slug: 'living-82',
      image: '/lovable-uploads/97291a33-75bc-4a31-9791-a3e0610a5963.png',
      description: 'Premium profiel met uitstekende isolatiewaarden en moderne uitstraling',
      logo: '/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png'
    },
    {
      id: 'ct-70-as',
      name: 'Schüco CT 70 AS',
      slug: 'ct-70-as', 
      image: '/lovable-uploads/97291a33-75bc-4a31-9791-a3e0610a5963.png',
      description: 'Veelzijdig profiel voor renovatie en nieuwbouw projecten',
      logo: '/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png'
    }
  ];

  return (
    <section id="soorten" className="py-12">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Ons Assortiment</h2>
            <p className="text-lg text-gray-600">
              Ontdek onze kunststof kozijn profielen van topkwaliteit
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {profiles.map((profile, index) => (
            <AnimatedSection key={profile.id} animation="fade-in" delay={index * 100}>
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={profile.image} 
                    alt={`${profile.name} doorsnede`}
                    className="object-cover w-full h-64"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold">{profile.name}</h3>
                    <img 
                      src={profile.logo} 
                      alt="Schüco" 
                      className="h-5 w-auto"
                    />
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {profile.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full bg-white hover:bg-gray-50 border-gray-300"
                    asChild
                  >
                    <Link to={`/kunststof-kozijnen/profielen/${profile.slug}`}>
                      Bekijk profiel details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFilters;
