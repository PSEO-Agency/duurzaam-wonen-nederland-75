
import React from 'react';
import SubpageTemplate from '@/components/templates/SubpageTemplate';

const relatedCities = [
  { title: 'Kunststof Kozijnen Hengelo', slug: '/kunststof-kozijnen/locaties/hengelo', excerpt: 'Ontdek onze kunststof kozijnen in Hengelo, op maat gemaakt en professioneel geplaatst.' },
  { title: 'Kunststof Kozijnen Almelo', slug: '/kunststof-kozijnen/locaties/almelo', excerpt: 'Bekijk ons assortiment kozijnen en deuren voor woningen in Almelo en omgeving.' },
  { title: 'Kunststof Kozijnen Oldenzaal', slug: '/kunststof-kozijnen/locaties/oldenzaal', excerpt: 'Premium kunststof kozijnen voor nieuwbouw en renovatie in Oldenzaal.' },
  { title: 'Kunststof Kozijnen Losser', slug: '/kunststof-kozijnen/locaties/losser', excerpt: 'Energiezuinige kozijnoplossingen voor woningen in Losser en omgeving.' },
  { title: 'Kunststof Kozijnen Haaksbergen', slug: '/kunststof-kozijnen/locaties/haaksbergen', excerpt: 'Duurzame kozijnen met uitstekende isolatiewaarden in Haaksbergen.' },
  { title: 'Kunststof Kozijnen Glanerbrug', slug: '/kunststof-kozijnen/locaties/glanerbrug', excerpt: 'Maatwerk kozijnen en montage voor woningen in Glanerbrug.' },
];

const KozijnenEnschede: React.FC = () => {
  const faqs = [
    {
      question: 'Waar kan ik in Enschede kunststof kozijnen bekijken?',
      answer: 'U kunt onze kunststof kozijnen bekijken in onze showroom in Enschede. Hier kunt u verschillende modellen, kleuren en afwerkingen zien en voelen. Onze adviseurs staan klaar om al uw vragen te beantwoorden.'
    },
    {
      question: 'Hoe snel kunnen kunststof kozijnen in Enschede geleverd worden?',
      answer: 'Na bestelling hebben we gemiddeld 4-6 weken productietijd nodig voor kunststof kozijnen in Enschede. De exacte levertijd is afhankelijk van het seizoen en de drukte. We bespreken de planning altijd vooraf met u zodat u weet waar u aan toe bent.'
    },
    {
      question: 'Zijn er specifieke regelgeving voor kozijnen in Enschede?',
      answer: 'In sommige wijken in Enschede, vooral in beschermde stadsgezichten, kunnen er specifieke eisen gelden voor kozijnen. We zijn volledig op de hoogte van lokale regelgeving en zorgen ervoor dat onze producten en installaties hieraan voldoen.'
    },
    {
      question: 'Wat kost het inmeten van kozijnen in Enschede?',
      answer: 'Het inmeten van kozijnen in Enschede is gratis wanneer u besluit om bij ons te kopen. Als u alleen een inmeetservice wenst, rekenen we een voorrijkosten en uurtarief dat afhankelijk is van de omvang van het project.'
    },
    {
      question: 'Hoe lang is de garantie op kunststof kozijnen in Enschede?',
      answer: 'Wij bieden 10 jaar garantie op onze kunststof kozijnen in Enschede. Deze garantie dekt fabrieksfouten, verkleuring en functionele gebreken. Op het hang- en sluitwerk geldt een garantie van 2 jaar.'
    }
  ];

  const mainContent = (
    <>
      <h2 className="text-3xl font-bold mb-6">Kunststof Kozijnen in Enschede</h2>
      <p className="text-lg text-gray-700 mb-6">
        Op zoek naar hoogwaardige kunststof kozijnen in Enschede? Duurzaam Wonen Nederland is uw specialist voor energie-efficiënte, 
        onderhoudsarme en stijlvolle kozijnoplossingen in Enschede en omgeving. Met jarenlange ervaring in de regio kennen wij de lokale 
        woningbouw en architectuur als geen ander.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Waarom kunststof kozijnen in Enschede?</h3>
      <p className="text-gray-700 mb-6">
        Enschede kent een divers woningbestand, van historische panden in het centrum tot moderne nieuwbouwwijken. Kunststof kozijnen 
        zijn voor alle type woningen een uitstekende keuze dankzij hun uitstekende isolatiewaarden, wat in het Twentse klimaat met 
        koude winters en warme zomers een groot voordeel biedt.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Onze diensten in Enschede</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>Gratis inmeten en vrijblijvend advies aan huis</li>
        <li>Op maat gemaakte kunststof kozijnen voor nieuwbouw en renovatie</li>
        <li>Professionele montage door ervaren vakmensen uit de regio</li>
        <li>Breed assortiment aan kozijnen, deuren en schuifpuien</li>
        <li>Showroom in Enschede waar u materialen en kleuren kunt bekijken</li>
        <li>Onderhoud en reparatie van bestaande kozijnen</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Lokale expertise</h3>
      <p className="text-gray-700 mb-6">
        Als lokale specialist begrijpen we de specifieke uitdagingen van woningen in Enschede. We werken samen met lokale 
        aannemers en architecten en zijn bekend met de gemeentelijke regels en vergunningsprocedures. Dit zorgt voor een 
        soepel verloop van uw kozijnproject, van ontwerp tot installatie.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Duurzaamheid in Enschede</h3>
      <p className="text-gray-700 mb-6">
        Enschede heeft ambitieuze duurzaamheidsdoelen. Met onze energiebesparende kozijnen draagt u bij aan een duurzamer 
        Enschede én profiteert u van lagere energiekosten. In veel gevallen komt u in aanmerking voor lokale subsidies voor 
        verduurzaming van uw woning. Vraag onze adviseurs naar de mogelijkheden.
      </p>
    </>
  );

  return (
    <SubpageTemplate
      title="Kunststof Kozijnen Enschede"
      metaDescription="Specialist in kunststof kozijnen in Enschede. Profiteer van gratis inmeten, vakkundige montage en lokale expertise voor uw kozijnen in Enschede en omgeving."
      canonicalUrl="/kunststof-kozijnen/locaties/enschede"
      heroTitle="Kunststof Kozijnen Enschede"
      heroDescription="Specialist in kunststof kozijnen voor Enschede en omgeving. Vakkundige montage, uitstekende service en lokale expertise voor uw nieuwe kozijnen."
      mainImageUrl="/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png"
      mainContent={mainContent}
      benefits={[
        "Gratis inmeten in Enschede",
        "Lokale monteurs met ervaring",
        "Perfecte isolatie voor het Twentse klimaat",
        "Kennis van lokale regelgeving",
        "10 jaar garantie op materiaal en montage",
        "Showroom in Enschede om kozijnen te bekijken"
      ]}
      faqs={faqs}
      relatedItems={relatedCities}
      relatedItemsTitle="Kunststof Kozijnen in andere plaatsen in Overijssel"
      relatedItemsType="locaties"
      breadcrumbTitle="Enschede"
    />
  );
};

export default KozijnenEnschede;
