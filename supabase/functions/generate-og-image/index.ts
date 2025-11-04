
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface OGImageRequest {
  pageType: string;
  pageSlug?: string;
  pageId?: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      'https://izfiqwptfuvoswxocujw.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6Zmlxd3B0ZnV2b3N3eG9jdWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMDIyNzEsImV4cCI6MjA2MTU3ODI3MX0.zEWKXIangrt3Wlpsr_aPQ8VQ40LEeMo-U1PCtM82cLw'
    );

    const { pageType, pageSlug, pageId, title, description, imageUrl }: OGImageRequest = await req.json();

    // Check if OG image already exists
    const { data: existingImage } = await supabase
      .from('og_images')
      .select('image_url')
      .eq('page_type', pageType)
      .eq('page_slug', pageSlug || '')
      .eq('page_id', pageId || '')
      .maybeSingle();

    if (existingImage) {
      return new Response(
        JSON.stringify({ imageUrl: existingImage.image_url }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Generate HTML template for OG image
    const ogHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              width: 1200px;
              height: 630px;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              overflow: hidden;
            }
            .container {
              background: white;
              border-radius: 20px;
              padding: 60px;
              margin: 40px;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
              max-width: 1000px;
              display: flex;
              align-items: center;
              gap: 40px;
            }
            .content {
              flex: 1;
            }
            .title {
              font-size: 48px;
              font-weight: bold;
              color: #1f2937;
              line-height: 1.1;
              margin-bottom: 20px;
            }
            .description {
              font-size: 24px;
              color: #6b7280;
              line-height: 1.4;
              margin-bottom: 30px;
            }
            .brand {
              font-size: 20px;
              color: #22c55e;
              font-weight: 600;
            }
            .image {
              width: 300px;
              height: 300px;
              border-radius: 15px;
              object-fit: cover;
              flex-shrink: 0;
            }
            .logo {
              position: absolute;
              top: 40px;
              right: 40px;
              width: 60px;
              height: 60px;
              background: white;
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              color: #22c55e;
              font-size: 24px;
            }
          </style>
        </head>
        <body>
          <div class="logo">DW</div>
          <div class="container">
            <div class="content">
              <h1 class="title">${title}</h1>
              ${description ? `<p class="description">${description}</p>` : ''}
              <div class="brand">Duurzaam Wonen Nederland</div>
            </div>
            ${imageUrl ? `<img src="${imageUrl}" alt="" class="image" />` : ''}
          </div>
        </body>
      </html>
    `;

    // Return a default OG image URL since screenshot generation requires paid API
    const defaultOgUrl = 'https://izfiqwptfuvoswxocujw.supabase.co/storage/v1/object/public/og-images/default-og.png';
    
    // Store in database with default image
    await supabase
      .from('og_images')
      .insert({
        page_type: pageType,
        page_slug: pageSlug || null,
        page_id: pageId || null,
        image_url: defaultOgUrl,
        title,
        description: description || null
      });

    return new Response(
      JSON.stringify({ imageUrl: defaultOgUrl }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
