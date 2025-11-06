-- Add image_url column to colors table
ALTER TABLE colors ADD COLUMN IF NOT EXISTS image_url text;