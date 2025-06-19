
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'
import { createClient } from '@supabase/supabase-js'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Initialize Supabase client
const SUPABASE_URL = "https://izfiqwptfuvoswxocujw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6Zmlxd3B0ZnV2b3N3eG9jdWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMDIyNzEsImV4cCI6MjA2MTU3ODI3MX0.zEWKXIangrt3Wlpsr_aPQ8VQ40LEeMo-U1PCtM82cLw";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fetch active products from database
const getActiveProducts = async () => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('slug')
      .eq('is_active', true)
      .order('sort_order');
    
    if (error) {
      console.error('Error fetching products:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Error connecting to database:', error);
    return [];
  }
};

// Static routes that don't depend on database
const staticRoutes = [
  // Main pages
  '/',
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
  '/kunststof-kozijnen/merken',
  '/kunststof-kozijnen/merken/schuco',
  '/kunststof-kozijnen/locaties/enschede',
  '/kunststof-kozijnen/services/inmeten',
  
  // Profile routes
  '/kunststof-kozijnen/profielen/living-82',
  '/kunststof-kozijnen/profielen/ct-70-as',
  
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
  
  // Fetch dynamic product routes
  console.log('Fetching active products from database...');
  const products = await getActiveProducts();
  const productRoutes = products.map(product => `/${product.slug}`);
  
  console.log(`Found ${products.length} active products`);
  if (products.length > 0) {
    console.log('Product slugs:', products.map(p => p.slug).join(', '));
  }
  
  // Combine static and dynamic routes
  const routesToPrerender = [...staticRoutes, ...productRoutes];
  
  console.log(`Total routes to prerender: ${routesToPrerender.length}`);
  
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
  
  console.log('Prerendering completed!');
})();
