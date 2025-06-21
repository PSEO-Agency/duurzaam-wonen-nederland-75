
import React, { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Info, Star, Palette } from 'lucide-react';
import { ralColors, woodlookColors, metallicColors, ralColorCategories, RALColor } from '@/data/ralColors';
import { Link } from 'react-router-dom';

const Colors: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('popular');

  const popularColors = ralColors.filter(color => color.popular);
  
  const getCategoryColors = (category: string) => {
    if (category === 'popular') return popularColors;
    if (category === 'woodlook') return woodlookColors;
    if (category === 'metallic') return metallicColors;
    return ralColors.filter(color => color.category === category);
  };

  const ColorCard: React.FC<{ color: RALColor }> = ({ color }) => (
    <AnimatedSection animation="fade-in">
      <Card className="h-full hover:shadow-md transition-shadow overflow-hidden group">
        <div className="relative">
          <div 
            className="h-32" 
            style={{ 
              backgroundColor: color.hex,
              border: color.hex === '#FFFFFF' ? '1px solid #e5e7eb' : 'none'
            }}
          >
            <div className="absolute top-2 right-2 bg-white/70 px-2 py-1 rounded-sm">
              <img 
                src="/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png" 
                alt="Schüco" 
                className="h-4 w-auto"
              />
            </div>
            {color.popular && (
              <div className="absolute top-2 left-2">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                  <Star className="h-3 w-3 mr-1" />
                  Populair
                </Badge>
              </div>
            )}
          </div>
        </div>
        <CardContent className="p-4">
          <h4 className="font-semibold mb-1">{color.name}</h4>
          <p className="text-xs text-gray-500 mb-1">{color.ralCode}</p>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{color.description}</p>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-xs group-hover:bg-brand-green group-hover:text-white transition-colors"
            asChild
          >
            <Link to={`/kunststof-kozijnen/kleuren/${color.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <Info className="h-3.5 w-3.5 mr-1" />
              Kleur details
            </Link>
          </Button>
        </CardContent>
      </Card>
    </AnimatedSection>
  );

  return (
    <section id="kleuren" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold text-center mb-4">Kleuren voor Kunststof Kozijnen</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
            Ontdek onze uitgebreide collectie van 210+ RAL kleuren voor kunststof kozijnen. 
            Van standaard kleuren tot speciale houtlook en metallic afwerkingen.
          </p>
          
          <div className="flex justify-center mb-8">
            <Button asChild className="bg-brand-green hover:bg-brand-green-dark">
              <Link to="/kunststof-kozijnen/kleuren">
                <Palette className="h-4 w-4 mr-2" />
                Bekijk alle kleuren
              </Link>
            </Button>
          </div>
        </AnimatedSection>
        
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 lg:grid-cols-8 w-full max-w-4xl">
              <TabsTrigger value="popular" className="text-xs">
                <Star className="h-3 w-3 mr-1" />
                <span className="hidden sm:inline">Populair</span>
              </TabsTrigger>
              <TabsTrigger value="white" className="text-xs">Wit</TabsTrigger>
              <TabsTrigger value="grey" className="text-xs">Grijs</TabsTrigger>
              <TabsTrigger value="black" className="text-xs">Zwart</TabsTrigger>
              <TabsTrigger value="green" className="text-xs">Groen</TabsTrigger>
              <TabsTrigger value="blue" className="text-xs">Blauw</TabsTrigger>
              <TabsTrigger value="woodlook" className="text-xs">Houtlook</TabsTrigger>
              <TabsTrigger value="metallic" className="text-xs">Metallic</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="popular">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                Populaire kleuren
              </h3>
              <p className="text-gray-600 mb-6">
                De meest gekozen kleuren voor kunststof kozijnen, bewezen populair bij onze klanten.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {popularColors.map((color) => (
                <ColorCard key={color.ralCode} color={color} />
              ))}
            </div>
          </TabsContent>

          {Object.entries(ralColorCategories).map(([categoryKey, categoryName]) => (
            <TabsContent key={categoryKey} value={categoryKey}>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">{categoryName} kleuren</h3>
                <p className="text-gray-600 mb-6">
                  RAL {categoryName.toLowerCase()} kleuren voor kunststof kozijnen.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {getCategoryColors(categoryKey).map((color) => (
                  <ColorCard key={color.ralCode} color={color} />
                ))}
              </div>
            </TabsContent>
          ))}
          
          <TabsContent value="woodlook">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Houtlook afwerkingen</h3>
              <p className="text-gray-600 mb-6">
                Natuurlijke houtlook afwerkingen die de warmte van hout combineren met de voordelen van kunststof.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {woodlookColors.map((color) => (
                <ColorCard key={color.ralCode} color={color} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="metallic">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Metallic afwerkingen</h3>
              <p className="text-gray-600 mb-6">
                Moderne metallic afwerkingen voor een luxueuze en eigentijdse uitstraling.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {metallicColors.map((color) => (
                <ColorCard key={color.ralCode} color={color} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <AnimatedSection animation="fade-in" delay={200}>
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Meer dan 200 RAL kleuren beschikbaar</h3>
                <p className="text-gray-600 mb-4">
                  Naast onze populaire kleuren hebben we toegang tot het volledige RAL kleurenpalet. 
                  Vraag naar de mogelijkheden voor uw specifieke kleurwens.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild className="bg-brand-green hover:bg-brand-green-dark">
                    <Link to="/kunststof-kozijnen/kleuren">
                      Bekijk alle kleuren
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/offerte">
                      Kleuradvies aanvragen
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Colors;
