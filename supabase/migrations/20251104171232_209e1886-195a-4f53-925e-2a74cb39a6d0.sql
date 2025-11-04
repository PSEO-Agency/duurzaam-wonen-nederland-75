-- Create colors table
CREATE TABLE colors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  hex TEXT NOT NULL,
  ral_code TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  has_wood_texture BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE colors ENABLE ROW LEVEL SECURITY;

-- RLS policies
CREATE POLICY "Public can read colors"
  ON colors FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admin can manage colors"
  ON colors FOR ALL
  USING (auth.uid() IS NOT NULL);

-- Create update trigger
CREATE TRIGGER update_colors_updated_at
  BEFORE UPDATE ON colors
  FOR EACH ROW
  EXECUTE FUNCTION update_timestamp();

-- Insert the 19 specified colors

-- Wit/Crème (with wood texture)
INSERT INTO colors (name, slug, hex, ral_code, category, sort_order, has_wood_texture) VALUES
('Crème', 'creme', '#f1e0d6', 'RAL 9001', 'white', 1, true),
('Wit', 'wit-9016', '#f6f6f6', 'RAL 9016', 'white', 2, true),
('Wit', 'wit-9010', '#f1ece1', 'RAL 9010', 'white', 3, true);

-- Grijstinten
INSERT INTO colors (name, slug, hex, ral_code, category, sort_order) VALUES
('Antraciet', 'antraciet', '#383e42', 'RAL 7016', 'grey', 4),
('Zwartgrijs', 'zwartgrijs', '#32383b', 'RAL 7021', 'grey', 5),
('Basaltgrijs', 'basaltgrijs', '#5c5e5e', 'RAL 7012', 'grey', 6),
('Leigrijs', 'leigrijs', '#4b515d', 'RAL 7015', 'grey', 7);

-- Blauwtinten
INSERT INTO colors (name, slug, hex, ral_code, category, sort_order) VALUES
('Stahlblauw', 'stahlblauw', '#0a212f', 'RAL 5011', 'blue', 8),
('Monumentenblauw', 'monumentenblauw', '#001f3f', 'RAL 5004', 'blue', 9),
('Kobaltblauw', 'kobaltblauw', '#2a3756', 'RAL 5013', 'blue', 10);

-- Rest (groen, rood, beige, zwart)
INSERT INTO colors (name, slug, hex, ral_code, category, sort_order) VALUES
('Donkergroen', 'donkergroen', '#26392f', 'RAL 6009', 'green', 11),
('Monumentengroen', 'monumentengroen', '#5d7f6d', 'RAL 6064', 'green', 12),
('Mosgroen', 'mosgroen', '#284233', 'RAL 6005', 'green', 13),
('Wijnrood', 'wijnrood', '#6d2e35', 'RAL 3005', 'red', 14),
('Rood', 'rood', '#a2373b', 'RAL 3011', 'red', 15),
('Lichtrood', 'lichtrood', '#a03a3a', 'RAL 3002', 'red', 16),
('Grijsbeige', 'grijsbeige', '#9f9389', 'RAL 1019', 'beige', 17),
('Licht ivoor', 'licht-ivoor', '#e6d7b5', 'RAL 1015', 'beige', 18),
('Zwart', 'zwart', '#0e0e10', 'RAL 9005', 'black', 19);