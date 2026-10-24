import React, { useEffect, useContext } from 'react';
import { BASE_URL } from '../constants';
import { useLocation } from 'react-router-dom';
import { SeoCollector, buildGraph, canonicalUrl } from '../seo/entity';

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
  const { pathname } = useLocation();
  const fullTitle = title.includes('KY Drywall') ? title : `${title} | KY Drywall & Steel Frame`;
  const url = canonicalUrl(canonical || pathname);
  const imageUrl = new URL(ogImage, BASE_URL).href;
  const combinedSchema = buildGraph(url, fullTitle, description, schema);
  const collect = useContext(SeoCollector);
  collect?.({ title: fullTitle, description, url, image: imageUrl, type: ogType, noindex, schema: combinedSchema });

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
    updateOrCreateMeta('meta[property="og:image"]', 'content', imageUrl);
    updateOrCreateMeta('meta[property="og:site_name"]', 'content', 'KY Drywall & Steel Frame');
    updateOrCreateMeta('meta[property="og:locale"]', 'content', 'pt_BR');

    updateOrCreateMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateOrCreateMeta('meta[name="twitter:title"]', 'content', fullTitle);
    updateOrCreateMeta('meta[name="twitter:description"]', 'content', description);
    updateOrCreateMeta('meta[name="twitter:image"]', 'content', imageUrl);

    updateOrCreateMeta('meta[name="geo.region"]', 'content', 'BR-PR');
    updateOrCreateMeta('meta[name="geo.placename"]', 'content', 'Curitiba');

    updateOrCreateLink('dns-prefetch', 'https://images.pexels.com');
    updateOrCreateLink('preconnect', 'https://fonts.googleapis.com');
    updateOrCreateLink('preconnect', 'https://fonts.gstatic.com', { crossorigin: 'anonymous' });

    let schemaScript = document.querySelector('script#ky-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.id = 'ky-schema';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(combinedSchema);

    return () => {
      document.title = 'KY Drywall & Steel Frame';
    };
  }, [fullTitle, description, keywords, url, ogType, ogImage, noindex, imageUrl, JSON.stringify(combinedSchema)]);

  return null;
};

export default EnhancedSEO;
