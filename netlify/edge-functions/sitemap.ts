import type { Context } from "https://edge.netlify.com";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

export default async (req: Request, context: Context) => {
  const baseUrl = 'https://duurzaamwonen.info';
  const currentDate = new Date().toISOString();
  
  try {
    // Initialize Supabase client
    const supabase = createClient(
      'https://izfiqwptfuvoswxocujw.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6Zmlxd3B0ZnV2b3N3eG9jdWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMDIyNzEsImV4cCI6MjA2MTU3ODI3MX0.zEWKXIangrt3Wlpsr_aPQ8VQ40LEeMo-U1PCtM82cLw'
    );

    // Static pages
    const staticPages = [
      { url: '', priority: '1.0', changefreq: 'weekly' },
      { url: '/kunststof-kozijnen', priority: '0.9', changefreq: 'weekly' },
      { url: '/aluminium-kozijnen', priority: '0.9', changefreq: 'weekly' },
      { url: '/kunststof-schuifpuien', priority: '0.8', changefreq: 'weekly' },
      { url: '/contact', priority: '0.8', changefreq: 'monthly' },
      { url: '/offerte', priority: '0.9', changefreq: 'weekly' },
      { url: '/over-ons', priority: '0.7', changefreq: 'monthly' },
      { url: '/werkwijze', priority: '0.7', changefreq: 'monthly' },
      { url: '/werkgebied', priority: '0.7', changefreq: 'monthly' },
      { url: '/projecten', priority: '0.8', changefreq: 'weekly' },
      { url: '/oplossingen', priority: '0.8', changefreq: 'weekly' },
      { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
      { url: '/rentevrije-financiering', priority: '0.6', changefreq: 'monthly' },
      { url: '/vacatures', priority: '0.5', changefreq: 'monthly' },
      { url: '/showroom', priority: '0.6', changefreq: 'monthly' },
      { url: '/raamdecoratie', priority: '0.7', changefreq: 'weekly' },
      // Kunststof kozijnen subpages
      { url: '/kunststof-kozijnen/types', priority: '0.8', changefreq: 'weekly' },
      { url: '/kunststof-kozijnen/kleuren', priority: '0.8', changefreq: 'weekly' },
      { url: '/kunststof-kozijnen/afmetingen', priority: '0.8', changefreq: 'weekly' },
      { url: '/kunststof-kozijnen/montage', priority: '0.7', changefreq: 'weekly' },
      { url: '/kunststof-kozijnen/prijzen', priority: '0.8', changefreq: 'weekly' },
      { url: '/kunststof-kozijnen/merken', priority: '0.7', changefreq: 'weekly' },
      { url: '/kunststof-kozijnen/profielen', priority: '0.7', changefreq: 'weekly' },
      // Specific pages
      { url: '/kunststof-kozijnen/types/draaikiepraam', priority: '0.6', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/afmetingen/100x100', priority: '0.6', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/prijzen/afbetaling', priority: '0.6', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/prijzen/subsidie', priority: '0.6', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/schuco', priority: '0.6', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/profielen/schuco-living-kozijnprofiel', priority: '0.5', changefreq: 'monthly' },
      { url: '/kunststof-kozijnen/profielen/schuco-ct70-kozijnprofiel', priority: '0.5', changefreq: 'monthly' },
      // Job pages
      { url: '/vacatures/kunststof-kozijnen-monteur', priority: '0.5', changefreq: 'monthly' },
      { url: '/vacatures/commercieel-medewerker', priority: '0.5', changefreq: 'monthly' },
      // Over ons subpages
      { url: '/over-ons/team', priority: '0.5', changefreq: 'monthly' },
      { url: '/over-ons/missie', priority: '0.5', changefreq: 'monthly' },
      { url: '/over-ons/duurzaamheid', priority: '0.5', changefreq: 'monthly' },
      { url: '/over-ons/vacatures', priority: '0.5', changefreq: 'monthly' }
    ];

    // Get dynamic content from database
    const [productsResult, projectsResult, citiesResult, cityServicesResult] = await Promise.all([
      supabase.from('products').select('slug').eq('is_active', true),
      supabase.from('projects').select('slug').eq('is_active', true),
      supabase.from('cities').select('slug'),
      supabase.from('city_services').select('city_id, service_id, cities(slug), services(slug)').eq('is_active', true)
    ]);

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

    // Add products
    if (productsResult.data) {
      productsResult.data.forEach(product => {
        sitemap += `
  <url>
    <loc>${baseUrl}/${product.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
      });
    }

    // Add projects
    if (projectsResult.data) {
      projectsResult.data.forEach(project => {
        sitemap += `
  <url>
    <loc>${baseUrl}/projecten/${project.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
      });
    }

    // Add city service pages
    if (cityServicesResult.data) {
      cityServicesResult.data.forEach(cityService => {
        if (cityService.cities?.slug && cityService.services?.slug) {
          sitemap += `
  <url>
    <loc>${baseUrl}/${cityService.services.slug}/${cityService.cities.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
        }
      });
    }

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