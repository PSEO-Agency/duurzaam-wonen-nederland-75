
import React, { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Info, Star, Palette, AlertCircle } from 'lucide-react';
import { useColors, Color } from '@/hooks/useColors';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from 'react-router-dom';

const Colors: React.FC = () => {
  const { data: colors, isLoading } = useColors();
  const [selectedCategory, setSelectedCategory] = useState<string>('white');

  const colorOptions = colors || [];
  const whiteColors = colorOptions.filter(c => c.category === 'white');
  const greyColors = colorOptions.filter(c => c.category === 'grey');
  const blueColors = colorOptions.filter(c => c.category === 'blue');
  const otherColors = colorOptions.filter(c => 
    ['green', 'red', 'beige', 'black'].includes(c.category)
  );
  
  const ColorCard: React.FC<{ color: Color }> = ({ color }) => (
    <AnimatedSection animation="fade-in">
      <Card className="h-full hover:shadow-md transition-shadow overflow-hidden group">
        <div className="relative">
          <div 
            className="h-32" 
            style={{ 
              backgroundColor: color.hex,
              border: color.hex === '#FFFFFF' || color.hex === '#ffffff' ? '1px solid #e5e7eb' : 'none'
            }}
          >
            <div className="absolute top-2 right-2 bg-white/70 px-2 py-1 rounded-sm">
              <img 
                src="/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png" 
                alt="Schüco" 
                className="h-4 w-auto"
              />
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <h4 className="font-semibold mb-1">{color.name}</h4>
          <p className="text-xs text-gray-500 mb-1">{color.ral_code}</p>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{color.description}</p>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-xs group-hover:bg-brand-green group-hover:text-white transition-colors"
            asChild
          >
            <Link to={`/kunststof-kozijnen/kleuren/${color.slug}`}>
              <Info className="h-3.5 w-3.5 mr-1" />
              Kleur details
            </Link>
          </Button>
        </CardContent>
      </Card>
    </AnimatedSection>
  );

  if (isLoading) {
    return (
      <section id="kleuren" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand-green mx-auto mb-4"></div>
          <p className="text-gray-600">Kleuren laden...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="kleuren" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold text-center mb-4">Kleuren voor Kunststof Kozijnen</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
            Ontdek onze selectie van {colorOptions.length} RAL kleuren voor kunststof kozijnen. 
            Van wit en crème tot grijstinten, blauw en overige kleuren.
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
            <TabsList className="grid grid-cols-4 w-full max-w-2xl">
              <TabsTrigger value="white" className="text-xs">Wit/Crème</TabsTrigger>
              <TabsTrigger value="grey" className="text-xs">Grijs</TabsTrigger>
              <TabsTrigger value="blue" className="text-xs">Blauw</TabsTrigger>
              <TabsTrigger value="other" className="text-xs">Overige</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="white">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Wit en Crème tinten</h3>
              {whiteColors.length > 0 && whiteColors[0].has_wood_texture && (
                <Alert className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Deze kleuren buiten worden automatisch voorzien van een houtnerfstructuur.
                  </AlertDescription>
                </Alert>
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
              {whiteColors.map((color) => (
                <ColorCard key={color.slug} color={color} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="grey">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Grijstinten</h3>
              <p className="text-gray-600 mb-6">
                Moderne grijstinten voor een stijlvolle en hedendaagse uitstraling.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {greyColors.map((color) => (
                <ColorCard key={color.slug} color={color} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="blue">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Blauwtinten</h3>
              <p className="text-gray-600 mb-6">
                Klassieke en moderne blauwtinten voor een karakteristieke uitstraling.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
              {blueColors.map((color) => (
                <ColorCard key={color.slug} color={color} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="other">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Overige kleuren</h3>
              <p className="text-gray-600 mb-6">
                Groentinten, roodtinten, beigetinten en zwart voor een unieke uitstraling.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {otherColors.map((color) => (
                <ColorCard key={color.slug} color={color} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <AnimatedSection animation="fade-in" delay={200}>
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{colorOptions.length} RAL kleuren beschikbaar</h3>
                <p className="text-gray-600 mb-4">
                  Onze selectie van {colorOptions.length} zorgvuldig gekozen kleuren voor kunststof kozijnen. 
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
