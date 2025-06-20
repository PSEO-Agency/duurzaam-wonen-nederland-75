
-- First, let's clean up the duplicate Dakkapel entry
-- Keep only the one with the correct slug and better data
DELETE FROM public.products 
WHERE slug = 'dakkapel' AND id != (
  SELECT id FROM public.products 
  WHERE slug = 'dakkapel' 
  ORDER BY created_at ASC 
  LIMIT 1
);

-- Update products with specific quick links for each product
UPDATE public.products 
SET introduction_quick_links = '[
  {"href": "#wat-is-gevelbekleding", "text": "Wat is gevelbekleding?"},
  {"href": "#voordelen", "text": "Voordelen van gevelbekleding"},
  {"href": "#types", "text": "Types gevelbekleding"},
  {"href": "#montage", "text": "Montage proces"},
  {"href": "#onderhoud", "text": "Onderhoud en garantie"},
  {"href": "#offerte", "text": "Offerte aanvragen"}
]'::json
WHERE slug = 'gevelbekleding';

UPDATE public.products 
SET introduction_quick_links = '[
  {"href": "#wat-is-hr-beglazing", "text": "Wat is HR beglazing?"},
  {"href": "#voordelen", "text": "Voordelen HR++ en HR+++"},
  {"href": "#types", "text": "HR beglazing types"},
  {"href": "#energiebesparing", "text": "Energiebesparing"},
  {"href": "#installatie", "text": "Installatie proces"},
  {"href": "#offerte", "text": "Offerte aanvragen"}
]'::json
WHERE slug = 'hr-beglazing';

UPDATE public.products 
SET introduction_quick_links = '[
  {"href": "#wat-is-dakkapel", "text": "Wat is een dakkapel?"},
  {"href": "#voordelen", "text": "Voordelen van dakkapellen"},
  {"href": "#types", "text": "Types dakkapellen"},
  {"href": "#vergunningen", "text": "Vergunningen en regelgeving"},
  {"href": "#kosten", "text": "Kosten en financiering"},
  {"href": "#offerte", "text": "Offerte aanvragen"}
]'::json
WHERE slug = 'dakkapel';

UPDATE public.products 
SET introduction_quick_links = '[
  {"href": "#wat-zijn-kunststof-deuren", "text": "Wat zijn kunststof deuren?"},
  {"href": "#voordelen", "text": "Voordelen kunststof deuren"},
  {"href": "#types", "text": "Types en stijlen"},
  {"href": "#veiligheid", "text": "Veiligheid en isolatie"},
  {"href": "#montage", "text": "Montage en service"},
  {"href": "#offerte", "text": "Offerte aanvragen"}
]'::json
WHERE slug = 'kunststof-deuren';

-- Also update kunststof-schuifpuien if it exists
UPDATE public.products 
SET introduction_quick_links = '[
  {"href": "#wat-zijn-schuifpuien", "text": "Wat zijn schuifpuien?"},
  {"href": "#voordelen", "text": "Voordelen schuifpuien"},
  {"href": "#types", "text": "Types en afmetingen"},
  {"href": "#isolatie", "text": "Isolatie en comfort"},
  {"href": "#montage", "text": "Montage proces"},
  {"href": "#offerte", "text": "Offerte aanvragen"}
]'::json
WHERE slug = 'kunststof-schuifpuien';
