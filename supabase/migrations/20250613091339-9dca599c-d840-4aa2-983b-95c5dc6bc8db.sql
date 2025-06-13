
-- Create a simple admin authentication table for single admin
CREATE TABLE public.admin_auth (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on admin_auth
ALTER TABLE public.admin_auth ENABLE ROW LEVEL SECURITY;

-- Create policy that allows admins to manage their own auth
CREATE POLICY "Admin can manage own auth" ON public.admin_auth
  FOR ALL USING (auth.uid() IS NOT NULL);

-- Add RLS policies to existing tables to protect them
-- Protect services table
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Admin can manage services" ON public.services FOR ALL USING (auth.uid() IS NOT NULL);

-- Protect products table  
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Admin can manage products" ON public.products FOR ALL USING (auth.uid() IS NOT NULL);

-- Protect projects table
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Admin can manage projects" ON public.projects FOR ALL USING (auth.uid() IS NOT NULL);

-- Protect cities table
ALTER TABLE public.cities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read cities" ON public.cities FOR SELECT USING (true);
CREATE POLICY "Admin can manage cities" ON public.cities FOR ALL USING (auth.uid() IS NOT NULL);

-- Protect regions table
ALTER TABLE public.regions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read regions" ON public.regions FOR SELECT USING (true);
CREATE POLICY "Admin can manage regions" ON public.regions FOR ALL USING (auth.uid() IS NOT NULL);

-- Protect city_services table
ALTER TABLE public.city_services ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read city_services" ON public.city_services FOR SELECT USING (true);
CREATE POLICY "Admin can manage city_services" ON public.city_services FOR ALL USING (auth.uid() IS NOT NULL);

-- Protect faqs table
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read faqs" ON public.faqs FOR SELECT USING (true);
CREATE POLICY "Admin can manage faqs" ON public.faqs FOR ALL USING (auth.uid() IS NOT NULL);

-- Protect all junction tables
ALTER TABLE public.product_faqs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read product_faqs" ON public.product_faqs FOR SELECT USING (true);
CREATE POLICY "Admin can manage product_faqs" ON public.product_faqs FOR ALL USING (auth.uid() IS NOT NULL);

ALTER TABLE public.product_projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read product_projects" ON public.product_projects FOR SELECT USING (true);
CREATE POLICY "Admin can manage product_projects" ON public.product_projects FOR ALL USING (auth.uid() IS NOT NULL);

ALTER TABLE public.product_locations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read product_locations" ON public.product_locations FOR SELECT USING (true);
CREATE POLICY "Admin can manage product_locations" ON public.product_locations FOR ALL USING (auth.uid() IS NOT NULL);

ALTER TABLE public.solution_projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read solution_projects" ON public.solution_projects FOR SELECT USING (true);
CREATE POLICY "Admin can manage solution_projects" ON public.solution_projects FOR ALL USING (auth.uid() IS NOT NULL);

ALTER TABLE public.neighborhoods ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read neighborhoods" ON public.neighborhoods FOR SELECT USING (true);
CREATE POLICY "Admin can manage neighborhoods" ON public.neighborhoods FOR ALL USING (auth.uid() IS NOT NULL);

-- Protect category tables
ALTER TABLE public.product_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read product_categories" ON public.product_categories FOR SELECT USING (true);
CREATE POLICY "Admin can manage product_categories" ON public.product_categories FOR ALL USING (auth.uid() IS NOT NULL);

ALTER TABLE public.solution_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read solution_categories" ON public.solution_categories FOR SELECT USING (true);
CREATE POLICY "Admin can manage solution_categories" ON public.solution_categories FOR ALL USING (auth.uid() IS NOT NULL);

-- Insert the admin user (you'll need to update the email/password)
INSERT INTO public.admin_auth (email, password_hash) 
VALUES ('admin@duurzaamwonen.info', 'temp_password_hash');
