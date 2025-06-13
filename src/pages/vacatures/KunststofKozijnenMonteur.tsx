
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Users, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const KunststofKozijnenMonteur: React.FC = () => {
  const requirements = [
    'Ervaring als 1e/2e monteur',
    'Representatief uiterlijk',
    'Klantvriendelijk',
    'Rijbewijs B',
    'Rijbewijs E (of bereid deze te halen)',
    'Doorzetter',
    'Actieve werkhouding'
  ];

  const benefits = [
    'Goed salaris',
    'Werkgebied maximaal 1,5 uur rondom Enschede',
    'Goede secundaire arbeidsvoorwaarden',
    'Werken met de beste gereedschappen, materialen en rijden in jonge werkbussen',
    'Vakantiedagen en vaste vrije dagen',
    'Pensioen regeling'
  ];

  return (
    <>
      <Helmet>
        <title>Kunststof Kozijnen Monteur | Vacatures | Duurzaam Wonen Nederland</title>
        <meta 
          name="description" 
          content="Gezocht: 1e en/of 2e monteur voor het plaatsen van kunststofkozijnen, gevelbekleding en dakkapellen bij Duurzaam Wonen Nederland."
        />
      </Helmet>
      
      <Navbar />
      
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="mb-8">
              <Link 
                to="/vacatures" 
                className="inline-flex items-center text-brand-green hover:text-brand-green-dark transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Terug naar vacatures
              </Link>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-brand-green text-white p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Users className="h-8 w-8" />
                    </div>
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold">Kunststof Kozijnen Monteur</h1>
                      <p className="text-xl opacity-90">1e en/of 2e Monteur</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Enschede (max 1,5 uur rondom)</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Fulltime</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Montage team</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold text-red-800 mb-4">📢📢📢GEZOCHT 1e en/of 2e MONTEUR📢📢📢</h2>
                    <p className="text-gray-700 text-lg">
                      Door de enorme groei van ons bedrijf zijn wij van Duurzaam Wonen Nederland WEDEROM opzoek naar een 
                      1e monteur en/of 2e monteur (met ervaring) in het plaatsen van kunststofkozijnen, gevelbekleding en dakkapellen.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Waar kom je te werken?</h3>
                      <p className="text-gray-700 mb-6">
                        Bij een gerenomeerd en snel groeiend bedrijf binnen de kunststof wereld waar kwaliteit altijd boven kwantiteit staat.
                      </p>

                      <h3 className="text-xl font-bold mb-4">Waar zijn wij naar opzoek?</h3>
                      <p className="text-gray-700 mb-6">
                        Een 1e en 2e monteur die ervaring hebben in het plaatsen van kunststofkozijnen. Iemand die denkt in oplossingen 
                        en niet in problemen. Iemand die in teamverband goed kan werken en samen met zijn collega onze projecten in goede 
                        banen leidt en naar onze visie de klussen volbrengt.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Functie eisen:</h3>
                      <ul className="space-y-2 mb-6">
                        {requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Wat wij te bieden hebben:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <span className="text-brand-green mr-2">➡️</span>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Interesse gewekt?</h3>
                    <p className="text-gray-700 mb-6">
                      Denk jij dat je bij ons bedrijf past? Nieuwsgierig geworden? Neem dan zo snel mogelijk contact met ons op!
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button asChild className="bg-brand-green hover:bg-brand-green-dark">
                        <a href="mailto:kantoor@duurzaamwonen.info?subject=Sollicitatie Kunststof Kozijnen Monteur">
                          <Mail className="h-4 w-4 mr-2" />
                          Email CV
                        </a>
                      </Button>
                      
                      <Button asChild variant="outline">
                        <a href="tel:0533030213">
                          <Phone className="h-4 w-4 mr-2" />
                          053 303 0213
                        </a>
                      </Button>
                      
                      <Button asChild variant="outline">
                        <a href="https://wa.me/31619774427" target="_blank" rel="noopener noreferrer">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default KunststofKozijnenMonteur;
