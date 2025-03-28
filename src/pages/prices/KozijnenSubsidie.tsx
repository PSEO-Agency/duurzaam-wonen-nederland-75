
import React from 'react';
import SubpageTemplate from '@/components/templates/SubpageTemplate';

const relatedPrices = [
  { title: 'Kozijnen Prijsoverzicht', slug: '/kunststof-kozijnen/prijzen', excerpt: 'Compleet overzicht van de prijzen voor verschillende typen kunststof kozijnen.' },
  { title: 'Kozijnen op Afbetaling', slug: '/kunststof-kozijnen/prijzen/afbetaling', excerpt: 'Informatie over flexibele financieringsmogelijkheden voor nieuwe kozijnen.' },
  { title: 'Budget Kozijnen', slug: '/kunststof-kozijnen/prijzen/budget', excerpt: 'Betaalbare kozijnoplossingen zonder in te leveren op kwaliteit.' },
  { title: 'Premium Kozijnen', slug: '/kunststof-kozijnen/prijzen/premium', excerpt: 'Hoogwaardige kozijnen met extra opties en uitgebreide garantie.' },
];

const KozijnenSubsidie: React.FC = () => {
  const faqs = [
    {
      question: 'Welke subsidies zijn er beschikbaar voor kunststof kozijnen?',
      answer: 'Er zijn verschillende subsidies beschikbaar, waaronder de ISDE (Investeringssubsidie Duurzame Energie), gemeentelijke subsidies voor woningverbetering, en provinciale energiebesparingssubsidies. Deze subsidies zijn specifiek gericht op energiebesparende maatregelen zoals hoogrendementsglas en goed isolerende kozijnen.'
    },
    {
      question: 'Hoeveel subsidie kan ik krijgen voor nieuwe kozijnen?',
      answer: 'Het subsidiebedrag varieert afhankelijk van de regeling en uw situatie. Bij de ISDE-regeling kunt u bijvoorbeeld tot €4.000 ontvangen voor isolatiemaatregelen waaronder kozijnen. Gemeentelijke subsidies bieden vaak tussen €500 en €2.000, afhankelijk van de totale investering en de te behalen energiebesparing.'
    },
    {
      question: 'Hoe vraag ik subsidie aan voor mijn kozijnen?',
      answer: 'De aanvraagprocedure verschilt per subsidieregeling. Voor ISDE moet u de subsidie aanvragen bij RVO (Rijksdienst voor Ondernemend Nederland) vóór aanvang van de werkzaamheden. Voor gemeentelijke subsidies dient u contact op te nemen met uw gemeente. Wij kunnen u tijdens het offerteproces adviseren over de beschikbare subsidies en helpen bij de aanvraag.'
    },
    {
      question: 'Kan ik subsidie krijgen voor kunststof kozijnen in een bestaande woning?',
      answer: 'Ja, de meeste subsidies voor kozijnen zijn juist gericht op verduurzaming van bestaande woningen. Voor nieuwbouwwoningen gelden vaak andere regelingen. Het is belangrijk dat uw nieuwe kozijnen voldoen aan de minimale isolatiewaarden die de subsidieverstrekker stelt, meestal een U-waarde van 1,0 W/m²K of lager.'
    },
    {
      question: 'Zijn er voorwaarden verbonden aan subsidies voor kozijnen?',
      answer: 'Ja, er zijn verschillende voorwaarden. Meestal moet u meerdere energiebesparende maatregelen combineren, moet een erkend bedrijf de werkzaamheden uitvoeren, en moet er een minimale isolatiewaarde worden behaald. Ook moet u doorgaans de subsidie aanvragen voordat u start met de werkzaamheden en moet u facturen en betalingsbewijzen kunnen overleggen.'
    }
  ];

  const mainContent = (
    <>
      <h2 className="text-3xl font-bold mb-6">Subsidie voor Kunststof Kozijnen</h2>
      <p className="text-lg text-gray-700 mb-6">
        De aanschaf van nieuwe, energiezuinige kunststof kozijnen is een significante investering in uw woning, 
        maar gelukkig zijn er verschillende subsidies beschikbaar die de kosten kunnen verlagen. 
        Deze pagina geeft een overzicht van de mogelijkheden om financiële ondersteuning te krijgen 
        voor uw kozijnproject.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Beschikbare subsidies</h3>
      <p className="text-gray-700 mb-6">
        Er zijn verschillende subsidies en regelingen waar u mogelijk gebruik van kunt maken:
      </p>

      <div className="mb-6">
        <h4 className="text-xl font-medium mb-2">ISDE-subsidie (Investeringssubsidie Duurzame Energie)</h4>
        <p className="text-gray-700">
          De ISDE is een landelijke subsidie voor energiebesparende maatregelen. Kozijnen met 
          HR++ of triple glas vallen onder isolatiemaatregelen die in aanmerking komen voor deze subsidie, 
          mits ze voldoen aan bepaalde isolatiewaarden.
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Subsidiebedrag:</strong> Tot €4.000, afhankelijk van de totale investering en het aantal vierkante meters.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-medium mb-2">Gemeentelijke subsidies</h4>
        <p className="text-gray-700">
          Veel gemeenten bieden lokale subsidies voor woningverbetering en verduurzaming. 
          Deze regelingen verschillen per gemeente, maar kunnen een aanzienlijke bijdrage leveren.
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Tip:</strong> Informeer bij uw gemeente naar de mogelijkheden of vraag ons naar 
          de regelingen in uw regio.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-medium mb-2">Provinciale regelingen</h4>
        <p className="text-gray-700">
          Sommige provincies hebben specifieke programma's voor energiebesparing, vaak in de vorm 
          van subsidies of gunstige leningen.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-medium mb-2">Btw-verlaging</h4>
        <p className="text-gray-700">
          Voor arbeidsloon bij isolatiewerkzaamheden aan woningen ouder dan 2 jaar kan het 
          verlaagde btw-tarief van 9% gelden, in plaats van 21%. Dit geldt voor het plaatsen 
          van isolerende beglazing, maar niet voor de materiaalkosten zelf.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Voorwaarden</h3>
      <p className="text-gray-700 mb-4">
        Om in aanmerking te komen voor subsidies gelden doorgaans de volgende voorwaarden:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>U moet eigenaar zijn van de woning</li>
        <li>De woning moet uw hoofdverblijf zijn (bestaande bouw)</li>
        <li>De kozijnen moeten voldoen aan specifieke isolatiewaarden (meestal U ≤ 1,0 W/m²K)</li>
        <li>De werkzaamheden moeten worden uitgevoerd door een erkend bedrijf</li>
        <li>Voor sommige regelingen moet u meerdere isolatiemaatregelen combineren</li>
        <li>U moet de subsidie aanvragen vóór aanvang van de werkzaamheden</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Hoe wij kunnen helpen</h3>
      <p className="text-gray-700 mb-6">
        Als specialist in kozijnen bieden wij ondersteuning bij het aanvragen van subsidies:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>We controleren welke subsidies voor u beschikbaar zijn</li>
        <li>We zorgen dat uw nieuwe kozijnen voldoen aan de voorwaarden</li>
        <li>We leveren de juiste technische specificaties en documentatie</li>
        <li>We helpen bij het indienen van de aanvraag (indien gewenst)</li>
        <li>We plannen de werkzaamheden in lijn met de subsidievereisten</li>
      </ul>
    </>
  );

  return (
    <SubpageTemplate
      title="Subsidie voor Kunststof Kozijnen"
      metaDescription="Informatie over beschikbare subsidies voor energiezuinige kunststof kozijnen. Ontdek hoe u tot €4.000 kunt besparen op uw kozijnen met ISDE en andere subsidieregelingen."
      canonicalUrl="/kunststof-kozijnen/prijzen/subsidie"
      heroTitle="Subsidie voor Kunststof Kozijnen"
      heroDescription="Bespaar tot €4.000 op uw nieuwe kozijnen. Ontdek welke subsidies beschikbaar zijn voor energiezuinige kunststof kozijnen en hoe wij u kunnen helpen bij het aanvragen."
      mainImageUrl="/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png"
      mainContent={mainContent}
      benefits={[
        "Tot €4.000 subsidie via ISDE-regeling",
        "Verlaagd btw-tarief mogelijk voor arbeidsloon",
        "Lokale subsidies beschikbaar in veel gemeenten",
        "Gratis subsidiecheck bij offerte",
        "Deskundige begeleiding bij aanvraag",
        "Gegarandeerd conform subsidie-eisen"
      ]}
      faqs={faqs}
      relatedItems={relatedPrices}
      relatedItemsTitle="Meer over kozijnprijzen"
      relatedItemsType="prijzen"
      breadcrumbTitle="Subsidie"
    />
  );
};

export default KozijnenSubsidie;
