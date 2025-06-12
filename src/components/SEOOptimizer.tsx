
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = "Duurzaam Wonen Nederland | Specialist in Woningverduurzaming",
  description = "Meer dan 20 jaar ervaring in het verduurzamen van woningen met hoogwaardige en onderhoudsarme oplossingen voor een comfortabeler huis en lagere energiekosten.",
  keywords = "woningverduurzaming, kunststof kozijnen, HR++ glas, dakkapellen, gevelbekleding, energiebesparing, Enschede",
  canonicalUrl = "https://duurzaamwonen.info",
  ogImage = "/lovable-uploads/a8156bd0-f063-47c4-bf91-4902c4a2fb9b.png",
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Duurzaam Wonen Nederland",
    "image": ogImage,
    "url": canonicalUrl,
    "telephone": "053 303 0213",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Twenteweg 24",
      "addressLocality": "Enschede",
      "postalCode": "7532 ST",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.2215,
      "longitude": 6.8937
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/duurzaamwonennederland",
      "https://www.instagram.com/duurzaamwonen.nl"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOOptimizer;
