
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useOGImage } from '@/hooks/useOGImage';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  pageType: string;
  pageSlug?: string;
  pageId?: string;
  imageUrl?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  pageType,
  pageSlug,
  pageId,
  imageUrl,
  keywords = [],
  author = 'Duurzaam Wonen Nederland',
  publishedTime,
  modifiedTime,
}) => {
  const { ogImage, generateOGImage, isLoading } = useOGImage({
    pageType,
    pageSlug,
    pageId,
    title,
    description,
    imageUrl,
  });

  // Auto-generate OG image if it doesn't exist
  useEffect(() => {
    if (!isLoading && !ogImage) {
      generateOGImage();
    }
  }, [isLoading, ogImage, generateOGImage]);

  const ogImageUrl = ogImage?.image_url || 'https://duurzaamwonen.info/og-image.png';
  const fullCanonicalUrl = `https://duurzaamwonen.info${canonicalUrl}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | Duurzaam Wonen Nederland</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="google-site-verification" content="wctWfdTl0t8aKSX4NrFSv-Rhb4YyTREltwTINnU0gXY" />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={pageType === 'product' || pageType === 'service' ? 'product' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="Duurzaam Wonen Nederland" />
      <meta property="og:locale" content="nl_NL" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {/* Article Meta Tags (for blog posts) */}
      {pageType === 'article' && (
        <>
          <meta property="article:author" content={author} />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        </>
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Duurzaam Wonen Nederland",
          "description": "Specialist in duurzame woonoplossingen, kunststof kozijnen en energiebesparende maatregelen",
          "url": "https://duurzaamwonen.info",
          "telephone": "+31-XX-XXXXXXX",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Twenteweg 24",
            "addressLocality": "Enschede",
            "addressCountry": "NL"
          },
          "sameAs": [
            "https://www.facebook.com/duurzaamwonennl"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
