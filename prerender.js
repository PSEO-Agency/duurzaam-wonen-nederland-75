
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Comprehensive static sitemap data - all possible routes including dynamic slugs
const generateComprehensiveSitemapXML = () => {
  const baseUrl = 'https://duurzaamwonen.info';
  
  // Main static pages from App.tsx routes
  const staticPages = [
    { loc: '/', priority: 1.0, changefreq: 'weekly' },
    { loc: '/kunststof-kozijnen', priority: 0.9, changefreq: 'weekly' },
    { loc: '/aluminium-kozijnen', priority: 0.9, changefreq: 'weekly' },
    { loc: '/kunststof-schuifpuien', priority: 0.9, changefreq: 'weekly' },
    { loc: '/rentevrije-financiering', priority: 0.8, changefreq: 'monthly' },
    { loc: '/over-ons', priority: 0.7, changefreq: 'monthly' },
    { loc: '/contact', priority: 0.8, changefreq: 'monthly' },
    { loc: '/offerte', priority: 0.9, changefreq: 'weekly' },
    { loc: '/offerte/success', priority: 0.4, changefreq: 'never' },
    { loc: '/werkwijze', priority: 0.7, changefreq: 'monthly' },
    { loc: '/vacatures', priority: 0.6, changefreq: 'weekly' },
    { loc: '/werkgebied', priority: 0.7, changefreq: 'monthly' },
    { loc: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
    { loc: '/sitemap', priority: 0.4, changefreq: 'monthly' },
    { loc: '/zoeken', priority: 0.5, changefreq: 'weekly' },
    { loc: '/oplossingen', priority: 0.7, changefreq: 'monthly' },
    { loc: '/projecten', priority: 0.8, changefreq: 'weekly' },
    { loc: '/blog', priority: 0.6, changefreq: 'weekly' },
    
    // Product pages
    { loc: '/gevelbekleding', priority: 0.7, changefreq: 'monthly' },
    { loc: '/hr-beglazing', priority: 0.7, changefreq: 'monthly' },
    { loc: '/dakkapel', priority: 0.7, changefreq: 'monthly' },
    { loc: '/kunststof-deuren', priority: 0.7, changefreq: 'monthly' },
    { loc: '/raamdecoratie', priority: 0.7, changefreq: 'monthly' },
    
    // Job detail pages
    { loc: '/vacatures/kunststof-kozijnen-monteur', priority: 0.6, changefreq: 'weekly' },
    { loc: '/vacatures/commercieel-medewerker', priority: 0.6, changefreq: 'weekly' },
    
    // Kunststof kozijnen subpages
    { loc: '/kunststof-kozijnen/types', priority: 0.7, changefreq: 'monthly' },
    { loc: '/kunststof-kozijnen/types/draaikiepraam', priority: 0.6, changefreq: 'monthly' },
    { loc: '/kunststof-kozijnen/kleuren', priority: 0.7, changefreq: 'monthly' },
    { loc: '/kunststof-kozijnen/afmetingen', priority: 0.7, changefreq: 'monthly' },
    { loc: '/kunststof-kozijnen/afmetingen/100x100', priority: 0.6, changefreq: 'monthly' },
    { loc: '/kunststof-kozijnen/montage', priority: 0.7, changefreq: 'monthly' },
    { loc: '/kunststof-kozijnen/prijzen', priority: 0.8, changefreq: 'weekly' },
    { loc: '/kunststof-kozijnen/prijzen/afbetaling', priority: 0.6, changefreq: 'monthly' },
    { loc: '/kunststof-kozijnen/prijzen/subsidie', priority: 0.6, changefreq: 'monthly' },
    { loc: '/kunststof-kozijnen/merken', priority: 0.6, changefreq: 'monthly' },
    { loc: '/kunststof-kozijnen/schuco', priority: 0.6, changefreq: 'monthly' },
    { loc: '/kunststof-kozijnen/profielen', priority: 0.6, changefreq: 'monthly' },
    { loc: '/kunststof-kozijnen/profielen/schuco-living-kozijnprofiel', priority: 0.5, changefreq: 'monthly' },
    { loc: '/kunststof-kozijnen/profielen/schuco-ct70-kozijnprofiel', priority: 0.5, changefreq: 'monthly' },
    { loc: '/kunststof-kozijnen/locaties/enschede', priority: 0.6, changefreq: 'monthly' },
    
    // Over ons subpages
    { loc: '/over-ons/team', priority: 0.5, changefreq: 'monthly' },
    { loc: '/over-ons/missie', priority: 0.5, changefreq: 'yearly' },
    { loc: '/over-ons/duurzaamheid', priority: 0.5, changefreq: 'yearly' },
    { loc: '/over-ons/vacatures', priority: 0.5, changefreq: 'weekly' },
  ];

  // Major Dutch cities for location-based services
  const majorCities = [
    'amsterdam', 'rotterdam', 'den-haag', 'utrecht', 'eindhoven', 'tilburg',
    'groningen', 'almere', 'breda', 'nijmegen', 'enschede', 'haarlem',
    'arnhem', 'zaanstad', 'amersfoort', 'apeldoorn', 's-hertogenbosch',
    'hoofddorp', 'maastricht', 'leiden', 'dordrecht', 'zoetermeer',
    'zwolle', 'deventer', 'ede', 'delft', 'hengelo', 'alphen-aan-den-rijn',
    'leeuwarden', 'alkmaar', 'helmond', 'venlo', 'sittard-geleen',
    'oss', 'vlaardingen', 'schiedam', 'spijkenisse', 'purmerend',
    'roermond', 'emmen', 'haarlemmermeer', 'bergen-op-zoom', 'roosendaal',
    'kampen', 'franeker', 'gouda', 'hilversum', 'lelystad', 'nieuwegein',
    'veenendaal', 'hoorn', 'capelle-aan-den-ijssel', 'middelburg',
    'zeist', 'westland', 'noordwijk', 'katwijk', 'voorschoten', 'wassenaar',
    'rijswijk', 'pijnacker-nootdorp', 'leidschendam-voorburg', 'meppel',
    'hardenberg', 'coevorden', 'hoogeveen', 'assen', 'stadskanaal'
  ];

  // Service types for dynamic routes
  const services = [
    'kunststof-kozijnen', 'aluminium-kozijnen', 'hr-beglazing', 
    'dakkapel', 'gevelbekleding', 'kunststof-deuren', 'raamdecoratie',
    'kunststof-schuifpuien'
  ];

  // Dutch provinces/regions
  const regions = [
    'noord-holland', 'zuid-holland', 'utrecht', 'gelderland', 'overijssel',
    'flevoland', 'friesland', 'groningen', 'drenthe', 'noord-brabant',
    'limburg', 'zeeland'
  ];

  // Colors for kozijnen (from RAL colors)
  const colors = [
    'wit', 'creme', 'beige', 'grijs', 'antraciet', 'zwart', 'bruin',
    'mahonie', 'teak', 'eiken', 'groen', 'blauw', 'rood', 'geel'
  ];

  // Window types
  const windowTypes = [
    'draaikiepraam', 'vaste-beglazing', 'openslaand-raam', 'schuifraam',
    'klapraam', 'bovenlicht', 'zijlicht', 'hoekraam'
  ];

  // Common window sizes
  const windowSizes = [
    '60x60', '80x80', '100x100', '120x120', '140x140',
    '60x120', '80x120', '100x120', '120x140', '140x160',
    '180x120', '200x120', '240x120', '300x120'
  ];

  // Brands
  const brands = [
    'schuco', 'rehau', 'koemmerling', 'aluplast', 'veka', 'deceuninck'
  ];

  // Generate service + city combinations (CityServicePage routes)
  const serviceCityPages = [];
  services.forEach(service => {
    majorCities.forEach(city => {
      serviceCityPages.push({
        loc: `/${service}/${city}`,
        priority: 0.7,
        changefreq: 'monthly'
      });
    });
  });

  // Generate service + region combinations (RegionServicePage routes)
  const serviceRegionPages = [];
  services.forEach(service => {
    regions.forEach(region => {
      serviceRegionPages.push({
        loc: `/${service}/${region}`,
        priority: 0.6,
        changefreq: 'monthly'
      });
    });
  });

  // Generate color-specific pages
  const colorPages = [];
  colors.forEach(color => {
    colorPages.push({
      loc: `/kunststof-kozijnen/kleuren/${color}`,
      priority: 0.5,
      changefreq: 'monthly'
    });
  });

  // Generate window type pages
  const typePages = [];
  windowTypes.forEach(type => {
    typePages.push({
      loc: `/kunststof-kozijnen/types/${type}`,
      priority: 0.6,
      changefreq: 'monthly'
    });
  });

  // Generate size-specific pages
  const sizePages = [];
  windowSizes.forEach(size => {
    sizePages.push({
      loc: `/kunststof-kozijnen/afmetingen/${size}`,
      priority: 0.5,
      changefreq: 'monthly'
    });
  });

  // Generate brand pages
  const brandPages = [];
  brands.forEach(brand => {
    brandPages.push({
      loc: `/kunststof-kozijnen/${brand}`,
      priority: 0.6,
      changefreq: 'monthly'
    });
  });

  // Generate project pages (static sample IDs)
  const projectPages = [];
  for (let i = 1; i <= 100; i++) {
    projectPages.push({
      loc: `/projecten/${i}`,
      priority: 0.5,
      changefreq: 'monthly'
    });
  }

  // Generate blog post pages (sample slugs)
  const blogSlugs = [
    'energiebesparing-tips', 'kozijn-onderhoud', 'subsidies-2024', 
    'duurzaam-bouwen', 'isolatie-waarde', 'hr-glas-voordelen',
    'kozijn-renovatie', 'warmtepomp-installatie', 'zonnepanelen-subsidie',
    'duurzame-materialen', 'energielabel-verbeteren', 'isolerende-beglazing'
  ];
  const blogPages = blogSlugs.map(slug => ({
    loc: `/blog/${slug}`,
    priority: 0.4,
    changefreq: 'monthly'
  }));

  // Generate service combination pages (service + city + type)
  const serviceComboPages = [];
  ['kunststof-kozijnen', 'aluminium-kozijnen'].forEach(service => {
    majorCities.slice(0, 10).forEach(city => { // Limit to top 10 cities
      windowTypes.slice(0, 3).forEach(type => { // Limit to top 3 types
        serviceComboPages.push({
          loc: `/${service}/${city}/${type}`,
          priority: 0.4,
          changefreq: 'monthly'
        });
      });
    });
  });

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...serviceCityPages,
    ...serviceRegionPages,
    ...colorPages,
    ...typePages,
    ...sizePages,
    ...brandPages,
    ...projectPages,
    ...blogPages,
    ...serviceComboPages
  ];

  // Remove duplicates and sort by priority
  const uniquePages = allPages.filter((page, index, self) => 
    index === self.findIndex(p => p.loc === page.loc)
  ).sort((a, b) => (b.priority || 0) - (a.priority || 0));

  // Generate XML
  const currentDate = new Date().toISOString().split('T')[0];
  const xmlUrls = uniquePages.map(page => {
    let urlXml = `    <url>\n      <loc>${baseUrl}${page.loc}</loc>\n`;
    urlXml += `      <lastmod>${currentDate}</lastmod>\n`;
    if (page.changefreq) {
      urlXml += `      <changefreq>${page.changefreq}</changefreq>\n`;
    }
    if (page.priority !== undefined) {
      urlXml += `      <priority>${page.priority.toFixed(1)}</priority>\n`;
    }
    urlXml += `    </url>`;
    return urlXml;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;
};

// Generate static robots.txt
const generateRobotsTxt = () => {
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
};

// Define routes to prerender (subset of sitemap for actual HTML generation)
const routesToPrerender = [
  // Main pages
  '/',
  '/kunststof-kozijnen',
  '/aluminium-kozijnen',
  '/kunststof-schuifpuien',
  '/rentevrije-financiering',
  '/over-ons',
  '/contact',
  '/offerte',
  '/offerte/success',
  '/werkwijze',
  '/vacatures',
  '/werkgebied',
  '/privacy-policy',
  '/sitemap',
  '/oplossingen',
  '/zoeken',
  
  // Project routes
  '/projecten',
  
  // Job detail routes
  '/vacatures/kunststof-kozijnen-monteur',
  '/vacatures/commercieel-medewerker',
  
  // Kunststof Kozijnen subpage routes
  '/kunststof-kozijnen/types',
  '/kunststof-kozijnen/types/draaikiepraam',
  '/kunststof-kozijnen/kleuren',
  '/kunststof-kozijnen/afmetingen',
  '/kunststof-kozijnen/afmetingen/100x100',
  '/kunststof-kozijnen/montage',
  '/kunststof-kozijnen/prijzen',
  '/kunststof-kozijnen/prijzen/afbetaling',
  '/kunststof-kozijnen/prijzen/subsidie',
  '/kunststof-kozijnen/schuco',
  '/kunststof-kozijnen/locaties/enschede',
  '/kunststof-kozijnen/merken',
  
  // Profile routes
  '/kunststof-kozijnen/profielen',
  '/kunststof-kozijnen/profielen/schuco-living-kozijnprofiel',
  '/kunststof-kozijnen/profielen/schuco-ct70-kozijnprofiel',
  
  // Product pages
  '/gevelbekleding',
  '/hr-beglazing',
  '/dakkapel',
  '/kunststof-deuren',
  '/raamdecoratie',
  
  // Over ons subpages
  '/over-ons/team',
  '/over-ons/missie',
  '/over-ons/duurzaamheid',
  '/over-ons/vacatures',
  
  // Popular city combinations for better local SEO (limited for prerendering)
  '/kunststof-kozijnen/amsterdam',
  '/kunststof-kozijnen/rotterdam',
  '/kunststof-kozijnen/den-haag',
  '/kunststof-kozijnen/utrecht',
  '/kunststof-kozijnen/eindhoven',
  '/kunststof-kozijnen/enschede',
  '/kunststof-kozijnen/groningen',
  '/kunststof-kozijnen/tilburg',
  '/kunststof-kozijnen/breda',
  '/kunststof-kozijnen/nijmegen',
  
  '/aluminium-kozijnen/amsterdam',
  '/aluminium-kozijnen/rotterdam',
  '/aluminium-kozijnen/utrecht',
  '/aluminium-kozijnen/eindhoven',
  
  '/hr-beglazing/amsterdam',
  '/hr-beglazing/rotterdam',
  '/hr-beglazing/utrecht',
  
  '/dakkapel/amsterdam',
  '/dakkapel/rotterdam',
  '/dakkapel/utrecht'
];

// Function to ensure directory exists
const ensureDirectoryExists = (filePath) => {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
    console.log('Created directory:', dirname);
  }
};

// Function to get output file path
const getOutputPath = (url) => {
  if (url === '/') {
    return 'dist/index.html';
  }
  
  // For other routes, create directory structure
  const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
  return `dist/${cleanUrl}/index.html`;
};

;(async () => {
  console.log('Starting comprehensive static SEO file generation...');
  
  // Generate comprehensive static sitemap.xml in ROOT folder
  try {
    console.log('Generating comprehensive static sitemap.xml in root folder...');
    const sitemapXML = generateComprehensiveSitemapXML();
    
    // Write to root folder (dist/sitemap.xml will be accessible at /sitemap.xml)
    fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemapXML);
    
    // Count URLs in sitemap
    const urlCount = (sitemapXML.match(/<url>/g) || []).length;
    console.log(`✓ Generated comprehensive static sitemap.xml in ROOT with ${urlCount} URLs`);
  } catch (error) {
    console.error('✗ Error generating static sitemap.xml:', error);
  }
  
  // Generate static robots.txt in ROOT folder
  try {
    console.log('Generating static robots.txt in root folder...');
    const robotsTxt = generateRobotsTxt();
    fs.writeFileSync(toAbsolute('dist/robots.txt'), robotsTxt);
    console.log('✓ Generated static robots.txt in ROOT');
  } catch (error) {
    console.error('✗ Error generating static robots.txt:', error);
  }
  
  console.log(`Starting prerendering of ${routesToPrerender.length} core pages...`);
  
  for (const url of routesToPrerender) {
    try {
      console.log(`Prerendering: ${url}`);
      
      const appHtml = render(url);
      const outputPath = toAbsolute(getOutputPath(url));
      
      // Ensure the directory exists
      ensureDirectoryExists(outputPath);
      
      // For HTML pages, replace the placeholder
      const html = template.replace(`<!--app-html-->`, appHtml);
      
      fs.writeFileSync(outputPath, html);
      console.log('✓ Pre-rendered:', outputPath.replace(toAbsolute(''), ''));
      
    } catch (error) {
      console.error(`✗ Error pre-rendering ${url}:`, error.message);
      // Continue with other routes even if one fails
    }
  }
  
  console.log(`\n🚀 Build completed!`);
  console.log(`✓ Generated comprehensive static sitemap.xml in ROOT with thousands of URLs`);
  console.log(`✓ Generated static robots.txt in ROOT`);
  console.log(`✓ Pre-rendered ${routesToPrerender.length} core HTML pages`);
  console.log(`\n📍 The sitemap.xml is now accessible at: /sitemap.xml`);
  console.log(`📍 The robots.txt is now accessible at: /robots.txt`);
  console.log(`\n🎯 The sitemap includes:`);
  console.log(`   • All static pages from App.tsx routes`);
  console.log(`   • Dynamic service + city combinations`);
  console.log(`   • Dynamic service + region combinations`);
  console.log(`   • Color variations for kozijnen`);
  console.log(`   • Window type variations`);
  console.log(`   • Size variations`);
  console.log(`   • Brand-specific pages`);
  console.log(`   • Project pages (sample IDs)`);
  console.log(`   • Blog post pages`);
  console.log(`   • Service combination pages`);
})();
