
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
    loc: '/kunststof-kozijnen/afmetingen',
    changefreq: 'monthly',
    priority: 0.7
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
    loc: '/kunststof-kozijnen/merken',
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
  }
];

export async function generateSitemapData(): Promise<SitemapUrl[]> {
  const urls: SitemapUrl[] = [...staticPages];
  
  try {
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

  } catch (error) {
    console.error('Error fetching dynamic sitemap data:', error);
  }

  return urls;
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
      urlXml += `      <priority>${url.priority}</priority>\n`;
    }
    
    urlXml += `    </url>`;
    return urlXml;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;
}
