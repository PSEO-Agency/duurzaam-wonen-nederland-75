
-- First, let's clear existing data properly by handling ALL foreign key constraints
-- Delete city_services first (they reference cities)
DELETE FROM public.city_services;

-- Delete neighborhoods (they reference cities)
DELETE FROM public.neighborhoods;

-- Delete cities (they reference regions)
DELETE FROM public.cities;

-- Then delete regions
DELETE FROM public.regions;

-- Insert the regions
INSERT INTO public.regions (name, slug) VALUES
('Utrecht', 'utrecht'),
('Groningen', 'groningen'),
('Gelderland', 'gelderland'),
('Flevoland', 'flevoland'),
('Overijssel', 'overijssel'),
('Friesland', 'friesland'),
('Drenthe', 'drenthe');

-- Insert cities with their corresponding regions
INSERT INTO public.cities (name, slug, region_id, description) VALUES
-- Utrecht region cities
('Utrecht', 'utrecht', (SELECT id FROM regions WHERE slug = 'utrecht'), 'Hoofdstad van de provincie Utrecht'),
('Amersfoort', 'amersfoort', (SELECT id FROM regions WHERE slug = 'utrecht'), 'Historische stad in het hart van Nederland'),
('Veenendaal', 'veenendaal', (SELECT id FROM regions WHERE slug = 'utrecht'), 'Groene stad in de Gelderse Vallei'),
('Nieuwegein', 'nieuwegein', (SELECT id FROM regions WHERE slug = 'utrecht'), 'Moderne stad nabij Utrecht'),
('Zeist', 'zeist', (SELECT id FROM regions WHERE slug = 'utrecht'), 'Bosrijke gemeente in Utrecht'),
('Houten', 'houten', (SELECT id FROM regions WHERE slug = 'utrecht'), 'Fietsstad bij Utrecht'),
('Soest', 'soest', (SELECT id FROM regions WHERE slug = 'utrecht'), 'Natuurlijke gemeente op de Utrechtse Heuvelrug'),
('Woerden', 'woerden', (SELECT id FROM regions WHERE slug = 'utrecht'), 'Kaasstad in het Groene Hart'),
('IJsselstein', 'ijsselstein', (SELECT id FROM regions WHERE slug = 'utrecht'), 'Historische stad aan de rivier de Hollandse IJssel'),
('De Bilt', 'de-bilt', (SELECT id FROM regions WHERE slug = 'utrecht'), 'Groene gemeente nabij Utrecht'),

-- Groningen region cities
('Groningen', 'groningen', (SELECT id FROM regions WHERE slug = 'groningen'), 'Studentenstad en hoofdstad van het noorden'),
('Hoogezand-Sappemeer', 'hoogezand-sappemeer', (SELECT id FROM regions WHERE slug = 'groningen'), 'Gemeente in Oost-Groningen'),
('Veendam', 'veendam', (SELECT id FROM regions WHERE slug = 'groningen'), 'Stad in Oost-Groningen'),

-- Gelderland region cities
('Arnhem', 'arnhem', (SELECT id FROM regions WHERE slug = 'gelderland'), 'Hoofdstad van Gelderland'),
('Nijmegen', 'nijmegen', (SELECT id FROM regions WHERE slug = 'gelderland'), 'Oudste stad van Nederland'),
('Apeldoorn', 'apeldoorn', (SELECT id FROM regions WHERE slug = 'gelderland'), 'Stad nabij het Nationaal Park Hoge Veluwe'),
('Ede', 'ede', (SELECT id FROM regions WHERE slug = 'gelderland'), 'Gemeente op de Veluwe'),
('Zutphen', 'zutphen', (SELECT id FROM regions WHERE slug = 'gelderland'), 'Hanzestad aan de IJssel'),
('Doetinchem', 'doetinchem', (SELECT id FROM regions WHERE slug = 'gelderland'), 'Stad in de Achterhoek'),
('Tiel', 'tiel', (SELECT id FROM regions WHERE slug = 'gelderland'), 'Fruitstad in de Betuwe'),
('Wageningen', 'wageningen', (SELECT id FROM regions WHERE slug = 'gelderland'), 'Universiteitstad in de Betuwe'),
('Wijchen', 'wijchen', (SELECT id FROM regions WHERE slug = 'gelderland'), 'Gemeente nabij Nijmegen'),
('Harderwijk', 'harderwijk', (SELECT id FROM regions WHERE slug = 'gelderland'), 'Historische Hanzestad aan het Veluwemeer'),
('Barneveld', 'barneveld', (SELECT id FROM regions WHERE slug = 'gelderland'), 'Kippenhoofdstad van Nederland'),
('Culemborg', 'culemborg', (SELECT id FROM regions WHERE slug = 'gelderland'), 'Historische stad in de Betuwe'),
('Nijkerk', 'nijkerk', (SELECT id FROM regions WHERE slug = 'gelderland'), 'Gemeente op de grens van Gelderland en Utrecht'),

-- Flevoland region cities
('Almere', 'almere', (SELECT id FROM regions WHERE slug = 'flevoland'), 'Grootste stad van Flevoland'),
('Lelystad', 'lelystad', (SELECT id FROM regions WHERE slug = 'flevoland'), 'Hoofdstad van Flevoland'),

-- Overijssel region cities
('Enschede', 'enschede', (SELECT id FROM regions WHERE slug = 'overijssel'), 'Technologiestad in Twente'),
('Zwolle', 'zwolle', (SELECT id FROM regions WHERE slug = 'overijssel'), 'Hanzestad en hoofdstad van Overijssel'),
('Deventer', 'deventer', (SELECT id FROM regions WHERE slug = 'overijssel'), 'Hanzestad aan de IJssel'),
('Almelo', 'almelo', (SELECT id FROM regions WHERE slug = 'overijssel'), 'Textielstad in Twente'),
('Hengelo', 'hengelo', (SELECT id FROM regions WHERE slug = 'overijssel'), 'Industriestad in Twente'),
('Oldenzaal', 'oldenzaal', (SELECT id FROM regions WHERE slug = 'overijssel'), 'Grensstad in Twente'),
('Kampen', 'kampen', (SELECT id FROM regions WHERE slug = 'overijssel'), 'Hanzestad aan de IJssel'),
('Rijssen', 'rijssen', (SELECT id FROM regions WHERE slug = 'overijssel'), 'Gemeente in Twente'),

-- Friesland region cities
('Leeuwarden', 'leeuwarden', (SELECT id FROM regions WHERE slug = 'friesland'), 'Hoofdstad van Friesland'),
('Drachten', 'drachten', (SELECT id FROM regions WHERE slug = 'friesland'), 'Grootste gemeente van Smallingerland'),
('Sneek', 'sneek', (SELECT id FROM regions WHERE slug = 'friesland'), 'Waterstad in Friesland'),
('Heerenveen', 'heerenveen', (SELECT id FROM regions WHERE slug = 'friesland'), 'Sportstad in Friesland'),

-- Drenthe region cities
('Assen', 'assen', (SELECT id FROM regions WHERE slug = 'drenthe'), 'Hoofdstad van Drenthe'),
('Emmen', 'emmen', (SELECT id FROM regions WHERE slug = 'drenthe'), 'Grootste stad van Drenthe'),
('Hoogeveen', 'hoogeveen', (SELECT id FROM regions WHERE slug = 'drenthe'), 'Gemeente in Zuid-Drenthe'),
('Meppel', 'meppel', (SELECT id FROM regions WHERE slug = 'drenthe'), 'Poort van Drenthe');
