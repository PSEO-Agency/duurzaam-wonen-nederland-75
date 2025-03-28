
import React from 'react';
import { ExternalLink, Paintbrush } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ProductDetailProps {
  selectedColor: string | null;
}

const ProductDetails: React.FC<ProductDetailProps> = ({ selectedColor }) => {
  return (
    <Card className="border-t-0 rounded-t-none">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-medium">Schüco Raamsysteem AWS 75.SI+</h3>
          <Button variant="outline" className="bg-black hover:bg-black/90 text-white border-black hover:border-black/90">
            Productdetails bekijken
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
          <div>
            <div className="space-y-2">
              <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                <span className="text-gray-600">Aanzichtsbreedte min.</span>
                <span className="font-medium">91 mm</span>
              </div>
              <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                <span className="text-gray-600">Uf-waarde frame ≥</span>
                <span className="font-medium">0,92 W/(m² K)</span>
              </div>
              <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                <span className="text-gray-600">Glas-/paneeldikte max.</span>
                <span className="font-medium">61 mm</span>
              </div>
              <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                <span className="text-gray-600">Vleugelbreedte max.</span>
                <span className="font-medium">1700 mm</span>
              </div>
              <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                <span className="text-gray-600">Vleugelhoogte max.</span>
                <span className="font-medium">2500 mm</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="space-y-2">
              <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                <span className="text-gray-600">Geluidsisolatie RwP max.</span>
                <span className="font-medium">48 dB(A)</span>
              </div>
              <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                <span className="text-gray-600">Luchtdoorlaatbaarheid</span>
                <span className="font-medium">Klasse 4</span>
              </div>
              <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                <span className="text-gray-600">Slagregendichtheid</span>
                <span className="font-medium">Klasse 9A</span>
              </div>
              <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                <span className="text-gray-600">Inbraakwering</span>
                <span className="font-medium">tot RC 3</span>
              </div>
              <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                <span className="text-gray-600">Windbelastingsweerstand</span>
                <span className="font-medium">Klasse C5/B5</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center">
            <div className="mr-4">
              <span className="text-sm text-gray-600 block">Prijswinnaar</span>
              <img 
                src="/lovable-uploads/16c4e987-ea24-4f28-adf8-f1e4a100cc98.png" 
                alt="Award badge" 
                className="h-12 w-auto" 
              />
            </div>
            {selectedColor && (
              <div>
                <span className="text-sm text-gray-600 block">Geselecteerde kleur</span>
                <span className="font-medium">{selectedColor}</span>
              </div>
            )}
          </div>
          
          <Button className="bg-brand-green hover:bg-brand-green-dark">
            Kleuradvies aanvragen
            <Paintbrush className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="font-medium mb-2">Snelle toegang</h4>
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
