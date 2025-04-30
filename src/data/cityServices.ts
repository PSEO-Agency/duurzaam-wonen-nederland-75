
import { CityService } from "@/types/service";

// Sample city-services data - this would eventually come from a database
export const cityServices: CityService[] = [
  {
    id: "kozijnen-enschede",
    serviceId: "kunststof-kozijnen",
    cityId: "enschede",
    title: "Kunststof Kozijnen in Enschede",
    description: "Speciaal voor woningen in Enschede bieden wij hoogwaardige kunststof kozijnen aan die perfect aansluiten bij de lokale architectuur. Onze experts zijn vertrouwd met de specifieke eisen en stijlen van huizen in deze regio.",
    customContent: "<p>In Enschede zien we veel jaren '30 woningen en naoorlogse woningen die perfect passen bij onze traditionele kunststof kozijnen met houtnerf. Voor de modernere woningen in wijken zoals Roombeek adviseren wij vaak strakke kozijnen met minimalistisch design.</p><p>Onze adviseurs kennen de lokale regelgeving en eventuele vergunningseisen voor verschillende wijken in Enschede.</p>",
    metaTitle: "Kunststof Kozijnen in Enschede | Specialist in lokale plaatsing",
    metaDescription: "Op zoek naar kunststof kozijnen in Enschede? Onze lokale experts kennen de architectuur en regelgeving. Gratis advies aan huis. ✓ 10 jaar garantie"
  },
  {
    id: "schuifpuien-amsterdam",
    serviceId: "kunststof-schuifpuien",
    cityId: "amsterdam",
    title: "Kunststof Schuifpuien Amsterdam",
    description: "Voor de typische Amsterdamse woningen hebben wij speciale schuifpui-oplossingen ontwikkeld die passen bij zowel monumentale panden als moderne appartementen.",
    customFeatures: [
      {
        id: "historisch",
        title: "Passend bij historische panden",
        description: "Speciaal ontworpen om te passen bij de uitstraling van historische Amsterdamse panden, met behoud van authentieke details."
      }
    ],
    metaTitle: "Kunststof Schuifpuien voor Amsterdamse Woningen | Expert Advies",
    metaDescription: "Kunststof schuifpuien speciaal voor Amsterdamse woningen. Behoud van authentieke uitstraling met modern comfort. Vrijblijvende offerte. ✓ Vakkundige montage"
  }
];
