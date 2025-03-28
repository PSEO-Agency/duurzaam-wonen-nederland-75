
import React from 'react';
import SubpageTemplate from '@/components/templates/SubpageTemplate';

const relatedServices = [
  { title: 'Kozijnen Montage', slug: '/kunststof-kozijnen/montage', excerpt: 'Professionele montage van uw kunststof kozijnen door ervaren monteurs.' },
  { title: 'Kozijnen Advies', slug: '/kunststof-kozijnen/services/advies', excerpt: 'Persoonlijk advies over de beste kozijnen voor uw woning.' },
  { title: 'Kozijnen Offerte', slug: '/contact', excerpt: 'Vraag een vrijblijvende offerte aan voor uw kunststof kozijnen.' },
  { title: 'Kozijnen Onderhoud', slug: '/kunststof-kozijnen/services/onderhoud', excerpt: 'Onderhoudstips en -services voor uw kunststof kozijnen.' },
];

const KozijnenInmeten: React.FC = () => {
  const faqs = [
    {
      question: 'Waarom is professioneel inmeten van kozijnen belangrijk?',
      answer: 'Professioneel inmeten is cruciaal om ervoor te zorgen dat uw kozijnen perfect passen. Zelfs kleine meetfouten kunnen leiden tot problemen bij de installatie, tocht, lekkage of een slechte isolatie. Onze ervaren inmeeters nemen alle relevante factoren in overweging voor een perfect eindresultaat.'
    },
    {
      question: 'Hoe verloopt een inmeetafspraak?',
      answer: 'Tijdens een inmeetafspraak komt onze specialist bij u thuis om de exacte afmetingen van uw kozijnopeningen op te nemen. Hierbij wordt rekening gehouden met eventuele oneffenheden, de staat van de muren en specifieke wensen. De specialist geeft ook advies over de beste kozijnoplossingen voor uw situatie.'
    },
    {
      question: 'Wat kost het inmeten van kozijnen?',
      answer: 'Het inmeten van kozijnen is gratis wanneer u besluit om bij ons te kopen. Als u alleen een inmeetservice wenst, rekenen we voorrijkosten en een uurtarief dat afhankelijk is van de omvang van het project.'
    },
    {
      question: 'Hoe snel kan er worden ingemeten?',
      answer: 'We streven ernaar om binnen 1-2 weken na uw aanvraag een inmeetafspraak te plannen. In drukke periodes kan dit iets langer duren. Na het inmeten ontvangt u binnen enkele werkdagen een gedetailleerde offerte.'
    },
    {
      question: 'Moet ik voorbereidingen treffen voor het inmeten?',
      answer: 'Het is handig als de kozijnopeningen goed toegankelijk zijn. Verwijder indien mogelijk gordijnen, jaloezieën en andere obstakels. Ook is het fijn als u eventuele specifieke wensen vooraf doordenkt, zodat onze inmeter hier rekening mee kan houden.'
    }
  ];

  const mainContent = (
    <>
      <h2 className="text-3xl font-bold mb-6">Kunststof Kozijnen Inmeten</h2>
      <p className="text-lg text-gray-700 mb-6">
        De eerste stap naar perfect passende kunststof kozijnen is een nauwkeurige inmeting. Bij Duurzaam Wonen Nederland 
        begrijpen we het belang van precisie. Onze ervaren inmeeters zorgen ervoor dat uw nieuwe kozijnen perfect aansluiten 
        op uw woning, zonder kieren, tocht of andere problemen.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Ons inmeetproces</h3>
      <p className="text-gray-700 mb-6">
        Onze professionele inmeeters gebruiken geavanceerde meetapparatuur om de exacte afmetingen van uw kozijnopeningen te bepalen. 
        We houden rekening met alle relevante factoren zoals:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>Exacte breedte en hoogte van elke opening</li>
        <li>Eventuele afwijkingen in de maatvoering (scheefstand, verzakkingen)</li>
        <li>Staat van het omringende metselwerk</li>
        <li>Diepte van de kozijnen</li>
        <li>Aansluiting op vensterbanken en aftimmeringen</li>
        <li>Specifieke wensen voor draairichtingen</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Waarom professioneel inmeten?</h3>
      <p className="text-gray-700 mb-6">
        Sommige mensen kiezen ervoor om zelf de maten van hun kozijnen op te nemen. Hoewel dit mogelijk is, raden we dit sterk 
        af. Professioneel inmeten biedt diverse voordelen:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>Gegarandeerde maatnauwkeurigheid tot op de millimeter</li>
        <li>Vakkundig advies over de beste kozijnoplossingen</li>
        <li>Identificatie van potentiële problemen vooraf</li>
        <li>Correcte inschatting van montagebenodigdheden</li>
        <li>Zekerheid over het eindresultaat</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Inmeten en offerte</h3>
      <p className="text-gray-700 mb-6">
        Na het inmeten verwerken onze specialisten de gegevens tot een gedetailleerde offerte. Hierin vindt u een exacte 
        specificatie van de benodigde kozijnen, inclusief alle opties en de totale kosten. Als u vragen heeft over de offerte, 
        staan we klaar om deze toe te lichten.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Planning en werkwijze</h3>
      <p className="text-gray-700 mb-6">
        Een inmeetafspraak duurt gemiddeld 1-2 uur, afhankelijk van het aantal kozijnen. Onze inmeter bespreekt tijdens het 
        bezoek ook uw wensen qua type kozijn, kleur, beglazing en andere opties. Na het inmeten ontvangt u binnen enkele 
        werkdagen een gedetailleerde offerte.
      </p>
    </>
  );

  return (
    <SubpageTemplate
      title="Kunststof Kozijnen Inmeten"
      metaDescription="Professioneel inmeten van kunststof kozijnen door ervaren specialisten. Gratis inmeetservice bij aankoop. Nauwkeurige metingen voor perfect passende kozijnen."
      canonicalUrl="/kunststof-kozijnen/services/inmeten"
      heroTitle="Kunststof Kozijnen Inmeten"
      heroDescription="Professioneel inmeten is de basis voor perfect passende kunststof kozijnen. Onze ervaren inmeeters zorgen voor nauwkeurige metingen en deskundig advies."
      mainImageUrl="/lovable-uploads/73d57948-a36b-408e-bb8c-aad91f4b7495.png"
      mainContent={mainContent}
      benefits={[
        "Gratis inmeten bij aankoop kozijnen",
        "Ervaren inmeeters met specialistische kennis",
        "Nauwkeurige meetapparatuur",
        "Gedetailleerd inmeetrapport",
        "Advies over kozijntypes tijdens inmeten",
        "Geen verrassingen achteraf dankzij correcte maten"
      ]}
      faqs={faqs}
      relatedItems={relatedServices}
      relatedItemsTitle="Gerelateerde diensten"
      relatedItemsType="diensten"
      breadcrumbTitle="Inmeten"
    />
  );
};

export default KozijnenInmeten;
