
const fs = require('fs');
const path = require('path');

// Import the sitemap generation functions
// Note: In a real build process, you might fetch dynamic routes from your CMS/API
const staticRoutes = [
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
  }
];

const generateSitemap = (urls) => {
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

// Generate the sitemap
const sitemap = generateSitemap(staticRoutes);

// Write to dist directory
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');
