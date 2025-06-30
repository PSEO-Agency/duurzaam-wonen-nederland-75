
import { supabase } from '@/integrations/supabase/client';

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Static pages configuration
const staticPages: SitemapUrl[] = [
  {
    loc: '/',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/kunststof-kozijnen',
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    loc: '/aluminium-kozijnen',
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    loc: '/kunststof-schuifpuien',
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    loc: '/rentevrije-financiering',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: '/over-ons',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: '/contact',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: '/offerte',
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    loc: '/werkwijze',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: '/vacatures',
    changefreq: 'weekly',
    priority: 0.6
  },
  {
    loc: '/werkgebied',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: '/privacy-policy',
    changefreq: 'yearly',
    priority: 0.3
  },
  {
    loc: '/sitemap',
    changefreq: 'monthly',
    priority: 0.4
  },
  {
    loc: '/zoeken',
    changefreq: 'weekly',
    priority: 0.5
  },
  {
    loc: '/oplossingen',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: '/projecten',
    changefreq: 'weekly',
    priority: 0.8
  },
  // Kunststof kozijnen subpages
  {
    loc: '/kunststof-kozijnen/kleuren',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: '/kunststof-kozijnen/types',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: '/kunststof-kozijnen/types/draaikiepraam',
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    loc: '/kunststof-kozijnen/afmetingen',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: '/kunststof-kozijnen/afmetingen/100x100',
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    loc: '/kunststof-kozijnen/montage',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: '/kunststof-kozijnen/prijzen',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    loc: '/kunststof-kozijnen/prijzen/afbetaling',
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    loc: '/kunststof-kozijnen/prijzen/subsidie',
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    loc: '/kunststof-kozijnen/merken',
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    loc: '/kunststof-kozijnen/schuco',
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    loc: '/kunststof-kozijnen/profielen',
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    loc: '/kunststof-kozijnen/profielen/schuco-living-kozijnprofiel',
    changefreq: 'monthly',
    priority: 0.5
  },
  {
    loc: '/kunststof-kozijnen/profielen/schuco-ct70-kozijnprofiel',
    changefreq: 'monthly',
    priority: 0.5
  },
  {
    loc: '/kunststof-kozijnen/locaties/enschede',
    changefreq: 'monthly',
    priority: 0.6
  },
  // Job detail pages
  {
    loc: '/vacatures/kunststof-kozijnen-monteur',
    changefreq: 'weekly',
    priority: 0.6
  },
  {
    loc: '/vacatures/commercieel-medewerker',
    changefreq: 'weekly',
    priority: 0.6
  },
  // Over ons subpages
  {
    loc: '/over-ons/team',
    changefreq: 'monthly',
    priority: 0.5
  },
  {
    loc: '/over-ons/missie',
    changefreq: 'yearly',
    priority: 0.5
  },
  {
    loc: '/over-ons/duurzaamheid',
    changefreq: 'yearly',
    priority: 0.5
  },
  {
    loc: '/over-ons/vacatures',
    changefreq: 'weekly',
    priority: 0.5
  },
  // Product pages
  {
    loc: '/gevelbekleding',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: '/hr-beglazing',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: '/dakkapel',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: '/kunststof-deuren',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: '/raamdecoratie',
    changefreq: 'monthly',
    priority: 0.7
  }
];

// Popular city combinations for dynamic routes
const popularCities = [
  'amsterdam', 'rotterdam', 'den-haag', 'utrecht', 'eindhoven', 'tilburg', 
  'groningen', 'almere', 'breda', 'nijmegen', 'enschede', 'haarlem', 
  'arnhem', 'zaanstad', 'amersfoort', 'apeldoorn', 's-hertogenbosch',
  'hoofddorp', 'maastricht', 'leiden', 'dordrecht', 'zoetermeer',
  'zwolle', 'deventer', 'ede', 'delft', 'hengelo', 'alphen-aan-den-rijn'
];

// Service types for dynamic combinations
const serviceTypes = [
  'kunststof-kozijnen', 'aluminium-kozijnen', 'hr-beglazing', 
  'dakkapel', 'gevelbekleding', 'kunststof-deuren', 'raamdecoratie'
];

export async function generateSitemapData(): Promise<SitemapUrl[]> {
  const urls: SitemapUrl[] = [...staticPages];
  
  try {
    // Fetch all active products from database
    const { data: products } = await supabase
      .from('products')
      .select('slug, updated_at')
      .eq('is_active', true)
      .order('name');

    // Add database product pages
    if (products) {
      products.forEach(product => {
        urls.push({
          loc: `/${product.slug}`,
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: product.updated_at ? new Date(product.updated_at).toISOString().split('T')[0] : undefined
        });
      });
    }

    // Fetch regions for region service pages
    const { data: regions } = await supabase
      .from('regions')
      .select('slug')
      .order('name');

    // Fetch services for region service pages
    const { data: services } = await supabase
      .from('services')
      .select('slug')
      .eq('is_active', true)
      .order('name');

    // Fetch cities for city service pages
    const { data: cities } = await supabase
      .from('cities')
      .select('slug, region_id, regions(slug)')
      .order('name');

    // Fetch projects
    const { data: projects } = await supabase
      .from('projects')
      .select('id, updated_at')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    // Add region service pages (/{service}/{region})
    if (services && regions) {
      services.forEach(service => {
        regions.forEach(region => {
          urls.push({
            loc: `/${service.slug}/${region.slug}`,
            changefreq: 'weekly',
            priority: 0.7
          });
        });
      });
    }

    // Add city service pages (/{service}/{region}/{city})
    if (services && cities) {
      services.forEach(service => {
        cities.forEach(city => {
          if (city.regions?.slug) {
            urls.push({
              loc: `/${service.slug}/${city.regions.slug}/${city.slug}`,
              changefreq: 'weekly',
              priority: 0.8
            });
          }
        });
      });
    }

    // Add legacy city service pages (/diensten/{city}/{service})
    if (services && cities) {
      services.forEach(service => {
        cities.forEach(city => {
          urls.push({
            loc: `/diensten/${city.slug}/${service.slug}`,
            changefreq: 'weekly',
            priority: 0.6
          });
        });
      });
    }

    // Add project pages
    if (projects) {
      projects.forEach(project => {
        urls.push({
          loc: `/projecten/${project.id}`,
          changefreq: 'monthly',
          priority: 0.6,
          lastmod: project.updated_at ? new Date(project.updated_at).toISOString().split('T')[0] : undefined
        });
      });
    }

    // Add popular city-service combinations for better local SEO
    serviceTypes.forEach(service => {
      popularCities.forEach(city => {
        urls.push({
          loc: `/${service}/${city}`,
          changefreq: 'monthly',
          priority: 0.7
        });
      });
    });

    // Add blog routes if they exist
    const blogRoutes = [
      '/blog',
      '/blog/energiebesparing-tips',
      '/blog/kozijn-onderhoud',
      '/blog/subsidies-2024',
      '/blog/duurzaam-bouwen'
    ];

    blogRoutes.forEach(route => {
      urls.push({
        loc: route,
        changefreq: 'weekly',
        priority: 0.5
      });
    });

  } catch (error) {
    console.error('Error fetching dynamic sitemap data:', error);
  }

  // Remove duplicates and sort by priority
  const uniqueUrls = urls.filter((url, index, self) => 
    index === self.findIndex(u => u.loc === url.loc)
  );

  return uniqueUrls.sort((a, b) => (b.priority || 0) - (a.priority || 0));
}

export function generateSitemapXML(urls: SitemapUrl[], baseUrl: string = 'https://duurzaamwonen.info'): string {
  const xmlUrls = urls.map(url => {
    let urlXml = `    <url>\n      <loc>${baseUrl}${url.loc}</loc>\n`;
    
    if (url.lastmod) {
      urlXml += `      <lastmod>${url.lastmod}</lastmod>\n`;
    }
    
    if (url.changefreq) {
      urlXml += `      <changefreq>${url.changefreq}</changefreq>\n`;
    }
    
    if (url.priority !== undefined) {
      urlXml += `      <priority>${url.priority.toFixed(1)}</priority>\n`;
    }
    
    urlXml += `    </url>`;
    return urlXml;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;
}

export function generateRobotsTxt(baseUrl: string = 'https://duurzaamwonen.info'): string {
  return `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /offerte/success
Disallow: /_redirects
Disallow: /netlify.toml
Disallow: /vercel.json

# Allow important SEO files
Allow: /sitemap.xml
Allow: /robots.txt

# Sitemaps
Sitemap: https://duurzaamwonennl.netlify.app/sitemap.xml

# Crawl delay to be respectful
Crawl-delay: 1

# Specific bot instructions
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1`;
}
