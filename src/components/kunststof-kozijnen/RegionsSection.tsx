
import React, { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useRegions, useCities } from '@/hooks/useLocations';

const RegionsSection: React.FC = () => {
  const { data: regions, isLoading: isLoadingRegions } = useRegions();
  const { data: allCities } = useCities();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  
  const getCitiesByRegion = (regionId: string) => {
    return allCities?.filter(city => city.region_id === regionId) || [];
  };

  return (
    <section id="regios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold text-center mb-4">Kunststof Kozijnen in een groot deel van Nederland</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Wij leveren en installeren kunststof kozijnen in een groot deel van Nederland. 
            Bekijk hieronder of wij ook in uw regio actief zijn.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoadingRegions ? (
            Array(12).fill(0).map((_, index) => (
              <AnimatedSection key={index} animation="fade-in">
                <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                  <div className="bg-brand-green/5 p-4">
                    <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      {Array(5).fill(0).map((_, i) => (
                        <div key={i} className="h-8 w-16 bg-gray-100 rounded animate-pulse"></div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))
          ) : (
            regions?.map((region) => {
              const regionCities = getCitiesByRegion(region.id);
              
              return (
                <AnimatedSection key={region.id} animation="fade-in">
                  <Card 
                    className="h-full hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
                    onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
                  >
                    <div className="bg-brand-green/5 p-4">
                      <h3 className="font-semibold flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-brand-green" />
                        {region.name}
                      </h3>
                    </div>
                    
                    <CardContent className="pt-4">
                      <div className="flex flex-wrap gap-2">
                        {regionCities.slice(0, 6).map((city) => (
                          <Button 
                            key={city.id} 
                            variant="outline" 
                            size="sm" 
                            className="text-sm hover:bg-brand-green hover:text-white"
                            asChild
                          >
                            <Link to={`/kunststof-kozijnen/${region.slug}/${city.slug}`}>
                              {city.name}
                            </Link>
                          </Button>
                        ))}
                        {regionCities.length > 6 && (
                          <span className="text-sm text-gray-500 self-center">
                            +{regionCities.length - 6} meer...
                          </span>
                        )}
                      </div>
                      
                      {selectedRegion === region.id && regionCities.length > 6 && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex flex-wrap gap-2">
                            {regionCities.slice(6).map((city) => (
                              <Button 
                                key={city.id} 
                                variant="outline" 
                                size="sm" 
                                className="text-sm hover:bg-brand-green hover:text-white"
                                asChild
                              >
                                <Link to={`/kunststof-kozijnen/${region.slug}/${city.slug}`}>
                                  {city.name}
                                </Link>
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
