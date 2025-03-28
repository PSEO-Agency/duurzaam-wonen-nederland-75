
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Home, CheckCircle2, Image, Droplet, PanelRight, Paintbrush, Layers, Star } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyNavigation from '@/components/kunststof-kozijnen/StickyNavigation';
import ContactCTA from '@/components/ContactCTA';

interface ColorOption {
  name: string;
  hex: string;
  image?: string;
  description?: string;
  category: string;
  popular?: boolean;
}

const ColorOptions: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);
  const [intensity, setIntensity] = useState<number>(50);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const colorOptions: ColorOption[] = [
    // Standard colors
    { name: 'Puur Wit', hex: '#FFFFFF', category: 'standard', popular: true, description: 'De klassieke en meest gekozen kleur, tijdloos en past bij elke woning.' },
    { name: 'Verkeerswit', hex: '#F5F5F5', category: 'standard', description: 'Een heldere witte tint, perfect voor een frisse en moderne uitstraling.' },
    { name: 'Crème', hex: '#F5F5DC', category: 'standard', popular: true, description: 'Warme, zachte tint die perfect past bij traditionele en landelijke woningen.' },
    { name: 'Lichtgrijs', hex: '#D3D3D3', category: 'standard', description: 'Subtiele grijstint voor een ingetogen uitstraling.' },
    { name: 'Antraciet', hex: '#293133', category: 'standard', popular: true, description: 'Moderne en stijlvolle donkergrijze kleur, zeer populair bij nieuwbouw en renovaties.' },
    { name: 'Monumentengroen', hex: '#2D5E40', category: 'standard', description: 'Traditionele groentint die goed past bij klassieke woningen en landhuizen.' },
    { name: 'Staalblauw', hex: '#4682B4', category: 'standard', description: 'Krachtige blauwtint met een industriële uitstraling.' },
    { name: 'Zwart', hex: '#121212', category: 'standard', description: 'Elegante en contrasterende kleur voor een krachtige uitstraling.' },
    
    // Wood look
    { name: 'Golden Oak', hex: '#C19A6B', image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png', category: 'woodlook', popular: true, description: 'Warme eikenhouttint met natuurlijke nerftextuur voor een klassieke uitstraling.' },
    { name: 'Noten', hex: '#654321', image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png', category: 'woodlook', description: 'Rijke, donkere houtlook die diepte en karakter aan uw woning toevoegt.' },
    { name: 'Mahonie', hex: '#C04000', image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png', category: 'woodlook', description: 'Roodbruine houtlook met subtiele nerven voor een elegante afwerking.' },
    { name: 'Oregon Pine', hex: '#D8B28E', image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png', category: 'woodlook', description: 'Lichte houtlook met een subtiele nerf, perfect voor een natuurlijke uitstraling.' },
    { name: 'Eiken Naturel', hex: '#D2B48C', image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png', category: 'woodlook', description: 'Lichte eikenhouttint met een natuurlijke uitstraling.' },
    
    // Metallic look
    { name: 'Aluminium Metallic', hex: '#A9A9A9', category: 'metallic', description: 'Moderne metallic look die het beste van aluminium nabootst.' },
    { name: 'Geborsteld Rvs Look', hex: '#B4B4B4', category: 'metallic', description: 'Stijlvolle metallic afwerking met een geborsteld effect.' },
    { name: 'Brons Metallic', hex: '#CD7F32', category: 'metallic', description: 'Warme metallic tint met een rijke, klassieke uitstraling.' },
    
    // Special colors
    { name: 'Wijnrood', hex: '#722F37', category: 'special', description: 'Rijke, diepe kleur die warmte en karakter toevoegt aan uw woning.' },
    { name: 'Mosgroen', hex: '#607D3B', category: 'special', description: 'Natuurlijke groentint die perfect in landelijke omgevingen past.' },
    { name: 'Monumentenblauw', hex: '#27548E', category: 'special', description: 'Traditionele blauwtint, vaak gebruikt in historische gebouwen.' },
    { name: 'Leisteengrijs', hex: '#708090', category: 'special', description: 'Elegante grijstint geïnspireerd door natuurlijke leisteen.' }
  ];

  const filteredColors = filterCategory === "all" 
    ? colorOptions 
    : colorOptions.filter(color => color.category === filterCategory);
  
  const popularColors = colorOptions.filter(color => color.popular);

  // Function to calculate the overlay color with transparency based on intensity
  const getOverlayColor = (hex: string, intensity: number) => {
    // Convert intensity (0-100) to opacity (0-0.8)
    // Using max 0.8 opacity to ensure some of the original product details are still visible
    const opacity = (intensity / 100) * 0.8;
    
    // Convert hex to rgba
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <>
      <Helmet>
        <title>Kleuren voor Kunststof Kozijnen | Inspiratie & Advies</title>
        <meta name="description" content="Ontdek alle kleuren en afwerkingsmogelijkheden voor kunststof kozijnen. Van standaardkleuren tot houtlook en metallic afwerkingen. Probeer onze interactieve kleurenmodule." />
      </Helmet>
      
      <Navbar />

      <main>
        <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                Kleuren voor Kunststof Kozijnen
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-8">
                Ontdek de perfecte kleur voor uw kunststof kozijnen met onze interactieve kleurenmodule
              </p>
            </AnimatedSection>
          </div>
        </section>
        
        <StickyNavigation />
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="visualizer" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="visualizer" className="flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  <span className="hidden sm:inline">Kleurenmodule</span>
                </TabsTrigger>
                <TabsTrigger value="collection" className="flex items-center gap-2">
                  <Droplet className="h-4 w-4" />
                  <span className="hidden sm:inline">Kleurencollectie</span>
                </TabsTrigger>
                <TabsTrigger value="combinations" className="flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  <span className="hidden sm:inline">Kleurcombinaties</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="visualizer" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Panel: Color Selector */}
                  <div className="lg:col-span-1 space-y-6">
                    <AnimatedSection animation="fade-in">
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <Palette className="h-5 w-5 mr-2 text-brand-green" />
                            Kies een kleur
                          </h3>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Button 
                              variant={filterCategory === "all" ? "default" : "outline"}
                              size="sm"
                              onClick={() => setFilterCategory("all")}
                              className={filterCategory === "all" ? "bg-brand-green" : ""}
                            >
                              Alle kleuren
                            </Button>
                            <Button 
                              variant={filterCategory === "standard" ? "default" : "outline"}
                              size="sm"
                              onClick={() => setFilterCategory("standard")}
                              className={filterCategory === "standard" ? "bg-brand-green" : ""}
                            >
                              Standaard
                            </Button>
                            <Button 
                              variant={filterCategory === "woodlook" ? "default" : "outline"}
                              size="sm"
                              onClick={() => setFilterCategory("woodlook")}
                              className={filterCategory === "woodlook" ? "bg-brand-green" : ""}
                            >
                              Houtlook
                            </Button>
                            <Button 
                              variant={filterCategory === "metallic" ? "default" : "outline"}
                              size="sm"
                              onClick={() => setFilterCategory("metallic")}
                              className={filterCategory === "metallic" ? "bg-brand-green" : ""}
                            >
                              Metallic
                            </Button>
                            <Button 
                              variant={filterCategory === "special" ? "default" : "outline"}
                              size="sm"
                              onClick={() => setFilterCategory("special")}
                              className={filterCategory === "special" ? "bg-brand-green" : ""}
                            >
                              Speciale kleuren
                            </Button>
                          </div>
                          
                          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-3 xl:grid-cols-4 gap-2 max-h-72 overflow-y-auto p-2">
                            {filteredColors.map((color) => (
                              <button
                                key={color.name}
                                className={`w-full aspect-square rounded-md border-2 ${selectedColor?.name === color.name ? 'border-brand-green' : 'border-transparent'} hover:border-brand-green-dark transition-all`}
                                style={{ 
                                  background: color.image ? `url(${color.image}) center/cover` : color.hex,
                                  boxShadow: color.hex === '#FFFFFF' ? 'inset 0 0 0 1px #e5e7eb' : 'none'
                                }}
                                onClick={() => setSelectedColor(color)}
                                title={color.name}
                              >
                                {selectedColor?.name === color.name && (
                                  <CheckCircle2 className="h-5 w-5 text-brand-green bg-white rounded-full" />
                                )}
                              </button>
                            ))}
                          </div>
                          
                          {selectedColor && (
                            <div className="mt-4 p-3 bg-gray-50 rounded-md">
                              <div className="flex items-center gap-2 mb-2">
                                <div 
                                  className="w-6 h-6 rounded-full" 
                                  style={{ 
                                    background: selectedColor.image ? `url(${selectedColor.image}) center/cover` : selectedColor.hex,
                                    boxShadow: selectedColor.hex === '#FFFFFF' ? 'inset 0 0 0 1px #e5e7eb' : 'none'
                                  }}
                                ></div>
                                <h4 className="font-semibold">{selectedColor.name}</h4>
                              </div>
                              {selectedColor.description && (
                                <p className="text-sm text-gray-600">{selectedColor.description}</p>
                              )}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                    
                    <AnimatedSection animation="fade-in" delay={100}>
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <Droplet className="h-5 w-5 mr-2 text-brand-green" />
                            Kleurintensiteit aanpassen
                          </h3>
                          
                          <div className="space-y-4">
                            <div className="px-2">
                              <Slider
                                defaultValue={[50]}
                                max={100}
                                step={1}
                                value={[intensity]}
                                onValueChange={(values) => setIntensity(values[0])}
                                disabled={!selectedColor}
                              />
                            </div>
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>Subtiel</span>
                              <span>Intens</span>
                            </div>
                          </div>
                          
                          <div className="mt-6">
                            <p className="text-sm text-gray-600">
                              Deze visualisatie geeft een indicatie van hoe de kleur eruit zal zien op uw kozijnen. 
                              De werkelijke kleur kan afwijken afhankelijk van het gekozen materiaal en lichtomstandigheden.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  </div>
                  
                  {/* Center: Visualization */}
                  <div className="lg:col-span-2">
                    <AnimatedSection animation="fade-in" delay={200}>
                      <Card className="overflow-hidden h-full">
                        <CardContent className="p-0 relative">
                          <div className="relative">
                            {/* Base product image */}
                            <img 
                              src="/lovable-uploads/73d57948-a36b-408e-bb8c-aad91f4b7495.png"
                              alt="Kunststof kozijn doorsnede"
                              className="w-full object-cover"
                            />
                            
                            {/* Color overlay */}
                            {selectedColor && (
                              <div 
                                className="absolute inset-0 mix-blend-multiply"
                                style={{ 
                                  backgroundColor: selectedColor.image 
                                    ? 'transparent' 
                                    : getOverlayColor(selectedColor.hex, intensity),
                                  backgroundImage: selectedColor.image 
                                    ? `url(${selectedColor.image})` 
                                    : 'none',
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                  opacity: selectedColor.image ? intensity / 100 : 1
                                }}
                              ></div>
                            )}
                            
                            {/* No color selected message */}
                            {!selectedColor && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                                <div className="text-center bg-white/90 backdrop-blur-sm p-6 rounded-lg max-w-md">
                                  <Palette className="h-12 w-12 mx-auto mb-4 text-brand-green" />
                                  <h3 className="text-xl font-semibold mb-2">Selecteer een kleur</h3>
                                  <p>Kies een kleur in het paneel links om te zien hoe het eruit ziet op kunststof kozijnen.</p>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {/* Selected color information */}
                          {selectedColor && (
                            <div className="p-6 bg-white">
                              <div className="flex items-center gap-3 mb-2">
                                <div 
                                  className="w-8 h-8 rounded-full" 
                                  style={{ 
                                    background: selectedColor.image ? `url(${selectedColor.image}) center/cover` : selectedColor.hex,
                                    boxShadow: selectedColor.hex === '#FFFFFF' ? 'inset 0 0 0 1px #e5e7eb' : 'none'
                                  }}
                                ></div>
                                <h3 className="text-xl font-semibold">{selectedColor.name}</h3>
                              </div>
                              
                              <p className="text-gray-600 mb-4">{selectedColor.description}</p>
                              
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="bg-gray-50 p-3 rounded-md">
                                  <span className="font-medium">Categorie:</span>{' '}
                                  {filterCategory === 'standard' ? 'Standaard kleur' :
                                   filterCategory === 'woodlook' ? 'Houtlook' :
                                   filterCategory === 'metallic' ? 'Metallic' : 'Speciale kleur'}
                                </div>
                                <div className="bg-gray-50 p-3 rounded-md">
                                  <span className="font-medium">Levertijd:</span>{' '}
                                  {filterCategory === 'standard' ? '6-8 weken' : '8-10 weken'}
                                </div>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                    
                    <div className="mt-6">
                      <AnimatedSection animation="fade-in" delay={300}>
                        <Card>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                              <PanelRight className="h-5 w-5 mr-2 text-brand-green" />
                              Opties en informatie
                            </h3>
                            
                            <Accordion type="single" collapsible className="w-full">
                              <AccordionItem value="item-1">
                                <AccordionTrigger>Binnen- en buitenzijde in verschillende kleuren</AccordionTrigger>
                                <AccordionContent>
                                  <p className="mb-2">Het is mogelijk om de binnen- en buitenzijde van uw kunststof kozijnen in verschillende kleuren uit te voeren.</p>
                                  <p>Populaire combinaties zijn:</p>
                                  <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Buiten: Antraciet | Binnen: Wit</li>
                                    <li>Buiten: Monumentengroen | Binnen: Crème</li>
                                    <li>Buiten: Golden Oak | Binnen: Wit</li>
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-2">
                                <AccordionTrigger>Onderhoud van gekleurde kozijnen</AccordionTrigger>
                                <AccordionContent>
                                  <p>Gekleurde kunststof kozijnen zijn net zo onderhoudsvriendelijk als witte kozijnen. Ze hoeven niet geschilderd te worden en zijn eenvoudig schoon te maken met water en een mild reinigingsmiddel.</p>
                                  <p className="mt-2">Bij donkere kleuren kan in direct zonlicht de temperatuur van het kozijn oplopen. Dit heeft geen invloed op de kwaliteit of levensduur.</p>
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-3">
                                <AccordionTrigger>Levertijd en beschikbaarheid</AccordionTrigger>
                                <AccordionContent>
                                  <p>De levertijd voor kunststof kozijnen is afhankelijk van de gekozen kleur:</p>
                                  <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Standaardkleuren: 6-8 weken</li>
                                    <li>Speciale kleuren en houtlook: 8-10 weken</li>
                                  </ul>
                                  <p className="mt-2">Niet alle profielsystemen zijn in alle kleuren beschikbaar. Neem contact op voor meer informatie over specifieke combinaties.</p>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                            
                            <div className="mt-6 flex justify-center sm:justify-end">
                              <Button className="bg-brand-green hover:bg-brand-green-dark">
                                <Paintbrush className="h-4 w-4 mr-2" />
                                Kleuradvies aanvragen
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </AnimatedSection>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="collection" className="space-y-8">
                <AnimatedSection animation="fade-in">
                  <div className="text-center max-w-3xl mx-auto mb-8">
                    <h2 className="text-2xl font-bold mb-4">Onze kleurencollectie</h2>
                    <p className="text-gray-600">
                      Bekijk onze uitgebreide collectie van kleuren voor kunststof kozijnen. Van klassiek wit tot moderne antraciet en warme houtlook afwerkingen.
                    </p>
                  </div>
                </AnimatedSection>
                
                <div className="space-y-12">
                  <AnimatedSection animation="fade-in" delay={100}>
                    <h3 className="text-xl font-semibold mb-6 flex items-center">
                      <div className="w-1.5 h-6 bg-brand-green mr-2"></div>
                      Standaardkleuren
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                      {colorOptions.filter(c => c.category === "standard").map((color) => (
                        <Card key={color.name} className="h-full hover:shadow-md transition-shadow">
                          <div 
                            className="h-32" 
                            style={{ 
                              backgroundColor: color.hex,
                              boxShadow: color.hex === '#FFFFFF' ? 'inset 0 0 0 1px #e5e7eb' : 'none'
                            }}
                          ></div>
                          <CardContent className="p-4">
                            <h4 className="font-semibold mb-1 flex items-center">
                              {color.name}
                              {color.popular && <CheckCircle2 className="h-4 w-4 ml-1 text-brand-green" />}
                            </h4>
                            <p className="text-sm text-gray-600 line-clamp-2">{color.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection animation="fade-in" delay={200}>
                    <h3 className="text-xl font-semibold mb-6 flex items-center">
                      <div className="w-1.5 h-6 bg-brand-green mr-2"></div>
                      Houtlook afwerkingen
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {colorOptions.filter(c => c.category === "woodlook").map((color) => (
                        <Card key={color.name} className="h-full hover:shadow-md transition-shadow overflow-hidden">
                          <div 
                            className="h-40 bg-cover bg-center"
                            style={{ 
                              backgroundImage: color.image ? `url(${color.image})` : 'none',
                              backgroundColor: color.hex
                            }}
                          ></div>
                          <CardContent className="p-4">
                            <h4 className="font-semibold mb-1 flex items-center">
                              {color.name}
                              {color.popular && <CheckCircle2 className="h-4 w-4 ml-1 text-brand-green" />}
                            </h4>
                            <p className="text-sm text-gray-600">{color.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection animation="fade-in" delay={300}>
                    <h3 className="text-xl font-semibold mb-6 flex items-center">
                      <div className="w-1.5 h-6 bg-brand-green mr-2"></div>
                      Metallic afwerkingen
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {colorOptions.filter(c => c.category === "metallic").map((color) => (
                        <Card key={color.name} className="h-full hover:shadow-md transition-shadow">
                          <div 
                            className="h-32" 
                            style={{ 
                              backgroundColor: color.hex,
                              backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)",
                              backgroundSize: "10px 10px"
                            }}
                          ></div>
                          <CardContent className="p-4">
                            <h4 className="font-semibold mb-1">{color.name}</h4>
                            <p className="text-sm text-gray-600">{color.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection animation="fade-in" delay={400}>
                    <h3 className="text-xl font-semibold mb-6 flex items-center">
                      <div className="w-1.5 h-6 bg-brand-green mr-2"></div>
                      Speciale kleuren
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                      {colorOptions.filter(c => c.category === "special").map((color) => (
                        <Card key={color.name} className="h-full hover:shadow-md transition-shadow">
                          <div 
                            className="h-32" 
                            style={{ backgroundColor: color.hex }}
                          ></div>
                          <CardContent className="p-4">
                            <h4 className="font-semibold mb-1">{color.name}</h4>
                            <p className="text-sm text-gray-600 line-clamp-2">{color.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </AnimatedSection>
                </div>
              </TabsContent>
              
              <TabsContent value="combinations" className="space-y-8">
                <AnimatedSection animation="fade-in">
                  <div className="text-center max-w-3xl mx-auto mb-8">
                    <h2 className="text-2xl font-bold mb-4">Populaire kleurcombinaties</h2>
                    <p className="text-gray-600">
                      Ontdek onze meest gevraagde binnen- en buitenzijde combinaties voor kunststof kozijnen.
                    </p>
                  </div>
                </AnimatedSection>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatedSection animation="fade-in" delay={100}>
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex space-x-2 mb-4">
                          <div className="w-full h-20 bg-[#293133] rounded-l-md flex items-end justify-start p-2">
                            <span className="text-xs text-white">Buiten</span>
                          </div>
                          <div className="w-full h-20 bg-white border border-gray-200 rounded-r-md flex items-end justify-end p-2">
                            <span className="text-xs text-gray-700">Binnen</span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">Antraciet buiten, Wit binnen</h3>
                        <p className="text-gray-600 text-sm mb-4">De meest populaire combinatie voor een modern uiterlijk met een licht interieur.</p>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Kozijn: K70</span>
                          <span>Meerprijs: + €0</span>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                  
                  <AnimatedSection animation="fade-in" delay={150}>
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex space-x-2 mb-4">
                          <div className="w-full h-20 rounded-l-md flex items-end justify-start p-2 bg-cover" 
                               style={{backgroundImage: "url('/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png')"}}>
                            <span className="text-xs text-white">Buiten</span>
                          </div>
                          <div className="w-full h-20 bg-white border border-gray-200 rounded-r-md flex items-end justify-end p-2">
                            <span className="text-xs text-gray-700">Binnen</span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">Golden Oak buiten, Wit binnen</h3>
                        <p className="text-gray-600 text-sm mb-4">Perfect voor een natuurlijke uitstraling met een fris interieur.</p>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Kozijn: K70/K90</span>
                          <span>Meerprijs: + €120/m²</span>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                  
                  <AnimatedSection animation="fade-in" delay={200}>
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex space-x-2 mb-4">
                          <div className="w-full h-20 bg-[#2D5E40] rounded-l-md flex items-end justify-start p-2">
                            <span className="text-xs text-white">Buiten</span>
                          </div>
                          <div className="w-full h-20 bg-[#F5F5DC] border border-gray-200 rounded-r-md flex items-end justify-end p-2">
                            <span className="text-xs text-gray-700">Binnen</span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">Monumentengroen buiten, Crème binnen</h3>
                        <p className="text-gray-600 text-sm mb-4">Klassieke combinatie voor monumentale en landelijke woningen.</p>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Kozijn: K90</span>
                          <span>Meerprijs: + €100/m²</span>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                  
                  <AnimatedSection animation="fade-in" delay={250}>
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex space-x-2 mb-4">
                          <div className="w-full h-20 bg-[#B4B4B4] rounded-l-md flex items-end justify-start p-2"
                               style={{
                                 backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)",
                                 backgroundSize: "10px 10px"
                               }}>
                            <span className="text-xs text-gray-700">Buiten</span>
                          </div>
                          <div className="w-full h-20 bg-white border border-gray-200 rounded-r-md flex items-end justify-end p-2">
                            <span className="text-xs text-gray-700">Binnen</span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">Rvs-look buiten, Wit binnen</h3>
                        <p className="text-gray-600 text-sm mb-4">Moderne combinatie met een industriële uitstraling aan de buitenzijde en een neutrale binnenzijde.</p>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Kozijn: K70/K90</span>
                          <span>Meerprijs: + €150/m²</span>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <ContactCTA />
      </main>
      
      <Footer />
    </>
  );
};

export default ColorOptions;
