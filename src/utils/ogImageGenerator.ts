
import { supabase } from '@/integrations/supabase/client';

interface GenerateOGImageParams {
  pageType: string;
  pageSlug?: string;
  pageId?: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

export const generateOGImage = async (params: GenerateOGImageParams) => {
  try {
    console.log('Generating OG image for:', params);
    
    const { data, error } = await supabase.functions.invoke('generate-og-image', {
      body: params
    });

    if (error) {
      console.error('Error generating OG image:', error);
      throw error;
    }

    console.log('OG image generated successfully:', data);
    return data;
  } catch (error) {
    console.error('Failed to generate OG image:', error);
    throw error;
  }
};

// Batch generate OG images for multiple pages
export const batchGenerateOGImages = async (pages: GenerateOGImageParams[]) => {
  const results = [];
  
  for (const page of pages) {
    try {
      const result = await generateOGImage(page);
      results.push({ success: true, page, result });
    } catch (error) {
      console.error(`Failed to generate OG image for ${page.pageType}/${page.pageSlug}:`, error);
      results.push({ success: false, page, error });
    }
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  return results;
};

// Generate OG images for all products
export const generateProductOGImages = async () => {
  const { data: products, error } = await supabase
    .from('products')
    .select('id, name, slug, description, hero_image_url')
    .eq('is_active', true);

  if (error) {
    console.error('Error fetching products:', error);
    return;
  }

  const pages = products.map(product => ({
    pageType: 'product',
    pageSlug: product.slug,
    pageId: product.id,
    title: product.name,
    description: product.description || undefined,
    imageUrl: product.hero_image_url || undefined,
  }));

  return batchGenerateOGImages(pages);
};
