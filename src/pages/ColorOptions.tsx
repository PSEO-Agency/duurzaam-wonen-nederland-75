import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Palette, Home, CheckCircle2, Image, Droplet, PanelRight, Paintbrush, Layers, Star, Info } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyNavigation from '@/components/kunststof-kozijnen/StickyNavigation';
import ContactCTA from '@/components/ContactCTA';
import ProductDetails from '@/components/kunststof-kozijnen/ProductDetails';

interface ColorOption {
  name: string;
  hex: string;
  image?: string;
  description?: string;
  category: string;
  popular?: boolean;
  ralCode?: string;
}

interface ProfileOption {
  id: string;
  name: string;
  slug: string;
}

const ColorOptions: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<string>("visualizer");
  const [selectedProfile, setSelectedProfile] = useState<string>("living-82");

  const visualizerTitleRef = useRef<HTMLHeadingElement>(null);
  const collectionTitleRef = useRef<HTMLHeadingElement>(null);

  const profileOptions: ProfileOption[] = [
    { id: "living-82", name: "Schüco LivIng 82", slug: "living-82" },
    { id: "ct-70-as", name: "Schüco CT 70 AS", slug: "ct-70-as" }
  ];

  const colorOptions: ColorOption[] = [
    { name: 'Puur Wit', hex: '#FFFFFF', category: 'standard', popular: true, description: 'De klassieke en meest gekozen kleur, tijdloos en past bij elke woning.', ralCode: 'RAL 9016' },
    { name: 'Verkeerswit', hex: '#F5F5F5', category: 'standard', description: 'Een heldere witte tint, perfect voor een frisse en moderne uitstraling.', ralCode: 'RAL 9016' },
    { name: 'Crème', hex: '#F5F5DC', category: 'standard', popular: true, description: 'Warme, zachte tint die perfect past bij traditionele en landelijke woningen.', ralCode: 'RAL 9001' },
    { name: 'Lichtgrijs', hex: '#D3D3D3', category: 'standard', description: 'Subtiele grijstint voor een ingetogen uitstraling.', ralCode: 'RAL 7035' },
    { name: 'Antraciet', hex: '#293133', category: 'standard', popular: true, description: 'Moderne en stijlvolle donkergrijze kleur, zeer populair bij nieuwbouw en renovaties.', ralCode: 'RAL 7016' },
    { name: 'Monumentengroen', hex: '#2D5E40', category: 'standard', description: 'Traditionele groentint die goed past bij klassieke woningen en landhuizen.', ralCode: 'RAL 6009' },
    { name: 'Staalblauw', hex: '#4682B4', category: 'standard', description: 'Krachtige blauwtint met een industriële uitstraling.', ralCode: 'RAL 5011' },
    { name: 'Zwart', hex: '#121212', category: 'standard', description: 'Elegante en contrasterende kleur voor een krachtige uitstraling.', ralCode: 'RAL 9005' },
    
    { name: 'Golden Oak', hex: '#C19A6B', image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png', category: 'woodlook', popular: true, description: 'Warme eikenhouttint met natuurlijke nerftextuur voor een klassieke uitstraling.', ralCode: 'Folie 2178-001' },
    { name: 'Noten', hex: '#654321', image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png', category: 'woodlook', description: 'Rijke, donkere houtlook die diepte en karakter aan uw woning toevoegt.', ralCode: 'Folie 2178-007' },
    { name: 'Mahonie', hex: '#C04000', image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png', category: 'woodlook', description: 'Roodbruine houtlook met subtiele nerven voor een elegante afwerking.', ralCode: 'Folie 2097-013' },
    { name: 'Oregon Pine', hex: '#D8B28E', image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png', category: 'woodlook', description: 'Lichte houtlook met een subtiele nerf, perfect voor een natuurlijke uitstraling.', ralCode: 'Folie 1192-001' },
    { name: 'Eiken Naturel', hex: '#D2B48C', image: '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png', category: 'woodlook', description: 'Lichte eikenhouttint met een natuurlijke uitstraling.', ralCode: 'Folie 3149-008' },
    
    { name: 'Aluminium Metallic', hex: '#A9A9A9', category: 'metallic', description: 'Moderne metallic look die het beste van aluminium nabootst.', ralCode: 'RAL 9006' },
    { name: 'Geborsteld Rvs Look', hex: '#B4B4B4', category: 'metallic', description: 'Stijlvolle metallic afwerking met een geborsteld effect.', ralCode: 'RAL 9007' },
    { name: 'Brons Metallic', hex: '#CD7F32', category: 'metallic', description: 'Warme metallic tint met een rijke, klassieke uitstraling.', ralCode: 'RAL 8023' },
    
    { name: 'Wijnrood', hex: '#722F37', category: 'special', description: 'Rijke, diepe kleur die warmte en karakter toevoegt aan uw woning.', ralCode: 'RAL 3005' },
    { name: 'Mosgroen', hex: '#607D3B', category: 'special', description: 'Natuurlijke groentint die perfect in landelijke omgevingen past.', ralCode: 'RAL 6005' },
    { name: 'Monumentenblauw', hex: '#27548E', category: 'special', description: 'Traditionele blauwtint, vaak gebruikt in historische gebouwen.', ralCode: 'RAL 5010' },
    { name: 'Leisteengrijs', hex: '#708090', category: 'special', description: 'Elegante grijstint geïnspireerd door natuurlijke leisteen.', ralCode: 'RAL 7015' }
  ];

  const filteredColors = filterCategory === "all" 
    ? colorOptions 
    : colorOptions.filter(color => color.category === filterCategory);
  
  const popularColors = colorOptions.filter(color => color.popular);

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    
    const sectionRef = 
      sectionId === "visualizer" ? visualizerTitleRef :
      collectionTitleRef;
    
    if (sectionRef.current) {
      const yOffset = -120;
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Kleuren voor Kunststof Kozijnen | Inspiratie & Advies</title>
        <meta name="description" content="Ontdek alle kleuren en afwerkingsmogelijkheden voor kunststof kozijnen. Van standaardkleuren tot houtlook en metallic afwerkingen. Probeer onze interactieve kleurenmodule." />
      </Helmet>
      
      <Navbar />

      <main>
        <section className="py-20 pt-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in" className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                Kleuren voor Kunststof Kozijnen
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-4">
                Ontdek de perfecte kleur voor uw kunststof kozijnen met onze interactieve kleurenmodule
              </p>
            </AnimatedSection>
          </div>
        </section>
        
        <StickyNavigation />
        
        <div className="sticky top-[80px] z-10 bg-white border-b shadow-sm">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="py-2">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger 
                  value="visualizer" 
                  className="flex items-center gap-2"
                  onClick={() => scrollToSection("visualizer")}
                >
                  <Palette className="h-4 w-4" />
                  <span className="hidden sm:inline">Kleurenmodule</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="collection" 
                  className="flex items-center gap-2"
                  onClick={() => scrollToSection("collection")}
                >
                  <Droplet className="h-4 w-4" />
                  <span className="hidden sm:inline">Kleurencollectie</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        <section className="py-12">
          <div className="container mx-auto px-4">            
            <ScrollArea className="pr-4">
              <div className="space-y-20">
                <div id="visualizer" className="space-y-8">
                  <h2 ref={visualizerTitleRef} className="text-2xl font-bold mb-4">Interactieve Kleurenmodule</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-6">
                      <AnimatedSection animation="fade-in">
                        <Card>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                              <Layers className="h-5 w-5 mr-2 text-brand-green" />
                              Kies profiel
                            </h3>
                            
                            <Select value={selectedProfile} onValueChange={setSelectedProfile}>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selecteer een profiel" />
                              </SelectTrigger>
                              <SelectContent>
                                {profileOptions.map((profile) => (
                                  <SelectItem key={profile.id} value={profile.id}>
                                    {profile.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </CardContent>
                        </Card>
                      </AnimatedSection>

                      <AnimatedSection animation="fade-in" delay={100}>
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
                              <TooltipProvider>
                                {filteredColors.map((color) => (
                                  <Tooltip key={color.name}>
                                    <TooltipTrigger asChild>
                                      <button
                                        className={`w-full aspect-square rounded-md border-2 ${selectedColor?.name === color.name ? 'border-brand-green' : 'border-transparent'} hover:border-brand-green-dark transition-all`}
                                        style={{ 
                                          backgroundColor: color.hex,
                                          boxShadow: color.hex === '#FFFFFF' ? 'inset 0 0 0 1px #e5e7eb' : 'none'
                                        }}
                                        onClick={() => setSelectedColor(color)}
                                      >
                                        {selectedColor?.name === color.name && (
                                          <CheckCircle2 className="h-5 w-5 text-brand-green bg-white rounded-full" />
                                        )}
                                      </button>
                                    </TooltipTrigger>
                                    <TooltipContent className="font-medium">
                                      <div className="space-y-1">
                                        <p>{color.name}</p>
                                        <p className="text-xs text-gray-500">{color.hex}</p>
                                      </div>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </TooltipProvider>
                            </div>
                            
                            {selectedColor && (
                              <div className="mt-4 p-3 bg-gray-50 rounded-md">
                                <div className="flex items-center gap-2 mb-2">
                                  <div 
                                    className="w-6 h-6 rounded-full" 
                                    style={{ 
                                      backgroundColor: selectedColor.hex,
                                      boxShadow: selectedColor.hex === '#FFFFFF' ? 'inset 0 0 0 1px #e5e7eb' : 'none'
                                    }}
                                  ></div>
                                  <h4 className="font-semibold">{selectedColor.name}</h4>
                                </div>
                                {selectedColor.description && (
                                  <p className="text-sm text-gray-600 mb-3">{selectedColor.description}</p>
                                )}
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="w-full mt-2 text-xs"
                                  onClick={() => window.open(`/kunststof-kozijnen/kleuren/${selectedColor.name.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                                >
                                  <Info className="h-3.5 w-3.5 mr-1" />
                                  Kleur details
                                </Button>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </AnimatedSection>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <AnimatedSection animation="fade-in" delay={200}>
                        <ProductDetails 
                          selectedColor={selectedColor?.name || null} 
                          selectedProfile={selectedProfile}
                        />
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
                                  <AccordionTrigger className="text-base">Binnen- en buitenzijde in verschillende kleuren</AccordionTrigger>
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
                                  <AccordionTrigger className="text-base">Onderhoud van gekleurde kozijnen</AccordionTrigger>
                                  <AccordionContent>
                                    <p>Gekleurde kunststof kozijnen zijn net zo onderhoudsvriendelijk als witte kozijnen. Ze hoeven niet geschilderd te worden en zijn eenvoudig schoon te maken met water en een mild reinigingsmiddel.</p>
                                    <p className="mt-2">Bij donkere kleuren kan in direct zonlicht de temperatuur van het kozijn oplopen. Dit heeft geen invloed op de kwaliteit of levensduur.</p>
                                  </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                  <AccordionTrigger className="text-base">Levertijd en beschikbaarheid</AccordionTrigger>
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
                </div>
                
                <div id="collection" className="space-y-8">
                  <AnimatedSection animation="fade-in">
                    <div className="text-center max-w-3xl mx-auto mb-8">
                      <h2 ref={collectionTitleRef} className="text-2xl font-bold mb-4">Onze kleurencollectie</h2>
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
                        <TooltipProvider>
                          {colorOptions.filter(c => c.category === "standard").map((color) => (
                            <Tooltip key={color.name}>
                              <TooltipTrigger asChild>
                                <Card className="h-full hover:shadow-md transition-shadow">
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
                                    {color.ralCode && (
                                      <p className="text-xs text-gray-500 mb-1">{color.ralCode}</p>
                                    )}
                                    <p className="text-sm text-gray-600 line-clamp-2">{color.description}</p>
                                  </CardContent>
                                </Card>
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="space-y-1">
                                  <p>{color.name}</p>
                                  <p className="text-xs text-gray-500">{color.hex}</p>
                                  {color.ralCode && <p className="text-xs text-gray-500">{color.ralCode}</p>}
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </TooltipProvider>
                      </div>
                    </AnimatedSection>
                    
                    <AnimatedSection animation="fade-in" delay={200}>
                      <h3 className="text-xl font-semibold mb-6 flex items-center">
                        <div className="w-1.5 h-6 bg-brand-green mr-2"></div>
                        Houtlook afwerkingen
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <TooltipProvider>
                          {colorOptions.filter(c => c.category === "woodlook").map((color) => (
                            <Tooltip key={color.name}>
                              <TooltipTrigger asChild>
                                <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                                  <div 
                                    className="h-40"
                                    style={{ backgroundColor: color.hex }}
                                  ></div>
                                  <CardContent className="p-4">
                                    <h4 className="font-semibold mb-1 flex items-center">
                                      {color.name}
                                      {color.popular && <CheckCircle2 className="h-4 w-4 ml-1 text-brand-green" />}
                                    </h4>
                                    {color.ralCode && (
                                      <p className="text-xs text-gray-500 mb-1">{color.ralCode}</p>
                                    )}
                                    <p className="text-sm text-gray-600">{color.description}</p>
                                  </CardContent>
                                </Card>
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="space-y-1">
                                  <p>{color.name}</p>
                                  <p className="text-xs text-gray-500">{color.hex}</p>
                                  {color.ralCode && <p className="text-xs text-gray-500">{color.ralCode}</p>}
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </TooltipProvider>
                      </div>
                    </AnimatedSection>
                    
                    <AnimatedSection animation="fade-in" delay={300}>
                      <h3 className="text-xl font-semibold mb-6 flex items-center">
                        <div className="w-1.5 h-6 bg-brand-green mr-2"></div>
                        Metallic afwerkingen
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <TooltipProvider>
                          {colorOptions.filter(c => c.category === "metallic").map((color) => (
                            <Tooltip key={color.name}>
                              <TooltipTrigger asChild>
                                <Card className="h-full hover:shadow-md transition-shadow">
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
                                    {color.ralCode && (
                                      <p className="text-xs text-gray-500 mb-1">{color.ralCode}</p>
                                    )}
                                    <p className="text-sm text-gray-600">{color.description}</p>
                                  </CardContent>
                                </Card>
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="space-y-1">
                                  <p>{color.name}</p>
                                  <p className="text-xs text-gray-500">{color.hex}</p>
                                  {color.ralCode && <p className="text-xs text-gray-500">{color.ralCode}</p>}
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </TooltipProvider>
                      </div>
                    </AnimatedSection>
                    
                    <AnimatedSection animation="fade-in" delay={400}>
                      <h3 className="text-xl font-semibold mb-6 flex items-center">
                        <div className="w-1.5 h-6 bg-brand-green mr-2"></div>
                        Speciale kleuren
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        <TooltipProvider>
                          {colorOptions.filter(c => c.category === "special").map((color) => (
                            <Tooltip key={color.name}>
                              <TooltipTrigger asChild>
                                <Card className="h-full hover:shadow-md transition-shadow">
                                  <div 
                                    className="h-32" 
                                    style={{ backgroundColor: color.hex }}
                                  ></div>
                                  <CardContent className="p-4">
                                    <h4 className="font-semibold mb-1">{color.name}</h4>
                                    {color.ralCode && (
                                      <p className="text-xs text-gray-500 mb-1">{color.ralCode}</p>
                                    )}
                                    <p className="text-sm text-gray-600 line-clamp-2">{color.description}</p>
                                  </CardContent>
                                </Card>
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="space-y-1">
                                  <p>{color.name}</p>
                                  <p className="text-xs text-gray-500">{color.hex}</p>
                                  {color.ralCode && <p className="text-xs text-gray-500">{color.ralCode}</p>}
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </TooltipProvider>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>
        </section>
        
        <ContactCTA />
      </main>
      
      <Footer />
    </>
  );
};

export default ColorOptions;
