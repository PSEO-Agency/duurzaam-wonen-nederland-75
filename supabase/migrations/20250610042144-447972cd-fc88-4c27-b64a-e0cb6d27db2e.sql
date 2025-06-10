
-- Extend the products table to support all ServicePageTemplate configuration
ALTER TABLE products 
ADD COLUMN seo_title text,
ADD COLUMN seo_description text,
ADD COLUMN seo_canonical_url text,
ADD COLUMN hero_badge text,
ADD COLUMN hero_background_image text,
ADD COLUMN hero_primary_button_text text,
ADD COLUMN hero_primary_button_link text,
ADD COLUMN hero_secondary_button_text text,
ADD COLUMN hero_secondary_button_link text,
ADD COLUMN hero_guarantees json,
ADD COLUMN hero_certification_logos json,
ADD COLUMN introduction_title text,
ADD COLUMN introduction_content json,
ADD COLUMN introduction_quick_links json,
ADD COLUMN introduction_cta_text text,
ADD COLUMN introduction_cta_link text,
ADD COLUMN what_are_title text,
ADD COLUMN what_are_content json,
ADD COLUMN what_are_video_url text,
ADD COLUMN what_are_video_title text,
ADD COLUMN benefits_title text,
ADD COLUMN benefits_description text,
ADD COLUMN benefits_main_content json,
ADD COLUMN benefits_stats json,
ADD COLUMN benefits_cta_text text,
ADD COLUMN benefits_cta_link text,
ADD COLUMN options_title text,
ADD COLUMN options_description text,
ADD COLUMN options_categories json,
ADD COLUMN services_title text,
ADD COLUMN services_description text,
ADD COLUMN services_items json,
ADD COLUMN information_title text,
ADD COLUMN information_image text,
ADD COLUMN information_image_alt text,
ADD COLUMN information_tabs json,
ADD COLUMN information_did_you_know json,
ADD COLUMN faq_title text,
ADD COLUMN faq_description text,
ADD COLUMN show_regions boolean DEFAULT true,
ADD COLUMN template_type text DEFAULT 'service_page';

-- Update existing kunststof-schuifpuien product with current config data
UPDATE products 
SET 
  seo_title = 'Kunststof Schuifpuien | Duurzaam Wonen Nederland',
  seo_description = 'Bekijk ons assortiment kunststof schuifpuien. Hoogwaardige, energiezuinige en onderhoudsarme schuifpuien voor uw woning.',
  seo_canonical_url = 'https://duurzaamwonen.info/kunststof-schuifpuien',
  hero_badge = 'Specialist in kunststof schuifpuien',
  hero_title = 'Kunststof Schuifpuien - Duurzaam, Betaalbaar en Stijlvol',
  hero_description = 'Hoogwaardige, energiezuinige en onderhoudsarme kunststof schuifpuien voor uw woning. Met meer dan 20 jaar ervaring leveren wij kwaliteitsproducten die duurzaam en betrouwbaar zijn.',
  hero_background_image = '/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png',
  hero_primary_button_text = 'Offerte aanvragen',
  hero_primary_button_link = '/offerte',
  hero_secondary_button_text = 'Ontdek alles over kunststof schuifpuien',
  hero_secondary_button_link = '/kunststof-schuifpuien/types',
  hero_guarantees = '["10 jaar garantie", "Gratis advies", "Vakkundige montage"]'::json,
  hero_certification_logos = '[
    {"src": "/lovable-uploads/f1d54abc-69ab-4254-931b-2ff6d32891f1.png", "alt": "KOMO", "title": "KOMO-certificaat"},
    {"src": "/lovable-uploads/10906789-676e-4aef-b797-6bc0815255ea.png", "alt": "CE", "title": "CE-markering"},
    {"src": "/lovable-uploads/a680436d-6948-4799-a383-6aad791b1e0e.png", "alt": "PKVW", "title": "PKVW Keurmerk"},
    {"src": "/lovable-uploads/84861c8c-4187-4055-a956-1249dbe30fe3.png", "alt": "Warmtefonds", "title": "Nationaal Warmtefonds"},
    {"src": "/lovable-uploads/4d42855f-0a4b-48ef-b632-25f5f01975fc.png", "alt": "Schüco", "title": "Schüco"}
  ]'::json,
  introduction_title = 'Kunststof Schuifpuien - De Ideale Oplossing',
  introduction_content = '[
    "Kunststof schuifpuien zijn dé ideale keuze voor wie op zoek is naar een combinatie van duurzaamheid, betaalbaarheid en stijl. Met hun onderhoudsvrije eigenschappen, uitstekende isolatie en lange levensduur bieden ze een perfecte oplossing voor zowel moderne als traditionele woningen.",
    "Dankzij hun energiezuinige eigenschappen zorgen kunststof schuifpuien voor een betere isolatie, waardoor je minder warmte verliest en kunt besparen op stookkosten. Bovendien zijn ze onderhoudsvrij, wat betekent dat je geen tijd en geld kwijt bent aan schilderwerk of complexe reinigingsbeurten.",
    "Ontdek alles over kunststof schuifpuien, inclusief prijzen, montageopties en de vele kleurmogelijkheden, en maak vandaag nog een weloverwogen keuze!"
  ]'::json,
  introduction_quick_links = '[
    {"href": "#wat-zijn", "text": "Wat zijn Kunststof Schuifpuien?"},
    {"href": "#voordelen", "text": "Voordelen Kunststof Schuifpuien"},
    {"href": "#diensten", "text": "Onze Oplossingen"},
    {"href": "#soorten", "text": "Soorten Kunststof Schuifpuien"},
    {"href": "#kleuren", "text": "Verschillende Kleuren"},
    {"href": "#montage", "text": "Montage Opties"}
  ]'::json,
  introduction_cta_text = 'Vraag nu vrijblijvend een offerte aan',
  introduction_cta_link = '/offerte',
  what_are_title = 'Wat zijn Kunststof Schuifpuien?',
  what_are_content = '[
    "Kunststof schuifpuien zijn moderne, duurzame schuifpuien gemaakt van hoogwaardig PVC (polyvinylchloride). Ze bieden een uitstekend alternatief voor traditionele houten schuifpuien en worden steeds populairder vanwege hun lange levensduur, uitstekende isolatie-eigenschappen en minimale onderhoudsbehoefte.",
    "Door de unieke eigenschappen van kunststof zijn deze schuifpuien bestand tegen weersinvloeden, verkleuring en vervorming. Ze rotten of roesten niet en hoeven nooit geschilderd te worden."
  ]'::json,
  what_are_video_url = 'https://www.youtube.com/embed/9y33GNZbazw',
  what_are_video_title = 'Bekijk hoe kunststof schuifpuien uw woning transformeren',
  benefits_title = 'Voordelen van Kunststof Schuifpuien',
  benefits_description = 'Waarom kiezen voor kunststof schuifpuien? Kunststof schuifpuien zijn onderhoudsarm, energiezuinig en betaalbaar. Ze bieden uitstekende isolatie, helpen energiekosten te verlagen en gaan meer dan 30 jaar mee.',
  benefits_main_content = '["Ze zijn veelzijdig, beschikbaar in verschillende kleuren en stijlen, en vaak gemaakt van recyclebaar materiaal."]'::json,
  benefits_stats = '[
    {"value": "30+", "label": "Jaar levensduur zonder groot onderhoud"},
    {"value": "20%", "label": "Gemiddelde energiebesparing per jaar"},
    {"value": "100%", "label": "Recyclebaar materiaal voor duurzaamheid"},
    {"value": "0", "label": "Schilderbeurten nodig tijdens levensduur"}
  ]'::json,
  benefits_cta_text = 'Overweeg kunststof schuifpuien? Vraag vrijblijvend een offerte aan!',
  benefits_cta_link = '/offerte',
  services_title = 'Onze oplossingen',
  services_description = 'Duurzaam Wonen Nederland biedt een breed scala aan hoogwaardige verduurzamingsoplossingen',
  services_items = '[
    {
      "image": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      "title": "Kunststof kozijnen",
      "description": "Hoogwaardige kozijnen met uitstekende warmte- en geluidsisolatie.",
      "features": ["HR++ of triple glas", "Onderhoudsvrij", "Diverse kleuren en stijlen"],
      "linkText": "Meer informatie",
      "linkUrl": "/kunststof-kozijnen"
    },
    {
      "image": "/lovable-uploads/c5500638-e554-4499-8490-7c52a4ec2a55.png",
      "title": "Gevelbekleding",
      "description": "Duurzame gevelbekleding voor verbeterde isolatie en een moderne uitstraling.",
      "features": ["Onderhoudsarm", "64 kleuropties", "Verbetert isolatiewaarde"],
      "linkText": "Meer informatie",
      "linkUrl": "/gevelbekleding"
    }
  ]'::json,
  faq_title = 'Veelgestelde vragen',
  faq_description = 'Antwoorden op de meest gestelde vragen over onze kunststof schuifpuien.',
  template_type = 'service_page',
  show_regions = true
WHERE slug = 'kunststof-schuifpuien';

-- Insert the product if it doesn't exist
INSERT INTO products (
  name, slug, description, template_type,
  seo_title, seo_description, seo_canonical_url,
  hero_badge, hero_title, hero_description, hero_background_image,
  hero_primary_button_text, hero_primary_button_link,
  hero_secondary_button_text, hero_secondary_button_link,
  hero_guarantees, hero_certification_logos,
  introduction_title, introduction_content, introduction_quick_links,
  introduction_cta_text, introduction_cta_link,
  what_are_title, what_are_content, what_are_video_url, what_are_video_title,
  benefits_title, benefits_description, benefits_main_content, benefits_stats,
  benefits_cta_text, benefits_cta_link,
  services_title, services_description, services_items,
  faq_title, faq_description, show_regions
)
SELECT 
  'Kunststof Schuifpuien', 'kunststof-schuifpuien', 'Hoogwaardige kunststof schuifpuien', 'service_page',
  'Kunststof Schuifpuien | Duurzaam Wonen Nederland',
  'Bekijk ons assortiment kunststof schuifpuien. Hoogwaardige, energiezuinige en onderhoudsarme schuifpuien voor uw woning.',
  'https://duurzaamwonen.info/kunststof-schuifpuien',
  'Specialist in kunststof schuifpuien',
  'Kunststof Schuifpuien - Duurzaam, Betaalbaar en Stijlvol',
  'Hoogwaardige, energiezuinige en onderhoudsarme kunststof schuifpuien voor uw woning. Met meer dan 20 jaar ervaring leveren wij kwaliteitsproducten die duurzaam en betrouwbaar zijn.',
  '/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png',
  'Offerte aanvragen', '/offerte',
  'Ontdek alles over kunststof schuifpuien', '/kunststof-schuifpuien/types',
  '["10 jaar garantie", "Gratis advies", "Vakkundige montage"]'::json,
  '[
    {"src": "/lovable-uploads/f1d54abc-69ab-4254-931b-2ff6d32891f1.png", "alt": "KOMO", "title": "KOMO-certificaat"},
    {"src": "/lovable-uploads/10906789-676e-4aef-b797-6bc0815255ea.png", "alt": "CE", "title": "CE-markering"},
    {"src": "/lovable-uploads/a680436d-6948-4799-a383-6aad791b1e0e.png", "alt": "PKVW", "title": "PKVW Keurmerk"},
    {"src": "/lovable-uploads/84861c8c-4187-4055-a956-1249dbe30fe3.png", "alt": "Warmtefonds", "title": "Nationaal Warmtefonds"},
    {"src": "/lovable-uploads/4d42855f-0a4b-48ef-b632-25f5f01975fc.png", "alt": "Schüco", "title": "Schüco"}
  ]'::json,
  'Kunststof Schuifpuien - De Ideale Oplossing',
  '[
    "Kunststof schuifpuien zijn dé ideale keuze voor wie op zoek is naar een combinatie van duurzaamheid, betaalbaarheid en stijl. Met hun onderhoudsvrije eigenschappen, uitstekende isolatie en lange levensduur bieden ze een perfecte oplossing voor zowel moderne als traditionele woningen.",
    "Dankzij hun energiezuinige eigenschappen zorgen kunststof schuifpuien voor een betere isolatie, waardoor je minder warmte verliest en kunt besparen op stookkosten. Bovendien zijn ze onderhoudsvrij, wat betekent dat je geen tijd en geld kwijt bent aan schilderwerk of complexe reinigingsbeurten.",
    "Ontdek alles over kunststof schuifpuien, inclusief prijzen, montageopties en de vele kleurmogelijkheden, en maak vandaag nog een weloverwogen keuze!"
  ]'::json,
  '[
    {"href": "#wat-zijn", "text": "Wat zijn Kunststof Schuifpuien?"},
    {"href": "#voordelen", "text": "Voordelen Kunststof Schuifpuien"},
    {"href": "#diensten", "text": "Onze Oplossingen"},
    {"href": "#soorten", "text": "Soorten Kunststof Schuifpuien"},
    {"href": "#kleuren", "text": "Verschillende Kleuren"},
    {"href": "#montage", "text": "Montage Opties"}
  ]'::json,
  'Vraag nu vrijblijvend een offerte aan', '/offerte',
  'Wat zijn Kunststof Schuifpuien?',
  '[
    "Kunststof schuifpuien zijn moderne, duurzame schuifpuien gemaakt van hoogwaardig PVC (polyvinylchloride). Ze bieden een uitstekend alternatief voor traditionele houten schuifpuien en worden steeds populairder vanwege hun lange levensduur, uitstekende isolatie-eigenschappen en minimale onderhoudsbehoefte.",
    "Door de unieke eigenschappen van kunststof zijn deze schuifpuien bestand tegen weersinvloeden, verkleuring en vervorming. Ze rotten of roesten niet en hoeven nooit geschilderd te worden."
  ]'::json,
  'https://www.youtube.com/embed/9y33GNZbazw',
  'Bekijk hoe kunststof schuifpuien uw woning transformeren',
  'Voordelen van Kunststof Schuifpuien',
  'Waarom kiezen voor kunststof schuifpuien? Kunststof schuifpuien zijn onderhoudsarm, energiezuinig en betaalbaar. Ze bieden uitstekende isolatie, helpen energiekosten te verlagen en gaan meer dan 30 jaar mee.',
  '["Ze zijn veelzijdig, beschikbaar in verschillende kleuren en stijlen, en vaak gemaakt van recyclebaar materiaal."]'::json,
  '[
    {"value": "30+", "label": "Jaar levensduur zonder groot onderhoud"},
    {"value": "20%", "label": "Gemiddelde energiebesparing per jaar"},
    {"value": "100%", "label": "Recyclebaar materiaal voor duurzaamheid"},
    {"value": "0", "label": "Schilderbeurten nodig tijdens levensduur"}
  ]'::json,
  'Overweeg kunststof schuifpuien? Vraag vrijblijvend een offerte aan!', '/offerte',
  'Onze oplossingen',
  'Duurzaam Wonen Nederland biedt een breed scala aan hoogwaardige verduurzamingsoplossingen',
  '[
    {
      "image": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      "title": "Kunststof kozijnen",
      "description": "Hoogwaardige kozijnen met uitstekende warmte- en geluidsisolatie.",
      "features": ["HR++ of triple glas", "Onderhoudsvrij", "Diverse kleuren en stijlen"],
      "linkText": "Meer informatie",
      "linkUrl": "/kunststof-kozijnen"
    },
    {
      "image": "/lovable-uploads/c5500638-e554-4499-8490-7c52a4ec2a55.png",
      "title": "Gevelbekleding",
      "description": "Duurzame gevelbekleding voor verbeterde isolatie en een moderne uitstraling.",
      "features": ["Onderhoudsarm", "64 kleuropties", "Verbetert isolatiewaarde"],
      "linkText": "Meer informatie",
      "linkUrl": "/gevelbekleding"
    }
  ]'::json,
  'Veelgestelde vragen',
  'Antwoorden op de meest gestelde vragen over onze kunststof schuifpuien.',
  true
WHERE NOT EXISTS (SELECT 1 FROM products WHERE slug = 'kunststof-schuifpuien');
