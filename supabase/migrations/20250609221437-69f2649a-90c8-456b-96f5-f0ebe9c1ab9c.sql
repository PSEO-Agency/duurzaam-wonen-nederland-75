
-- Disable RLS policies for products and product_categories tables
ALTER TABLE public.products DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_categories DISABLE ROW LEVEL SECURITY;

-- Insert the existing Kunststof Kozijnen content as a product
INSERT INTO public.product_categories (id, name, slug, description, is_active, sort_order) 
VALUES (
  gen_random_uuid(),
  'Kozijnen',
  'kozijnen',
  'Hoogwaardige kunststof kozijnen voor uw woning',
  true,
  1
) ON CONFLICT (slug) DO NOTHING;

-- Insert the Kunststof Kozijnen product with all the existing content
INSERT INTO public.products (
  name,
  slug,
  description,
  hero_title,
  hero_description,
  hero_image_url,
  intro_text,
  what_are_description,
  pricing_info,
  meta_title,
  meta_description,
  category_id,
  is_active,
  sort_order,
  benefits,
  features,
  faq,
  workflow_steps,
  quick_links
) VALUES (
  'Kunststof Kozijnen',
  'kunststof-kozijnen',
  'Ontdek onze hoogwaardige kunststof kozijnen die perfect passen bij uw woning. Duurzaam, energiezuinig en onderhoudsarm.',
  'Kunststof Kozijnen van Topkwaliteit',
  'Transformeer uw woning met onze premium kunststof kozijnen. Energiezuinig, duurzaam en stijlvol - precies wat u zoekt voor een comfortabel en modern thuis.',
  '/lovable-uploads/20b5ed0b-f1b4-4549-8a01-6179411d6ef7.png',
  'Kunststof kozijnen zijn de perfecte keuze voor moderne woningen. Ze bieden uitstekende isolatie, zijn onderhoudsarm en hebben een lange levensduur. Onze kozijnen worden gemaakt van hoogwaardig PVC-materiaal dat bestand is tegen alle weersomstandigheden.',
  'Kunststof kozijnen zijn raamkozijnen gemaakt van PVC (polyvinylchloride), een duurzaam en veelzijdig kunststofmateriaal. Deze kozijnen zijn speciaal ontworpen om optimale isolatie te bieden, waardoor uw energiekosten aanzienlijk kunnen dalen. Ze zijn verkrijgbaar in verschillende kleuren en stijlen om perfect aan te sluiten bij uw woninginrichting.',
  'De prijs van kunststof kozijnen varieert afhankelijk van de afmetingen, het type glas en eventuele extra opties. Gemiddeld kunt u rekenen op €400-800 per m². Vraag een vrijblijvende offerte aan voor een exact prijsoverzicht.',
  'Kunststof Kozijnen | Duurzaam Wonen',
  'Ontdek onze hoogwaardige kunststof kozijnen. ✓ Energiezuinig ✓ Onderhoudsarm ✓ 10 jaar garantie. Vraag direct een vrijblijvende offerte aan!',
  (SELECT id FROM public.product_categories WHERE slug = 'kozijnen' LIMIT 1),
  true,
  1,
  '[
    {
      "title": "Energiezuinig",
      "description": "Uitstekende isolatiewaarden zorgen voor lagere energiekosten en een comfortabel binnenklimaat het hele jaar door."
    },
    {
      "title": "Onderhoudsarm",
      "description": "Geen schilderen of speciaal onderhoud nodig. Eenvoudig schoon te maken met water en zeep."
    },
    {
      "title": "Duurzaam",
      "description": "Lange levensduur van 30+ jaar en volledig recyclebaar materiaal voor een duurzame keuze."
    },
    {
      "title": "Veilig",
      "description": "Standaard voorzien van veiligheidsbeslag en optioneel verkrijgbaar met inbraakwerend glas."
    },
    {
      "title": "Geluidswerend",
      "description": "Vermindert geluidshinder van buitenaf aanzienlijk voor een rustige woonomgeving."
    },
    {
      "title": "Stijlvol",
      "description": "Verkrijgbaar in vele kleuren en afwerkingen die passen bij elke woonstijl."
    }
  ]',
  '[
    {
      "title": "Meerkamerprofielen",
      "description": "Geavanceerde meerkamerconstructie voor optimale isolatie en stabiliteit."
    },
    {
      "title": "Hoogwaardig beslag",
      "description": "Duurzaam en soepel werkend beslag van topkwaliteit voor jarenlang gebruiksgemak."
    },
    {
      "title": "HR++ glas standaard",
      "description": "Standaard voorzien van HR++ beglazing voor maximale energie-efficiëntie."
    },
    {
      "title": "Waterafvoer systeem",
      "description": "Geïntegreerd waterafvoersysteem voorkomt vochtproblemen en condensatie."
    },
    {
      "title": "UV-bestendig",
      "description": "Kleurfast materiaal dat niet verkleurt door zonlicht en weer en wind."
    },
    {
      "title": "Geïntegreerde ventilatie",
      "description": "Optioneel verkrijgbaar met geïntegreerde ventilatieroosters voor gezond binnenklimaat."
    }
  ]',
  '[
    {
      "question": "Hoe lang gaan kunststof kozijnen mee?",
      "answer": "Kunststof kozijnen hebben een levensduur van 30-40 jaar bij normaal gebruik en goed onderhoud. Ze zijn bestand tegen alle weersomstandigheden en verkleuren niet."
    },
    {
      "question": "Welk onderhoud hebben kunststof kozijnen nodig?",
      "answer": "Minimaal onderhoud is vereist. Regelmatig schoonmaken met water en mild zeepsop is voldoende. Het beslag dient jaarlijks gesmeerd te worden."
    },
    {
      "question": "Kunnen kunststof kozijnen in elke kleur geleverd worden?",
      "answer": "Wij leveren kozijnen in een breed scala aan standaardkleuren. Voor speciale kleuren zijn er vaak mogelijkheden, vraag naar de opties."
    },
    {
      "question": "Wat is het verschil tussen HR+ en HR++ glas?",
      "answer": "HR++ glas heeft betere isolatiewaarden dan HR+ glas. HR++ is de huidige standaard en zorgt voor nog lagere energiekosten."
    },
    {
      "question": "Hoe lang duurt de montage van nieuwe kozijnen?",
      "answer": "De montage duurt gemiddeld 1-2 dagen, afhankelijk van het aantal kozijnen en de complexiteit van het project."
    }
  ]',
  '[
    {
      "step": 1,
      "title": "Vrijblijvende offerte",
      "description": "Wij komen langs voor een gratis adviesgesprek en opmeting. U ontvangt binnen 24 uur een gedetailleerde offerte."
    },
    {
      "step": 2,
      "title": "Maatwerk ontwerp",
      "description": "Na akkoord op de offerte maken wij een technische tekening en bepalen we samen de exacte specificaties en kleuren."
    },
    {
      "step": 3,
      "title": "Productie",
      "description": "Uw kozijnen worden op maat geproduceerd in onze moderne fabriek. Dit duurt gemiddeld 2-3 weken."
    },
    {
      "step": 4,
      "title": "Professionele montage",
      "description": "Onze ervaren monteurs plaatsen uw nieuwe kozijnen vakkundig en zorgen voor een perfecte afwerking."
    },
    {
      "step": 5,
      "title": "Oplevering en garantie",
      "description": "Na de montage controleren wij alles samen met u. U ontvangt 10 jaar garantie op materiaal en montage."
    }
  ]',
  '[
    {
      "label": "Offerte aanvragen",
      "href": "/offerte"
    },
    {
      "label": "Bekijk projecten",
      "href": "/projecten"
    },
    {
      "label": "Contact opnemen",
      "href": "/contact"
    }
  ]'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  hero_title = EXCLUDED.hero_title,
  hero_description = EXCLUDED.hero_description,
  hero_image_url = EXCLUDED.hero_image_url,
  intro_text = EXCLUDED.intro_text,
  what_are_description = EXCLUDED.what_are_description,
  pricing_info = EXCLUDED.pricing_info,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  benefits = EXCLUDED.benefits,
  features = EXCLUDED.features,
  faq = EXCLUDED.faq,
  workflow_steps = EXCLUDED.workflow_steps,
  quick_links = EXCLUDED.quick_links;
