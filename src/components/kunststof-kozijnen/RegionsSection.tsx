import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Data structures for regions, cities, and services
export interface City {
  id: string;
  name: string;
  slug: string;
  provinceId: string;
}

export interface Province {
  id: string;
  name: string;
  cities: City[];
}

// We'll keep the current regions data as a fallback until we connect to a backend
const regions: Province[] = [
  {
    id: "drenthe",
    name: "Drenthe",
    cities: [
      { id: "assen", name: "Assen", slug: "assen", provinceId: "drenthe" },
      { id: "emmen", name: "Emmen", slug: "emmen", provinceId: "drenthe" },
      { id: "hoogeveen", name: "Hoogeveen", slug: "hoogeveen", provinceId: "drenthe" },
      { id: "meppel", name: "Meppel", slug: "meppel", provinceId: "drenthe" }
    ]
  },
  {
    id: "flevoland",
    name: "Flevoland",
    cities: [
      { id: "almere", name: "Almere", slug: "almere", provinceId: "flevoland" },
      { id: "lelystad", name: "Lelystad", slug: "lelystad", provinceId: "flevoland" },
      { id: "dronten", name: "Dronten", slug: "dronten", provinceId: "flevoland" },
      { id: "emmeloord", name: "Emmeloord", slug: "emmeloord", provinceId: "flevoland" }
    ]
  },
  {
    id: "friesland",
    name: "Friesland",
    cities: [
      { id: "leeuwarden", name: "Leeuwarden", slug: "leeuwarden", provinceId: "friesland" },
      { id: "sneek", name: "Sneek", slug: "sneek", provinceId: "friesland" },
      { id: "heerenveen", name: "Heerenveen", slug: "heerenveen", provinceId: "friesland" },
      { id: "drachten", name: "Drachten", slug: "drachten", provinceId: "friesland" }
    ]
  },
  {
    id: "gelderland",
    name: "Gelderland",
    cities: [
      { id: "arnhem", name: "Arnhem", slug: "arnhem", provinceId: "gelderland" },
      { id: "nijmegen", name: "Nijmegen", slug: "nijmegen", provinceId: "gelderland" },
      { id: "apeldoorn", name: "Apeldoorn", slug: "apeldoorn", provinceId: "gelderland" },
      { id: "ede", name: "Ede", slug: "ede", provinceId: "gelderland" },
      { id: "doetinchem", name: "Doetinchem", slug: "doetinchem", provinceId: "gelderland" },
      { id: "zutphen", name: "Zutphen", slug: "zutphen", provinceId: "gelderland" }
    ]
  },
  {
    id: "groningen",
    name: "Groningen",
    cities: [
      { id: "groningen", name: "Groningen", slug: "groningen", provinceId: "groningen" },
      { id: "delfzijl", name: "Delfzijl", slug: "delfzijl", provinceId: "groningen" },
      { id: "veendam", name: "Veendam", slug: "veendam", provinceId: "groningen" },
      { id: "winschoten", name: "Winschoten", slug: "winschoten", provinceId: "groningen" }
    ]
  },
  {
    id: "limburg",
    name: "Limburg",
    cities: [
      { id: "maastricht", name: "Maastricht", slug: "maastricht", provinceId: "limburg" },
      { id: "venlo", name: "Venlo", slug: "venlo", provinceId: "limburg" },
      { id: "roermond", name: "Roermond", slug: "roermond", provinceId: "limburg" },
      { id: "sittard", name: "Sittard", slug: "sittard", provinceId: "limburg" },
      { id: "heerlen", name: "Heerlen", slug: "heerlen", provinceId: "limburg" }
    ]
  },
  {
    id: "noord-brabant",
    name: "Noord-Brabant",
    cities: [
      { id: "eindhoven", name: "Eindhoven", slug: "eindhoven", provinceId: "noord-brabant" },
      { id: "tilburg", name: "Tilburg", slug: "tilburg", provinceId: "noord-brabant" },
      { id: "breda", name: "Breda", slug: "breda", provinceId: "noord-brabant" },
      { id: "den-bosch", name: "Den Bosch", slug: "den-bosch", provinceId: "noord-brabant" },
      { id: "helmond", name: "Helmond", slug: "helmond", provinceId: "noord-brabant" }
    ]
  },
  {
    id: "noord-holland",
    name: "Noord-Holland",
    cities: [
      { id: "amsterdam", name: "Amsterdam", slug: "amsterdam", provinceId: "noord-holland" },
      { id: "haarlem", name: "Haarlem", slug: "haarlem", provinceId: "noord-holland" },
      { id: "alkmaar", name: "Alkmaar", slug: "alkmaar", provinceId: "noord-holland" },
      { id: "hoorn", name: "Hoorn", slug: "hoorn", provinceId: "noord-holland" },
      { id: "hilversum", name: "Hilversum", slug: "hilversum", provinceId: "noord-holland" },
      { id: "zaandam", name: "Zaandam", slug: "zaandam", provinceId: "noord-holland" }
    ]
  },
  {
    id: "overijssel",
    name: "Overijssel",
    cities: [
      { id: "enschede", name: "Enschede", slug: "enschede", provinceId: "overijssel" },
      { id: "zwolle", name: "Zwolle", slug: "zwolle", provinceId: "overijssel" },
      { id: "deventer", name: "Deventer", slug: "deventer", provinceId: "overijssel" },
      { id: "hengelo", name: "Hengelo", slug: "hengelo", provinceId: "overijssel" },
      { id: "almelo", name: "Almelo", slug: "almelo", provinceId: "overijssel" }
    ]
  },
  {
    id: "utrecht",
    name: "Utrecht",
    cities: [
      { id: "utrecht", name: "Utrecht", slug: "utrecht", provinceId: "utrecht" },
      { id: "amersfoort", name: "Amersfoort", slug: "amersfoort", provinceId: "utrecht" },
      { id: "veenendaal", name: "Veenendaal", slug: "veenendaal", provinceId: "utrecht" },
      { id: "nieuwegein", name: "Nieuwegein", slug: "nieuwegein", provinceId: "utrecht" },
      { id: "zeist", name: "Zeist", slug: "zeist", provinceId: "utrecht" }
    ]
  },
  {
    id: "zeeland",
    name: "Zeeland",
    cities: [
      { id: "middelburg", name: "Middelburg", slug: "middelburg", provinceId: "zeeland" },
      { id: "vlissingen", name: "Vlissingen", slug: "vlissingen", provinceId: "zeeland" },
      { id: "terneuzen", name: "Terneuzen", slug: "terneuzen", provinceId: "zeeland" },
      { id: "goes", name: "Goes", slug: "goes", provinceId: "zeeland" }
    ]
  },
  {
    id: "zuid-holland",
    name: "Zuid-Holland",
    cities: [
      { id: "rotterdam", name: "Rotterdam", slug: "rotterdam", provinceId: "zuid-holland" },
      { id: "den-haag", name: "Den Haag", slug: "den-haag", provinceId: "zuid-holland" },
      { id: "leiden", name: "Leiden", slug: "leiden", provinceId: "zuid-holland" },
      { id: "dordrecht", name: "Dordrecht", slug: "dordrecht", provinceId: "zuid-holland" },
      { id: "gouda", name: "Gouda", slug: "gouda", provinceId: "zuid-holland" },
      { id: "delft", name: "Delft", slug: "delft", provinceId: "zuid-holland" }
    ]
  }
];

const RegionsSection: React.FC = () => {
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
            <AnimatedSection key={region.id} animation="fade-in">
              <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                <div className="bg-brand-green/5 p-4">
                  <h3 className="font-semibold flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-brand-green" />
                    {region.name}
                  </h3>
                </div>
                
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {region.cities.map((city) => (
                      <Button 
                        key={city.id} 
                        variant="outline" 
                        size="sm" 
                        className="text-sm"
                        asChild
                      >
                        <Link to={`/kunststof-kozijnen/locaties/${city.slug}`}>
                          {city.name}
                        </Link>
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
