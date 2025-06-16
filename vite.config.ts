
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean);

  // Add prerendering in production build
  if (mode === 'production') {
    // Import prerender plugin dynamically for production builds
    const { prerender } = require('vite-plugin-prerender');
    
    plugins.push(
      prerender({
        // Define routes to prerender
        routes: [
          '/',
          '/kunststof-kozijnen',
          '/aluminium-kozijnen',
          '/kunststof-schuifpuien',
          '/rentevrije-financiering',
          '/over-ons',
          '/contact',
          '/offerte',
          '/werkwijze',
          '/vacatures',
          '/werkgebied',
          '/privacy-policy',
          '/sitemap',
          '/vacatures/kunststof-kozijnen-monteur',
          '/vacatures/commercieel-medewerker',
          '/over-ons/team',
          '/over-ons/missie',
          '/over-ons/duurzaamheid',
          '/over-ons/vacatures',
          // Add some key city service pages
          '/kunststof-kozijnen/overijssel/enschede',
          '/kunststof-kozijnen/overijssel/hengelo',
          '/kunststof-kozijnen/gelderland/arnhem',
          '/kunststof-kozijnen/gelderland/nijmegen',
        ],
        // Configuration options
        renderer: '@prerenderer/renderer-puppeteer',
        rendererOptions: {
          maxConcurrentRoutes: 1,
          renderAfterTime: 500,
          headless: true,
        },
        // Post-process the rendered HTML
        postProcess: (renderedRoute: any) => {
          // Add any post-processing logic here
          return renderedRoute;
        },
      })
    );
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        // Ensure external dependencies are properly handled
        external: mode === 'production' ? [] : undefined,
      },
    },
  };
});
