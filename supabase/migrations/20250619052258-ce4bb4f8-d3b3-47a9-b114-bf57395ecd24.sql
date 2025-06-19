
-- Enable Row Level Security on projects table (if not already enabled)
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist, then recreate them
DROP POLICY IF EXISTS "Anyone can view active projects" ON public.projects;
DROP POLICY IF EXISTS "Authenticated users can view all projects" ON public.projects;
DROP POLICY IF EXISTS "Authenticated users can insert projects" ON public.projects;
DROP POLICY IF EXISTS "Authenticated users can update projects" ON public.projects;
DROP POLICY IF EXISTS "Authenticated users can delete projects" ON public.projects;

-- Create policy to allow anyone to view active projects (for public display)
CREATE POLICY "Anyone can view active projects" ON public.projects
FOR SELECT USING (is_active = true);

-- Create policy to allow authenticated users to view all projects (for admin)
CREATE POLICY "Authenticated users can view all projects" ON public.projects
FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to insert projects
CREATE POLICY "Authenticated users can insert projects" ON public.projects
FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update projects
CREATE POLICY "Authenticated users can update projects" ON public.projects
FOR UPDATE USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to delete projects  
CREATE POLICY "Authenticated users can delete projects" ON public.projects
FOR DELETE USING (auth.role() = 'authenticated');

-- Create storage bucket for project images if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('project-images', 'project-images', true)
ON CONFLICT (id) DO NOTHING;
