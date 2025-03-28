import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, 
  Palette, 
  Copy, 
  Info, 
  Home, 
  Paintbrush, 
  CheckCircle2, 
  ImageIcon, 
  Droplet, 
  PanelRight, 
  Layers 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';

interface ColorOption {
  name: string;
  hex: string;
  image?: string;
  description: string;
  category: string;
  popular?: boolean;
  ralCode?: string;
  history?: string;
  applications?: string[];
  technicalInfo?: {
    [key: string]: string;
  };
  designTips?: string[];
}

const colorData: Record<string, ColorOption> = {
  "antraciet": {
    name: "Antraciet",
    hex: "#293133",
    description: "Moderne en stijlvolle donkergrijze kleur, zeer populair bij nieuwbouw en renovaties.",
    category: "standard",
    popular: true,
    ralCode: "RAL 7016",
    history: "Antraciet is een kleur die zijn naam ontleent aan de steenkoolsoort antraciet, een type steenkool dat een hoog koolstofgehalte heeft. In de architectuur wordt de kleur al decennialang toegepast, maar kreeg vooral in de 21e eeuw grote populariteit als een moderne en stijlvolle optie voor kozijnen.",
    applications: [
      "Moderne nieuwbouwwoningen",
      "Gerenoveerde jaren '30 woningen",
      "Industriële gebouwen",
      "Zakelijke panden"
    ],
    technicalInfo: {
      "RAL": "7016",
      "RGB": "41, 49, 51",
      "CMYK": "19, 4, 0, 80",
      "HEX": "#293133",
      "Lichtreflectiewaarde": "Laag (absorbeert warmte)"
    },
    designTips: [
      "Combineer met lichte gevelmaterialen voor een sterk contrast",
      "Kies voor dezelfde kleur raamdorpels voor een eenduidige uitstraling",
      "Gebruik binnen wit of crème voor een licht interieur",
      "Combineer met zwarte dakgoten en regenpijpen voor een consistente look"
    ]
  },
  "wit": {
    name: "Wit",
    hex: "#FFFFFF", 
    description: "De klassieke en meest gekozen kleur voor kunststof kozijnen. Tijdloos en past bij elke woning.",
    category: "standard",
    popular: true,
    ralCode: "RAL 9016",
    history: "Wit is de traditionele kleur voor kozijnen, die al eeuwenlang wordt toegepast. Oorspronkelijk werd witte verf gemaakt van loodwit, wat een duurzame bescherming bood tegen weersinvloeden. In de moderne tijd is wit nog steeds de meest gekozen kleur voor kunststof kozijnen vanwege de tijdloze uitstraling en veelzijdigheid.",
    applications: [
      "Traditionele woningen",
      "Jaren '70 en '80 huizen",
      "Appartementen",
      "Landelijke woningen"
    ],
    technicalInfo: {
      "RAL": "9016",
      "RGB": "255, 255, 255",
      "CMYK": "0, 0, 0, 0",
      "HEX": "#FFFFFF",
      "Lichtreflectiewaarde": "Hoog (reflecteert warmte)"
    },
    designTips: [
      "Combineer met contrasterende raamdorpels voor een levendig effect",
      "Past bij elke gevelkleur en -materiaal",
      "Accentueer met kleurrijke voordeuren voor een persoonlijke touch",
      "Ideaal voor kleinere ramen omdat het optisch groter maakt"
    ]
  },
  "golden-oak": {
    name: "Golden Oak",
    hex: "#C19A6B",
    image: "/lovable-uploads/ab9628a0-733d-4736-833b-7a03e543c615.png",
    description: "Warme eikenhouttint met natuurlijke nerftextuur voor een klassieke uitstraling.",
    category: "woodlook",
    popular: true,
    ralCode: "Folie 2178-001",
    history: "Golden Oak is een houtlook-afwerking die de look van eikenhout nabootst. Deze afwerking werd populair in de jaren '90 toen kunststof kozijnen met houtlook een goed alternatief werden voor echte houten kozijnen. Het biedt de warme uitstraling van hout zonder het onderhoud.",
    applications: [
      "Jaren '30 woningen",
      "Landhuizen",
      "Villa's",
      "Gerenoveerde boerderijen"
    ],
    technicalInfo: {
      "Foliecode": "2178-001",
      "RGB": "193, 154, 107",
      "CMYK": "0, 20, 45, 24",
      "HEX": "#C19A6B",
      "Textuur": "Houtnerf"
    },
    designTips: [
      "Combineer met donkergroene of rode bakstenen voor een klassieke look",
      "Perfect voor landelijke en traditionele architectuur",
      "Gebruik binnen dezelfde kleur of contrasteer met wit",
      "Combineer met natuurlijke materialen zoals natuursteen raamdorpels"
    ]
  },
  "crème": {
    name: "Crème",
    hex: "#F5F5DC",
    description: "Warme, zachte kleur die perfect past bij traditionele en landelijke woningen.",
    category: "standard",
    popular: true,
    ralCode: "RAL 9001",
    history: "Crème is een zachte, warme tint die vaak wordt gebruikt in traditionale architectuur. Het is een populair alternatief voor zuiver wit, omdat het een warmere uitstraling heeft en minder gevoelig is voor zichtbaar vuil. Crème kozijnen werden vooral populair in landelijke en traditionele woningbouw.",
    applications: [
      "Landelijke woningen",
      "Jaren '30 architectuur",
      "Monumentale panden",
      "Boerderijen en buitenhuizen"
    ],
    technicalInfo: {
      "RAL": "9001",
      "RGB": "245, 245, 220",
      "CMYK": "0, 0, 10, 4",
      "HEX": "#F5F5DC",
      "Lichtreflectiewaarde": "Hoog (reflecteert warmte)"
    },
    designTips: [
      "Combineer met warme gevelkleuren zoals zandtinten en terracotta",
      "Past perfect bij traditionele architectuur",
      "Mooi in combinatie met bruine of bronskleurige accessoires",
      "Kies binnen voor dezelfde kleur voor een rustige uitstraling"
    ]
  },
  "monumentengroen": {
    name: "Monumentengroen",
    hex: "#2D5E40",
    description: "Traditionele groentint die goed past bij klassieke woningen en landhuizen.",
    category: "standard",
    ralCode: "RAL 6009",
    history: "Monumentengroen is een historische kleur die veel werd toegepast in de 19e en vroeg 20e eeuw. De kleur werd populair voor kozijnen, deuren en andere architectonische elementen omdat het minder snel vervaagde dan andere pigmenten. Bij monumentale panden wordt deze kleur nog steeds vaak voorgeschreven door erfgoedcommissies.",
    applications: [
      "Monumentale panden",
      "Herenhuizen",
      "Landhuizen",
      "Karakteristieke jaren '20 en '30 woningen"
    ],
    technicalInfo: {
      "RAL": "6009",
      "RGB": "45, 94, 64",
      "CMYK": "52, 0, 32, 63",
      "HEX": "#2D5E40",
      "Lichtreflectiewaarde": "Gemiddeld"
    },
    designTips: [
      "Combineer met crème of wit metselwerk voor een klassiek contrast",
      "Perfect voor woningen met veel groen eromheen",
      "Binnen contrasteren met crème voor een tijdloze uitstraling",
      "Combineer met koperen of messing accessoires voor een traditionele look"
    ]
  }
};

const getRelatedColors = (currentColor: ColorOption) => {
  const allColors = Object.values(colorData);
  
  const sameCategory = allColors.filter(color => 
    color.category === currentColor.category && color.name !== currentColor.name
  ).slice(0, 3);
  
  const popularColors = !currentColor.popular ? 
    allColors.filter(color => color.popular && color.name !== currentColor.name).slice(0, 2) : [];
  
  const relatedColors = [...sameCategory];
  
  popularColors.forEach(color => {
    if (!relatedColors.some(c => c.name === color.name)) {
      relatedColors.push(color);
    }
  });
  
  return relatedColors.slice(0, 4);
};

const getComplementaryColors = (hex: string): string[] => {
  hex = hex.replace(/^#/, '');
  
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  
  const compR = 255 - r;
  const compG = 255 - g;
  const compB = 255 - b;
  
  const compHex = `#${((1 << 24) + (compR << 16) + (compG << 8) + compB).toString(16).slice(1)}`;
  
  const hsl = rgbToHsl(r, g, b);
  const analogous1 = hslToHex((hsl[0] + 30) % 360, hsl[1], hsl[2]);
  const analogous2 = hslToHex((hsl[0] + 330) % 360, hsl[1], hsl[2]);
  
  return [compHex, analogous1, analogous2];
};

const rgbToHsl = (r: number, g: number, b: number): [number, number, number] => {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s, l = (max + min) / 2;
  
  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    
    h /= 6;
  }
  
  return [h * 360, s, l];
};

const hslToHex = (h: number, s: number, l: number): string => {
  h /= 360;
  let r, g, b;
  
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  
  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const ColorDetail: React.FC = () => {
  const { colorSlug } = useParams<{ colorSlug: string }>();
  
  const colorKey = colorSlug?.replace(/-/g, ' ').toLowerCase();
  const colorInfo = Object.values(colorData).find(
    color => color.name.toLowerCase() === colorKey
  ) || colorData["antraciet"];
  
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} gekopieerd!`);
  };
  
  const relatedColors = getRelatedColors(colorInfo);
  const complementaryColors = getComplementaryColors(colorInfo.hex);
  
  return (
    <>
      <Helmet>
        <title>{colorInfo.name} voor Kunststof Kozijnen | Kleurinformatie</title>
        <meta name="description" content={`Alles over ${colorInfo.name} als kleur voor uw kunststof kozijnen. Bekijk specificaties, toepassingen en combinatiemogelijkheden.`} />
      </Helmet>
      
      <Navbar />
      
      <main>
        <section className="pt-32 pb-20" style={{
          background: `linear-gradient(135deg, ${colorInfo.hex}, ${colorInfo.hex}dd)`,
          color: parseInt(colorInfo.hex.replace('#', ''), 16) > 0xffffff / 2 ? '#000' : '#fff'
        }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-7/12">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mb-4 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  onClick={() => window.history.back()}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Terug naar kleuren
                </Button>
                
                <AnimatedSection animation="fade-in">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {colorInfo.name} voor kunststof kozijnen
                  </h1>
                  <p className="text-xl md:text-2xl max-w-3xl mb-6">
                    {colorInfo.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    <Button 
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      onClick={() => copyToClipboard(colorInfo.hex, "Kleurcode")}
                    >
                      <Palette className="h-4 w-4 mr-2" />
                      {colorInfo.hex}
                      <Copy className="h-3.5 w-3.5 ml-2 opacity-70" />
                    </Button>
                    
                    {colorInfo.ralCode && (
                      <Button 
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        onClick={() => copyToClipboard(colorInfo.ralCode || "", "RAL code")}
                      >
                        <Info className="h-4 w-4 mr-2" />
                        {colorInfo.ralCode}
                        <Copy className="h-3.5 w-3.5 ml-2 opacity-70" />
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-white text-black hover:bg-white/90">
                      <Home className="h-4 w-4 mr-2" />
                      Offerte aanvragen
                    </Button>
                    <Button variant="outline" className="border-white/70 hover:bg-white/20">
                      <Paintbrush className="h-4 w-4 mr-2" />
                      Kleuradvies
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="md:w-5/12">
                <AnimatedSection animation="fade-in" delay={100}>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <div className="p-1 bg-white/10 backdrop-blur-sm">
                      <Tabs defaultValue="preview" className="w-full">
                        <TabsList className="w-full bg-white/20 mb-1">
                          <TabsTrigger value="preview" className="flex-1">Voorbeeld</TabsTrigger>
                          <TabsTrigger value="combinations" className="flex-1">Combinaties</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="preview" className="m-0">
                          <div className="bg-white rounded p-4">
                            <div className="aspect-video bg-cover bg-center rounded overflow-hidden relative" 
                                 style={{ 
                                   backgroundImage: colorInfo.image 
                                     ? `url(${colorInfo.image})`
                                     : 'none',
                                   backgroundColor: colorInfo.hex
                                 }}>
                              <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm text-black text-xs px-2 py-1 rounded">
                                {colorInfo.name} • {colorInfo.ralCode || colorInfo.hex}
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3 mt-3">
                              <div className="aspect-[4/3] rounded border border-gray-200 overflow-hidden relative">
                                <img 
                                  src="/lovable-uploads/e923780c-9e14-408a-a016-0b63db9b8daa.png" 
                                  alt="Kozijn voorbeeld" 
                                  className="object-cover h-full w-full"
                                />
                                <div 
                                  className="absolute inset-0 mix-blend-multiply"
                                  style={{ 
                                    backgroundColor: colorInfo.image 
                                      ? 'transparent' 
                                      : colorInfo.hex,
                                    backgroundImage: colorInfo.image 
                                      ? `url(${colorInfo.image})` 
                                      : 'none',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    opacity: colorInfo.image ? 0.95 : 0.8
                                  }}
                                ></div>
                              </div>
                              <div className="aspect-[4/3] rounded border border-gray-200 overflow-hidden relative">
                                <img 
                                  src="/lovable-uploads/73d57948-a36b-408e-bb8c-aad91f4b7495.png" 
                                  alt="Kozijn voorbeeld" 
                                  className="object-cover h-full w-full"
                                />
                                <div 
                                  className="absolute inset-0 mix-blend-multiply"
                                  style={{ 
                                    backgroundColor: colorInfo.image 
                                      ? 'transparent' 
                                      : colorInfo.hex,
                                    backgroundImage: colorInfo.image 
                                      ? `url(${colorInfo.image})` 
                                      : 'none',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    opacity: colorInfo.image ? 0.95 : 0.8
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="combinations" className="m-0">
                          <div className="bg-white rounded p-4">
                            <h4 className="font-medium text-black mb-3">Kleurcombinaties</h4>
                            
                            <div className="space-y-3">
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Complementair</p>
                                <div className="flex h-12 rounded-md overflow-hidden">
                                  <div className="w-full" style={{ backgroundColor: colorInfo.hex }}></div>
                                  <div className="w-full" style={{ backgroundColor: complementaryColors[0] }}></div>
                                </div>
                              </div>
                              
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Analoog</p>
                                <div className="flex h-12 rounded-md overflow-hidden">
                                  <div className="w-full" style={{ backgroundColor: complementaryColors[1] }}></div>
                                  <div className="w-full" style={{ backgroundColor: colorInfo.hex }}></div>
                                  <div className="w-full" style={{ backgroundColor: complementaryColors[2] }}></div>
                                </div>
                              </div>
                              
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Populaire binnen/buiten combinatie</p>
                                <div className="flex h-12 rounded-md overflow-hidden">
                                  <div className="w-full h-full relative" style={{ 
                                    backgroundColor: colorInfo.hex,
                                    backgroundImage: colorInfo.image ? `url(${colorInfo.image})` : 'none',
                                    backgroundSize: 'cover'
                                  }}>
                                    <span className="absolute bottom-1 left-2 text-[10px] text-white">Buiten</span>
                                  </div>
                                  <div className="w-full h-full relative bg-white">
                                    <span className="absolute bottom-1 right-2 text-[10px] text-gray-700">Binnen</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <AnimatedSection animation="fade-in">
                  <h2 className="text-2xl font-bold mb-4">Over {colorInfo.name}</h2>
                  <div className="prose max-w-none">
                    <p>{colorInfo.history}</p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={100}>
                  <h3 className="text-xl font-semibold mb-4">Toepassingen</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {colorInfo.applications?.map((application, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                        <CheckCircle2 className="h-5 w-5 text-brand-green shrink-0" />
                        <span>{application}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={150}>
                  <h3 className="text-xl font-semibold mb-4">Design tips</h3>
                  <div className="space-y-3">
                    {colorInfo.designTips?.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1">
                          <Paintbrush className="h-4 w-4 text-brand-green" />
                        </div>
                        <p>{tip}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={200}>
                  <h3 className="text-xl font-semibold mb-4">Gerelateerde kleuren</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {relatedColors.map((color, index) => (
                      <Link 
                        key={index} 
                        to={`/kunststof-kozijnen/kleuren/${color.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="group"
                      >
                        <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                          <div 
                            className="h-24" 
                            style={{ 
                              backgroundColor: color.hex,
                              backgroundImage: color.image ? `url(${color.image})` : 'none',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              border: color.hex === '#FFFFFF' ? '1px solid #e5e7eb' : 'none' 
                            }}
                          ></div>
                          <CardContent className="p-3">
                            <h4 className="font-medium text-sm mb-1 group-hover:text-brand-green transition-colors">{color.name}</h4>
                            <p className="text-xs text-gray-500">{color.ralCode || color.hex}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="space-y-6">
                <AnimatedSection animation="fade-in" delay={250}>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <ImageIcon className="h-5 w-5 mr-2 text-brand-green" />
                        {colorInfo.name} in beeld
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="aspect-video rounded-md overflow-hidden">
                          <div 
                            className="w-full h-full bg-cover bg-center"
                            style={{
                              backgroundColor: colorInfo.hex,
                              backgroundImage: colorInfo.image ? `url(${colorInfo.image})` : 'none',
                              backgroundSize: 'cover'
                            }}
                          ></div>
                        </div>
                        
                        <Button variant="outline" className="w-full">
                          Bekijk {colorInfo.name} projecten
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={300}>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Info className="h-5 w-5 mr-2 text-brand-green" />
                        Technische informatie
                      </h3>
                      
                      <div className="space-y-3">
                        {Object.entries(colorInfo.technicalInfo || {}).map(([key, value], index) => (
                          <div key={index} className="flex justify-between text-sm border-b border-gray-100 pb-2">
                            <span className="text-gray-500">{key}</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                        
                        <Separator className="my-4" />
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium">Onderhoud</h4>
                          <p className="text-sm text-gray-600">
                            Kunststof kozijnen in {colorInfo.name} zijn onderhoudsvriendelijk. 
                            Regelmatig afnemen met water en een mild reinigingsmiddel is voldoende 
                            om ze in optimale conditie te houden.
                          </p>
                          
                          <h4 className="text-sm font-medium mt-3">Garantie</h4>
                          <p className="text-sm text-gray-600">
                            Op de kleurechtheid van {colorInfo.name} kunststof kozijnen geldt een garantie 
                            van 10 jaar bij normale weersomstandigheden.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={350}>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <PanelRight className="h-5 w-5 mr-2 text-brand-green" />
                        Offerte aanvragen
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-4">
                        Bent u geïnteresseerd in {colorInfo.name} kozijnen voor uw woning? 
                        Vraag vrijblijvend een offerte aan of maak een afspraak voor kleuradvies.
                      </p>
                      
                      <div className="space-y-3">
                        <Button className="w-full bg-brand-green hover:bg-brand-green-dark">
                          Offerte aanvragen
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Palette className="h-4 w-4 mr-2" />
                          Kleuradvies
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-2xl font-bold mb-4">Veelgestelde vragen over {colorInfo.name} kozijnen</h2>
                <p className="text-gray-600">Antwoorden op de meest voorkomende vragen over {colorInfo.name} als kleur voor kunststof kozijnen</p>
              </div>
            </AnimatedSection>
            
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <AnimatedSection animation="fade-in" delay={100}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold">Is {colorInfo.name} duurder dan standaard wit?</h3>
                        <p className="text-gray-600">
                          {colorInfo.name === "Wit" 
                            ? "Witte kozijnen zijn de standaard en meestal het meest voordelig. Andere kleuren zoals antraciet, monumentengroen of houtlook opties zijn meestal duurder."
                            : `Ja, ${colorInfo.name} kozijnen zijn meestal iets duurder dan standaard witte kozijnen. De exacte meerprijs hangt af van het gekozen profielsysteem en de specifieke uitvoering.`
                          }
                        </p>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-2">
                        <h3 className="font-semibold">Hoe lang gaat de kleur {colorInfo.name} mee?</h3>
                        <p className="text-gray-600">
                          {colorInfo.name} kunststof kozijnen zijn zeer kleurvast. Bij normaal gebruik en weersomstandigheden blijft de kleur minimaal 10 jaar mooi. De UV-bestendige toplaag zorgt voor langdurige bescherming tegen verkleuring.
                        </p>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-2">
                        <h3 className="font-semibold">Kan ik {colorInfo.name} voor zowel binnen- als buitenzijde kiezen?</h3>
                        <p className="text-gray-600">
                          Ja, u kunt kiezen voor {colorInfo.name} aan zowel de binnen- als buitenzijde. Het is ook mogelijk om voor verschillende kleuren te kiezen, bijvoorbeeld {colorInfo.name} buiten en wit binnen. Dit wordt tweekleurige uitvoering genoemd.
                        </p>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-2">
                        <h3 className="font-semibold">Past {colorInfo.name} bij mijn type woning?</h3>
                        <p className="text-gray-600">
                          {colorInfo.name === "Wit" && "Wit past bij vrijwel elk type woning en architectuurstijl. Het is een tijdloze keuze die nooit uit de mode raakt."}
                          {colorInfo.name === "Antraciet" && "Antraciet past uitstekend bij moderne woningen en gerenoveerde jaren '30 huizen. Het geeft een strakke, eigentijdse uitstraling."}
                          {colorInfo.name === "Golden Oak" && "Golden Oak past goed bij traditionele en landelijke woningen, zoals jaren '30 architectuur, villa's en gerenoveerde boerderijen."}
                          {colorInfo.name === "Crème" && "Crème past uitstekend bij landelijke en traditionele woningen, zoals boerderijen en jaren '30 architectuur."}
                          {colorInfo.name === "Monumentengroen" && "Monumentengroen past perfect bij historische panden, herenhuizen en klassieke architectuur. Het is vaak voorgeschreven bij monumentale gebouwen."}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-2xl font-bold mb-4">Vergelijkbare projecten met {colorInfo.name} kozijnen</h2>
                <p className="text-gray-600">Bekijk deze inspirerende projecten waarin {colorInfo.name} kozijnen zijn toegepast</p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedSection animation="fade-in" delay={100}>
                <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ 
                        backgroundImage: `url('/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png')`,
                      }}
                    >
                      <div 
                        className="absolute inset-0 mix-blend-multiply"
                        style={{ 
                          backgroundColor: colorInfo.image ? 'transparent' : colorInfo.hex,
                          backgroundImage: colorInfo.image ? `url(${colorInfo.image})` : 'none',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          opacity: colorInfo.image ? 0.9 : 0.7
                        }}
                      ></div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-1">Renovatie jaren '30 woning</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Volledig vervangen van houten kozijnen door {colorInfo.name} kunststof kozijnen
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Layers className="h-3.5 w-3.5 mr-1" />
                      Project bekijken
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={150}>
                <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ 
                        backgroundImage: `url('/lovable-uploads/c5500638-e554-4499-8490-7c52a4ec2a55.png')`,
                      }}
                    >
                      <div 
                        className="absolute inset-0 mix-blend-multiply"
                        style={{ 
                          backgroundColor: colorInfo.image ? 'transparent' : colorInfo.hex,
                          backgroundImage: colorInfo.image ? `url(${colorInfo.image})` : 'none',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          opacity: colorInfo.image ? 0.9 : 0.7
                        }}
                      ></div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-1">Nieuwbouw villa</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Modern ontwerp met {colorInfo.name} kozijnen voor optimale isolatie
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Layers className="h-3.5 w-3.5 mr-1" />
                      Project bekijken
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={200}>
                <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ 
                        backgroundImage: `url('/lovable-uploads/16c4e987-ea24-4f28-adf8-f1e4a100cc98.png')`,
                      }}
                    >
                      <div 
                        className="absolute inset-0 mix-blend-multiply"
                        style={{ 
                          backgroundColor: colorInfo.image ? 'transparent' : colorInfo.hex,
                          backgroundImage: colorInfo.image ? `url(${colorInfo.image})` : 'none',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          opacity: colorInfo.image ? 0.9 : 0.7
                        }}
                      ></div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-1">Verduurzaming jaren '70 woning</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Energiebesparing door vervanging van oude kozijnen met {colorInfo.name} kunststof kozijnen
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Layers className="h-3.5 w-3.5 mr-1" />
                      Project bekijken
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        <ContactCTA />
      </main>
      
      <Footer />
    </>
  );
};

export default ColorDetail;
