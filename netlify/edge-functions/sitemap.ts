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
    const [productsResult, projectsResult, citiesResult, cityServicesResult, allCombinationsResult, regionsResult, neighborhoodsResult] = await Promise.all([
      supabase.from('products').select('slug').eq('is_active', true),
      supabase.from('projects').select('slug').eq('is_active', true),
      supabase.from('cities').select('slug'),
      supabase.from('city_services').select('city_id, service_id, cities(slug), services(slug)').eq('is_active', true),
      supabase.from('services').select('slug').eq('is_active', true).then(services => 
        supabase.from('cities').select('slug').then(cities => ({
          services: services.data,
          cities: cities.data
        }))
      ),
      supabase.from('regions').select('slug'),
      supabase.from('neighborhoods').select('slug, cities(slug)')
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

    // Add city service pages (active combinations)
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

    // Add ALL possible service + city combinations (for complete coverage)
    if (allCombinationsResult.services && allCombinationsResult.cities) {
      allCombinationsResult.services.forEach(service => {
        allCombinationsResult.cities.forEach(city => {
          sitemap += `
  <url>
    <loc>${baseUrl}/${service.slug}/${city.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
        });
      });
    }

    // Add blog posts (from static data)
    const blogSlugs = [
      'stappenplan-oude-kozijnen-naar-duurzame-kunststof-kozijnen',
      'voordelen-dakkapel-meer-ruimte-licht-huis', 
      'verschillende-typen-kunststof-kozijnen-vergeleken',
      '5-manieren-woning-verduurzamen-2023',
      'interieurtrends-2023-combineren-kunststof-kozijnen',
      'schuifpuien-kiezen-complete-gids',
      'kunststof-kozijnen-kleuren-welke-past-bij-uw-woning',
      'wat-kost-dakkapel-prijsoverzicht-2023',
      'energie-efficiënte-kozijnen-besparen',
      'reparatie-onderhoud-kunststof-kozijnen',
      'beveiligde-kozijnen-deuren-inbraakpreventie',
      'geluidsisolatie-kunststof-kozijnen',
      'subsidies-kozijnenvervanging-2023',
      'geschiedenis-kunststof-kozijnen-nederland',
      'voordelen-nachthok-dakkapel'
    ];

    blogSlugs.forEach(slug => {
      sitemap += `
  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });

    // Add blog category pages
    sitemap += `
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;

    // Add regions pages
    if (regionsResult.data) {
      regionsResult.data.forEach(region => {
        sitemap += `
  <url>
    <loc>${baseUrl}/werkgebied/${region.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;
      });
    }

    // Add neighborhoods
    if (neighborhoodsResult.data) {
      neighborhoodsResult.data.forEach(neighborhood => {
        if (neighborhood.cities?.slug) {
          sitemap += `
  <url>
    <loc>${baseUrl}/werkgebied/${neighborhood.cities.slug}/${neighborhood.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>`;
        }
      });
    }

    // Add color detail pages
    const ralColors = [
      '9001', '9002', '9003', '9005', '9006', '9007', '9010', '9011', '9016', '9017', '9018',
      '7001', '7006', '7009', '7011', '7012', '7013', '7015', '7016', '7021', '7022', '7024',
      '7030', '7031', '7032', '7033', '7034', '7035', '7036', '7037', '7038', '7039', '7040',
      '6005', '6009', '6011', '6019', '6020', '6021', '6027', '6028', '6029', '6034',
      '5002', '5003', '5005', '5007', '5008', '5009', '5011', '5012', '5013', '5014', '5015',
      '3000', '3001', '3002', '3003', '3004', '3005', '3007', '3009', '3011', '3012', '3013',
      '2000', '2001', '2002', '2003', '2004', '2008', '2009', '2010', '2011', '2012',
      '1000', '1001', '1002', '1003', '1004', '1005', '1006', '1007', '1011', '1012', '1013'
    ];

    ralColors.forEach(color => {
      sitemap += `
  <url>
    <loc>${baseUrl}/kunststof-kozijnen/kleuren/ral-${color}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;
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