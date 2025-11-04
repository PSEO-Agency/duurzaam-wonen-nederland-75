import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, 
  Palette, 
  Copy, 
  Info, 
  Home, 
  Paintbrush
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';
import { useColorBySlug } from '@/hooks/useColors';

const ColorDetail: React.FC = () => {
  const { colorSlug } = useParams<{ colorSlug: string }>();
  const { data: colorInfo, isLoading, error } = useColorBySlug(colorSlug || '');
  
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} gekopieerd!`);
  };
  
  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-green mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Kleurinformatie laden...</p>
          </div>
        </div>
      </>
    );
  }

  if (error || !colorInfo) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Kleur niet gevonden</h1>
            <p className="text-gray-600 mb-6">De gevraagde kleur bestaat niet of is niet beschikbaar.</p>
            <Button asChild>
              <Link to="/kunststof-kozijnen/kleuren">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Terug naar kleuren
              </Link>
            </Button>
          </div>
        </div>
      </>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{colorInfo.name} voor Kunststof Kozijnen | Kleurinformatie</title>
        <meta name="description" content={`Alles over ${colorInfo.name} (${colorInfo.ral_code}) als kleur voor uw kunststof kozijnen. Bekijk specificaties en combinatiemogelijkheden.`} />
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
                  asChild
                >
                  <Link to="/kunststof-kozijnen/kleuren">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Terug naar kleuren
                  </Link>
                </Button>
                
                <AnimatedSection animation="fade-in">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {colorInfo.name} voor kunststof kozijnen
                  </h1>
                  <p className="text-xl md:text-2xl max-w-3xl mb-6">
                    {colorInfo.description || `Bekijk alle details over ${colorInfo.name} als kleur voor uw kunststof kozijnen.`}
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
                    
                    <Button 
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      onClick={() => copyToClipboard(colorInfo.ral_code, "RAL code")}
                    >
                      <Info className="h-4 w-4 mr-2" />
                      {colorInfo.ral_code}
                      <Copy className="h-3.5 w-3.5 ml-2 opacity-70" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-white text-black hover:bg-white/90" asChild>
                      <Link to="/offerte">
                        <Home className="h-4 w-4 mr-2" />
                        Offerte aanvragen
                      </Link>
                    </Button>
                    <Button variant="outline" className="border-white/70 hover:bg-white/20" asChild>
                      <Link to="/offerte">
                        <Paintbrush className="h-4 w-4 mr-2" />
                        Kleuradvies
                      </Link>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="md:w-5/12">
                <AnimatedSection animation="fade-in" delay={100}>
                  <div className="rounded-lg overflow-hidden shadow-lg bg-white p-4">
                    <div className="aspect-video bg-cover bg-center rounded overflow-hidden" 
                         style={{ backgroundColor: colorInfo.hex }}>
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center p-6">
                          <div 
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                            style={{ backgroundColor: colorInfo.hex }}
                          ></div>
                          <p className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded">
                            {colorInfo.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Kleurdetails</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Specificaties</h3>
                    <dl className="space-y-2">
                      <div className="flex justify-between">
                        <dt className="text-gray-600">RAL Code:</dt>
                        <dd className="font-medium">{colorInfo.ral_code}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">HEX Code:</dt>
                        <dd className="font-medium">{colorInfo.hex}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Categorie:</dt>
                        <dd className="font-medium capitalize">{colorInfo.category}</dd>
                      </div>
                      {colorInfo.has_wood_texture && (
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Textuur:</dt>
                          <dd className="font-medium">Houtnerfstructuur</dd>
                        </div>
                      )}
                    </dl>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Beschikbaarheid</h3>
                    <p className="text-gray-700">
                      Deze kleur is beschikbaar voor alle kunststof kozijnen in ons assortiment. 
                      U kunt binnen en buiten verschillende kleuren kiezen voor een unieke uitstraling.
                    </p>
                  </div>
                </div>

                {colorInfo.has_wood_texture && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold mb-2 text-blue-900">Houtnerfstructuur</h3>
                    <p className="text-blue-800">
                      Wit en crème kleuren aan de buitenzijde worden automatisch voorzien van een houtnerfstructuur 
                      voor een natuurlijke en hoogwaardige uitstraling.
                    </p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <ContactCTA />
      </main>
      
      <Footer />
    </>
  );
};

export default ColorDetail;
