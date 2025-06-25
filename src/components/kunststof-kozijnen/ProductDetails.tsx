
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

const ProductDetails: React.FC<ProductDetailProps> = ({ selectedColor, selectedProfile = "living-kozijnprofiel" }) => {
  const profileData = {
    "living-kozijnprofiel": {
      name: "Schüco Living Kozijnprofiel",
      slug: "schuco-living-kozijnprofiel",
      image: "/lovable-uploads/b17265b8-0e61-4866-a077-8567ce7ccf9b.png",
      specifications: {
        inbouwdiepte: "120 mm",
        uWaarde: "1,1 W/(m²·K)",
        kamersysteem: "7 kamers",
        energielabel: "A",
        kleuren: "170+ opties",
        dichtingen: "EPDM rubber",
        materiaal: "Hoogwaardig PVC",
        onderhoud: "Onderhoudsarm",
        geluidsisolatie: "Uitstekend",
        veiligheid: "Extra veiligheid",
        luchtcirculatie: "Gezonde luchtcirculatie",
        recyclebaar: "Ja"
      }
    },
    "ct70-as-kozijnprofiel": {
      name: "Schüco CT70 AS Kozijnprofiel", 
      slug: "schuco-ct70-kozijnprofiel",
      image: "/lovable-uploads/a9f0e889-dd7f-4195-8461-661638f5fc21.png",
      specifications: {
        inbouwdiepte: "70 mm",
        uWaarde: "Uitstekende thermische isolatie",
        kamersysteem: "5 kamers",
        energielabel: "Energie-efficiënt",
        kleuren: "Diverse ontwerpopties",
        dichtingen: "EPDM rubber",
        materiaal: "Hoogwaardig PVC",
        onderhoud: "Eenvoudig onderhoud",
        geluidsisolatie: "Verbeterde geluidsisolatie",
        veiligheid: "Duurzaamheid",
        luchtcirculatie: "Optimale lichtinval",
        recyclebaar: "Ja"
      }
    }
  };

  const currentProfile = profileData[selectedProfile as keyof typeof profileData] || profileData["living-kozijnprofiel"];
  const specs = currentProfile.specifications;

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
        </div>
      </div>
      
      {/* Specifications Section - Updated with profile-specific specs */}
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
                      <span className="font-medium">{specs.inbouwdiepte}</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">U-waarde</span>
                      <span className="font-medium">{specs.uWaarde}</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Kamersysteem</span>
                      <span className="font-medium">{specs.kamersysteem}</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Energielabel</span>
                      <span className="font-medium">{specs.energielabel}</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Kleuren</span>
                      <span className="font-medium">{specs.kleuren}</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Dichtingen</span>
                      <span className="font-medium">{specs.dichtingen}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Materiaal</span>
                      <span className="font-medium">{specs.materiaal}</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Onderhoud</span>
                      <span className="font-medium">{specs.onderhoud}</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Geluidsisolatie</span>
                      <span className="font-medium">{specs.geluidsisolatie}</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Veiligheid</span>
                      <span className="font-medium">{specs.veiligheid}</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Luchtcirculatie</span>
                      <span className="font-medium">{specs.luchtcirculatie}</span>
                    </div>
                    <div className="grid grid-cols-2 py-2 border-b border-gray-100">
                      <span className="text-gray-600">Recyclebaar</span>
                      <span className="font-medium">{specs.recyclebaar}</span>
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
