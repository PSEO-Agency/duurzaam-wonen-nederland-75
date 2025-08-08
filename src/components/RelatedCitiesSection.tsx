import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { useCitiesInRegionForService } from '@/hooks/useLocations';
import AnimatedSection from './AnimatedSection';

interface RelatedCitiesSectionProps {
  regionId: string;
  regionSlug: string;
  serviceId: string;
  serviceSlug: string;
  serviceName: string;
  currentCityId: string;
  currentCityName: string;
  regionName: string;
}

export const RelatedCitiesSection: React.FC<RelatedCitiesSectionProps> = ({
  regionId,
  regionSlug,
  serviceId,
  serviceSlug,
  serviceName,
  currentCityId,
  currentCityName,
  regionName
}) => {
  const { data: relatedCities, isLoading } = useCitiesInRegionForService(
    regionId,
    serviceId,
    currentCityId
  );

  // If loading or no related cities, don't render
  if (isLoading || !relatedCities || relatedCities.length === 0) {
    return null;
  }

  // Limit to 6 cities for better UI
  const displayCities = relatedCities.slice(0, 6);

  return (
    <AnimatedSection className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {serviceName} in andere steden in {regionName}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ontdek onze {serviceName.toLowerCase()} diensten in andere steden in de regio {regionName}. 
            Wij bieden hoogwaardige service door de hele regio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCities.map((cityService) => (
            <Card key={cityService.cities.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {serviceName} in {cityService.cities.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Professionele {serviceName.toLowerCase()} diensten in {cityService.cities.name}. 
                      Bekijk onze mogelijkheden en vraag een vrijblijvende offerte aan.
                    </p>
                    <Link to={`/${serviceSlug}/${regionSlug}/${cityService.cities.slug}`}>
                      <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Bekijk diensten
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {relatedCities.length > 6 && (
          <div className="text-center mt-8">
            <Link to={`/${serviceSlug}/${regionSlug}`}>
              <Button variant="outline">
                Bekijk alle steden in {regionName}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
};