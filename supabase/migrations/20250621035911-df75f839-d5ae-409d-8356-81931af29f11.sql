
-- Insert the Raamdecoratie product with Facebook link for Offerte button
INSERT INTO products (
  name,
  slug,
  description,
  seo_title,
  seo_description,
  seo_canonical_url,
  hero_badge,
  hero_title,
  hero_description,
  hero_background_image,
  hero_primary_button_text,
  hero_primary_button_link,
  hero_guarantees,
  benefits,
  hero_certification_logos,
  introduction_title,
  introduction_content,
  introduction_cta_text,
  introduction_cta_link,
  what_are_title,
  what_are_content,
  features,
  benefits_title,
  benefits_description,
  benefits_main_content,
  benefits_stats,
  benefits_cta_text,
  benefits_cta_link,
  options_title,
  options_description,
  options_categories,
  faq_title,
  faq_description,
  faq,
  is_active,
  sort_order,
  show_regions
) VALUES (
  'Raamdecoratie',
  'raamdecoratie',
  'Professionele raamdecoratie op maat voor uw woning. Van luxe gordijnen tot moderne jaloeziën en plisségordijnen.',
  'Raamdecoratie op Maat | Gordijnen, Jaloeziën & Plissé | Duurzaam Wonen',
  'Ontdek onze uitgebreide collectie raamdecoratie op maat. Gordijnen, jaloeziën, plisségordijnen en meer. Gratis advies en vakkundige montage.',
  'https://duurzaamwonen.info/raamdecoratie',
  'Specialist',
  'Raamdecoratie op Maat',
  'Transform uw woning met onze hoogwaardige raamdecoratie oplossingen. Van klassieke gordijnen tot moderne jaloeziën - alles op maat gemaakt.',
  '/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png',
  'Offerte via Facebook',
  'https://www.facebook.com/duurzaamwonen.info',
  '["15 jaar productgarantie", "Gratis advies aan huis", "Vakkundige montage"]'::json,
  '["Energiebesparend - Optimale isolatie", "Op maat gemaakt - Perfect passend", "Stijlvol design - Voor elke woonstijl"]'::json,
  '[]'::json,
  'Wat is Raamdecoratie?',
  '["Raamdecoratie omvat alle vormen van raambekleding die zowel functioneel als decoratief zijn. Van gordijnen en vitrage tot jaloeziën en plisségordijnen - elk type heeft zijn eigen voordelen en toepassingen.", "Onze raamdecoratie wordt volledig op maat gemaakt en vakkundig gemonteerd, zodat u verzekerd bent van een perfecte pasvorm en optimale functionaliteit."]'::json,
  'Vraag nu vrijblijvend een offerte aan',
  'https://www.facebook.com/duurzaamwonen.info',
  'Wat zijn de voordelen van professionele raamdecoratie?',
  '["Professionele raamdecoratie biedt veel meer dan alleen een mooie uitstraling. Het draagt bij aan de isolatie van uw woning, privacy en lichtregulering.", "Onze specialisten helpen u bij het kiezen van de juiste oplossing voor elke ruimte in uw huis."]'::json,
  '["Energie-efficiënt", "Privacy en comfort", "Lichtregulering", "Geluidsisolatie", "Onderhoudsvriendelijk", "Lange levensduur"]'::json,
  'Voordelen van Professionele Raamdecoratie',
  'Ontdek waarom duizenden klanten kiezen voor onze raamdecoratie oplossingen en hoe wij uw wooncomfort kunnen verbeteren.',
  '["Onze raamdecoratie helpt bij het reguleren van de temperatuur in uw woning, wat resulteert in lagere energiekosten.", "Door de juiste keuze van materialen en kleuren creëert u de perfecte sfeer in elke ruimte.", "Professionele montage zorgt voor een perfecte pasvorm en optimale functionaliteit."]'::json,
  '[{"value": "5000+", "label": "Tevreden klanten"}, {"value": "15 jaar", "label": "Productgarantie"}, {"value": "98%", "label": "Klanten bevelen ons aan"}, {"value": "24/7", "label": "Service beschikbaar"}]'::json,
  'Bekijk onze mogelijkheden!',
  'https://www.facebook.com/duurzaamwonen.info',
  'Onze Raamdecoratie Oplossingen',
  'Van klassiek tot modern - wij hebben de perfecte raamdecoratie voor elke woonstijl en elk budget.',
  '[
    {
      "title": "Gordijnen & Vitrage",
      "items": ["Klassieke gordijnen", "Moderne panelen", "Vitrage op maat", "Overgordijnen", "Dubbele lagen"]
    },
    {
      "title": "Jaloeziën",
      "items": ["Houten jaloeziën", "Aluminium jaloeziën", "Verticale lamellen", "Venetiaanse jaloeziën"]
    },
    {
      "title": "Plissé & Rolgordijnen",
      "items": ["Plisségordijnen", "Rolgordijnen", "Dag/nacht gordijnen", "Verduisterende gordijnen"]
    }
  ]'::json,
  'Veelgestelde Vragen',
  'De meest gestelde vragen over onze raamdecoratie oplossingen op een rij.',
  '[
    {
      "question": "Hoelang duurt de levering van mijn raamdecoratie?",
      "answer": "De levertijd varieert per product, maar gemiddeld kunt u rekenen op 2-4 weken na opmaak. Tijdens het adviesgesprek informeren wij u over de exacte levertijd."
    },
    {
      "question": "Kunnen jullie ook in het weekend monteren?",
      "answer": "Ja, wij bieden flexibele montagetijden aan, inclusief weekenden. Dit kunnen we tijdens de planning bespreken."
    },
    {
      "question": "Krijg ik garantie op mijn raamdecoratie?",
      "answer": "Ja, wij geven 15 jaar productgarantie op al onze raamdecoratie. Ook de montage heeft garantie."
    },
    {
      "question": "Kan ik eerst samples bekijken?",
      "answer": "Natuurlijk! Tijdens het gratis adviesgesprek brengen wij verschillende samples mee zodat u thuis kunt bekijken wat het beste bij uw interieur past."
    }
  ]'::json,
  true,
  0,
  true
);
