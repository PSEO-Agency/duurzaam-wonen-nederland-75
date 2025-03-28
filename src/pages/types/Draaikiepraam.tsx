
import React from 'react';
import SubpageTemplate from '@/components/templates/SubpageTemplate';

const relatedTypes = [
  { title: 'Vast Kozijn', slug: '/kunststof-kozijnen/types/vast-kozijn', excerpt: 'Vaste kozijnen voor optimale isolatie en een strak design.' },
  { title: 'Schuifpui', slug: '/kunststof-kozijnen/types/schuifpui', excerpt: 'Ruimtebesparende schuifpuien voor een naadloze verbinding met buiten.' },
  { title: 'Harmonicadeur', slug: '/kunststof-kozijnen/types/harmonicadeur', excerpt: 'Flexibele harmonicadeuren voor maximale opening naar buiten.' },
  { title: 'Stolpkozijn', slug: '/kunststof-kozijnen/types/stolpkozijn', excerpt: 'Klassieke stolpkozijnen met dubbele openslaande ramen.' },
  { title: 'Hefschuifpui', slug: '/kunststof-kozijnen/types/hefschuifpui', excerpt: 'Luxe hefschuifpuien voor grotere openingen naar terras of tuin.' },
];

const Draaikiepraam: React.FC = () => {
  const faqs = [
    {
      question: 'Wat is het verschil tussen een draairaam en een draaikiepraam?',
      answer: 'Een standaard draairaam kan alleen naar binnen of buiten draaien. Een draaikiepraam heeft twee openingsmogelijkheden: volledig opendraaien (draaifunctie) of aan de bovenkant licht kantelen voor ventilatie (kiepfunctie). Deze dubbele functionaliteit maakt draaikiepramen zeer populair.'
    },
    {
      question: 'Hoe onderhoud ik een kunststof draaikiepraam?',
      answer: 'Kunststof draaikiepramen zijn zeer onderhoudsarm. Schoonmaken met water en een mild reinigingsmiddel is voldoende. Het hang- en sluitwerk dient jaarlijks gesmeerd te worden met zuurvrije olie of siliconenspray. Controleer regelmatig of de ontwateringsopeningen vrij zijn van vuil.'
    },
    {
      question: 'Kan ik mijn houten draaikiepramen vervangen door kunststof?',
      answer: 'Ja, houten draaikiepramen kunnen uitstekend vervangen worden door kunststof exemplaren. De opening in de gevel blijft hetzelfde, alleen het kozijn wordt vervangen. Kunststof biedt als voordelen dat het onderhoudsarm is, beter isoleert en een langere levensduur heeft.'
    },
    {
      question: 'Zijn draaikiepramen inbraakveilig?',
      answer: 'Onze kunststof draaikiepramen zijn standaard voorzien van inbraakwerend beslag conform het Politiekeurmerk Veilig Wonen. Met meerpuntssluitingen en veiligheidsbeslag zijn ze zeer inbraakbestendig. Voor extra veiligheid kunnen draaikiepramen worden uitgerust met afsluitbare grepen en inbraakwerend glas.'
    },
    {
      question: 'Wat kost een kunststof draaikiepraam?',
      answer: 'De prijs van een kunststof draaikiepraam hangt af van de afmetingen, de kwaliteit van het profiel, het type beglazing en eventuele extra opties. Een standaard draaikiepraam begint vanaf ongeveer €450, inclusief BTW maar exclusief montage. Voor een exacte prijsopgave kunt u een vrijblijvende offerte aanvragen.'
    }
  ];

  const mainContent = (
    <>
      <h2 className="text-3xl font-bold mb-6">Kunststof Draaikiepramen</h2>
      <p className="text-lg text-gray-700 mb-6">
        Draaikiepramen zijn de meest veelzijdige en populaire raamtypen in Nederland. Ze combineren twee openingsmogelijkheden 
        in één raam: volledig opendraaien voor maximale ventilatie of kiepen (kantelen) aan de bovenzijde voor veilige ventilatie. 
        Deze combinatie maakt draaikiepramen uitermate geschikt voor bijna elke ruimte in huis.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Voordelen van draaikiepramen</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li><strong>Dubbele functionaliteit</strong> - zowel volledig openen als op kiepstand zetten voor ventilatie</li>
        <li><strong>Veilige ventilatie</strong> - in kiepstand kan het raam open blijven zonder inbraakrisico</li>
        <li><strong>Eenvoudige reiniging</strong> - in draaistand kunt u beide zijden van het glas gemakkelijk schoonmaken</li>
        <li><strong>Volledig te openen</strong> - maakt het mogelijk om grote voorwerpen door het raam te verplaatsen</li>
        <li><strong>Goede afdichting</strong> - door het meerpuntssluitingssysteem sluiten ze zeer goed af tegen tocht</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Technische details</h3>
      <p className="text-gray-700 mb-6">
        Onze kunststof draaikiepramen zijn voorzien van hoogwaardig beslag dat zorgt voor een soepele werking, zelfs na jaren intensief 
        gebruik. Het beslag is verborgen weggewerkt in het kozijn, wat zorgt voor een strakke, moderne uitstraling. De ramen zijn 
        standaard uitgerust met:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>Meerpuntssluiting voor optimale afdichting en veiligheid</li>
        <li>Veiligheidsbeslag conform Politiekeurmerk Veilig Wonen</li>
        <li>Kierstandbegrenzer voor gecontroleerde ventilatie</li>
        <li>Hoogwaardige rubber afdichtingen voor tocht- en waterdichtheid</li>
        <li>Zelfreinigende ontwateringssleuven die condens afvoeren</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Ideale toepassing</h3>
      <p className="text-gray-700 mb-6">
        Draaikiepramen zijn ideaal voor bijna elke ruimte in huis. Ze worden veel toegepast in:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>Woonkamers, waar een combinatie van ventilatie en volledig openen gewenst is</li>
        <li>Slaapkamers, waar veilig ventileren in kiepstand tijdens afwezigheid belangrijk is</li>
        <li>Badkamers, waar regelmatige ventilatie nodig is om vocht af te voeren</li>
        <li>Keukens, waar tijdens het koken extra ventilatie gewenst is</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Maatwerk opties</h3>
      <p className="text-gray-700 mb-6">
        Onze draaikiepramen worden volledig op maat gemaakt en kunnen worden aangepast aan uw specifieke wensen:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>Keuze uit verschillende profieldieptes voor optimale isolatie</li>
        <li>Diverse glasopties, van standaard HR++ tot triple glas of geluidswerend glas</li>
        <li>Groot assortiment aan kleuren en afwerkingen, inclusief houtlook</li>
        <li>Verschillende ventilatieopties, zoals ingebouwde ventilatieroosters</li>
        <li>Extra veiligheidsopties zoals afsluitbare grepen en inbraakwerend glas</li>
      </ul>
    </>
  );

  return (
    <SubpageTemplate
      title="Kunststof Draaikiepramen"
      metaDescription="Kunststof draaikiepramen combineren dubbele functionaliteit: volledig opendraaien of kiepen voor ventilatie. Ontdek onze hoogwaardige, op maat gemaakte draaikiepramen."
      canonicalUrl="/kunststof-kozijnen/types/draaikiepraam"
      heroTitle="Kunststof Draaikiepramen"
      heroDescription="De perfecte combinatie van comfort en functionaliteit: draaikiepramen bieden twee openingsmogelijkheden in één raam. Ontdek onze op maat gemaakte oplossingen."
      mainImageUrl="/lovable-uploads/78d706ca-fb91-4c03-82ca-97b0b0c127eb.png"
      mainContent={mainContent}
      benefits={[
        "Twee openingsmogelijkheden in één raam",
        "Veilig ventileren in kiepstand",
        "Eenvoudig te reinigen",
        "Uitstekende isolatiewaarden",
        "Onderhoudsarm en duurzaam",
        "Inbraakwerend conform Politiekeurmerk"
      ]}
      faqs={faqs}
      relatedItems={relatedTypes}
      relatedItemsTitle="Andere kozijntypes"
      relatedItemsType="kozijntypes"
      breadcrumbTitle="Draaikiepraam"
    />
  );
};

export default Draaikiepraam;
