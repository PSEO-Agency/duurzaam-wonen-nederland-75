
import React from 'react';
import SubpageTemplate from '@/components/templates/SubpageTemplate';

const relatedPrices = [
  { title: 'Kozijnen Prijsoverzicht', slug: '/kunststof-kozijnen/prijzen', excerpt: 'Compleet overzicht van de prijzen voor verschillende typen kunststof kozijnen.' },
  { title: 'Kozijnen Subsidie', slug: '/kunststof-kozijnen/prijzen/subsidie', excerpt: 'Informatie over beschikbare subsidies voor energiebesparende kozijnen.' },
  { title: 'Budget Kozijnen', slug: '/kunststof-kozijnen/prijzen/budget', excerpt: 'Betaalbare kozijnoplossingen zonder in te leveren op kwaliteit.' },
  { title: 'Premium Kozijnen', slug: '/kunststof-kozijnen/prijzen/premium', excerpt: 'Hoogwaardige kozijnen met extra opties en uitgebreide garantie.' },
];

const KozijnenAfbetaling: React.FC = () => {
  const faqs = [
    {
      question: 'Hoe werkt financiering van kunststof kozijnen?',
      answer: 'Bij financiering van kozijnen spreidt u de kosten over een langere periode. Na goedkeuring van uw aanvraag worden de kozijnen geleverd en geïnstalleerd, waarna u maandelijks een vast bedrag terugbetaalt. We werken samen met gerenommeerde financieringspartners die verschillende opties aanbieden, zoals persoonlijke leningen of bouwdepots.'
    },
    {
      question: 'Wat zijn de minimale en maximale bedragen voor financiering?',
      answer: 'Onze financieringsopties zijn beschikbaar vanaf €2.500 tot €25.000. Het minimumbedrag zorgt ervoor dat de administratiekosten in verhouding blijven, terwijl het maximumbedrag is afgestemd op de gemiddelde kosten van een complete kozijnrenovatie voor een doorsnee woning.'
    },
    {
      question: 'Welke financieringsvormen zijn er beschikbaar?',
      answer: 'We bieden verschillende financieringsvormen aan: een persoonlijke lening met vaste maandlasten en looptijd, een doorlopend krediet met flexibele aflossingmogelijkheden, en duurzaamheidsleningen met gunstige rentetarieven specifiek voor energiebesparende maatregelen.'
    },
    {
      question: 'Hoe lang is de looptijd van de financiering?',
      answer: 'De looptijd van de financiering kan variëren van 12 tot 120 maanden (1 tot 10 jaar), afhankelijk van het geleende bedrag en uw persoonlijke voorkeur. Een langere looptijd betekent lagere maandlasten maar een hogere totale rente over de hele looptijd.'
    },
    {
      question: 'Kan ik de lening vervroegd aflossen?',
      answer: 'Ja, bij al onze financieringsopties kunt u te allen tijde boetevrij extra aflossen of het volledige restbedrag in één keer voldoen. Dit geeft u de flexibiliteit om sneller van uw lening af te komen als uw financiële situatie verandert.'
    }
  ];

  const mainContent = (
    <>
      <h2 className="text-3xl font-bold mb-6">Kunststof Kozijnen op Afbetaling</h2>
      <p className="text-lg text-gray-700 mb-6">
        Nieuwe kunststof kozijnen zijn een waardevolle investering in uw woning, maar we begrijpen dat de aanschafkosten 
        aanzienlijk kunnen zijn. Daarom biedt Duurzaam Wonen Nederland verschillende financieringsmogelijkheden aan, 
        waarmee u direct kunt genieten van nieuwe kozijnen terwijl u de kosten gespreid betaalt.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Voordelen van financiering</h3>
      <p className="text-gray-700 mb-6">
        Het financieren van uw kunststof kozijnen biedt verschillende voordelen:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li><strong>Direct genieten</strong> - u hoeft niet te wachten tot u het volledige bedrag heeft gespaard</li>
        <li><strong>Energiebesparing</strong> - de maandelijkse energiebesparing compenseert deels uw maandlasten</li>
        <li><strong>Waardevermeerdering</strong> - uw woning stijgt direct in waarde en comfort</li>
        <li><strong>Budgetcontrole</strong> - vaste maandlasten zorgen voor duidelijkheid in uw budget</li>
        <li><strong>Fiscale voordelen</strong> - in sommige gevallen zijn de rentekosten fiscaal aftrekbaar</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Onze financieringsopties</h3>
      <p className="text-gray-700 mb-6">
        We bieden verschillende financieringsmogelijkheden aan, afgestemd op uw persoonlijke situatie:
      </p>

      <div className="mb-6">
        <h4 className="text-xl font-medium mb-2">Persoonlijke lening</h4>
        <p className="text-gray-700">
          Een persoonlijke lening biedt zekerheid door vaste maandlasten en een vaste einddatum. U weet precies waar u aan toe bent. 
          De rente staat vast voor de gehele looptijd en u lost elke maand een deel van de lening af.
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Voorbeeld:</strong> Bij een investering van €7.500 en een looptijd van 60 maanden betaalt u ongeveer €138 per maand (bij 4,9% rente).
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-medium mb-2">Duurzaamheidslening</h4>
        <p className="text-gray-700">
          Speciaal voor energiebesparende maatregelen zoals hoogrendementskozijnen zijn er gunstige duurzaamheidsleningen beschikbaar, 
          vaak met een lager rentetarief. Deze leningen worden soms aangeboden door gemeenten of het Nationaal Warmtefonds.
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Voordeel:</strong> Rentepercentages vanaf 1,9%, afhankelijk van de looptijd en lokale regelingen.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-medium mb-2">0% rente actie</h4>
        <p className="text-gray-700">
          Op bepaalde momenten in het jaar bieden we speciale 0% rente acties aan in samenwerking met onze financieringspartners. 
          U betaalt dan alleen het geleende bedrag terug, verdeeld over de looptijd, zonder extra rentekosten.
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Opmerking:</strong> Deze acties zijn tijdelijk. Vraag naar de actuele mogelijkheden.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Hoe werkt het aanvragen?</h3>
      <p className="text-gray-700 mb-6">
        Het aanvragen van financiering voor uw kunststof kozijnen verloopt in enkele eenvoudige stappen:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
        <li>We maken een vrijblijvende offerte voor uw nieuwe kozijnen</li>
        <li>U geeft aan dat u interesse heeft in financiering</li>
        <li>Onze financieringspartner neemt contact met u op voor een intakegesprek</li>
        <li>U dient de benodigde documenten in (zoals inkomensgegevens)</li>
        <li>Na goedkeuring wordt de financieringsovereenkomst opgesteld</li>
        <li>Na ondertekening kunnen we starten met inmeten en productie</li>
        <li>De betaling aan ons wordt door de financieringspartner verzorgd</li>
        <li>U betaalt maandelijks af aan de financieringspartner</li>
      </ol>
    </>
  );

  return (
    <SubpageTemplate
      title="Kunststof Kozijnen op Afbetaling"
      metaDescription="Bekijk onze financieringsmogelijkheden voor kunststof kozijnen. Spreid de kosten en profiteer direct van nieuwe, energiezuinige kozijnen."
      canonicalUrl="/kunststof-kozijnen/prijzen/afbetaling"
      heroTitle="Kunststof Kozijnen op Afbetaling"
      heroDescription="Nieuwe kozijnen zonder grote investering ineens. Ontdek onze flexibele financieringsmogelijkheden en spreid de kosten van uw kunststof kozijnen."
      mainImageUrl="/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png"
      mainContent={mainContent}
      benefits={[
        "Direct nieuwe kozijnen zonder grote uitgave ineens",
        "Flexibele terugbetalingstermijnen (1-10 jaar)",
        "Energiebesparing compenseert deels de maandlasten",
        "Boetevrij vervroegd aflossen mogelijk",
        "Diverse financieringsvormen beschikbaar",
        "Snelle goedkeuring en afhandeling"
      ]}
      faqs={faqs}
      relatedItems={relatedPrices}
      relatedItemsTitle="Meer over kozijnprijzen"
      relatedItemsType="prijzen"
      breadcrumbTitle="Afbetaling"
    />
  );
};

export default KozijnenAfbetaling;
