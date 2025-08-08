-- Update SEO titles for product pages to match the new format
UPDATE products 
SET seo_title = CASE 
  WHEN slug = 'gevelbekleding' THEN 'Gevelbekleding Laten Plaatsen - Duurzaam Wonen Nederland'
  WHEN slug = 'dakkapel' THEN 'Dakkapel Laten Plaatsen - Duurzaam Wonen Nederland'
  WHEN slug = 'kunststof-deuren' THEN 'Kunststof Deuren Laten Plaatsen - Duurzaam Wonen Nederland'
  WHEN slug = 'hr-beglazing' THEN 'HR Beglazing Laten Plaatsen - Duurzaam Wonen Nederland'
  ELSE seo_title
END
WHERE slug IN ('gevelbekleding', 'dakkapel', 'kunststof-deuren', 'hr-beglazing');