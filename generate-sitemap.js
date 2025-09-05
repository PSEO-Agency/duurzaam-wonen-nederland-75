// Generate comprehensive sitemap using the prerender script logic
const fs = require('fs');

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
    'veenendaal', 'hoorn', 'capelle-aan-den-ijssel', 'middelburg'
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

  // Colors for kozijnen
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

  // Generate service + city combinations
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

  // Generate service + region combinations
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

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...serviceCityPages,
    ...serviceRegionPages,
    ...colorPages,
    ...typePages,
    ...sizePages
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

  console.log(`Generated ${uniquePages.length} unique URLs`);
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;
};

// Generate and write the sitemap
try {
  const sitemapXML = generateComprehensiveSitemapXML();
  fs.writeFileSync('public/sitemap.xml', sitemapXML);
  console.log('✓ Generated comprehensive sitemap.xml');
} catch (error) {
  console.error('✗ Error generating sitemap:', error);
}