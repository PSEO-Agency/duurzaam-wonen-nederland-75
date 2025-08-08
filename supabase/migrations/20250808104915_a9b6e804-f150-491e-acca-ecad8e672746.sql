-- Add slug column to projects table
ALTER TABLE public.projects ADD COLUMN slug text;

-- Create unique index on slug
CREATE UNIQUE INDEX idx_projects_slug ON public.projects(slug);

-- Function to generate slug from title
CREATE OR REPLACE FUNCTION generate_slug(input_text text)
RETURNS text AS $$
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
$$ LANGUAGE plpgsql;

-- Update existing projects with slugs based on their titles
UPDATE public.projects 
SET slug = generate_slug(title) 
WHERE slug IS NULL;

-- Make slug column non-nullable after populating it
ALTER TABLE public.projects ALTER COLUMN slug SET NOT NULL;

-- Add trigger to automatically generate slug when title changes
CREATE OR REPLACE FUNCTION update_project_slug()
RETURNS TRIGGER AS $$
BEGIN
  -- Only update slug if title changed and slug is empty or title-based
  IF NEW.title IS DISTINCT FROM OLD.title THEN
    NEW.slug = generate_slug(NEW.title);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_project_slug
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION update_project_slug();

-- Add trigger for new projects
CREATE OR REPLACE FUNCTION set_new_project_slug()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug = generate_slug(NEW.title);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_new_project_slug
  BEFORE INSERT ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION set_new_project_slug();