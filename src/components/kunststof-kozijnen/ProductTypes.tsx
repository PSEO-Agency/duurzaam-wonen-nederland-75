
import React, { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductType {
  name: string;
  image: string;
  description: string;
}

const ProductTypes: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const productTypes: ProductType[] = [
    {
      name: 'Prefab Kozijnen',
      image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Kant-en-klare kozijnen die direct geplaatst kunnen worden. Ideaal voor nieuwbouw en renovatie.'
    },
    {
      name: 'Vast Kozijn',
      image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Niet te openen kozijnen voor maximale isolatie. Perfect voor grote raampartijen.'
    },
    {
      name: 'Draairaam',
      image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Klassiek kozijn dat volledig open kan draaien. Ideaal voor goede ventilatie.'
    },
    {
      name: 'Draaikiepraam',
      image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Veelzijdig kozijn dat zowel open kan draaien als op kiepstand kan. Voor flexibele ventilatie.'
    },
    {
      name: 'Stolpstel Kozijn',
      image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Dubbele ramen die in het midden sluiten. Geschikt voor brede openingen.'
    },
    {
      name: 'Draaikiepraam met bovenlicht',
      image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Combinatie van een draaikiepraam met een vast of kiepbaar raam erboven.'
    },
  ];

  // Additional types that will be shown when expanded
  const expandedTypes: ProductType[] = [
    {
      name: 'Kozijn met valraam',
      image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Kozijn met een naar binnen vallend raam aan de bovenkant. Ideaal voor ventilatie.'
    },
    {
      name: 'Schuifpui',
      image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Horizontaal schuivend kozijn, perfect voor toegang naar tuin of balkon.'
    },
    {
      name: 'Hefschuifpui',
      image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Premium schuifpui die wordt opgetild bij het schuiven voor soepelere beweging.'
    },
    {
      name: 'Harmonica Kozijn',
      image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Vouwbare kozijnen die volledig opzij kunnen worden geschoven.'
    },
    {
      name: 'Kiepraam',
      image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Raam dat alleen kan kiepen. Geschikt voor hoge raampartijen.'
    },
    {
      name: 'Rondboog Kozijn',
      image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Kozijn met een ronde bovenkant. Voor een klassieke uitstraling.'
    },
    {
      name: 'Schuin Kozijn',
      image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Kozijn dat aansluit op een schuine wand, zoals onder een dak.'
    },
    {
      name: 'Draai-valraam',
      image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png',
      description: 'Raam dat zowel kan draaien als vallen. Combinatie van functionaliteiten.'
    },
  ];

  const displayedTypes = expanded ? [...productTypes, ...expandedTypes] : productTypes;

  return (
    <section id="soorten" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold text-center mb-4">Soorten Kunststof Kozijnen</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Ontdek ons uitgebreid assortiment kunststof kozijnen voor elke woning en stijl. 
            Van vaste kozijnen tot draaikiepramen en schuifpuien.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTypes.map((type, index) => (
            <AnimatedSection key={type.name} animation="fade-in" delay={index * 100}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <img 
                    src={type.image} 
                    alt={type.name} 
                    className="w-full h-48 object-cover rounded-t-lg" 
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button 
            onClick={() => setExpanded(!expanded)}
            variant="outline"
            className="flex items-center gap-2"
          >
            {expanded ? (
              <>Minder weergeven <ChevronUp className="h-4 w-4" /></>
            ) : (
              <>Meer weergeven <ChevronDown className="h-4 w-4" /></>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductTypes;
