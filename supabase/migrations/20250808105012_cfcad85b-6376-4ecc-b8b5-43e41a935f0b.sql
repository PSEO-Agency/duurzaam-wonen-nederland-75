-- Fix security warnings by setting search_path for functions
-- Drop existing functions and recreate with proper search_path

DROP FUNCTION IF EXISTS generate_slug(text);
DROP FUNCTION IF EXISTS update_project_slug();
DROP FUNCTION IF EXISTS set_new_project_slug();

-- Recreate functions with proper search_path
CREATE OR REPLACE FUNCTION generate_slug(input_text text)
RETURNS text 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  RETURN lower(
    regexp_replace(
      regexp_replace(
        regexp_replace(input_text, '[^a-zA-Z0-9\s-]', '', 'g'), -- Remove special chars
        '\s+', '-', 'g' -- Replace spaces with hyphens
      ),
      '-+', '-', 'g' -- Replace multiple hyphens with single
    )
  );
END;
$$;

CREATE OR REPLACE FUNCTION update_project_slug()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  -- Only update slug if title changed and slug is empty or title-based
  IF NEW.title IS DISTINCT FROM OLD.title THEN
    NEW.slug = public.generate_slug(NEW.title);
  END IF;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION set_new_project_slug()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug = public.generate_slug(NEW.title);
  END IF;
  RETURN NEW;
END;
$$;

-- Recreate triggers
DROP TRIGGER IF EXISTS trigger_update_project_slug ON public.projects;
DROP TRIGGER IF EXISTS trigger_set_new_project_slug ON public.projects;

CREATE TRIGGER trigger_update_project_slug
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION update_project_slug();

CREATE TRIGGER trigger_set_new_project_slug
  BEFORE INSERT ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION set_new_project_slug();