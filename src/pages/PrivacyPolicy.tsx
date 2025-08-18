
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacybeleid - Duurzaam Wonen Nederland</title>
        <meta name="description" content="Lees ons privacybeleid om te begrijpen hoe we uw persoonlijke gegevens verwerken en beschermen." />
        <meta name="google-site-verification" content="wctWfdTl0t8aKSX4NrFSv-Rhb4YyTREltwTINnU0gXY" />
        <link rel="canonical" href="https://duurzaamwonen.info/privacy-policy" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacybeleid</h1>
            <p className="text-gray-600 mb-12">Laatst bijgewerkt: 1 mei 2023</p>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Bij Duurzaam Wonen Nederland hechten wij grote waarde aan de bescherming van uw persoonsgegevens. 
                In dit privacybeleid willen we heldere informatie geven over hoe wij omgaan met persoonsgegevens.
              </p>
              
              <h2>1. Wie zijn wij</h2>
              <p>
                Duurzaam Wonen Nederland is gevestigd aan de Twenteweg 24, 7532 ST Enschede en is verantwoordelijk 
                voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
              </p>
              
              <h2>2. Welke gegevens verzamelen wij</h2>
              <p>
                Duurzaam Wonen Nederland verwerkt uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of 
                omdat u deze zelf aan ons verstrekt. Hieronder vindt u een overzicht van de persoonsgegevens die wij verwerken:
              </p>
              <ul>
                <li>Voor- en achternaam</li>
                <li>Adresgegevens</li>
                <li>Telefoonnummer</li>
                <li>E-mailadres</li>
                <li>IP-adres</li>
                <li>Overige persoonsgegevens die u actief verstrekt in correspondentie en telefonisch</li>
                <li>Gegevens over uw activiteiten op onze website</li>
                <li>Internetbrowser en apparaat type</li>
              </ul>
              
              <h2>3. Waarom verzamelen wij deze gegevens</h2>
              <p>
                Duurzaam Wonen Nederland verwerkt uw persoonsgegevens voor de volgende doelen:
              </p>
              <ul>
                <li>Het afhandelen van uw betaling</li>
                <li>U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren</li>
                <li>U te informeren over wijzigingen van onze diensten en producten</li>
                <li>Om goederen en diensten bij u af te leveren</li>
                <li>Duurzaam Wonen Nederland analyseert uw gedrag op de website om daarmee de website te verbeteren</li>
                <li>Duurzaam Wonen Nederland verwerkt ook persoonsgegevens als wij hier wettelijk toe verplicht zijn</li>
              </ul>
              
              <h2>4. Hoe lang bewaren we persoonsgegevens</h2>
              <p>
                Duurzaam Wonen Nederland bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te 
                realiseren waarvoor uw gegevens worden verzameld. Wij hanteren de volgende bewaartermijnen:
              </p>
              <ul>
                <li>Klantgegevens: 7 jaar (wettelijke bewaartermijn belastingdienst)</li>
                <li>Gegevens offerteaanvragen zonder vervolgopdracht: 1 jaar</li>
                <li>E-mail marketinggegevens: tot afmelding</li>
              </ul>
              
              <h2>5. Delen van persoonsgegevens met derden</h2>
              <p>
                Duurzaam Wonen Nederland verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend indien 
                dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting.
              </p>
              
              <h2>6. Cookies, of vergelijkbare technieken, die wij gebruiken</h2>
              <p>
                Duurzaam Wonen Nederland gebruikt functionele, analytische en tracking cookies. Een cookie is een klein 
                tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen in de browser van uw computer, 
                tablet of smartphone. 
              </p>
              
              <h2>7. Gegevens inzien, aanpassen of verwijderen</h2>
              <p>
                U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u 
                het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen 
                de verwerking van uw persoonsgegevens door Duurzaam Wonen Nederland.
              </p>
              
              <h2>8. Hoe wij persoonsgegevens beveiligen</h2>
              <p>
                Duurzaam Wonen Nederland neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om 
                misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. 
                Als u de indruk heeft dat uw gegevens niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, neem 
                dan contact op via info@duurzaamwonen.info.
              </p>
              
              <h2>9. Contact</h2>
              <p>
                Voor vragen of opmerkingen over ons privacybeleid kunt u contact opnemen via:
              </p>
              <p>
                Duurzaam Wonen Nederland<br />
                Twenteweg 24<br />
                7532 ST Enschede<br />
                Tel: 053 303 0213<br />
                E-mail: info@duurzaamwonen.info
              </p>
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild className="bg-brand-green hover:bg-brand-green-dark">
                <Link to="/offerte">
                  Neem contact op
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PrivacyPolicy;
