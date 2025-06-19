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
      name: 'Schüco Living Kozijnprofiel',
      slug: 'living-82',
      image: '/lovable-uploads/a9f0e889-dd7f-4195-8461-661638f5fc21.png',
      description: 'Ramen zijn een essentieel onderdeel van uw woning en dienen niet alleen aanwezig te zijn, maar ook praktisch, stijlvol en kwalitatief te zijn.',
      logo: '/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png'
    },
    {
      id: 'ct-70-as',
      name: 'Schüco CT70 Kozijnprofiel',
      slug: 'ct-70-as', 
      image: '/lovable-uploads/b17265b8-0e61-4866-a077-8567ce7ccf9b.png',
      description: 'Het kiezen van het juiste raamsysteem is essentieel voor het comfort, de veiligheid en de esthetiek van uw woning.',
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
        
        <AnimatedSection animation="fade-in" delay={300} className="mt-12">
          <div className="text-center bg-gray-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">Garantie op al onze profielen</h3>
            <p className="text-gray-600 mb-4">
              Op alle Schüco profielen bieden wij 15 jaar productgarantie en 10 jaar servicegarantie op de montage.
            </p>
            <Button asChild className="bg-brand-green hover:bg-brand-green-dark">
              <Link to="/offerte">
                Vraag vrijblijvend een offerte aan
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductFilters;
