
-- Create table for storing Open Graph images
CREATE TABLE public.og_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_type TEXT NOT NULL,
  page_slug TEXT,
  page_id UUID,
  image_url TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(page_type, page_slug, page_id)
);

-- Create storage bucket for Open Graph images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'og-images', 
  'og-images', 
  true, 
  5242880,
  ARRAY['image/png', 'image/jpeg', 'image/webp']
);

-- Create RLS policies for og_images table
ALTER TABLE public.og_images ENABLE ROW LEVEL SECURITY;

-- Allow public read access to og_images
CREATE POLICY "Public read access to og_images" 
  ON public.og_images 
  FOR SELECT 
  TO public
  USING (true);

-- Allow authenticated users to insert og_images
CREATE POLICY "Authenticated users can insert og_images" 
  ON public.og_images 
  FOR INSERT 
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update og_images
CREATE POLICY "Authenticated users can update og_images" 
  ON public.og_images 
  FOR UPDATE 
  TO authenticated
  USING (true);

-- Allow authenticated users to delete og_images
CREATE POLICY "Authenticated users can delete og_images" 
  ON public.og_images 
  FOR DELETE 
  TO authenticated
  USING (true);

-- Create storage policies for og-images bucket
CREATE POLICY "Public read access to og-images bucket"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'og-images');

CREATE POLICY "Authenticated users can upload to og-images bucket"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'og-images');

CREATE POLICY "Authenticated users can update og-images bucket"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'og-images');

CREATE POLICY "Authenticated users can delete from og-images bucket"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'og-images');

-- Add trigger to update updated_at column
CREATE TRIGGER update_og_images_updated_at
  BEFORE UPDATE ON public.og_images
  FOR EACH ROW
  EXECUTE FUNCTION public.update_timestamp();
