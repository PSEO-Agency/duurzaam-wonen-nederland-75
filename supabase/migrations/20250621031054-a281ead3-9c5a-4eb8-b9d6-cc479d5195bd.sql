
-- Insert the Raamdecoratie product into the products table
INSERT INTO public.products (
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
  'Ontdek onze stijlvolle raamdecoratie oplossingen voor uw woning. Van luxaflex tot gordijnen, wij bieden maatwerk raamdecoratie die perfect past bij uw interieur.',
  'Raamdecoratie op Maat | Luxaflex, Gordijnen & Jaloezieën | Duurzaam Wonen',
  'Professionele raamdecoratie op maat. Luxaflex, gordijnen, jaloezieën en meer. ✓ Gratis advies ✓ Vakkundige montage ✓ 15 jaar garantie. Vraag offerte aan!',
  'https://duurzaamwonen.info/raamdecoratie',
  'Raamdecoratie Specialist',
  'Stijlvolle Raamdecoratie op Maat',
  'Transform uw woning met onze hoogwaardige raamdecoratie oplossingen. Van luxaflex tot maatgordijnen - wij zorgen voor de perfecte afwerking van uw ramen.',
  'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
  'Offerte aanvragen',
  'https://m.facebook.com/people/Twents-Design/100094592253210/',
  '["Gratis advies & inmeten", "Vakkundige montage", "15 jaar productgarantie"]'::json,
  '["Energiebesparend - Warmte regulatie", "Stijlvol - Past bij elk interieur", "Onderhoudsarm - Makkelijk schoon te maken"]'::json,
  '[]'::json,
  'Raamdecoratie voor Elke Woning',
  '["Raamdecoratie speelt een cruciale rol in het creëren van sfeer en comfort in uw woning. Onze deskundige adviseurs helpen u bij het kiezen van de perfecte oplossing die past bij uw interieur en budget.", "Met meer dan 20 jaar ervaring in raamdecoratie, bieden wij een compleet assortiment van luxaflex, gordijnen, jaloezieën en screens. Alle producten worden op maat gemaakt en vakkundig gemonteerd."]'::json,
  'Bekijk onze mogelijkheden',
  'https://m.facebook.com/people/Twents-Design/100094592253210/',
  'Wat is Raamdecoratie?',
  '["Raamdecoratie omvat alle producten die gebruikt worden om ramen af te werken en te decoreren. Dit kunnen functionele oplossingen zijn zoals zonwering en privacy, of decoratieve elementen die bijdragen aan de sfeer van uw interieur.", "Moderne raamdecoratie combineert functionaliteit met esthiek. Denk aan lichtregulatie, privacy, isolatie en natuurlijk de uitstraling van uw woning."]'::json,
  '["Lichtregulatie naar wens", "Privacy bescherming", "Energie besparend", "Stijlvolle uitstraling", "Op maat gemaakt", "Vakkundige montage"]'::json,
  'Voordelen van Professionele Raamdecoratie',
  'Investeren in kwalitatieve raamdecoratie heeft vele voordelen voor uw woning en wooncomfort.',
  '["Onze raamdecoratie oplossingen bieden niet alleen een stijlvolle uitstraling, maar ook praktische voordelen zoals betere isolatie en lichtregulatie.", "Door de juiste keuze in raamdecoratie kunt u uw energiekosten verlagen en het comfort in uw woning aanzienlijk verhogen."]'::json,
  '[{"value": "15+", "label": "Jaar ervaring"}, {"value": "1000+", "label": "Tevreden klanten"}, {"value": "50+", "label": "Verschillende producten"}, {"value": "100%", "label": "Op maat gemaakt"}]'::json,
  'Bekijk onze mogelijkheden',
  'https://m.facebook.com/people/Twents-Design/100094592253210/',
  'Onze Raamdecoratie Oplossingen',
  'Wij bieden een breed scala aan raamdecoratie oplossingen, van moderne luxaflex tot klassieke gordijnen.',
  '[
    {
      "title": "Luxaflex & Jaloezieën",
      "items": ["Horizontale jaloezieën", "Verticale lamellen", "Houten jaloezieën", "Aluminium luxaflex"]
    },
    {
      "title": "Gordijnen & Vitrage",
      "items": ["Maatgordijnen", "Vitragegordijnen", "Gordijnrails", "Elektrische gordijnsystemen"]
    },
    {
      "title": "Screens & Zonwering",
      "items": ["Rolgordijnen", "Plissé gordijnen", "Zonwering screens", "Dubbele rolgordijnen"]
    }
  ]'::json,
  'Veelgestelde Vragen over Raamdecoratie',
  'Hier vindt u antwoorden op de meest gestelde vragen over onze raamdecoratie diensten.',
  '[
    {
      "question": "Hoe lang duurt de levering van maatwerk raamdecoratie?",
      "answer": "De levertijd voor maatwerk raamdecoratie is gemiddeld 2-3 weken na het plaatsen van de bestelling. Dit kan variëren afhankelijk van het gekozen product en de drukte."
    },
    {
      "question": "Bieden jullie ook montage aan?",
      "answer": "Ja, wij verzorgen altijd de professionele montage van uw raamdecoratie. Onze ervaren monteurs zorgen voor een perfecte afwerking."
    },
    {
      "question": "Kan ik eerst monsters zien van de materialen?",
      "answer": "Natuurlijk! Tijdens het gratis adviesgesprek nemen wij altijd monsters mee zodat u thuis de materialen en kleuren kunt bekijken."
    },
    {
      "question": "Wat kost raamdecoratie gemiddeld?",
      "answer": "De kosten variëren sterk per product en afmetingen. Luxaflex start vanaf €150 per raam, gordijnen vanaf €200 per raam. Voor een exacte prijsopgave maken wij graag een afspraak."
    },
    {
      "question": "Hebben jullie garantie op de raamdecoratie?",
      "answer": "Ja, wij bieden 15 jaar productgarantie op alle raamdecoratie producten en 5 jaar garantie op de montage."
    }
  ]'::json,
  true,
  6,
  true
);
