
-- Update all products to have standardized certification logos
UPDATE products 
SET hero_certification_logos = '[
  {
    "src": "/lovable-uploads/10906789-676e-4aef-b797-6bc0815255ea.png",
    "alt": "Schuco Kozijnen",
    "title": "Schüco Kozijnen"
  },
  {
    "src": "/lovable-uploads/4d42855f-0a4b-48ef-b632-25f5f01975fc.png",
    "alt": "KOMO Keurmerk",
    "title": "KOMO Keurmerk"
  },
  {
    "src": "/lovable-uploads/a680436d-6948-4799-a383-6aad791b1e0e.png",
    "alt": "Politiekeurmerk",
    "title": "Politiekeurmerk"
  },
  {
    "src": "/lovable-uploads/84861c8c-4187-4055-a956-1249dbe30fe3.png",
    "alt": "Nationaal Warmtefonds",
    "title": "Nationaal Warmtefonds"
  },
  {
    "src": "/lovable-uploads/f1d54abc-69ab-4254-931b-2ff6d32891f1.png",
    "alt": "CE Keurmerk",
    "title": "CE Keurmerk"
  },
  {
    "src": "/lovable-uploads/98a9ef9a-6f19-4139-bb2b-e081b52e6637.png",
    "alt": "Keralit Keurmerk",
    "title": "Keralit Keurmerk"
  }
]'::json
WHERE is_active = true;

-- Remove secondary button data from all products
UPDATE products 
SET hero_secondary_button_text = NULL,
    hero_secondary_button_link = NULL
WHERE is_active = true;

-- Clear services_items to force use of all products in services section
UPDATE products 
SET services_items = '[]'::json
WHERE is_active = true;
