import type { Context } from "https://edge.netlify.com";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

export default async (req: Request, context: Context) => {
  const baseUrl = 'https://duurzaamwonen.info';
  const currentDate = new Date().toISOString();
  
  try {
    // Simple static sitemap first to test if edge function works
    const staticPages = [
      { url: '', priority: '1.0', changefreq: 'weekly' },
      { url: '/kunststof-kozijnen', priority: '0.9', changefreq: 'weekly' },
      { url: '/aluminium-kozijnen', priority: '0.9', changefreq: 'weekly' },
      { url: '/contact', priority: '0.8', changefreq: 'monthly' },
      { url: '/offerte', priority: '0.9', changefreq: 'weekly' }
    ];

    // Build sitemap XML
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

    // Add static pages
    staticPages.forEach(page => {
      sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    sitemap += `
</urlset>`;

    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600'
      },
    });

  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Fallback minimal sitemap
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    return new Response(fallbackSitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    });
  }
};

export const config = {
  path: "/sitemap.xml"
};