
import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

interface ColorOption {
  name: string;
  hex: string;
  image?: string;
  description: string;
  ralCode?: string;
}

const Colors: React.FC = () => {
  const standardColors: ColorOption[] = [
    {
      name: 'Wit',
      hex: '#FFFFFF',
      description: 'De klassieke en meest gekozen kleur voor kunststof kozijnen. Tijdloos en past bij elke woning.',
      ralCode: 'RAL 9016'
    },
    {
      name: 'Antraciet',
      hex: '#293133',
      description: 'Moderne en stijlvolle donkergrijze kleur, zeer populair bij nieuwbouw en renovaties.',
      ralCode: 'RAL 7016'
    },
    {
      name: 'Crème',
      hex: '#F5F5DC',
      description: 'Warme, zachte kleur die perfect past bij traditionele en landelijke woningen.',
      ralCode: 'RAL 9001'
    },
    {
      name: 'Zwart',
      hex: '#121212',
      description: 'Elegante en contrasterende kleur voor een krachtige uitstraling van uw woning.',
      ralCode: 'RAL 9005'
    },
    {
      name: 'Donkergroen',
      hex: '#2D5E40',
      description: 'Traditionele kleur die goed past bij klassieke woningen en landhuizen.',
      ralCode: 'RAL 6009'
    },
  ];
  
  const woodlookOptions: ColorOption[] = [
    {
      name: 'Golden Oak',
      image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      hex: '#C19A6B',
      description: 'Warme eikenhouttint met natuurlijke nerftextuur voor een klassieke uitstraling.',
      ralCode: 'Folie 2178-001'
    },
    {
      name: 'Noten',
      image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      hex: '#654321',
      description: 'Rijke, donkere houtlook die diepte en karakter aan uw woning toevoegt.',
      ralCode: 'Folie 2178-007'
    },
    {
      name: 'Mahonie',
      image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      hex: '#C04000',
      description: 'Roodbruine houtlook met subtiele nerven voor een elegante afwerking.',
      ralCode: 'Folie 2097-013'
    }
  ];

  return (
    <section id="kleuren" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold text-center mb-4">Kleuren voor Kunststof Kozijnen</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Kunststof kozijnen zijn verkrijgbaar in vele kleuren en afwerkingen. 
            Van standaard wit tot speciale houtlook of metallic afwerkingen. 
            Ook tweekleurige kozijnen zijn mogelijk.
          </p>
        </AnimatedSection>
        
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-6">Standaard kleuren</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {standardColors.map((color) => (
              <AnimatedSection key={color.name} animation="fade-in">
                <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                  <div 
                    className="h-32" 
                    style={{ backgroundColor: color.hex, border: color.hex === '#FFFFFF' ? '1px solid #e5e7eb' : 'none' }}
                  ></div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-1">{color.name}</h4>
                    {color.ralCode && (
                      <p className="text-xs text-gray-500 mb-1">{color.ralCode}</p>
                    )}
                    <p className="text-sm text-gray-600">{color.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6">Houtlook kleuren</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {woodlookOptions.map((option) => (
              <AnimatedSection key={option.name} animation="fade-in">
                <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                  <div className="h-40 bg-cover bg-center" style={{ 
                    backgroundColor: option.hex,
                    backgroundImage: option.image ? `url(${option.image})` : 'none'
                  }}></div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-1">{option.name}</h4>
                    {option.ralCode && (
                      <p className="text-xs text-gray-500 mb-1">{option.ralCode}</p>
                    )}
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Colors;
