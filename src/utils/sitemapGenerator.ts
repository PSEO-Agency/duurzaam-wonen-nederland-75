// This file is now only used for the /sitemap page display
// The actual sitemap.xml is generated statically during build

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Static pages for display purposes only
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

// This function is now only used for the /sitemap page display
// The actual sitemap.xml is generated statically during build
export async function generateSitemapData(): Promise<SitemapUrl[]> {
  const urls: SitemapUrl[] = [...staticPages];
  
  // Add note that this is for display only
  console.log('Note: This sitemap data is for display purposes. The actual sitemap.xml is generated statically during build.');
  
  return urls.sort((a, b) => (b.priority || 0) - (a.priority || 0));
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
Sitemap: https://duurzaamwonen.info/sitemap.xml

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
