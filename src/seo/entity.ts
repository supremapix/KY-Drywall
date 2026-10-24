import { createContext } from 'react';
import { BASE_URL, COMPANY_INFO, SITE_ASSETS } from '../constants';
export const SeoCollector = createContext<((data: any) => void) | null>(null);
export const canonicalUrl = (value: string) => {
  const path = new URL(value, BASE_URL).pathname.replace(/\/+$/, '') || '/';
  return `${BASE_URL}${path}`;
};
export const organization = {
  '@type': ['Organization', 'LocalBusiness'], '@id': `${BASE_URL}/#organization`,
  name: COMPANY_INFO.name, url: `${BASE_URL}/`, logo: `${BASE_URL}${SITE_ASSETS.logo}`,
  telephone: '+554135284232', email: COMPANY_INFO.email,
  address: { '@type': 'PostalAddress', streetAddress: 'Rod. BR-277, 3641 - Cajuru',
    addressLocality: 'Curitiba', addressRegion: 'PR', postalCode: '81480-270', addressCountry: 'BR' },
  sameAs: [COMPANY_INFO.instagram],
  areaServed: [{ '@type': 'City', name: 'Curitiba' }, { '@type': 'Place', name: 'Região Metropolitana de Curitiba' }],
  contactPoint: [
    { '@type': 'ContactPoint', name: 'Carlos', telephone: '+5541996457421', contactType: 'Atendimento', availableLanguage: 'pt-BR' },
    { '@type': 'ContactPoint', name: 'Lucilene', telephone: '+5541999067259', contactType: 'Atendimento', availableLanguage: 'pt-BR' }
  ]
};
const entityTypes = ['Organization', 'LocalBusiness', 'Store'];
// Older page schemas are normalized here; they cannot introduce another branch or stock claim.
function clean(value: any): any {
  if (Array.isArray(value)) return value.map(clean);
  if (!value || typeof value !== 'object') return value;
  if (entityTypes.includes(value['@type'])) return { '@id': organization['@id'] };
  const result: any = {};
  for (const [key, item] of Object.entries(value)) {
    if (['@context', 'aggregateRating', 'review', 'offers', 'availability', 'price', 'priceRange', 'geo', 'hasOfferCatalog'].includes(key)) continue;
    result[key] = clean(item);
  }
  if (result['@type'] === 'Service') result.provider = { '@id': organization['@id'] };
  return result;
}
export function buildGraph(url: string, title: string, description: string, schema?: any) {
  const nodes = (Array.isArray(schema) ? schema : schema?.['@graph'] || (schema ? [schema] : []))
    .filter((node: any) => ![...entityTypes, 'WebSite'].includes(node['@type'])).map(clean);
  const page: any = { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description,
    inLanguage: 'pt-BR', isPartOf: { '@id': `${BASE_URL}/#website` }, about: { '@id': organization['@id'] } };
  const extra: any[] = [];
  for (const node of nodes) {
    if (['WebPage', 'ContactPage', 'AboutPage', 'FAQPage'].includes(node['@type'])) Object.assign(page, node, { '@id': `${url}#webpage`, url });
    else extra.push({ ...node, '@id': node['@id'] || `${url}#${String(node['@type']).toLowerCase()}` });
  }
  if (url !== `${BASE_URL}/` && !extra.some(node => node['@type'] === 'BreadcrumbList')) {
    extra.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumbs`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: title.split('|')[0].trim(), item: url }
    ] });
  }
  return { '@context': 'https://schema.org', '@graph': [organization,
    { '@type': 'WebSite', '@id': `${BASE_URL}/#website`, url: `${BASE_URL}/`, name: COMPANY_INFO.name, publisher: { '@id': organization['@id'] }, inLanguage: 'pt-BR' }, page, ...extra] };
}
