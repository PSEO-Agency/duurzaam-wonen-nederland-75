
export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const staticRoutes: SitemapUrl[] = [
  {
    loc: '/',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/kunststof-kozijnen',
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/aluminium-kozijnen',
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/kunststof-schuifpuien',
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/rentevrije-financiering',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/over-ons',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/contact',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/offerte',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/werkwijze',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/vacatures',
    changefreq: 'weekly',
    priority: 0.6,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/werkgebied',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/privacy-policy',
    changefreq: 'yearly',
    priority: 0.3,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/sitemap',
    changefreq: 'monthly',
    priority: 0.4,
    lastmod: new Date().toISOString().split('T')[0]
  },
  // Job detail pages
  {
    loc: '/vacatures/kunststof-kozijnen-monteur',
    changefreq: 'weekly',
    priority: 0.6,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/vacatures/commercieel-medewerker',
    changefreq: 'weekly',
    priority: 0.6,
    lastmod: new Date().toISOString().split('T')[0]
  },
  // Subpages
  {
    loc: '/over-ons/team',
    changefreq: 'monthly',
    priority: 0.5,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/over-ons/missie',
    changefreq: 'monthly',
    priority: 0.5,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/over-ons/duurzaamheid',
    changefreq: 'monthly',
    priority: 0.5,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/over-ons/vacatures',
    changefreq: 'weekly',
    priority: 0.6,
    lastmod: new Date().toISOString().split('T')[0]
  }
];

export const generateSitemap = (urls: SitemapUrl[]): string => {
  const baseUrl = 'https://duurzaamwonen.info';
  
  const urlElements = urls.map(url => {
    const loc = `${baseUrl}${url.loc}`;
    const lastmod = url.lastmod ? `    <lastmod>${url.lastmod}</lastmod>` : '';
    const changefreq = url.changefreq ? `    <changefreq>${url.changefreq}</changefreq>` : '';
    const priority = url.priority ? `    <priority>${url.priority}</priority>` : '';
    
    return `  <url>
    <loc>${loc}</loc>${lastmod ? '\n' + lastmod : ''}${changefreq ? '\n' + changefreq : ''}${priority ? '\n' + priority : ''}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
};

export const generateDynamicRoutes = async () => {
  // In a real implementation, you would fetch these from your CMS/database
  // For now, we'll include some common dynamic routes
  const dynamicRoutes: SitemapUrl[] = [
    // City service pages - some common examples
    {
      loc: '/kunststof-kozijnen/overijssel/enschede',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      loc: '/kunststof-kozijnen/overijssel/hengelo',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      loc: '/kunststof-kozijnen/gelderland/arnhem',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      loc: '/kunststof-kozijnen/gelderland/nijmegen',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString().split('T')[0]
    },
    // Project pages - examples
    {
      loc: '/projecten/1',
      changefreq: 'yearly',
      priority: 0.5,
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      loc: '/projecten/2',
      changefreq: 'yearly',
      priority: 0.5,
      lastmod: new Date().toISOString().split('T')[0]
    }
  ];
  
  return dynamicRoutes;
};
