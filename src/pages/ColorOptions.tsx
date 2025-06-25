
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Palette, Check, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';
import SubpageTemplate from '@/components/templates/SubpageTemplate';

interface ColorOption {
  name: string;
  hex: string;
  ralCode?: string;
  image?: string;
  description: string;
  category: 'standard' | 'woodlook' | 'premium';
  popular?: boolean;
}

const colorOptions: ColorOption[] = [
  {
    name: "Wit",
    hex: "#FFFFFF",
    ralCode: "RAL 9016",
    description: "De klassieke en meest gekozen kleur voor kunststof kozijnen. Tijdloos en past bij elke woning.",
    category: "standard",
    popular: true
  },
  {
    name: "Antraciet",
    hex: "#293133",
    ralCode: "RAL 7016",
    description: "Moderne en stijlvolle donkergrijze kleur, zeer populair bij nieuwbouw en renovaties.",
    category: "standard",
    popular: true
  },
  {
    name: "Crème",
    hex: "#F5F5DC",
    ralCode: "RAL 9001",
    description: "Warme, zachte kleur die perfect past bij traditionele en landelijke woningen.",
    category: "standard"
  },
  {
    name: "Golden Oak",
    hex: "#C19A6B",
    image: "/lovable-uploads/ab9628a0-733d-4736-833b-7a03e543c615.png",
    description: "Warme eikenhouttint met natuurlijke nerftextuur voor een klassieke uitstraling.",
    category: "woodlook",
    popular: true
  },
  {
    name: "Donker Eiken",
    hex: "#8B4513",
    description: "Rijk donkere houttint voor een luxe en elegante uitstraling.",
    category: "woodlook"
  },
  {
    name: "Mahonie",
    hex: "#C04000",
    description: "Warme roodbruine houttint die warmte en karakter uitstraalt.",
    category: "woodlook"
  },
  {
    name: "Monumentengroen",
    hex: "#2D5E40",
    ralCode: "RAL 6009",
    description: "Traditionele groentint die goed past bij klassieke woningen en landhuizen.",
    category: "standard"
  },
  {
    name: "Basalt Grijs",
    hex: "#4A4A4A",
    ralCode: "RAL 7012",
    description: "Elegant middel grijs voor een moderne en neutrale uitstraling.",
    category: "standard"
  },
  {
    name: "Verkeerswit",
    hex: "#F5F5F5",
    ralCode: "RAL 9016",
    description: "Helder wit met een licht grijze ondertoon voor een frisse uitstraling.",
    category: "standard"
  },
  {
    name: "Winchester",
    hex: "#8B7355",
    description: "Sophisticate grijsbruine tint geïnspireerd op engelste landhuizen.",
    category: "premium"
  },
  {
    name: "Nussbaum",
    hex: "#6B4423",
    description: "Rijke notenhout-look voor een luxe en exclusieve uitstraling.",
    category: "woodlook"
  },
  {
    name: "Zwart",
    hex: "#1C1C1C",
    ralCode: "RAL 9004",
    description: "Moderne zwarte kleur voor een strakke en minimalistische uitstraling.",
    category: "standard"
  }
];

const categories = [
  { key: 'all', label: 'Alle kleuren', count: colorOptions.length },
  { key: 'standard', label: 'Standaard kleuren', count: colorOptions.filter(c => c.category === 'standard').length },
  { key: 'woodlook', label: 'Houtlook', count: colorOptions.filter(c => c.category === 'woodlook').length },
  { key: 'premium', label: 'Premium kleuren', count: colorOptions.filter(c => c.category === 'premium').length }
];

const ColorOptions: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [previewColor, setPreviewColor] = React.useState<ColorOption | null>(null);

  const filteredColors = selectedCategory === 'all' 
    ? colorOptions 
    : colorOptions.filter(color => color.category === selectedCategory);

  const popularColors = colorOptions.filter(color => color.popular);

  return (
    <>
      <Helmet>
        <title>Kleuropties voor Kunststof Kozijnen | Uitgebreid Kleurenoverzicht</title>
        <meta 
          name="description" 
          content="Ontdek alle beschikbare kleuren voor kunststof kozijnen. Van klassiek wit tot moderne antraciet en warme houtlook opties. Bekijk RAL-codes en vraag gratis kleuradvies aan." 
        />
        <meta name="keywords" content="kunststof kozijnen kleuren, RAL kleuren kozijnen, antraciet kozijnen, witte kozijnen, houtlook kozijnen, kleuradvies" />
        <link rel="canonical" href="https://www.example.com/kunststof-kozijnen/kleuren" />
      </Helmet>
      
      <SubpageTemplate
        title="Kleuropties voor Kunststof Kozijnen"
        subtitle="Ontdek de perfecte kleur voor uw kozijnen"
        description="Van klassiek wit tot moderne antraciet en warme houtlook opties - wij hebben de perfecte kleur voor elke woning en smaak."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Kunststof Kozijnen', href: '/kunststof-kozijnen' },
          { label: 'Kleuren', href: '/kunststof-kozijnen/kleuren' }
        ]}
        features={[
          'Uitgebreid kleurenoverzicht',
          'RAL-codes beschikbaar',
          'Gratis kleuradvies',
          'Voor binnen en buiten'
        ]}
      >
        {/* Populaire kleuren sectie */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">Populaire kleurkeuzes</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Deze kleuren worden het vaakst gekozen door onze klanten voor hun kunststof kozijnen
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {popularColors.map((color, index) => (
                <AnimatedSection key={color.name} animation="fade-in" delay={index * 100}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div 
                      className="h-32 relative"
                      style={{ 
                        backgroundColor: color.hex,
                        backgroundImage: color.image ? `url(${color.image})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: color.hex === '#FFFFFF' ? '1px solid #e5e7eb' : 'none'
                      }}
                    >
                      <div className="absolute top-2 right-2">
                        <span className="bg-brand-green text-white text-xs px-2 py-1 rounded-full">
                          Populair
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{color.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500">
                          {color.ralCode || color.hex}
                        </span>
                        <div 
                          className="w-4 h-4 rounded border border-gray-200"
                          style={{ backgroundColor: color.hex }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{color.description}</p>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => setPreviewColor(color)}
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Kleurfilters */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Alle beschikbare kleuren</h2>
                <p className="text-gray-600">
                  Filter op categorie om de perfecte kleur voor uw kozijnen te vinden
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={100}>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category.key}
                    variant={selectedCategory === category.key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.key)}
                    className="mb-2"
                  >
                    <Palette className="h-3 w-3 mr-1" />
                    {category.label} ({category.count})
                  </Button>
                ))}
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredColors.map((color, index) => (
                <AnimatedSection key={color.name} animation="fade-in" delay={index * 50}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div 
                      className="h-24 relative"
                      style={{ 
                        backgroundColor: color.hex,
                        backgroundImage: color.image ? `url(${color.image})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: color.hex === '#FFFFFF' ? '1px solid #e5e7eb' : 'none'
                      }}
                    >
                      {color.popular && (
                        <div className="absolute top-2 right-2">
                          <span className="bg-brand-green text-white text-xs px-2 py-1 rounded-full">
                            Populair
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{color.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500">
                          {color.ralCode || color.hex}
                        </span>
                        <div 
                          className="w-3 h-3 rounded border border-gray-200"
                          style={{ backgroundColor: color.hex }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-600 mb-3">{color.description}</p>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => setPreviewColor(color)}
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        Preview
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Kleuradvies sectie */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-brand-green to-brand-green-dark rounded-lg p-8 text-white text-center">
              <AnimatedSection animation="fade-in">
                <h2 className="text-2xl font-bold mb-4">Gratis kleuradvies</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Twijfelt u over de beste kleurkeuze voor uw woning? Onze kleurspecialisten helpen u graag 
                  bij het maken van de perfecte keuze die past bij uw woning en persoonlijke smaak.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Persoonlijk advies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Kleurstalen op locatie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Digitale voorbeelden</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-brand-green hover:bg-gray-100">
                    Kleuradvies aanvragen
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    <Palette className="h-4 w-4 mr-2" />
                    Offerte met kleur
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <ContactCTA />
      </SubpageTemplate>

      {/* Preview Modal */}
      {previewColor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{previewColor.name}</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setPreviewColor(null)}
                >
                  ✕
                </Button>
              </div>
              
              <div 
                className="h-48 rounded-lg mb-4"
                style={{ 
                  backgroundColor: previewColor.hex,
                  backgroundImage: previewColor.image ? `url(${previewColor.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: previewColor.hex === '#FFFFFF' ? '1px solid #e5e7eb' : 'none'
                }}
              ></div>
              
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-500">Kleurcode:</span>
                  <span className="ml-2 font-medium">{previewColor.ralCode || previewColor.hex}</span>
                </div>
                
                <div>
                  <span className="text-sm text-gray-500">Categorie:</span>
                  <span className="ml-2 font-medium capitalize">{previewColor.category}</span>
                </div>
                
                <p className="text-gray-600">{previewColor.description}</p>
                
                <div className="flex gap-2 pt-4">
                  <Button className="flex-1">
                    Offerte aanvragen
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Meer info
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ColorOptions;
