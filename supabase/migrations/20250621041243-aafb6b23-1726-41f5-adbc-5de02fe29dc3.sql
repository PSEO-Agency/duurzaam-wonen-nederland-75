
-- Update the Raamdecoratie product with certification logos and improved benefits stats
UPDATE products 
SET 
  hero_certification_logos = '[
    {"src": "/lovable-uploads/7cd55f75-0c54-4a64-be4e-5057e3c59694.png", "alt": "Politie Keurmerk Veilig Wonen", "title": "Politie Keurmerk Veilig Wonen"},
    {"src": "/lovable-uploads/46f89f87-b190-45ea-85ef-ee5be5a33fa4.png", "alt": "Nationaal Warmtefonds", "title": "Nationaal Warmtefonds"},
    {"src": "/lovable-uploads/f46d5a29-a82d-4971-8733-b8c51cdc8579.png", "alt": "CE Marking", "title": "CE Marking"},
    {"src": "/lovable-uploads/20b5ed0b-f1b4-4549-8a01-6179411d6ef7.png", "alt": "KOMO", "title": "KOMO"}
  ]'::json,
  benefits_stats = '[
    {"value": "200+", "label": "Raamdecoratie projecten"}, 
    {"value": "15 jaar", "label": "Productgarantie"}, 
    {"value": "50+", "label": "Kleuropties beschikbaar"}, 
    {"value": "99%", "label": "Klanten tevreden"}
  ]'::json,
  hero_badge = 'Specialist in Raamdecoratie'
WHERE slug = 'raamdecoratie';
