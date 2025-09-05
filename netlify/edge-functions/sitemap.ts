import type { Context } from "https://edge.netlify.com";

export default async (req: Request, context: Context) => {
  const baseUrl = 'https://duurzaamwonen.info';
  const currentDate = new Date().toISOString();
  
  try {
    // Static pages
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

    // Generate city/service pages
    const cities = [
      'amsterdam', 'rotterdam', 'den-haag', 'utrecht', 'eindhoven', 'tilburg', 
      'groningen', 'almere', 'breda', 'nijmegen', 'enschede', 'haarlem',
      'arnhem', 'zaanstad', 'amersfoort', 'apeldoorn', 'zwolle', 'ede',
      'leeuwarden', 'leiden', 'dordrecht', 'zoetermeer', 'maastricht',
      'alphen-aan-den-rijn', 'emmen', 'deventer', 'delft', 'venlo',
      'westland', 'alkmaar', 'helmond', 'leidschendam-voorburg'
    ];
    
    const services = [
      'kunststof-kozijnen', 'aluminium-kozijnen', 'kunststof-schuifpuien',
      'gevelbekleding', 'hr-beglazing', 'dakkapel', 'kunststof-deuren'
    ];

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

    // Add city/service combination pages
    for (const city of cities) {
      for (const service of services) {
        sitemap += `
  <url>
    <loc>${baseUrl}/${service}/${city}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
      }
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