
import React, { useState } from 'react';
import { ExternalLink, Paintbrush, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

interface ProductDetailProps {
  selectedColor: string | null;
  selectedProfile?: string;
}

const ProductDetails: React.FC<ProductDetailProps> = ({ selectedColor, selectedProfile = "living-82" }) => {
  const profileData = {
    "living-82": {
      name: "Schüco LivIng 82",
      slug: "living-82",
      image: "/lovable-uploads/651c14c4-00b2-4f06-8f31-60accb52464d.png"
    },
    "ct-70-as": {
      name: "Schüco CT 70 AS", 
      slug: "ct-70-as",
      image: "/lovable-uploads/a7eb24e5-febb-40e5-a6f2-a535f1bc62ef.png"
    }
  };

  const currentProfile = profileData[selectedProfile as keyof typeof profileData] || profileData["living-82"];

  const getColorValue = (colorName: string) => {
    const colorMap: { [key: string]: string } = {
      'Puur Wit': '#FFFFFF',
      'Verkeerswit': '#F5F5F5',
      'Wit': '#FFFFFF',
      'Crème': '#F5F5DC',
      'Lichtgrijs': '#D3D3D3',
      'Antraciet': '#293133',
      'Monumentengroen': '#2D5E40',
      'Donkergroen': '#2D5E40',
      'Staalblauw': '#4682B4',
      'Zwart': '#121212',
      'Golden Oak': '#C19A6B',
      'Noten': '#654321',
      'Mahonie': '#C04000',
      'Oregon Pine': '#D8B28E',
      'Eiken Naturel': '#D2B48C',
      'Aluminium Metallic': '#A9A9A9',
      'Geborsteld Rvs Look': '#B4B4B4',
      'Brons Metallic': '#CD7F32',
      'Wijnrood': '#722F37',
      'Mosgroen': '#607D3B',
      'Monumentenblauw': '#27548E',
      'Leisteengrijs': '#708090'
    };
    return colorMap[colorName] || '#666';
  };

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Preview Image */}
          <div className="lg:col-span-1">
            <div className="relative h-48 lg:h-full">
              <img 
                src={currentProfile.image}
                alt={`${currentProfile.name} doorsnede`}
                className="w-full h-full object-cover"
              />
              {!selectedColor && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="text-center text-white p-4">
                    <p className="text-sm">Selecteer een kleur om preview te zien</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="lg:col-span-2 p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-medium">{currentProfile.name}</h3>
                <img 
                  src="/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png" 
                  alt="Schüco" 
                  className="h-6 w-auto"
                />
              </div>
              <Button 
                variant="outline" 
                className="bg-black hover:bg-black/90 text-white border-black hover:border-black/90"
                asChild
              >
                <Link to={`/kunststof-kozijnen/profielen/${currentProfile.slug}`}>
                  Productdetails bekijken
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              {selectedColor && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Geselecteerde kleur:</span>
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded-full border" 
                      style={{ 
                        backgroundColor: getColorValue(selectedColor),
                        borderColor: selectedColor === 'Puur Wit' || selectedColor === 'Wit' || selectedColor === 'Verkeerswit' ? '#e5e7eb' : 'transparent'
                      }}
                    ></div>
                    <span className="font-medium text-sm">{selectedColor}</span>
                  </div>
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
        </div>
      </Card>

      {/* Specifications moved here as FAQ-style accordion */}
      <Card>
        <div className="p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="specifications">
              <AccordionTrigger className="text-base font-semibold">
                Bekijk specificaties
              </AccordionTrigger>
              <AccordionContent>
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetails;
