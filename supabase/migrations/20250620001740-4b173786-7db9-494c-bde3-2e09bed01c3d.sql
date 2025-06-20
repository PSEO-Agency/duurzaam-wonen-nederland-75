
-- First, let's check for duplicate Dakkapel products and remove them
DELETE FROM public.products 
WHERE slug = 'dakkapel' AND id != (
  SELECT id FROM public.products 
  WHERE slug = 'dakkapel' 
  ORDER BY created_at ASC 
  LIMIT 1
);

-- Fix the HR Beglazing product if it has corruption issues
UPDATE public.products 
SET 
  name = 'HR++(+) beglazing',
  slug = 'hr-beglazing',
  description = 'Hoogrendement beglazing voor optimale isolatie, comfort en energiebesparing in uw woning.',
  seo_title = 'HR++ en HR+++ Beglazing | Energiebesparend | Duurzaam Wonen Nederland',
  seo_description = 'HR++ en HR+++ beglazing voor maximale energiebesparing. ✓ Tot 50% minder warmteverlies ✓ Beter wooncomfort ✓ Condensvrij ✓ Geluidsreductie ✓ 15 jaar garantie.',
  seo_canonical_url = 'https://duurzaamwonen.info/hr-beglazing',
  hero_badge = 'Beglazing Specialist',
  hero_title = 'HR++ en HR+++ beglazing',
  hero_description = 'Bespaar energie en verhoog het wooncomfort met hoogrendement beglazing voor uw kozijnen.',
  hero_background_image = '/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png',
  hero_primary_button_text = 'Offerte aanvragen',
  hero_primary_button_link = '/offerte',
  hero_secondary_button_text = 'Meer informatie',
  hero_guarantees = '["15 jaar productgarantie", "Gratis advies", "10 jaar servicegarantie"]'::json,
  benefits = '["Aanzienlijke energiebesparing - Tot 50% minder warmteverlies", "Hoger wooncomfort - Geen koude straling", "Condensatie preventie - Droge ramen"]'::json,
  introduction_title = 'Waarom kiezen voor HR beglazing?',
  introduction_content = '["HR beglazing (hoogrendement beglazing) is een investering die zich snel terugbetaalt door lagere energiekosten en hoger wooncomfort. Het voorkomt condensatie, reduceert geluid en houdt warmte veel beter binnen.", "Of u nu kiest voor HR++ dubbel glas of HR+++ triple glas, beide varianten bieden aanzienlijke voordelen ten opzichte van gewoon glas en oude beglazing."]'::json,
  introduction_cta_text = 'Vraag nu vrijblijvend een offerte aan',
  introduction_cta_link = '/offerte',
  what_are_title = 'Wat is HR beglazing?',
  what_are_content = '["HR beglazing is hoogrendement isolatieglas waarbij de spouw tussen de glasplaten is gevuld met een edelgas (meestal argon) en voorzien van een speciale coating die warmtestraling tegenhoudt.", "HR++ bestaat uit twee glasplaten, HR+++ uit drie glasplaten. Beide hebben veel betere isolatiewaarden dan gewoon glas, waarbij HR+++ de beste prestaties levert."]'::json,
  benefits_title = 'Voordelen van HR beglazing',
  benefits_description = 'Ontdek hoe HR beglazing uw wooncomfort en portemonnee ten goede komt.',
  benefits_main_content = '["Aanzienlijke energiebesparing: HR++ bespaart tot 30% energie, HR+++ zelfs tot 50% vergeleken met gewoon glas.", "Hoger wooncomfort: Geen koude straling van ramen, warmere raampartijen en een gelijkmatigere temperatuur in huis.", "Condensatie preventie: Door warmere glasoppervlakken ontstaat er geen of nauwelijks condensatie op de ramen.", "Geluidsreductie: HR beglazing reduceert buitengeluid aanzienlijk voor een rustiger woonklimaat.", "Hogere woningwaarde: Energiezuinige beglazing verhoogt de waarde en het energielabel van uw woning."]'::json,
  benefits_stats = '[{"value": "50%", "label": "Energiebesparing"}, {"value": "30%", "label": "Geluidsreductie"}, {"value": "0°C", "label": "Geen condensatie"}]'::json,
  benefits_cta_text = 'Vraag vrijblijvend een offerte aan!',
  benefits_cta_link = '/offerte',
  options_title = 'HR beglazing types',
  options_description = 'Verschillende HR beglazing opties voor optimale prestaties.',
  options_categories = '[{"title": "HR++ dubbel glas", "items": ["U-waarde 1.1 W/m²K", "Argon gasvulling", "Low-E coating", "Standaard keuze"]}, {"title": "HR+++ triple glas", "items": ["U-waarde 0.6 W/m²K", "Maximale isolatie", "Drie glasplaten", "Topkwaliteit prestaties"]}, {"title": "HR beglazing plus", "items": ["Extra opties mogelijk", "Zonwering glas", "Geluidswerende uitvoering", "Veiligheidsglas opties"]}, {"title": "Speciale toepassingen", "items": ["Grote glaspartijen", "Gebogen glas", "Gekleurd glas", "Decoratieve uitvoeringen"]}]'::json,
  services_title = 'Onze HR beglazing diensten',
  services_description = 'Van glasvervanging tot complete kozijnvernieuwing.',
  services_items = '[{"title": "HR glas vervanging", "description": "Vervanging van oude beglazing door nieuwe HR beglazing", "image": "/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png", "features": ["Behoud bestaande kozijnen", "Snelle montage", "Directe besparing", "Minimale overlast"], "linkText": "Meer over glasvervanging", "linkUrl": "/hr-beglazing/vervanging"}, {"title": "Complete kozijn vernieuwing", "description": "Nieuwe kozijnen inclusief HR beglazing voor optimaal resultaat", "image": "/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png", "features": ["Nieuwe kozijnen", "HR++ of HR+++ glas", "Perfecte pasvorm", "Maximale prestaties"], "linkText": "Meer over kozijn vernieuwing", "linkUrl": "/hr-beglazing/kozijnen"}]'::json,
  information_title = 'Technische informatie',
  information_image = '/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png',
  information_image_alt = 'HR beglazing technische informatie',
  information_tabs = '[{"title": "Technische specificaties", "content": "HR++ heeft een U-waarde van 1.1 W/m²K, HR+++ van 0.6 W/m²K. Ter vergelijking: gewoon dubbel glas heeft een U-waarde van ongeveer 2.8 W/m²K."}, {"title": "Energiebesparing", "content": "HR++ bespaart 30-40% energie vergeleken met gewoon glas, HR+++ bespaart 45-55%. Dit betekent voor een gemiddelde woning €300-500 besparing per jaar."}, {"title": "Installatie", "content": "HR beglazing kan vaak in bestaande kozijnen worden geplaatst. Bij nieuwe kozijnen wordt het glas perfect afgestemd op het profielsysteem voor optimale prestaties."}, {"title": "Certificering", "content": "Al onze HR beglazing is gecertificeerd en voldoet aan de nieuwste Bouwbesluit eisen. We werken alleen met A-merk glasfabrikanten."}]'::json,
  information_did_you_know = '[{"title": "Wist u dat?", "content": "HR+++ beglazing kan tot 55% energie besparen vergeleken met gewoon glas en voorkomt condensatie volledig door de warmere glasoppervlakken."}]'::json,
  faq_title = 'Veelgestelde vragen',
  faq_description = 'Antwoorden op de meest gestelde vragen over HR beglazing.',
  faq = '[{"question": "Wat is het verschil tussen HR++ en HR+++?", "answer": "HR++ is dubbel glas met één Low-E coating, HR+++ is triple glas met twee coatings. HR+++ isoleert beter maar is wel duurder."}, {"question": "Kan HR beglazing in mijn bestaande kozijnen?", "answer": "Vaak wel, mits de kozijnen in goede staat zijn en diep genoeg voor het dikkere glas. Wij beoordelen dit graag voor u."}, {"question": "Hoeveel bespaar ik met HR beglazing?", "answer": "Gemiddeld €300-500 per jaar voor een rijtjeswoning, afhankelijk van het huidige glas en de grootte van de ramen."}, {"question": "Hoe lang gaat HR beglazing mee?", "answer": "HR beglazing heeft een levensduur van 20-25 jaar. De isolatieprestaties blijven gedurende deze periode goed."}]'::json,
  show_regions = true,
  is_active = true,
  template_type = 'service_page',
  updated_at = now()
WHERE slug = 'hr-beglazing';

-- Ensure all our target products exist and are active
UPDATE public.products 
SET 
  is_active = true,
  updated_at = now()
WHERE slug IN ('gevelbekleding', 'hr-beglazing', 'dakkapel', 'kunststof-deuren');

-- Verify we have all the expected products
SELECT name, slug, is_active, template_type 
FROM public.products 
WHERE slug IN ('gevelbekleding', 'hr-beglazing', 'dakkapel', 'kunststof-deuren', 'kunststof-schuifpuien')
ORDER BY name;
