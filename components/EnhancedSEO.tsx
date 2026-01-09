import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BASE_URL } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  schema?: object;
  noindex?: boolean;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'drywall, steel frame, curitiba, construção a seco, gesso acartonado, divisórias, forros, isolamento acústico, isolamento térmico',
  canonical,
  ogType = 'website',
  ogImage = `${BASE_URL}/gemini_generated_image_jk8nftjk8nftjk8n.png`,
  schema,
  noindex = false
}) => {
  const fullTitle = title.includes('KY Drywall') ? title : `${title} | KY Drywall & Steel Frame`;
  const url = canonical || BASE_URL;

  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'KY Drywall & Steel Frame',
    description: 'Especialista em Drywall e Steel Frame em Curitiba e Região Metropolitana',
    url: BASE_URL,
    telephone: '+554135284232',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Curitiba',
      addressRegion: 'PR',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-25.4284',
      longitude: '-49.2733'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00'
    },
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Curitiba',
        '@id': 'https://www.wikidata.org/wiki/Q3196'
      },
      {
        '@type': 'State',
        name: 'Paraná',
        '@id': 'https://www.wikidata.org/wiki/Q15499'
      }
    ]
  };

  const combinedSchema = schema || defaultSchema;

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <link rel="canonical" href={url} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="KY Drywall & Steel Frame" />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      <meta name="geo.position" content="-25.4284;-49.2733" />
      <meta name="ICBM" content="-25.4284, -49.2733" />

      <link rel="dns-prefetch" href="https://kydrywall.com.br" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;
