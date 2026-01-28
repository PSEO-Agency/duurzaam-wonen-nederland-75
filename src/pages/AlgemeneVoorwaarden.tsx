
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Home, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollToTop from '@/components/ScrollToTop';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const AlgemeneVoorwaarden: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Algemene Voorwaarden - Duurzaam Wonen Nederland</title>
        <meta name="description" content="Algemene leverings- en betalingsvoorwaarden voor consumententransacties t.b.v. ramen, deuren, kozijnen en woningverbetering van Duurzaam Wonen Nederland." />
        <meta name="google-site-verification" content="wctWfdTl0t8aKSX4NrFSv-Rhb4YyTREltwTINnU0gXY" />
        <link rel="canonical" href="https://duurzaamwonen.info/algemene-voorwaarden" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <div className="mb-4">
              <Breadcrumb>
                <BreadcrumbList className="text-sm">
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/" className="flex items-center hover:text-brand-green transition-colors">
                        <Home className="h-4 w-4" />
                        <span className="ml-1.5">Home</span>
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Algemene voorwaarden</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                Algemene leverings- en betalingsvoorwaarden
              </h1>
              <p className="text-lg text-gray-600 mb-1">
                voor consumententransacties t.b.v. ramen, deuren, kozijnen en woningverbetering
              </p>
              <p className="text-gray-500 text-sm">
                Duurzaam Wonen Nederland gevestigd te Enschede
              </p>
            </header>
            
            {/* Content */}
            <article className="prose prose-lg prose-gray max-w-none prose-headings:text-gray-900 prose-h2:text-xl prose-h2:font-semibold prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-800">
              <h2>1. Algemeen</h2>
              <p>
                Deze algemene leverings- en betalingsvoorwaarden liggen ten grondslag aan en maken deel uit van alle tussen ons en de opdrachtgever-consument gesloten overeenkomst. Onder consument verstaan wij de natuurlijke persoon, die handelt in de uitoefening van een beroep of bedrijf. De voorwaarden zijn ook van toepassing op aanbiedingen c.q. offertes.
              </p>

              <h2>2. Offertes</h2>
              <p>
                Al onze offertes zijn vrijblijvend, tenzij deze een termijn van aanvaarding bevatten. Indien een offerte een vrijblijvend aanbod bevat en dit wordt aanvaard, hebben wij het recht het aanbod binnen 2 dagen na ontvangst van de aanvaarding te herroepen.
              </p>

              <h2>3. Levering en levertijd</h2>
              <p>
                Opgegeven levertijden zullen nimmer zijn te beschouwen als fatale termijn, tenzij uitdrukkelijk anders is overeengekomen. Bij niet tijdige levering dienen wij derhalve schriftelijk in gebreke te worden gesteld.
              </p>

              <h2>4. Reclamaties</h2>
              <ul className="space-y-3">
                <li><strong>A.</strong> Opdrachtgever kan op een gebrek in de presentatie geen beroep doen, indien hij niet binnen bekwame tijd heeft ontdekt of redelijkerwijs had moeten ontdekken bij ons schriftelijk heeft geprotesteerd.</li>
                <li><strong>B.</strong> Klachten over facturen dienen binnen 8 dagen na oplevering van het werk of na aflevering van een zaak.</li>
                <li><strong>C.</strong> Bij gegronde bevinding van een klacht zijn wij uitsluitend verplicht de goederen te vervangen dan wel te repareren. Daarnaast kan koper geen rechten doen op gelden of enige vergoeding.</li>
                <li><strong>D.</strong> Opdrachtgever verliest alle rechten en bevoegdheden die hem ten dienste stonden op grond van gebrekkigheid, indien hij niet binnen de hierboven vermelde termijn heeft gereclameerd en/of ons de gelegenheid heeft geboden de gebreken te herstellen.</li>
                <li><strong>E.</strong> Indien recht op overige reclamaties vervalt zodra de zaken zijn verwerkt of daaraan wijzigingen zijn aangebracht.</li>
              </ul>

              <h2>5. Eigendomsvoorbehoud</h2>
              <ul className="space-y-3">
                <li><strong>A.</strong> Koper wordt slechts onder opschortende voorwaarde eigenaar van de door ons geleverde of nog te leveren zaken. Wij blijven eigenaar van de geleverde of nog te leveren zaken zolang de koper onvoldoende ter zake van de tegenprestatie van de overeenkomst of gelijksoortige overeenkomst niet heeft betaald. Wij blijven tevens eigenaar van de geleverde of nog te leveren zaken zolang de koper de verrichte of nog te verrichten leveranties uit dergelijke overeenkomsten niet heeft betaald en zolang de koper vorderingen wegens tekortschieten in de nakoming van de overeenkomsten niet heeft voldaan, waaronder inbegrepen vorderingen ter zake boete, rente en kosten.</li>
                <li><strong>B.</strong> Indien koper enige verplichting uit de overeenkomst met betrekking tot verkochte zaken jegens ons niet nakomt, zijn wij zonder ingebrekestelling gerechtigd de zaken terug te nemen. Koper machtigt ons de plaats te betreden waar de zaken zich bevinden.</li>
              </ul>

              <h2>6. Betaling</h2>
              <ul className="space-y-3">
                <li><strong>A.</strong> Tenzij uitdrukkelijk anders is overeengekomen, dient betaling te geschieden 100% op de laatste montagedag.</li>
                <li><strong>B.</strong> Vanaf de datum welke is genoemd in de aanvaardingstermijn zoals genoemd in lid A van dit artikel, is koper in verzuim. Vanaf dit moment zijn wij gerechtigd een vertragingspercentage te berekenen van 1,5% per maand of een zoveel hoger of lager als wettelijk is toegestaan.</li>
                <li><strong>C.</strong> Door de koper gedane betalingen strekken steeds ter afdoening van alle verschuldigde rente en kosten vervolgens van opeisbare facturen, die het langst openstaan, zelfs al vermeldt de koper dat de voldoening betrekking heeft op een latere factuur.</li>
                <li><strong>D.</strong> Indien koper zijn betalingsverplichtingen niet nakomt, is hij in verzuim en zijn alle kosten van invordering voor zijn rekening. Onder deze kosten zijn mede begrepen alle kosten van sommatie en ingebrekestelling, alsmede de kosten van het honorarium van degene die door ons met de invordering is belast. Deze kosten zullen worden berekend overeenkomstig het basistarief van de Nederlandse Orde van Advocaten, tenzij de daadwerkelijk kosten hoger liggen dan dit tarief, dan zullen de daadwerkelijk kosten verschuldigd zijn. Indien wij onze vordering uit handen geven, zal een minimumtarief worden gehanteerd van 100 euro.</li>
                <li><strong>E.</strong> Betalingscondities 100% op de laatste montagedag.</li>
                <li><strong>F.</strong> Restwerkzaamheden en/of aanvullende producten maken geen deel uit van betaling na montage. Bij restwerkzaamheden mag de klant 5% nabetalen.</li>
              </ul>
              <p className="mt-4">
                Indien koper in staat van faillissement wordt verklaard dan wel surseance van betaling heeft gekregen, wordt koper geacht in verzuim te zijn en is er sprake van een tekortkoming in de nakoming van de verbintenis zoals bedoeld in artikel 6:265 B.W., op grond waarvan wij gerechtigd zijn de overeenkomst te ontbinden. In deze gevallen zijn wij tevens gerechtigd bedragen, welke koper nog verschuldigd is, geheel op te eisen en onze eigendommen terstond bij koper op te (laten) halen.
              </p>

              <h2>7. Aansprakelijkheid</h2>
              <ul className="space-y-3">
                <li><strong>A.</strong> Wij zijn slechts aansprakelijk voor schade door de opdrachtgever, die rechtstreeks en uitsluitend gevolg is van onze schuld, met dien verstande dat voor vergoeding alleen in aanmerking komt die schade waartegen wij zijn verzekerd, dan wel redelijkerwijs gezien in de branche geldende gebruiken verzekerd hadden behoren te zijn.</li>
                <li><strong>B.</strong> De door ons te vergoeden schade zal worden gematigd wanneer de door koper te betalen prijs gering is in verhouding tot de omvang van door koper geleden schade.</li>
              </ul>

              <h2>8. Onuitvoerbaarheid van de opdracht</h2>
              <ul className="space-y-3">
                <li><strong>A.</strong> Indien na totstandkoming van de overeenkomst deze door ons niet kan worden nagekomen ten gevolge van omstandigheden die ons bij de totstandkoming van de overeenkomst niet bekend waren, hebben wij het recht te vorderen dat de inhoud van de overeenkomst zodanig wordt gewijzigd dat de uitvoering mogelijk blijft.</li>
                <li><strong>B.</strong> Daarnaast hebben wij het recht de nakoming van onze verplichtingen op te schorten en zijn wij niet in verzuim, indien wij ten gevolge van veranderingen in omstandigheden die ten tijde van het sluiten van de overeenkomst redelijkerwijs niet te verwachten waren en buiten onze invloedssfeer liggen, tijdelijk verhinderd zijn onze verplichtingen na te komen.</li>
                <li><strong>C.</strong> Onder de B genoemde omstandigheden worden mede verstaan het niet voldoen aan of te laat leveren van hun verplichtingen, alsmede brand, stakingen of werkonderbrekingen of het ontbreken aan de te verwerken materialen, import- en handelsverboden etc.</li>
                <li><strong>D.</strong> Indien en in dit artikel genoemde tijdelijke onmogelijkheid meer dan 6 maanden heeft voortgeduurd, wordt tussen de partijen bestaande overeenkomst ontbonden, zonder dat één van de partijen recht heeft op vergoeding, anders dan door ontbinding geleden of te lijden schade.</li>
                <li><strong>E.</strong> Indien onze verplichtingen gedeeltelijk zijn nagekomen, zijn wij gerechtigd tot een evenredig deel van de overeengekomen prijs op grondslag van het reeds verrichte werk en de gemaakte kosten.</li>
              </ul>

              <h2>9. Annulering</h2>
              <p>
                Bij vernietiging van de overeenkomst door de opdrachtgever kent Duurzaam Wonen Nederland het recht om een schadevergoeding te eisen van 25% van de overeengekomen prijs van de te betalen opdracht. Indien de opdracht door middel van colportage tot stand is gekomen, behoudt de koper het recht om binnen 14 dagen schriftelijk aangetekend na datum zonder opgave van reden te annuleren. Annuleren moet schriftelijk binnen 14 dagen na datum aangetekend naar ons verzonden: Duurzaam Wonen Nederland, Twentseweg 24, 7532 ST Enschede. Bij het kopen "Onder voorbehoud van financiering" behoudt Duurzaam Wonen Nederland het recht om door een door Duurzaam Wonen Nederland onafhankelijk bureau een financieel advies te laten uitbrengen.
              </p>

              <h2>10. Geschillenbeslechting</h2>
              <p>
                In afwijking van de wettelijke regels voor de bevoegdheid van de burgerlijke rechter zal elk geschil tussen koper en verkoper in geval van de Rechtbank bevoegd zijn, worden beslecht door de Rechtbank Almelo Nederland. Duurzaam Wonen Nederland blijft echter bevoegd de koper te dagvaarden voor de volgens de wet of het toepasselijk internationaal verdrag bevoegde rechter.
              </p>
            </article>

            {/* Note box */}
            <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg mt-10">
              <p className="text-amber-800 font-medium">
                <strong>N.B.</strong> Bij klachten die niet aan de garantieafspraken vallen wordt de klacht verholpen, maar wordt €65,- incl. BTW voorrijkosten in rekening gebracht.
              </p>
            </div>
            
            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Heeft u vragen over onze algemene voorwaarden?</p>
              <Button asChild className="bg-brand-green hover:bg-brand-green-dark">
                <Link to="/contact">
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
