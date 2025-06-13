
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Users, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const CommercieeelMedewerker: React.FC = () => {
  const requirements = [
    'Klantvriendelijk',
    'Representatief uiterlijk',
    'Actieve werkhouding',
    'Leergierig',
    'Doorzettingsvermogen',
    'In het bezit van een rijbewijs'
  ];

  const benefits = [
    'Marktconform basissalaris',
    'Goede provisie regeling',
    'Flexibele werktijden',
    'Weekenden en feestdagen vrij',
    'Vakantie uren die zelf in te plannen zijn',
    'Auto van de zaak (bij fulltime dienstverband)'
  ];

  return (
    <>
      <Helmet>
        <title>Commercieel medewerker | Vacatures | Duurzaam Wonen Nederland</title>
        <meta 
          name="description" 
          content="Gezocht: commercieel talent voor ons colportage team. Parttime/fulltime 24-40 uur per week bij Duurzaam Wonen Nederland."
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
                      <h1 className="text-3xl md:text-4xl font-bold">Commercieel medewerker</h1>
                      <p className="text-xl opacity-90">Commercieel talent</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Enschede (max 1,5 uur rondom)</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Parttime/Fulltime (24-40 uur)</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Colportage team</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">📢📢📢📢📢</h2>
                    <p className="text-gray-700 text-lg">
                      Wij van Duurzaam Wonen Nederland zijn opzoek naar nieuwe collega's! (Parttime/fulltime 24-40 uur per week).
                    </p>
                    <p className="text-gray-700 text-lg mt-4">
                      Ben jij een (potentieel) commercieel talent dan zijn wij opzoek naar jou om ons colportage team te komen versterken.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Wat zijn de werkzaamheden?</h3>
                      <p className="text-gray-700 mb-6">
                        Het aan de deur maken van afspraken voor onze adviseurs.
                      </p>
                      <p className="text-gray-700 mb-6">
                        Ons werkgebied is 1,5 uur rond om Enschede. De heen en terug reis is al inbegrepen in de werk uren!
                      </p>

                      <h3 className="text-xl font-bold mb-4">Waar kom je te werken?</h3>
                      <p className="text-gray-700 mb-6">
                        Bij een gerenomeerd, snel groeiend en gezellig bedrijf!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Wat wij verwachten:</h3>
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
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Interesse gewekt?</h3>
                    <p className="text-gray-700 mb-6">
                      Of zou je liever eens op proef mee willen draaien met ons colportage team? Alles is mogelijk!
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button asChild className="bg-brand-green hover:bg-brand-green-dark">
                        <a href="mailto:kantoor@duurzaamwonen.info?subject=Sollicitatie Commercieel medewerker">
                          <Mail className="h-4 w-4 mr-2" />
                          Stuur CV en motivatie
                        </a>
                      </Button>
                      
                      <Button asChild variant="outline">
                        <a href="https://wa.me/31619774427" target="_blank" rel="noopener noreferrer">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          WhatsApp/Bel: 06 19774427
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

export default CommercieeelMedewerker;
