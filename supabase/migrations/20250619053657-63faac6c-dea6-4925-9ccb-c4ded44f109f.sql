
-- Enable Row Level Security on projects table (if not already enabled)
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist, then recreate them
DROP POLICY IF EXISTS "Public can view active projects" ON public.projects;
DROP POLICY IF EXISTS "Public can view all projects" ON public.projects;
DROP POLICY IF EXISTS "Authenticated users can create projects" ON public.projects;
DROP POLICY IF EXISTS "Authenticated users can update projects" ON public.projects;
DROP POLICY IF EXISTS "Authenticated users can delete projects" ON public.projects;

-- Create policy to allow public read access to active projects
CREATE POLICY "Public can view active projects" 
ON public.projects 
FOR SELECT 
USING (is_active = true);

-- Create policy to allow public read access to all projects (for admin)
CREATE POLICY "Public can view all projects" 
ON public.projects 
FOR SELECT 
USING (true);

-- Create policy to allow authenticated users to insert projects
CREATE POLICY "Authenticated users can create projects" 
ON public.projects 
FOR INSERT 
TO authenticated
WITH CHECK (true);

-- Create policy to allow authenticated users to update projects
CREATE POLICY "Authenticated users can update projects" 
ON public.projects 
FOR UPDATE 
TO authenticated
USING (true)
WITH CHECK (true);

-- Create policy to allow authenticated users to delete projects
CREATE POLICY "Authenticated users can delete projects" 
ON public.projects 
FOR DELETE 
TO authenticated
USING (true);
