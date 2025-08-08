-- Check and fix constraints for cities table first
SELECT 
    schemaname, 
    tablename, 
    indexname, 
    indexdef 
FROM pg_indexes 
WHERE tablename = 'cities';

-- First let's fix the migration with proper constraints check
DO $$
DECLARE
  overijssel_region_id UUID;
  service_id UUID;
BEGIN
  -- Check if Overijssel region exists
  SELECT id INTO overijssel_region_id FROM regions WHERE slug = 'overijssel';
  
  -- Insert Overijssel region if it doesn't exist
  IF overijssel_region_id IS NULL THEN
    INSERT INTO regions (name, slug) 
    VALUES ('Overijssel', 'overijssel')
    RETURNING id INTO overijssel_region_id;
  END IF;
  
  -- Get service ID for kunststof-kozijnen
  SELECT id INTO service_id FROM services WHERE slug = 'kunststof-kozijnen';
  
  -- Create service if it doesn't exist
  IF service_id IS NULL THEN
    INSERT INTO services (name, slug, description, meta_title, meta_description) 
    VALUES (
      'Kunststof Kozijnen',
      'kunststof-kozijnen',
      'Professionele kunststof kozijnen op maat, energiezuinig en duurzaam',
      'Kunststof Kozijnen Laten Plaatsen - Duurzaam Wonen Nederland',
      'Specialist in kunststof kozijnen. ✓ Gratis inmeten ✓ Vakkundige montage ✓ 10 jaar garantie. Vraag een vrijblijvende offerte aan!'
    )
    RETURNING id INTO service_id;
  ELSE
    -- Update existing service
    UPDATE services SET
      name = 'Kunststof Kozijnen',
      description = 'Professionele kunststof kozijnen op maat, energiezuinig en duurzaam',
      meta_title = 'Kunststof Kozijnen Laten Plaatsen - Duurzaam Wonen Nederland',
      meta_description = 'Specialist in kunststof kozijnen. ✓ Gratis inmeten ✓ Vakkundige montage ✓ 10 jaar garantie. Vraag een vrijblijvende offerte aan!'
    WHERE id = service_id;
  END IF;
  
  -- Insert cities one by one with proper error handling
  INSERT INTO cities (region_id, name, slug, description, meta_title, meta_description) 
  SELECT overijssel_region_id, 'Enschede', 'enschede', 'Kunststof kozijnen in Enschede', 'Kunststof Kozijnen Laten Plaatsen in Enschede (Overijssel) - Duurzaam Wonen Nederland', 'Specialist in kunststof kozijnen in Enschede. Profiteer van gratis inmeten, vakkundige montage en lokale expertise voor uw kozijnen in Enschede en omgeving.'
  WHERE NOT EXISTS (SELECT 1 FROM cities WHERE region_id = overijssel_region_id AND slug = 'enschede');
  
  INSERT INTO cities (region_id, name, slug, description, meta_title, meta_description) 
  SELECT overijssel_region_id, 'Hengelo', 'hengelo', 'Kunststof kozijnen in Hengelo', 'Kunststof Kozijnen Laten Plaatsen in Hengelo (Overijssel) - Duurzaam Wonen Nederland', 'Ontdek onze kunststof kozijnen in Hengelo, op maat gemaakt en professioneel geplaatst door lokale specialisten.'
  WHERE NOT EXISTS (SELECT 1 FROM cities WHERE region_id = overijssel_region_id AND slug = 'hengelo');
  
  INSERT INTO cities (region_id, name, slug, description, meta_title, meta_description) 
  SELECT overijssel_region_id, 'Almelo', 'almelo', 'Kunststof kozijnen in Almelo', 'Kunststof Kozijnen Laten Plaatsen in Almelo (Overijssel) - Duurzaam Wonen Nederland', 'Bekijk ons assortiment kozijnen en deuren voor woningen in Almelo en omgeving.'
  WHERE NOT EXISTS (SELECT 1 FROM cities WHERE region_id = overijssel_region_id AND slug = 'almelo');
  
  INSERT INTO cities (region_id, name, slug, description, meta_title, meta_description) 
  SELECT overijssel_region_id, 'Oldenzaal', 'oldenzaal', 'Kunststof kozijnen in Oldenzaal', 'Kunststof Kozijnen Laten Plaatsen in Oldenzaal (Overijssel) - Duurzaam Wonen Nederland', 'Premium kunststof kozijnen voor nieuwbouw en renovatie in Oldenzaal.'
  WHERE NOT EXISTS (SELECT 1 FROM cities WHERE region_id = overijssel_region_id AND slug = 'oldenzaal');
  
  INSERT INTO cities (region_id, name, slug, description, meta_title, meta_description) 
  SELECT overijssel_region_id, 'Losser', 'losser', 'Kunststof kozijnen in Losser', 'Kunststof Kozijnen Laten Plaatsen in Losser (Overijssel) - Duurzaam Wonen Nederland', 'Energiezuinige kozijnoplossingen voor woningen in Losser en omgeving.'
  WHERE NOT EXISTS (SELECT 1 FROM cities WHERE region_id = overijssel_region_id AND slug = 'losser');
  
  INSERT INTO cities (region_id, name, slug, description, meta_title, meta_description) 
  SELECT overijssel_region_id, 'Haaksbergen', 'haaksbergen', 'Kunststof kozijnen in Haaksbergen', 'Kunststof Kozijnen Laten Plaatsen in Haaksbergen (Overijssel) - Duurzaam Wonen Nederland', 'Duurzame kozijnen met uitstekende isolatiewaarden in Haaksbergen.'
  WHERE NOT EXISTS (SELECT 1 FROM cities WHERE region_id = overijssel_region_id AND slug = 'haaksbergen');
  
  INSERT INTO cities (region_id, name, slug, description, meta_title, meta_description) 
  SELECT overijssel_region_id, 'Glanerbrug', 'glanerbrug', 'Kunststof kozijnen in Glanerbrug', 'Kunststof Kozijnen Laten Plaatsen in Glanerbrug (Overijssel) - Duurzaam Wonen Nederland', 'Maatwerk kozijnen en montage voor woningen in Glanerbrug.'
  WHERE NOT EXISTS (SELECT 1 FROM cities WHERE region_id = overijssel_region_id AND slug = 'glanerbrug');
  
  -- Create city services for kunststof-kozijnen in all cities
  INSERT INTO city_services (city_id, service_id, is_active, benefits, features, pricing_info)
  SELECT 
    c.id,
    service_id,
    true,
    jsonb_build_array(
      jsonb_build_object('title', 'Gratis inmeten', 'description', 'Onze specialisten komen gratis bij u langs voor een professionele inmeting'),
      jsonb_build_object('title', 'Vakkundige montage', 'description', 'Ervaren monteurs zorgen voor een perfecte plaatsing van uw nieuwe kozijnen'),
      jsonb_build_object('title', '10 jaar garantie', 'description', 'Ruime garantieperiode voor volledige zekerheid over de kwaliteit'),
      jsonb_build_object('title', 'Energiezuinig', 'description', 'Uitstekende isolatiewaarden voor lagere energiekosten'),
      jsonb_build_object('title', 'Onderhoudsvriendelijk', 'description', 'Kunststof kozijnen zijn eenvoudig schoon te houden en behoeven weinig onderhoud'),
      jsonb_build_object('title', 'Lokale service', 'description', 'Snelle service en persoonlijk contact met onze lokale specialisten')
    ),
    jsonb_build_array(
      jsonb_build_object('title', 'Verschillende profielen', 'description', 'Keuze uit verschillende kozijnprofielen voor optimale isolatie'),
      jsonb_build_object('title', 'RAL kleuren', 'description', 'Breed kleurenpalet in alle RAL kleuren voor perfecte afstemming'),
      jsonb_build_object('title', 'Veiligheidsglas', 'description', 'Standaard HR++ beglazing voor optimale isolatie en veiligheid'),
      jsonb_build_object('title', 'Maatwerk', 'description', 'Alle kozijnen worden op maat gemaakt voor uw specifieke situatie')
    ),
    'Prijzen vanaf €300 per m². Exacte prijzen zijn afhankelijk van afmetingen, profielkeuze en bewerkingen. Vraag een vrijblijvende offerte aan voor een persoonlijk advies en scherpe prijzen.'
  FROM cities c 
  WHERE c.region_id = overijssel_region_id
  AND NOT EXISTS (SELECT 1 FROM city_services cs WHERE cs.city_id = c.id AND cs.service_id = service_id);
END $$;