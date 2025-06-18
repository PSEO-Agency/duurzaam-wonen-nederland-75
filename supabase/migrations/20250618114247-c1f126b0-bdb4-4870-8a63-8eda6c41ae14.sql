
-- Disable Row Level Security on the admin_auth table to allow authentication queries
ALTER TABLE public.admin_auth DISABLE ROW LEVEL SECURITY;

-- Drop any existing RLS policies on the admin_auth table
DROP POLICY IF EXISTS "Enable read access for all users" ON public.admin_auth;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON public.admin_auth;
DROP POLICY IF EXISTS "Enable update for authenticated users only" ON public.admin_auth;
DROP POLICY IF EXISTS "Enable delete for authenticated users only" ON public.admin_auth;
DROP POLICY IF EXISTS "Allow public read access for authentication" ON public.admin_auth;
