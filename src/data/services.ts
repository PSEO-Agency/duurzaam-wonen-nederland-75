
import { Service } from "@/types/service";

// Sample services data - this would eventually come from a database
export const services: Service[] = [
  {
    id: "kunststof-kozijnen",
    title: "Kunststof Kozijnen",
    slug: "kunststof-kozijnen",
    shortDescription: "Hoogwaardige kunststof kozijnen met uitstekende isolatie en onderhoudsvrij gebruik.",
    fullDescription: "Onze kunststof kozijnen bieden superieure isolatie, zijn volledig onderhoudsvrij en hebben een lange levensduur. Ze zijn verkrijgbaar in diverse stijlen en kleuren om perfect bij uw woning te passen.",
    imageUrl: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
    features: [
      {
        id: "isolatie",
        title: "Uitstekende isolatie",
        description: "Onze kozijnen hebben uitstekende isolatiewaarden die zorgen voor een comfortabeler huis en lagere energiekosten."
      },
      {
        id: "onderhoud",
        title: "Onderhoudsvrij",
        description: "Geen schilder- of schuurwerk meer nodig. Onze kunststof kozijnen behouden jarenlang hun kwaliteit zonder onderhoud."
      },
      {
        id: "kleuren",
        title: "Diverse kleuren",
        description: "Verkrijgbaar in diverse kleuren en afwerkingen, inclusief houtnerf-imitaties die nauwelijks van echt hout te onderscheiden zijn."
      }
    ],
    benefits: [
      "Verhoogde woningwaarde",
      "Energiebesparing",
      "Geluidsreductie",
      "Inbraakwerend"
    ],
    price: {
      startFrom: 500,
      currency: "EUR"
    }
  },
  {
    id: "kunststof-schuifpuien",
    title: "Kunststof Schuifpuien",
    slug: "kunststof-schuifpuien",
    shortDescription: "Ruime, lichtdoorlatende schuifpuien met uitstekende isolatiewaarden.",
    fullDescription: "Creëer een naadloze overgang tussen binnen en buiten met onze kunststof schuifpuien. Ze brengen licht en ruimte in uw woning, terwijl ze tegelijkertijd uitstekend isoleren.",
    imageUrl: "/lovable-uploads/c5500638-e554-4499-8490-7c52a4ec2a55.png",
    features: [
      {
        id: "ruimte",
        title: "Ruimtebesparend",
        description: "Schuifpuien nemen geen ruimte in beslag bij het openen, ideaal voor kleinere ruimtes."
      },
      {
        id: "isolatie",
        title: "Goede isolatie",
        description: "Hoogwaardige profielen en glas zorgen voor uitstekende thermische en geluidsiolatie."
      },
      {
        id: "veiligheid",
        title: "Veilig",
        description: "Voorzien van meerpuntsvergrendeling voor optimale inbraakwerendheid."
      }
    ],
    benefits: [
      "Meer lichtinval",
      "Naadloze overgang naar buiten",
      "Moderne uitstraling",
      "Waardevermeerdering woning"
    ],
    price: {
      startFrom: 1500,
      currency: "EUR"
    }
  },
  {
    id: "gevelbekleding",
    title: "Gevelbekleding",
    slug: "gevelbekleding",
    shortDescription: "Duurzame gevelbekleding voor een moderne uitstraling en verbeterde isolatie.",
    fullDescription: "Onze gevelbekleding beschermt uw woning tegen weer en wind, verbetert de isolatiewaarde en geeft uw woning een frisse, moderne uitstraling. Beschikbaar in diverse materialen en meer dan 60 kleuren.",
    imageUrl: "/lovable-uploads/c5500638-e554-4499-8490-7c52a4ec2a55.png",
    features: [
      {
        id: "onderhoud",
        title: "Onderhoudsarm",
        description: "Onze gevelbekleding heeft minimaal onderhoud nodig en blijft jaren mooi."
      },
      {
        id: "kleuren",
        title: "64 kleuropties",
        description: "Keuze uit 64 verschillende kleuren voor een perfecte match met uw woning."
      },
      {
        id: "isolatie",
        title: "Verbeterde isolatie",
        description: "Extra isolatielaag die de energieprestaties van uw woning verbetert."
      }
    ],
    benefits: [
      "Lagere energierekening",
      "Moderne uitstraling",
      "Bescherming tegen weersinvloeden",
      "Waardevermeerdering woning"
    ],
    price: {
      startFrom: 100,
      currency: "EUR"
    }
  }
];
