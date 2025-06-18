
-- Disable Row Level Security on the projects table to allow public access
ALTER TABLE public.projects DISABLE ROW LEVEL SECURITY;

-- Drop any existing RLS policies on the projects table
DROP POLICY IF EXISTS "Enable read access for all users" ON public.projects;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON public.projects;
DROP POLICY IF EXISTS "Enable update for authenticated users only" ON public.projects;
DROP POLICY IF EXISTS "Enable delete for authenticated users only" ON public.projects;
