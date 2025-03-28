
import React from 'react';
import SubpageTemplate from '@/components/templates/SubpageTemplate';

const relatedBrands = [
  { title: 'Veka Kozijnen', slug: '/kunststof-kozijnen/merken/veka', excerpt: 'Premium Veka kozijnen met Duitse kwaliteit en innovatieve technologie.' },
  { title: 'Kömmerling Kozijnen', slug: '/kunststof-kozijnen/merken/kommerling', excerpt: 'Duurzame Kömmerling kozijnen met uitstekende isolatiewaarden.' },
  { title: 'Rehau Kozijnen', slug: '/kunststof-kozijnen/merken/rehau', excerpt: 'Hoogwaardige Rehau profielen voor energiezuinige kozijnen.' },
  { title: 'Gealan Kozijnen', slug: '/kunststof-kozijnen/merken/gealan', excerpt: 'Innovatieve Gealan kozijnen met moderne designs en technologieën.' },
];

const SchucoBrand: React.FC = () => {
  const faqs = [
    {
      question: 'Waarin onderscheiden Schüco kozijnen zich van andere merken?',
      answer: 'Schüco kozijnen onderscheiden zich door hun uitmuntende Duitse kwaliteit, innovatieve technologie en slank design. Ze bieden superieure thermische isolatie, verhoogde veiligheid en uitzonderlijke duurzaamheid. Schüco is daarnaast koploper in duurzame productiemethoden en recyclingtechnologieën.'
    },
    {
      question: 'Wat is de garantie op Schüco kozijnen?',
      answer: 'Schüco biedt 10 jaar fabrieksgarantie op materiaal- en productiefouten. Bij aankoop en montage via Duurzaam Wonen Nederland krijgt u daarnaast 5 jaar garantie op de montage. Op het hang- en sluitwerk geldt een garantie van 2 jaar bij normaal gebruik.'
    },
    {
      question: 'Zijn Schüco kozijnen duurder dan andere merken?',
      answer: 'Schüco positioneert zich in het premium segment en is inderdaad vaak iets duurder dan sommige andere merken. De hogere prijs wordt echter gerechtvaardigd door de superieure kwaliteit, innovatieve technologie, langere levensduur en betere isolatiewaarden, wat op termijn tot kostenbesparingen leidt.'
    },
    {
      question: 'Welke Schüco profielsystemen bieden jullie aan?',
      answer: 'We bieden diverse Schüco profielsystemen aan, waaronder de populaire Living-serie, CT70 en SI82. Elk systeem heeft zijn eigen specifieke kenmerken, isolatiewaarden en designmogelijkheden. Onze adviseurs helpen u graag bij het kiezen van het meest geschikte systeem voor uw situatie.'
    },
    {
      question: 'Hoe lang is de levertijd voor Schüco kozijnen?',
      answer: 'De levertijd voor Schüco kozijnen bedraagt gemiddeld 6-8 weken na definitieve inmeting en orderbevestiging. Bij speciale uitvoeringen of kleuren kan dit oplopen tot 10-12 weken. We informeren u altijd vooraf over de exacte levertijd van uw bestelling.'
    }
  ];

  const mainContent = (
    <>
      <h2 className="text-3xl font-bold mb-6">Schüco Kunststof Kozijnen</h2>
      <p className="text-lg text-gray-700 mb-6">
        Schüco behoort tot de absolute top in de kozijnenbranche en staat wereldwijd bekend om zijn innovatieve, 
        hoogwaardige en duurzame kozijnoplossingen. Als toonaangevende Duitse fabrikant combineert Schüco technologische 
        uitmuntendheid met elegant design, waardoor hun kozijnen tot de beste en meest gewilde in de markt behoren.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Waarom kiezen voor Schüco?</h3>
      <p className="text-gray-700 mb-6">
        Er zijn verschillende redenen waarom Schüco kozijnen een uitstekende investering zijn voor uw woning:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li><strong>Topkwaliteit</strong> - Duitse precisie-engineering en strenge kwaliteitscontroles</li>
        <li><strong>Innovatie</strong> - voortdurende ontwikkeling van nieuwe technologieën en oplossingen</li>
        <li><strong>Duurzaamheid</strong> - milieuvriendelijke productie en volledig recyclebare materialen</li>
        <li><strong>Design</strong> - slanke profielen en uitgebreide designmogelijkheden</li>
        <li><strong>Energie-efficiëntie</strong> - uitmuntende isolatiewaarden die energiekosten verlagen</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Schüco profielsystemen</h3>
      <p className="text-gray-700 mb-6">
        Duurzaam Wonen Nederland biedt verschillende Schüco profielsystemen aan, elk met specifieke eigenschappen:
      </p>

      <div className="mb-6">
        <h4 className="text-xl font-medium mb-2">Schüco Living</h4>
        <p className="text-gray-700">
          Het nieuwste profielsysteem van Schüco met uitstekende thermische isolatie (Uf-waarde tot 0,96 W/m²K). 
          Verkrijgbaar in 82mm profieldiepte en geschikt voor triple beglazing. De Living-serie heeft een modern, 
          strak design met verdiept liggende afdichtingen.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-medium mb-2">Schüco CT 70</h4>
        <p className="text-gray-700">
          Een veelzijdig 70mm systeem dat uitstekende isolatie combineert met elegante lijnen. Met een Uf-waarde 
          tot 1,3 W/m²K is dit systeem zeer geschikt voor renovatieprojecten en nieuwbouw. Beschikbaar in diverse 
          designs, waaronder Classic, Rondo en Cava.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-medium mb-2">Schüco SI 82</h4>
        <p className="text-gray-700">
          Een geavanceerd 82mm systeem met superieure isolatie (Uf-waarde tot 0,76 W/m²K) voor passiefhuizen en energieneutrale 
          woningen. Dit systeem biedt maximale energiebesparing en is perfect voor wie het hoogste niveau van comfort en 
          duurzaamheid nastreeft.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Unieke Schüco technologieën</h3>
      <p className="text-gray-700 mb-6">
        Schüco staat bekend om zijn innovatieve technologieën die de prestaties van kunststof kozijnen naar een hoger niveau tillen:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li><strong>ecoClean</strong> - Zelfreinigende oppervlaktebehandeling die vuil afbreekt onder invloed van UV-licht</li>
        <li><strong>ThermoFrame</strong> - Thermisch onderbroken versterkingen voor optimale isolatie</li>
        <li><strong>VentoPlus</strong> - Geïntegreerde ventilatie die frisse lucht binnenlaat maar wind en regen buitenhoudt</li>
        <li><strong>SafeGuard</strong> - Geavanceerde veiligheidssystemen die inbraak bemoeilijken</li>
        <li><strong>AutoMotion</strong> - Elektronische bediening van ramen voor extra comfort en veiligheid</li>
      </ul>
    </>
  );

  return (
    <SubpageTemplate
      title="Schüco Kunststof Kozijnen"
      metaDescription="Premium Schüco kunststof kozijnen met Duitse kwaliteit en innovatieve technologie. Ontdek de voordelen van Schüco kozijnen voor uw woning."
      canonicalUrl="/kunststof-kozijnen/merken/schuco"
      heroTitle="Schüco Kunststof Kozijnen"
      heroDescription="Ontdek premium kozijnen van het Duitse topmerk Schüco. Innovatieve technologie, uitmuntend design en superieure isolatiewaarden voor uw woning."
      mainImageUrl="/lovable-uploads/e923780c-9e14-408a-a016-0b63db9b8daa.png"
      mainContent={mainContent}
      benefits={[
        "Premium Duitse kwaliteit en engineering",
        "Slanke profielen voor maximale lichtinval",
        "Uitzonderlijke isolatiewaarden (Uf tot 0,76 W/m²K)",
        "Innovatieve technologieën en smart oplossingen",
        "Uitgebreide keuze in designs en afwerkingen",
        "Lange levensduur en volledig recyclebaar"
      ]}
      faqs={faqs}
      relatedItems={relatedBrands}
      relatedItemsTitle="Andere kozijnmerken"
      relatedItemsType="merken"
      breadcrumbTitle="Schüco"
    />
  );
};

export default SchucoBrand;
