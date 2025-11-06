
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Palette, Home, CheckCircle2, Image, Droplet, PanelRight, Paintbrush, Layers, Star, Info, AlertCircle, ZoomIn } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyNavigation from '@/components/kunststof-kozijnen/StickyNavigation';
import ContactCTA from '@/components/ContactCTA';
import ProductDetails from '@/components/kunststof-kozijnen/ProductDetails';
import { Link } from 'react-router-dom';
import { useColors, Color } from '@/hooks/useColors';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ProfileOption {
  id: string;
  name: string;
  slug: string;
}

const ColorOptions: React.FC = () => {
  const { data: colors, isLoading } = useColors();
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<string>("visualizer");
  const [selectedProfile, setSelectedProfile] = useState<string>("living-kozijnprofiel");
  const [zoomedColor, setZoomedColor] = useState<Color | null>(null);

  const visualizerTitleRef = useRef<HTMLHeadingElement>(null);
  const collectionTitleRef = useRef<HTMLHeadingElement>(null);

  const profileOptions: ProfileOption[] = [
    { id: "living-kozijnprofiel", name: "Schüco Living Kozijnprofiel", slug: "living-82" },
    { id: "ct70-as-kozijnprofiel", name: "Schüco CT70 AS Kozijnprofiel", slug: "ct-70-as" }
  ];

  const colorOptions = colors || [];
  
  // Group colors by category
  const whiteColors = colorOptions.filter(c => c.category === 'white');
  const greyColors = colorOptions.filter(c => c.category === 'grey');
  const blueColors = colorOptions.filter(c => c.category === 'blue');
  const otherColors = colorOptions.filter(c => 
    ['green', 'red', 'beige', 'black'].includes(c.category)
  );

  const filteredColors = filterCategory === "all" 
    ? colorOptions 
    : colorOptions.filter(color => color.category === filterCategory);
  
  const popularColors = whiteColors.slice(0, 3);

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

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-green mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Kleuren laden...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Kleuren voor Kunststof Kozijnen | Inspiratie & Advies</title>
        <meta name="description" content="Ontdek alle kleuren en afwerkingsmogelijkheden voor kunststof kozijnen. Van standaardkleuren tot houtlook afwerkingen. Probeer onze interactieve kleurenmodule." />
        <meta name="google-site-verification" content="wctWfdTl0t8aKSX4NrFSv-Rhb4YyTREltwTINnU0gXY" />
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
                                variant={filterCategory === "white" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setFilterCategory("white")}
                                className={filterCategory === "white" ? "bg-brand-green" : ""}
                              >
                                Wit/Crème
                              </Button>
                              <Button 
                                variant={filterCategory === "grey" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setFilterCategory("grey")}
                                className={filterCategory === "grey" ? "bg-brand-green" : ""}
                              >
                                Grijs
                              </Button>
                              <Button 
                                variant={filterCategory === "blue" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setFilterCategory("blue")}
                                className={filterCategory === "blue" ? "bg-brand-green" : ""}
                              >
                                Blauw
                              </Button>
                            </div>
                            
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-3 xl:grid-cols-4 gap-2 max-h-72 overflow-y-auto p-2">
                              <TooltipProvider>
                                {filteredColors.map((color) => (
                                  <Tooltip key={color.name}>
                                    <TooltipTrigger asChild>
                                       <button
                                        className={`w-full aspect-square rounded-md border-2 ${selectedColor?.slug === color.slug ? 'border-brand-green' : 'border-transparent'} hover:border-brand-green-dark transition-all`}
                                        style={{ 
                                          backgroundColor: color.hex,
                                          boxShadow: color.hex === '#FFFFFF' || color.hex === '#ffffff' ? 'inset 0 0 0 1px #e5e7eb' : 'none'
                                        }}
                                        onClick={() => setSelectedColor(color)}
                                      >
                                        {selectedColor?.slug === color.slug && (
                                          <CheckCircle2 className="h-5 w-5 text-brand-green bg-white rounded-full" />
                                        )}
                                      </button>
                                    </TooltipTrigger>
                                    <TooltipContent className="font-medium">
                                      <div className="space-y-1">
                                        <p>{color.name}</p>
                                        <p className="text-xs text-gray-500">{color.ral_code}</p>
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
                                      boxShadow: selectedColor.hex === '#FFFFFF' || selectedColor.hex === '#ffffff' ? 'inset 0 0 0 1px #e5e7eb' : 'none'
                                    }}
                                  ></div>
                                  <h4 className="font-semibold">{selectedColor.name}</h4>
                                </div>
                                {selectedColor.description && (
                                  <p className="text-sm text-gray-600 mb-3">{selectedColor.description}</p>
                                )}
                                <p className="text-xs text-gray-500 mb-2">Code: {selectedColor.ral_code}</p>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="w-full mt-2 text-xs"
                                  asChild
                                >
                                  <Link to={`/kunststof-kozijnen/kleuren/${selectedColor.slug}`}>
                                    <Info className="h-3.5 w-3.5 mr-1" />
                                    Kleur details
                                  </Link>
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
                          selectedColor={selectedColor || null} 
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
                                <Button asChild className="bg-brand-green hover:bg-brand-green-dark">
                                  <Link to="/offerte">
                                    <Paintbrush className="h-4 w-4 mr-2" />
                                    Kleuradvies aanvragen
                                  </Link>
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
                        Bekijk onze uitgebreide collectie van 60+ RAL kleuren voor kunststof kozijnen. Van klassiek wit tot moderne antraciet en warme houtlook afwerkingen.
                      </p>
                    </div>
                  </AnimatedSection>
                  
                  <div className="space-y-8">
                    {whiteColors.length > 0 && (
                      <AnimatedSection animation="fade-in" delay={100}>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold flex items-center">
                            <div className="w-1.5 h-6 bg-brand-green mr-2"></div>
                            Wit/Crème
                          </h3>
                          <Alert className="w-auto inline-flex items-center py-2 px-3 border-amber-200 bg-amber-50">
                            <Info className="h-4 w-4 text-amber-600 mr-2" />
                            <AlertDescription className="text-xs text-amber-800">
                              Ook leverbaar met houtlook textuur
                            </AlertDescription>
                          </Alert>
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
                          <TooltipProvider>
                            {whiteColors.map((color) => (
                              <Tooltip key={color.id}>
                                <TooltipTrigger asChild>
                                  <Card 
                                    className="hover:shadow-lg transition-all group cursor-pointer relative overflow-hidden"
                                    onClick={() => setZoomedColor(color)}
                                  >
                                    <div 
                                      className="aspect-square rounded-t-md relative group-hover:scale-105 transition-transform overflow-hidden" 
                                      style={{ 
                                        backgroundColor: color.hex,
                                        boxShadow: color.hex.toLowerCase() === '#ffffff' || color.hex.toLowerCase() === '#f6f6f6' ? 'inset 0 0 0 1px #e5e7eb' : 'none'
                                      }}
                                    >
                                      {color.image_url && (
                                        <img 
                                          src={color.image_url} 
                                          alt={color.name}
                                          className="w-full h-full object-cover"
                                          loading="lazy"
                                        />
                                      )}
                                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                        <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                                      </div>
                                    </div>
                                    <CardContent className="p-2">
                                      <h4 className="font-medium text-xs leading-tight">{color.name}</h4>
                                      <p className="text-xs text-gray-500">{color.ral_code}</p>
                                    </CardContent>
                                  </Card>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <div className="space-y-1">
                                    <p>{color.name}</p>
                                    <p className="text-xs text-gray-500">{color.hex}</p>
                                    <p className="text-xs text-gray-500">{color.ral_code}</p>
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                            ))}
                          </TooltipProvider>
                        </div>
                      </AnimatedSection>
                    )}

                    {greyColors.length > 0 && (
                      <AnimatedSection animation="fade-in" delay={200}>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <div className="w-1.5 h-6 bg-brand-green mr-2"></div>
                          Grijstinten
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
                          <TooltipProvider>
                            {greyColors.map((color) => (
                              <Tooltip key={color.id}>
                                <TooltipTrigger asChild>
                                  <Card 
                                    className="hover:shadow-lg transition-all group cursor-pointer relative overflow-hidden"
                                    onClick={() => setZoomedColor(color)}
                                  >
                                    <div 
                                      className="aspect-square rounded-t-md relative group-hover:scale-105 transition-transform overflow-hidden" 
                                      style={{ backgroundColor: color.hex }}
                                    >
                                      {color.image_url && (
                                        <img 
                                          src={color.image_url} 
                                          alt={color.name}
                                          className="w-full h-full object-cover"
                                          loading="lazy"
                                        />
                                      )}
                                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                        <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                                      </div>
                                    </div>
                                    <CardContent className="p-2">
                                      <h4 className="font-medium text-xs leading-tight">{color.name}</h4>
                                      <p className="text-xs text-gray-500">{color.ral_code}</p>
                                    </CardContent>
                                  </Card>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <div className="space-y-1">
                                    <p>{color.name}</p>
                                    <p className="text-xs text-gray-500">{color.hex}</p>
                                    <p className="text-xs text-gray-500">{color.ral_code}</p>
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                            ))}
                          </TooltipProvider>
                        </div>
                      </AnimatedSection>
                    )}
                    
                    {blueColors.length > 0 && (
                      <AnimatedSection animation="fade-in" delay={300}>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <div className="w-1.5 h-6 bg-brand-green mr-2"></div>
                          Blauwtinten
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
                          <TooltipProvider>
                            {blueColors.map((color) => (
                              <Tooltip key={color.id}>
                                <TooltipTrigger asChild>
                                  <Card 
                                    className="hover:shadow-lg transition-all group cursor-pointer relative overflow-hidden"
                                    onClick={() => setZoomedColor(color)}
                                  >
                                    <div 
                                      className="aspect-square rounded-t-md relative group-hover:scale-105 transition-transform" 
                                      style={{ backgroundColor: color.hex }}
                                    >
                                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                        <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                                      </div>
                                    </div>
                                    <CardContent className="p-2">
                                      <h4 className="font-medium text-xs leading-tight">{color.name}</h4>
                                      <p className="text-xs text-gray-500">{color.ral_code}</p>
                                    </CardContent>
                                  </Card>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <div className="space-y-1">
                                    <p>{color.name}</p>
                                    <p className="text-xs text-gray-500">{color.hex}</p>
                                    <p className="text-xs text-gray-500">{color.ral_code}</p>
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                            ))}
                          </TooltipProvider>
                        </div>
                      </AnimatedSection>
                    )}

                    {otherColors.length > 0 && (
                      <AnimatedSection animation="fade-in" delay={400}>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <div className="w-1.5 h-6 bg-brand-green mr-2"></div>
                          Overige kleuren
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
                          <TooltipProvider>
                            {otherColors.map((color) => (
                              <Tooltip key={color.id}>
                                <TooltipTrigger asChild>
                                  <Card 
                                    className="hover:shadow-lg transition-all group cursor-pointer relative overflow-hidden"
                                    onClick={() => setZoomedColor(color)}
                                  >
                                    <div 
                                      className="aspect-square rounded-t-md relative group-hover:scale-105 transition-transform" 
                                      style={{ 
                                        backgroundColor: color.hex,
                                        boxShadow: color.hex.toLowerCase() === '#ffffff' ? 'inset 0 0 0 1px #e5e7eb' : 'none'
                                      }}
                                    >
                                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                        <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                                      </div>
                                    </div>
                                    <CardContent className="p-2">
                                      <h4 className="font-medium text-xs leading-tight">{color.name}</h4>
                                      <p className="text-xs text-gray-500">{color.ral_code}</p>
                                    </CardContent>
                                  </Card>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <div className="space-y-1">
                                    <p>{color.name}</p>
                                    <p className="text-xs text-gray-500">{color.hex}</p>
                                    <p className="text-xs text-gray-500">{color.ral_code}</p>
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                            ))}
                          </TooltipProvider>
                        </div>
                      </AnimatedSection>
                    )}
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>
        </section>
        
        <ContactCTA />
      </main>
      
      <Footer />

      <Dialog open={!!zoomedColor} onOpenChange={(open) => !open && setZoomedColor(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-brand-green" />
              {zoomedColor?.name}
            </DialogTitle>
          </DialogHeader>
          {zoomedColor && (
            <div className="space-y-4">
              <div 
                className="w-full h-64 rounded-lg border-4 border-gray-200" 
                style={{ 
                  backgroundColor: zoomedColor.hex,
                  boxShadow: zoomedColor.hex.toLowerCase() === '#ffffff' || zoomedColor.hex.toLowerCase() === '#f6f6f6' ? 'inset 0 0 0 1px #e5e7eb' : 'none'
                }}
              ></div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Naam:</span>
                  <span className="font-semibold">{zoomedColor.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">RAL Code:</span>
                  <span className="font-semibold">{zoomedColor.ral_code}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Hex:</span>
                  <span className="font-mono text-sm">{zoomedColor.hex}</span>
                </div>
                {zoomedColor.description && (
                  <div className="pt-2 border-t">
                    <p className="text-sm text-gray-600">{zoomedColor.description}</p>
                  </div>
                )}
                {zoomedColor.has_wood_texture && (
                  <Alert className="border-amber-200 bg-amber-50">
                    <Info className="h-4 w-4 text-amber-600" />
                    <AlertDescription className="text-xs text-amber-800">
                      Ook leverbaar met houtlook textuur
                    </AlertDescription>
                  </Alert>
                )}
              </div>
              <Button 
                asChild 
                className="w-full bg-brand-green hover:bg-brand-green-dark"
              >
                <Link to={`/kunststof-kozijnen/kleuren/${zoomedColor.slug}`}>
                  Meer informatie over deze kleur
                </Link>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ColorOptions;
