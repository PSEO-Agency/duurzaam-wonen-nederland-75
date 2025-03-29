
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';

const AlgemeneVoorwaarden: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Algemene Voorwaarden | Duurzaam Wonen Nederland</title>
        <meta name="description" content="Lees de algemene voorwaarden van Duurzaam Wonen Nederland voor informatie over onze dienstverlening, garanties en meer." />
        <link rel="canonical" href="https://duurzaamwonen.info/algemene-voorwaarden" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Algemene Voorwaarden</h1>
            <p className="text-gray-600 mb-12">Laatst bijgewerkt: 1 mei 2023</p>
            
            <div className="prose prose-lg max-w-none">
              <h2>1. Definities</h2>
              <p>
                <strong>1.1.</strong> Duurzaam Wonen Nederland: gevestigd te Enschede en ingeschreven bij de Kamer van Koophandel onder nummer 12345678, hierna te noemen: "DWN".
              </p>
              <p>
                <strong>1.2.</strong> Opdrachtgever: de natuurlijke persoon of rechtspersoon die met DWN een overeenkomst aangaat.
              </p>
              <p>
                <strong>1.3.</strong> Overeenkomst: de overeenkomst tussen DWN en Opdrachtgever.
              </p>
              
              <h2>2. Toepasselijkheid</h2>
              <p>
                <strong>2.1.</strong> Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen DWN en Opdrachtgever, tenzij uitdrukkelijk schriftelijk anders is overeengekomen.
              </p>
              <p>
                <strong>2.2.</strong> Afwijkingen van deze voorwaarden zijn slechts geldig indien deze uitdrukkelijk schriftelijk door DWN zijn bevestigd.
              </p>
              
              <h2>3. Offertes en aanbiedingen</h2>
              <p>
                <strong>3.1.</strong> Alle offertes en aanbiedingen van DWN zijn vrijblijvend, tenzij in de offerte een termijn voor aanvaarding is gesteld.
              </p>
              <p>
                <strong>3.2.</strong> Offertes van DWN zijn gebaseerd op de informatie die door de Opdrachtgever is verstrekt. De Opdrachtgever staat ervoor in dat hij alle essentiële informatie heeft verstrekt.
              </p>
              <p>
                <strong>3.3.</strong> DWN kan niet aan zijn offertes of aanbiedingen worden gehouden indien de Opdrachtgever redelijkerwijs kan begrijpen dat de offertes of aanbiedingen, dan wel een onderdeel daarvan, een kennelijke vergissing of verschrijving bevat.
              </p>
              
              <h2>4. Uitvoering van de overeenkomst</h2>
              <p>
                <strong>4.1.</strong> DWN zal de overeenkomst naar beste inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap uitvoeren.
              </p>
              <p>
                <strong>4.2.</strong> Indien en voor zover een goede uitvoering van de overeenkomst dit vereist, heeft DWN het recht bepaalde werkzaamheden te laten verrichten door derden.
              </p>
              <p>
                <strong>4.3.</strong> De Opdrachtgever draagt er zorg voor dat alle gegevens, waarvan DWN aangeeft dat deze noodzakelijk zijn of waarvan de Opdrachtgever redelijkerwijs behoort te begrijpen dat deze noodzakelijk zijn voor het uitvoeren van de overeenkomst, tijdig aan DWN worden verstrekt.
              </p>
              
              <h2>5. Levering en leveringstermijnen</h2>
              <p>
                <strong>5.1.</strong> De door DWN opgegeven levertijden zijn indicatief en niet als fatale termijn te beschouwen.
              </p>
              <p>
                <strong>5.2.</strong> De levering wordt geacht te hebben plaatsgevonden op het moment dat de goederen de vestiging van DWN hebben verlaten of wanneer DWN Opdrachtgever heeft medegedeeld dat de goederen ter beschikking staan van Opdrachtgever.
              </p>
              
              <h2>6. Prijzen en betaling</h2>
              <p>
                <strong>6.1.</strong> Alle prijzen zijn exclusief BTW en andere heffingen van overheidswege, tenzij anders aangegeven.
              </p>
              <p>
                <strong>6.2.</strong> Betaling dient te geschieden binnen 14 dagen na factuurdatum, op een door DWN aan te geven wijze.
              </p>
              <p>
                <strong>6.3.</strong> Indien Opdrachtgever in gebreke blijft in de tijdige betaling van een factuur, dan is Opdrachtgever van rechtswege in verzuim.
              </p>
              
              <h2>7. Garantie</h2>
              <p>
                <strong>7.1.</strong> DWN garandeert dat de geleverde producten en diensten voldoen aan de gebruikelijke eisen en normen die daaraan op het moment van levering redelijkerwijs gesteld kunnen worden.
              </p>
              <p>
                <strong>7.2.</strong> De in dit artikel genoemde garantie geldt voor een periode van 10 jaar na levering, tenzij anders overeengekomen.
              </p>
              <p>
                <strong>7.3.</strong> Iedere vorm van garantie komt te vervallen indien een gebrek is ontstaan als gevolg van of voortvloeit uit onoordeelkundig of oneigenlijk gebruik of wanneer zonder schriftelijke toestemming van DWN, Opdrachtgever of derden wijzigingen hebben aangebracht dan wel trachten aan te brengen aan de zaak.
              </p>
              
              <h2>8. Aansprakelijkheid</h2>
              <p>
                <strong>8.1.</strong> DWN is uitsluitend aansprakelijk voor directe schade. Onder directe schade wordt uitsluitend verstaan de redelijke kosten ter vaststelling van de oorzaak en de omvang van de schade, de eventuele redelijke kosten gemaakt om de gebrekkige prestatie van DWN aan de overeenkomst te laten beantwoorden en redelijke kosten gemaakt ter voorkoming of beperking van schade.
              </p>
              <p>
                <strong>8.2.</strong> DWN is nimmer aansprakelijk voor indirecte schade, daaronder begrepen gevolgschade, gederfde winst, gemiste besparingen en schade door bedrijfsstagnatie.
              </p>
              
              <h2>9. Toepasselijk recht en geschillen</h2>
              <p>
                <strong>9.1.</strong> Op alle rechtsbetrekkingen waarbij DWN partij is, is uitsluitend het Nederlands recht van toepassing.
              </p>
              <p>
                <strong>9.2.</strong> Partijen zullen eerst een beroep op de rechter doen nadat zij zich tot het uiterste hebben ingespannen een geschil in onderling overleg te beslechten.
              </p>
              
              <h2>10. Wijziging voorwaarden</h2>
              <p>
                <strong>10.1.</strong> DWN is bevoegd wijzigingen in deze voorwaarden aan te brengen. Deze wijzigingen treden in werking op het aangekondigde tijdstip van inwerkingtreding.
              </p>
              <p>
                <strong>10.2.</strong> DWN zal de gewijzigde voorwaarden tijdig aan de Opdrachtgever toezenden. Indien geen tijdstip van inwerkingtreding is medegedeeld, treden wijzigingen jegens de Opdrachtgever in werking zodra hem de wijziging is medegedeeld.
              </p>
              
              <h2>11. Contact</h2>
              <p>
                Voor vragen of opmerkingen over onze algemene voorwaarden kunt u contact opnemen via:
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

export default AlgemeneVoorwaarden;
