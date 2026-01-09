import { useEffect } from 'react';
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

  useEffect(() => {
    document.documentElement.lang = 'pt-BR';
    document.title = fullTitle;

    const updateOrCreateMeta = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const [attr, attrValue] = selector.match(/\[(.+?)="(.+?)"\]/)?.slice(1) || [];
        if (attr && attrValue) {
          element.setAttribute(attr, attrValue);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    const updateOrCreateLink = (rel: string, href: string, extraAttrs?: Record<string, string>) => {
      const selector = `link[rel="${rel}"]`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
      if (extraAttrs) {
        Object.entries(extraAttrs).forEach(([key, value]) => {
          element!.setAttribute(key, value);
        });
      }
    };

    updateOrCreateMeta('meta[name="description"]', 'content', description);
    updateOrCreateMeta('meta[name="keywords"]', 'content', keywords);

    if (noindex) {
      updateOrCreateMeta('meta[name="robots"]', 'content', 'noindex, nofollow');
    } else {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) {
        robotsMeta.remove();
      }
    }

    updateOrCreateLink('canonical', url);

    updateOrCreateMeta('meta[property="og:type"]', 'content', ogType);
    updateOrCreateMeta('meta[property="og:title"]', 'content', fullTitle);
    updateOrCreateMeta('meta[property="og:description"]', 'content', description);
    updateOrCreateMeta('meta[property="og:url"]', 'content', url);
    updateOrCreateMeta('meta[property="og:image"]', 'content', ogImage);
    updateOrCreateMeta('meta[property="og:site_name"]', 'content', 'KY Drywall & Steel Frame');
    updateOrCreateMeta('meta[property="og:locale"]', 'content', 'pt_BR');

    updateOrCreateMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateOrCreateMeta('meta[name="twitter:title"]', 'content', fullTitle);
    updateOrCreateMeta('meta[name="twitter:description"]', 'content', description);
    updateOrCreateMeta('meta[name="twitter:image"]', 'content', ogImage);

    updateOrCreateMeta('meta[name="geo.region"]', 'content', 'BR-PR');
    updateOrCreateMeta('meta[name="geo.placename"]', 'content', 'Curitiba');
    updateOrCreateMeta('meta[name="geo.position"]', 'content', '-25.4284;-49.2733');
    updateOrCreateMeta('meta[name="ICBM"]', 'content', '-25.4284, -49.2733');

    updateOrCreateLink('dns-prefetch', 'https://images.pexels.com');
    updateOrCreateLink('preconnect', 'https://fonts.googleapis.com');
    updateOrCreateLink('preconnect', 'https://fonts.gstatic.com', { crossorigin: 'anonymous' });

    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(combinedSchema);

    return () => {
      document.title = 'KY Drywall & Steel Frame';
    };
  }, [fullTitle, description, keywords, url, ogType, ogImage, noindex, combinedSchema]);

  return null;
};

export default EnhancedSEO;
