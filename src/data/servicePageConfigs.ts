import { ServicePageTemplateProps } from '@/components/templates/ServicePageTemplate';

// Example configuration for Kunststof Kozijnen page
export const kunststofKozijnenConfig: ServicePageTemplateProps = {
  seo: {
    title: "Kunststof Kozijnen | Duurzaam Wonen Nederland",
    description: "Bekijk ons assortiment kunststof kozijnen. Hoogwaardige, energiezuinige en onderhoudsarme kozijnen voor uw woning.",
    canonicalUrl: "https://duurzaamwonen.info/kunststof-kozijnen"
  },
  
  hero: {
    backgroundImage: "/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png",
    badge: "Specialist in kunststof kozijnen",
    title: "Kunststof Kozijnen - Duurzaam, Betaalbaar en Stijlvol",
    description: "Hoogwaardige, energiezuinige en onderhoudsarme kunststof kozijnen voor uw woning. Met meer dan 20 jaar ervaring leveren wij kwaliteitsproducten die duurzaam en betrouwbaar zijn.",
    primaryButtonText: "Offerte aanvragen",
    primaryButtonLink: "/offerte",
    secondaryButtonText: "Ontdek alles over kunststof kozijnen",
    secondaryButtonLink: "/kunststof-kozijnen/types",
    guarantees: ["10 jaar garantie", "Gratis advies", "Vakkundige montage"],
    benefits: [
      "Energiebesparend - Warmte blijft binnen",
      "Onderhoudsarm - Nooit meer schilderen",
      "Lange levensduur - 15 jaar fabrieksgarantie",
      "Uitstekende isolatie - Minder geluid",
      "Diverse kleuren en stijlen beschikbaar",
      "10 jaar service- en montagegarantie"
    ],
    certificationLogos: [
      {
        src: "/lovable-uploads/f1d54abc-69ab-4254-931b-2ff6d32891f1.png",
        alt: "KOMO",
        title: "KOMO-certificaat"
      },
      {
        src: "/lovable-uploads/10906789-676e-4aef-b797-6bc0815255ea.png",
        alt: "CE",
        title: "CE-markering"
      },
      {
        src: "/lovable-uploads/a680436d-6948-4799-a383-6aad791b1e0e.png",
        alt: "PKVW",
        title: "PKVW Keurmerk"
      },
      {
        src: "/lovable-uploads/84861c8c-4187-4055-a956-1249dbe30fe3.png",
        alt: "Warmtefonds",
        title: "Nationaal Warmtefonds"
      },
      {
        src: "/lovable-uploads/4d42855f-0a4b-48ef-b632-25f5f01975fc.png",
        alt: "Schüco",
        title: "Schüco"
      }
    ]
  },
  
  introduction: {
    title: "Kunststof Kozijnen - De Ideale Oplossing",
    content: [
      "Kunststof kozijnen zijn dé ideale keuze voor wie op zoek is naar een combinatie van duurzaamheid, betaalbaarheid en stijl. Met hun onderhoudsvrije eigenschappen, uitstekende isolatie en lange levensduur bieden ze een perfecte oplossing voor zowel moderne als traditionele woningen.",
      "Dankzij hun energiezuinige eigenschappen zorgen kunststof kozijnen voor een betere isolatie, waardoor je minder warmte verliest en kunt besparen op stookkosten. Bovendien zijn ze onderhoudsvrij, wat betekent dat je geen tijd en geld kwijt bent aan schilderwerk of complexe reinigingsbeurten.",
      "Ontdek alles over kunststof kozijnen, inclusief prijzen, montageopties en de vele kleurmogelijkheden, en maak vandaag nog een weloverwogen keuze!"
    ],
    quickLinks: [
      { href: "#wat-zijn", text: "Wat zijn Kunststof Kozijnen?" },
      { href: "#voordelen", text: "Voordelen Kunststof Kozijnen" },
      { href: "#diensten", text: "Onze Diensten" },
      { href: "#soorten", text: "Soorten Kunststof Kozijnen" },
      { href: "#kleuren", text: "Verschillende Kleuren" },
      { href: "#montage", text: "Montage Opties" }
    ],
    ctaText: "Vraag nu vrijblijvend een offerte aan",
    ctaLink: "/offerte"
  },
  
  whatAre: {
    title: "Wat zijn Kunststof Kozijnen?",
    content: [
      "Kunststof kozijnen zijn moderne, duurzame kozijnen gemaakt van hoogwaardig PVC (polyvinylchloride). Ze bieden een uitstekend alternatief voor traditionele houten kozijnen en worden steeds populairder vanwege hun lange levensduur, uitstekende isolatie-eigenschappen en minimale onderhoudsbehoefte.",
      "Door de unieke eigenschappen van kunststof zijn deze kozijnen bestand tegen weersinvloeden, verkleuring en vervorming. Ze rotten of roesten niet en hoeven nooit geschilderd te worden."
    ],
    features: [
      "Kunststof kozijnen zijn gemaakt van hoogwaardig PVC materiaal",
      "Ze bieden uitstekende thermische en geluidsisolatie",
      "Verkrijgbaar in diverse kleuren en afwerkingen, waaronder houtlook",
      "Duurzame en onderhoudsarme alternatief voor traditionele kozijnen",
      "Draagt bij aan energiebesparing en comfort in uw woning"
    ],
    videoUrl: "https://www.youtube.com/embed/9y33GNZbazw",
    videoTitle: "Bekijk hoe kunststof kozijnen uw woning transformeren"
  },
  
  benefits: {
    title: "Voordelen van Kunststof Kozijnen",
    description: "Waarom kiezen voor kunststof kozijnen? Kunststof kozijnen zijn onderhoudsarm, energiezuinig en betaalbaar. Ze bieden uitstekende isolatie, helpen energiekosten te verlagen en gaan meer dan 30 jaar mee.",
    mainContent: [
      "Ze zijn veelzijdig, beschikbaar in verschillende kleuren en stijlen, en vaak gemaakt van recyclebaar materiaal."
    ],
    stats: [
      { value: "30+", label: "Jaar levensduur zonder groot onderhoud" },
      { value: "20%", label: "Gemiddelde energiebesparing per jaar" },
      { value: "100%", label: "Recyclebaar materiaal voor duurzaamheid" },
      { value: "0", label: "Schilderbeurten nodig tijdens levensduur" }
    ],
    ctaText: "Overweeg kunststof kozijnen? Vraag vrijblijvend een offerte aan!",
    ctaLink: "/offerte"
  },
  
  options: {
    title: "Kunststof Kozijnen - Alle Opties",
    description: "Ontdek alle mogelijkheden voor kunststof kozijnen, van verschillende types en kleuren tot diverse afmetingen. Filter op uw specifieke wensen om het perfecte kozijn voor uw woning te vinden.",
    categories: [
      {
        title: "Type Kozijn",
        items: ["Vast kozijn", "Draai-kiep kozijn", "Schuifpui", "Stolpstel kozijn", "Harmonica kozijn"],
        linkText: "Bekijk alle types",
        linkUrl: "/kunststof-kozijnen/types"
      },
      {
        title: "Kleur Kozijn",
        items: ["Wit", "Zwart", "Antraciet", "Houtlook", "Grijs"],
        linkText: "Bekijk alle kleuren",
        linkUrl: "/kunststof-kozijnen/kleuren"
      },
      {
        title: "Kozijn Afmeting",
        items: ["100x100 cm", "200x100 cm", "300x100 cm", "400x100 cm", "Maatwerk"],
        linkText: "Bekijk alle afmetingen",
        linkUrl: "/kunststof-kozijnen/afmetingen"
      }
    ]
  },
  
  services: {
    title: "Onze Diensten",
    description: "Wij bieden een compleet pakket aan diensten voor uw kunststof kozijnen project.",
    serviceItems: [
      {
        image: "/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png",
        title: "Kunststof kozijnen",
        description: "Hoogwaardige kozijnen met uitstekende warmte- en geluidsisolatie.",
        features: ["HR++ of triple glas", "Onderhoudsvrij", "Diverse kleuren en stijlen"],
        linkText: "Meer informatie",
        linkUrl: "/kunststof-kozijnen"
      }
    ]
  },
  
  information: {
    title: "Informatie over kunststof kozijnen",
    image: "/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png",
    imageAlt: "Kunststof kozijn detail",
    tabs: [
      {
        id: "algemeen",
        title: "Algemeen",
        content: [
          "Kunststof kozijnen zijn een populaire keuze geworden voor huiseigenaren die op zoek zijn naar een duurzame, onderhoudsarme en energiebesparende oplossing voor hun woning.",
          "Onze kozijnen worden op maat gemaakt en kunnen worden voorzien van verschillende soorten beglazing, waaronder HR++, triple glas en geluidsisolerend glas."
        ]
      },
      {
        id: "materiaal",
        title: "Materiaal",
        content: [
          "De kunststof kozijnen worden gemaakt van hoogwaardig PVC. Dit materiaal is uiterst duurzaam, weerbestendig en heeft een lange levensduur.",
          "Onze kozijnen zijn verkrijgbaar in diverse kleuren en afwerkingen, waaronder houtnerf-uitvoeringen die niet te onderscheiden zijn van echte houten kozijnen."
        ]
      },
      {
        id: "montage",
        title: "Montage",
        content: [
          "De montage van kunststof kozijnen is precisiewerk dat door onze ervaren monteurs wordt uitgevoerd.",
          "Onze monteurs zorgen ervoor dat de kozijnen waterdicht worden geplaatst en goed worden aangesloten op de bestaande constructie."
        ]
      }
    ],
    didYouKnow: {
      title: "Wist u dat?",
      facts: [
        "Kunststof kozijnen kunnen tot 30% besparing opleveren op uw energierekening.",
        "Moderne kunststof kozijnen zijn 100% recyclebaar en daarmee een milieuvriendelijke keuze.",
        "De gemiddelde levensduur van kunststof kozijnen is minimaal 30 jaar.",
        "Kunststof kozijnen kunnen bijdragen aan een betere energielabel voor uw woning."
      ]
    }
  },
  
  faq: {
    title: "Veelgestelde vragen",
    description: "Antwoorden op de meest gestelde vragen over onze kunststof kozijnen.",
    questions: [
      {
        question: "Hoe lang gaan kunststof kozijnen mee?",
        answer: "Kunststof kozijnen hebben een gemiddelde levensduur van 30 tot 50 jaar, afhankelijk van de kwaliteit en het onderhoud. Onze kozijnen worden geleverd met garantie en zijn ontworpen voor een lange levensduur."
      },
      {
        question: "Zijn kunststof kozijnen onderhoudsvriendelijk?",
        answer: "Ja, kunststof kozijnen zijn zeer onderhoudsvriendelijk. Ze hoeven niet geschilderd te worden en een regelmatige schoonmaakbeurt met water en milde zeep is voldoende om ze in goede staat te houden."
      },
      {
        question: "Kan ik subsidie krijgen voor kunststof kozijnen?",
        answer: "In sommige gemeenten is het mogelijk subsidie te krijgen voor energiebesparende maatregelen, waaronder het plaatsen van kunststof kozijnen met hoogrendementsglas. Onze adviseurs kunnen u informeren over de actuele mogelijkheden in uw regio."
      }
    ]
  },
  
  showRegions: true
};

// You can create additional configurations for other service pages
export const aluminiumKozijnenConfig: ServicePageTemplateProps = {
  // Similar structure but with aluminium-specific content
  seo: {
    title: "Aluminium Kozijnen | Duurzaam Wonen Nederland",
    description: "Hoogwaardige aluminium kozijnen voor moderne woningen. Sterk, duurzaam en onderhoudsvriendelijk.",
    canonicalUrl: "https://duurzaamwonen.info/aluminium-kozijnen"
  },
  // ... rest of the configuration would be similar but with aluminium-specific content
  hero: {
    backgroundImage: "/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png",
    badge: "Specialist in aluminium kozijnen",
    title: "Aluminium Kozijnen - Modern en Duurzaam",
    description: "Hoogwaardige aluminium kozijnen die perfect passen bij moderne architectuur. Sterk, duurzaam en vrijwel onderhoudsvrij.",
    primaryButtonText: "Offerte aanvragen",
    primaryButtonLink: "/offerte",
    secondaryButtonText: "Bekijk aluminium opties",
    guarantees: ["10 jaar garantie", "Gratis advies", "Vakkundige montage"],
    benefits: [
      "Extreem sterk en stabiel",
      "Moderne uitstraling",
      "Minimaal onderhoud nodig",
      "Uitstekende isolatie mogelijk",
      "Diverse kleuren beschikbaar",
      "Lange levensduur"
    ],
    certificationLogos: [
      {
        src: "/lovable-uploads/f1d54abc-69ab-4254-931b-2ff6d32891f1.png",
        alt: "KOMO",
        title: "KOMO-certificaat"
      },
      {
        src: "/lovable-uploads/10906789-676e-4aef-b797-6bc0815255ea.png",
        alt: "CE",
        title: "CE-markering"
      }
    ]
  },
  // ... continue with other sections adapted for aluminium
  introduction: {
    title: "Aluminium Kozijnen - Modern en Stijlvol",
    content: [
      "Aluminium kozijnen staan bekend om hun moderne uitstraling en uitstekende duurzaamheid. Ze zijn de perfecte keuze voor wie houdt van strakke lijnen en eigentijdse architectuur.",
      "Met hun slanke profielen en sterke eigenschappen bieden aluminium kozijnen veel ontwerpvrijheid en kunnen ze grote glasoppervlakken aan zonder in te boeten aan stabiliteit."
    ],
    quickLinks: [
      { href: "#wat-zijn", text: "Wat zijn Aluminium Kozijnen?" },
      { href: "#voordelen", text: "Voordelen Aluminium Kozijnen" },
      { href: "#types", text: "Types Aluminium Kozijnen" }
    ],
    ctaText: "Vraag nu vrijblijvend een offerte aan",
    ctaLink: "/offerte"
  },
  // ... and so on for all other sections
  whatAre: {
    title: "Wat zijn Aluminium Kozijnen?",
    content: [
      "Aluminium kozijnen zijn gemaakt van hoogwaardig aluminium en staan bekend om hun sterkte, duurzaamheid en moderne uitstraling."
    ],
    features: [
      "Extreem sterk en stabiel materiaal",
      "Slanke profielen voor meer glas",
      "Uitstekende duurzaamheid",
      "Moderne en strakke uitstraling"
    ]
  },
  benefits: {
    title: "Voordelen van Aluminium Kozijnen",
    description: "Aluminium kozijnen bieden unieke voordelen voor moderne woningen.",
    mainContent: ["Ze zijn sterk, duurzaam en bieden veel ontwerpvrijheid."],
    stats: [
      { value: "50+", label: "Jaar levensduur" },
      { value: "100%", label: "Recyclebaar" },
      { value: "Minimaal", label: "Onderhoud nodig" },
      { value: "Modern", label: "Design" }
    ],
    ctaText: "Interesse in aluminium kozijnen?",
    ctaLink: "/offerte"
  },
  options: {
    title: "Aluminium Kozijn Opties",
    description: "Verschillende opties voor aluminium kozijnen.",
    categories: [
      {
        title: "Types",
        items: ["Draai-kiep", "Vast", "Schuifpui"],
        linkText: "Bekijk types",
        linkUrl: "/aluminium-kozijnen/types"
      }
    ]
  },
  services: {
    title: "Onze Aluminium Diensten",
    description: "Volledige service voor aluminium kozijnen.",
    serviceItems: [
      {
        image: "/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png",
        title: "Aluminium kozijnen",
        description: "Sterke en moderne kozijnen.",
        features: ["Sterk materiaal", "Modern design", "Duurzaam"],
        linkText: "Meer informatie",
        linkUrl: "/aluminium-kozijnen"
      }
    ]
  },
  information: {
    title: "Informatie over aluminium kozijnen",
    image: "/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png",
    imageAlt: "Aluminium kozijn",
    tabs: [
      {
        id: "algemeen",
        title: "Algemeen",
        content: ["Aluminium kozijnen zijn sterk en duurzaam."]
      }
    ],
    didYouKnow: {
      title: "Wist u dat?",
      facts: ["Aluminium is 100% recyclebaar."]
    }
  },
  faq: {
    title: "Veelgestelde vragen",
    description: "Vragen over aluminium kozijnen.",
    questions: [
      {
        question: "Zijn aluminium kozijnen duurzaam?",
        answer: "Ja, aluminium kozijnen zijn zeer duurzaam en gaan tot 50 jaar mee."
      }
    ]
  }
};
