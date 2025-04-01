
import React, { useState } from 'react';
import { ExternalLink, Paintbrush, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link } from 'react-router-dom';

interface ProductDetailProps {
  selectedColor: string | null;
}

const ProductDetails: React.FC<ProductDetailProps> = ({ selectedColor }) => {
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);

  return (
    <Card className="border-t-0 rounded-t-none">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-medium">Schüco Raamsysteem LivIng 82</h3>
            <img 
              src="/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png" 
              alt="Schüco" 
              className="h-6 w-auto"
            />
          </div>
          <Button variant="outline" className="bg-black hover:bg-black/90 text-white border-black hover:border-black/90">
            Productdetails bekijken
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <Collapsible
          open={isSpecsOpen}
          onOpenChange={setIsSpecsOpen}
          className="w-full"
        >
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="flex items-center w-full mb-4 justify-between">
              <span>Bekijk specificaties</span>
              {isSpecsOpen ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
              <div>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                    <span className="text-gray-600">Aanzichtsbreedte min.</span>
                    <span className="font-medium">120 mm</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                    <span className="text-gray-600">Uf-waarde frame ≥</span>
                    <span className="font-medium">0,96 W/(m²·K)</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                    <span className="text-gray-600">Glas-/paneeldikte max.</span>
                    <span className="font-medium">52 mm</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                    <span className="text-gray-600">Vleugelbreedte max.</span>
                    <span className="font-medium">1500 mm</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                    <span className="text-gray-600">Vleugelhoogte max.</span>
                    <span className="font-medium">2600 mm</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                    <span className="text-gray-600">Vleugelgewicht max.</span>
                    <span className="font-medium">120 kg</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                    <span className="text-gray-600">Vleugelhoogte min.-max.</span>
                    <span className="font-medium">400...2600 mm</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                    <span className="text-gray-600">Vleugelbreedte min.-max.</span>
                    <span className="font-medium">400...1500 mm</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                    <span className="text-gray-600">Geluidsisolatie RwP max.</span>
                    <span className="font-medium">47 dB(A)</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                    <span className="text-gray-600">Luchtdichtheid</span>
                    <span className="font-medium">Klasse 4</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                    <span className="text-gray-600">Slagregendichtheid</span>
                    <span className="font-medium">Klasse 9A</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                    <span className="text-gray-600">Inbraakwering</span>
                    <span className="font-medium">tot RC 2</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                    <span className="text-gray-600">Weerstand tegen windbelasting</span>
                    <span className="font-medium">Klasse C5/B5</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                    <span className="text-gray-600">Glas-/paneeldikte min.-max.</span>
                    <span className="font-medium">24...52 mm</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                    <span className="text-gray-600">Barrièrevrij (≤ 20 mm)</span>
                    <span className="font-medium">Ja</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                    <span className="text-gray-600">Dorpelloze oplossing</span>
                    <span className="font-medium">Ja</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                    <span className="text-gray-600">Oppervlakken</span>
                    <span className="font-medium">TopAlu, Decoratiefolie</span>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {selectedColor && (
            <div>
              <span className="text-sm text-gray-600 block">Geselecteerde kleur</span>
              <span className="font-medium">{selectedColor}</span>
            </div>
          )}
          
          <Button asChild className="bg-brand-green hover:bg-brand-green-dark">
            <Link to="/offerte">
              Offerte Aanvragen
              <Paintbrush className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="font-medium mb-2 text-base">Snelle toegang</h4>
          <div className="space-y-2">
            <div className="flex items-center text-brand-green hover:underline">
              <ExternalLink className="h-4 w-4 mr-2" />
              <a href="#" className="text-sm">Galerij</a>
            </div>
            <div className="flex items-center text-brand-green hover:underline">
              <ExternalLink className="h-4 w-4 mr-2" />
              <a href="#" className="text-sm">Technische informatie</a>
            </div>
            <div className="flex items-center text-brand-green hover:underline">
              <ExternalLink className="h-4 w-4 mr-2" />
              <a href="#" className="text-sm">Documentatie</a>
            </div>
            <div className="flex items-center text-brand-green hover:underline">
              <ExternalLink className="h-4 w-4 mr-2" />
              <a href="#" className="text-sm">CAD-gegevens</a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductDetails;
