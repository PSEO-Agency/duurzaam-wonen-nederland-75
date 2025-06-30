
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Import sitemap generator functions
const { generateSitemapData, generateSitemapXML, generateRobotsTxt } = await import('./dist/server/utils/sitemapGenerator.js')

// Define all routes from App.tsx plus popular dynamic combinations
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
  
  // Popular city combinations for better local SEO
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
  console.log('Starting prerendering...');
  
  // Generate static sitemap.xml and robots.txt
  try {
    console.log('Generating static sitemap.xml...');
    const sitemapUrls = await generateSitemapData();
    const sitemapXML = generateSitemapXML(sitemapUrls, 'https://duurzaamwonen.info');
    fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemapXML);
    console.log('✓ Generated static sitemap.xml');
    
    console.log('Generating static robots.txt...');
    const robotsTxt = generateRobotsTxt('https://duurzaamwonen.info');
    fs.writeFileSync(toAbsolute('dist/robots.txt'), robotsTxt);
    console.log('✓ Generated static robots.txt');
  } catch (error) {
    console.error('✗ Error generating static SEO files:', error);
  }
  
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
  
  console.log(`Prerendering completed! Generated ${routesToPrerender.length} pages plus static SEO files.`);
})();
