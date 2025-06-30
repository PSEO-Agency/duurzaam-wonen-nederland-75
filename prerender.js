
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

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
  '/dakkapel/utrecht',
  
  // SEO Routes
  '/sitemap.xml',
  '/robots.txt'
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
  
  // Handle special files
  if (url === '/sitemap.xml') {
    return 'dist/sitemap.xml';
  }
  if (url === '/robots.txt') {
    return 'dist/robots.txt';
  }
  
  // For other routes, create directory structure
  const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
  return `dist/${cleanUrl}/index.html`;
};

;(async () => {
  console.log('Starting prerendering...');
  
  for (const url of routesToPrerender) {
    try {
      console.log(`Prerendering: ${url}`);
      
      const appHtml = render(url);
      const outputPath = toAbsolute(getOutputPath(url));
      
      // Ensure the directory exists
      ensureDirectoryExists(outputPath);
      
      let html;
      if (url === '/sitemap.xml' || url === '/robots.txt') {
        // For XML and text files, use the rendered content directly
        html = appHtml;
      } else {
        // For HTML pages, replace the placeholder
        html = template.replace(`<!--app-html-->`, appHtml);
      }
      
      fs.writeFileSync(outputPath, html);
      console.log('✓ Pre-rendered:', outputPath.replace(toAbsolute(''), ''));
      
    } catch (error) {
      console.error(`✗ Error pre-rendering ${url}:`, error.message);
      // Continue with other routes even if one fails
    }
  }
  
  console.log(`Prerendering completed! Generated ${routesToPrerender.length} pages.`);
})();
