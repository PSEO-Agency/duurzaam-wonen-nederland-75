
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

const SolutionLocations: React.FC = () => {
  const cities = [
    'Enschede', 'Hengelo', 'Almelo', 'Oldenzaal',
    'Haaksbergen', 'Losser', 'Denekamp', 'Tubbergen',
    'Twenterand', 'Wierden', 'Rijssen-Holten', 'Hellendoorn'
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold mb-12 text-center">Onze Werkgebieden</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {cities.map((city, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-medium text-gray-800">{city}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/werkgebied">
                  Bekijk alle werkgebieden
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SolutionLocations;
