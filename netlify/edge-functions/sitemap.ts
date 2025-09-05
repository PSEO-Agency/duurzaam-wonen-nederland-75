import type { Context } from "https://edge.netlify.com";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

export default async (req: Request, context: Context) => {
  const supabaseUrl = 'https://izfiqwptfuvoswxocujw.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6Zmlxd3B0ZnV2b3N3eG9jdWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMDIyNzEsImV4cCI6MjA2MTU3ODI3MX0.zEWKXIangrt3Wlpsr_aPQ8VQ40LEeMo-U1PCtM82cLw';
  
  const supabase = createClient(supabaseUrl, supabaseKey);
  
  const baseUrl = 'https://duurzaamwonen.info';
  const currentDate = new Date().toISOString();
  
  try {
    // Fetch dynamic content from database
    const [productsResult, projectsResult, citiesResult, cityServicesResult] = await Promise.all([
      supabase.from('products').select('slug, updated_at').eq('is_active', true),
      supabase.from('projects').select('slug, updated_at').eq('is_active', true),
      supabase.from('cities').select('slug, updated_at'),
      supabase.from('city_services').select(`
        updated_at,
        cities(slug),
        services(slug)
      `).eq('is_active', true)
    ]);

    // Static pages with their actual update times
    const staticPages = [
      { url: '', priority: '1.0', changefreq: 'weekly' },
      { url: '/kunststof-kozijnen', priority: '0.9', changefreq: 'weekly' },
      { url: '/aluminium-kozijnen', priority: '0.9', changefreq: 'weekly' },
      { url: '/kunststof-schuifpuien', priority: '0.9', changefreq: 'weekly' },
      { url: '/rentevrije-financiering', priority: '0.8', changefreq: 'monthly' },
      { url: '/over-ons', priority: '0.7', changefreq: 'monthly' },
      { url: '/contact', priority: '0.8', changefreq: 'monthly' },
      { url: '/offerte', priority: '0.9', changefreq: 'weekly' },
      { url: '/werkwijze', priority: '0.7', changefreq: 'monthly' },
      { url: '/vacatures', priority: '0.6', changefreq: 'weekly' },
      { url: '/werkgebied', priority: '0.7', changefreq: 'monthly' },
      { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
      { url: '/zoeken', priority: '0.5', changefreq: 'weekly' },
      { url: '/oplossingen', priority: '0.7', changefreq: 'monthly' },
      { url: '/projecten', priority: '0.8', changefreq: 'weekly' },
      { url: '/kunststof-kozijnen/kleuren', priority: '0.7', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/types', priority: '0.7', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/types/draaikiepraam', priority: '0.6', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/afmetingen', priority: '0.7', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/afmetingen/100x100', priority: '0.6', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/montage', priority: '0.7', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/prijzen', priority: '0.8', changefreq: 'weekly' },
      { url: '/kunststof-kozijnen/prijzen/afbetaling', priority: '0.6', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/prijzen/subsidie', priority: '0.6', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/merken', priority: '0.6', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/schuco', priority: '0.6', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/profielen', priority: '0.6', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/profielen/schuco-living-kozijnprofiel', priority: '0.5', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/profielen/schuco-ct70-kozijnprofiel', priority: '0.5', changefreq: 'monthly' },
      { url: '/vacatures/kunststof-kozijnen-monteur', priority: '0.6', changefreq: 'weekly' },
      { url: '/vacatures/commercieel-medewerker', priority: '0.6', changefreq: 'weekly' },
      { url: '/over-ons/team', priority: '0.5', changefreq: 'monthly' },
      { url: '/over-ons/missie', priority: '0.5', changefreq: 'yearly' },
      { url: '/over-ons/duurzaamheid', priority: '0.5', changefreq: 'yearly' },
      { url: '/over-ons/vacatures', priority: '0.5', changefreq: 'weekly' },
      { url: '/gevelbekleding', priority: '0.7', changefreq: 'monthly' },
      { url: '/hr-beglazing', priority: '0.7', changefreq: 'monthly' },
      { url: '/dakkapel', priority: '0.7', changefreq: 'monthly' },
      { url: '/kunststof-deuren', priority: '0.7', changefreq: 'monthly' },
      { url: '/raamdecoratie', priority: '0.7', changefreq: 'monthly' }
    ];

    // Extract data from database results
    const products = productsResult.data || [];
    const projects = projectsResult.data || [];
    const cities = citiesResult.data || [];
    const cityServices = cityServicesResult.data || [];

    // Build sitemap XML
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

    // Add static pages
    staticPages.forEach(page => {
      sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    // Add dynamic product pages
    products.forEach(product => {
      sitemap += `
  <url>
    <loc>${baseUrl}/${product.slug}</loc>
    <lastmod>${product.updated_at}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
    });

    // Add dynamic project pages
    projects.forEach(project => {
      sitemap += `
  <url>
    <loc>${baseUrl}/projecten/${project.slug}</loc>
    <lastmod>${project.updated_at}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });

    // Add dynamic city-service combination pages
    cityServices.forEach(cityService => {
      const citySlug = cityService.cities?.slug;
      const serviceSlug = cityService.services?.slug;
      
      if (citySlug && serviceSlug) {
        sitemap += `
  <url>
    <loc>${baseUrl}/${serviceSlug}/${citySlug}</loc>
    <lastmod>${cityService.updated_at}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
      }
    });

    sitemap += `
</urlset>`;

    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600'
      },
    });

  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Fallback minimal sitemap
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    return new Response(fallbackSitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    });
  }
};

export const config = {
  path: "/sitemap.xml"
};