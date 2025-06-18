
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';

const Assortiment: React.FC = () => {
  const profiles = [
    {
      id: 'living-82',
      name: 'Schüco Living 82',
      brand: 'SCHÜCO',
      description: 'Premium profiel met uitstekende isolatiewaarden en moderne uitstraling',
      image: '/lovable-uploads/59bc8ed5-3639-402b-8eac-33fa699bdb9a.png',
      slug: 'living-82'
    },
    {
      id: 'ct-70-as',
      name: 'Schüco CT 70 AS',
      brand: 'SCHÜCO',
      description: 'Veelzijdig profiel voor renovatie en nieuwbouw projecten',
      image: '/lovable-uploads/59bc8ed5-3639-402b-8eac-33fa699bdb9a.png',
      slug: 'ct-70-as'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ons Assortiment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ontdek onze kunststof kozijn profielen van topkwaliteit
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <AnimatedSection key={profile.id} animation="fade-in" delay={index * 100}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 bg-gray-100 rounded-t-lg overflow-hidden">
                  <img 
                    src={profile.image} 
                    alt={`${profile.name} profiel doorsnede`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold">{profile.name}</h3>
                    <img 
                      src="/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png" 
                      alt="Schüco" 
                      className="h-5 w-auto"
                    />
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {profile.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 hover:border-brand-green hover:text-brand-green"
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

export default Assortiment;
