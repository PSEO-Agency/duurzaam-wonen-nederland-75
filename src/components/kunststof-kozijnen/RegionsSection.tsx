
import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Data structure for provinces and cities
interface RegionData {
  province: string;
  cities: string[];
}

const RegionsSection: React.FC = () => {
  const regions: RegionData[] = [
    {
      province: "Drenthe",
      cities: ["Assen", "Emmen", "Hoogeveen", "Meppel"]
    },
    {
      province: "Flevoland",
      cities: ["Almere", "Lelystad", "Dronten", "Emmeloord"]
    },
    {
      province: "Friesland",
      cities: ["Leeuwarden", "Sneek", "Heerenveen", "Drachten"]
    },
    {
      province: "Gelderland",
      cities: ["Arnhem", "Nijmegen", "Apeldoorn", "Ede", "Doetinchem", "Zutphen"]
    },
    {
      province: "Groningen",
      cities: ["Groningen", "Delfzijl", "Veendam", "Winschoten"]
    },
    {
      province: "Limburg",
      cities: ["Maastricht", "Venlo", "Roermond", "Sittard", "Heerlen"]
    },
    {
      province: "Noord-Brabant",
      cities: ["Eindhoven", "Tilburg", "Breda", "Den Bosch", "Helmond"]
    },
    {
      province: "Noord-Holland",
      cities: ["Amsterdam", "Haarlem", "Alkmaar", "Hoorn", "Hilversum", "Zaandam"]
    },
    {
      province: "Overijssel",
      cities: ["Enschede", "Zwolle", "Deventer", "Hengelo", "Almelo"]
    },
    {
      province: "Utrecht",
      cities: ["Utrecht", "Amersfoort", "Veenendaal", "Nieuwegein", "Zeist"]
    },
    {
      province: "Zeeland",
      cities: ["Middelburg", "Vlissingen", "Terneuzen", "Goes"]
    },
    {
      province: "Zuid-Holland",
      cities: ["Rotterdam", "Den Haag", "Leiden", "Dordrecht", "Gouda", "Delft"]
    }
  ];

  return (
    <section id="regios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold text-center mb-4">Kunststof Kozijnen in heel Nederland</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Wij leveren en installeren kunststof kozijnen in heel Nederland. 
            Bekijk hieronder of wij ook in uw regio actief zijn.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region) => (
            <AnimatedSection key={region.province} animation="fade-in">
              <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                <div className="bg-brand-green/5 p-4">
                  <h3 className="font-semibold flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-brand-green" />
                    {region.province}
                  </h3>
                </div>
                
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {region.cities.map((city) => (
                      <Button 
                        key={city} 
                        variant="outline" 
                        size="sm" 
                        className="text-sm"
                      >
                        {city}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
