
-- Add preview_image field to products table for Services component display
ALTER TABLE public.products 
ADD COLUMN preview_image text;

-- Add comment to clarify the purpose of this field
COMMENT ON COLUMN public.products.preview_image IS 'Image used for displaying product cards in the Services component';
