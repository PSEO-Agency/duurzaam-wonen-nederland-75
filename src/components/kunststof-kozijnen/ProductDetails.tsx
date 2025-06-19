import React, { useState } from 'react';
import { ExternalLink, Paintbrush, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

interface ColorOption {
  name: string;
  hex: string;
  image?: string;
  description?: string;
  category: string;
  popular?: boolean;
  ralCode?: string;
}

interface ProductDetailProps {
  selectedColor: ColorOption | null;
  selectedProfile?: string;
}

const ProductDetails: React.FC<ProductDetailProps> = ({ selectedColor, selectedProfile = "living-82" }) => {
  const profileData = {
    "living-82": {
      name: "Schüco Living Kozijnprofiel",
      slug: "living-82",
      image: "/lovable-uploads/a9f0e889-dd7f-4195-8461-661638f5fc21.png"
    },
    "ct-70-as": {
      name: "Schüco CT70 Kozijnprofiel", 
      slug: "ct-70-as",
      image: "/lovable-uploads/b17265b8-0e61-4866-a077-8567ce7ccf9b.png"
    }
  };

  const currentProfile = profileData[selectedProfile as keyof typeof profileData] || profileData["living-82"];

  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Preview Image - Smaller and integrated */}
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
            {selectedColor && (
              <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-md shadow-sm">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded-full border" 
                    style={{ 
                      backgroundColor: selectedColor.hex,
                      borderColor: selectedColor.hex === '#FFFFFF' ? '#e5e7eb' : 'transparent'
                    }}
                  ></div>
                  <span className="text-xs font-medium">{selectedColor.name}</span>
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
          
          {selectedColor && (
            <div className="mb-4 flex items-center gap-2">
              <span className="text-sm text-gray-600">Geselecteerde kleur:</span>
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full border" 
                  style={{ 
                    backgroundColor: selectedColor.hex,
                    borderColor: selectedColor.hex === '#FFFFFF' ? '#e5e7eb' : 'transparent'
                  }}
                ></div>
                <span className="font-medium text-sm">{selectedColor.name}</span>
              </div>
            </div>
          )}
          
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
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
      
      {/* Specifications Section - Updated with new specs */}
      <div className="border-t border-gray-200 p-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="specifications">
            <AccordionTrigger className="text-lg font-semibold">
              Bekijk specificaties
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
                <div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Inbouwdiepte</span>
                      <span className="font-medium">120 mm</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">U-waarde</span>
                      <span className="font-medium">1,1 W/(m²·K)</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Kamersysteem</span>
                      <span className="font-medium">7 kamers</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Energielabel</span>
                      <span className="font-medium">A</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Kleuren</span>
                      <span className="font-medium">170+ opties</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Dichtingen</span>
                      <span className="font-medium">EPDM rubber</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Materiaal</span>
                      <span className="font-medium">Hoogwaardig PVC</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Onderhoud</span>
                      <span className="font-medium">Onderhoudsarm</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Geluidsisolatie</span>
                      <span className="font-medium">Uitstekend</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Veiligheid</span>
                      <span className="font-medium">Geavanceerd</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Luchtcirculatie</span>
                      <span className="font-medium">Geoptimaliseerd</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Recyclebaar</span>
                      <span className="font-medium">Ja</span>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
};

export default ProductDetails;
