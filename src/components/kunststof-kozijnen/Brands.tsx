
import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface Brand {
  name: string;
  logo: string;
  description: string;
  rating: number;
  features: string[];
}

const Brands: React.FC = () => {
  const brands: Brand[] = [
    {
      name: 'Schüco',
      logo: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Hoogwaardige Duitse kwaliteit met uitstekende isolatiewaarden en innovatieve oplossingen.',
      rating: 4.9,
      features: ['Uitstekende isolatie', 'Premium uitstraling', 'Innovatieve technologie']
    },
    {
      name: 'Veka',
      logo: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Toonaangevende fabrikant van PVC-profielsystemen met focus op duurzaamheid en kwaliteit.',
      rating: 4.8,
      features: ['Hoogwaardig PVC', 'Breed kleurenaanbod', 'Lange levensduur']
    },
    {
      name: 'Kömmerling',
      logo: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Traditioneel Duits merk met focus op innovatie en energiebesparing.',
      rating: 4.7,
      features: ['Energiebesparend', 'Uitstekende geluidsisolatie', 'Breed assortiment']
    },
    {
      name: 'Deceuninck',
      logo: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Belgische fabrikant met focus op duurzame en recyclebare kunststof kozijnen.',
      rating: 4.6,
      features: ['Milieuvriendelijk', 'Modern design', 'Duurzame materialen']
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i}
          className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
        />
      );
    }
    return stars;
  };

  return (
    <section id="merken" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold text-center mb-4">Topmerken Kunststof Kozijnen</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Bij Duurzaam Wonen Nederland werken we uitsluitend met de beste merken in kunststof kozijnen. 
            Dit garandeert u optimale kwaliteit, duurzaamheid en betrouwbaarheid.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <AnimatedSection key={brand.name} animation="fade-in" delay={index * 100}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="h-16 flex items-center justify-center mb-4">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`} 
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{brand.name}</h3>
                  <div className="flex justify-center mb-4">
                    {renderStars(brand.rating)}
                    <span className="ml-2 text-sm text-gray-600">{brand.rating}</span>
                  </div>
                  <p className="text-gray-600 text-center mb-4">{brand.description}</p>
                  <ul className="space-y-1">
                    {brand.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-brand-green mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
