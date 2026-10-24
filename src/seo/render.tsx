import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from '../App';
import { SeoCollector } from './entity';
export { BASE_URL, PRODUCTS, SERVICES, BLOG_POSTS, NEIGHBORHOODS, CITIES_RMC, normalizeLocationName } from '../constants';
export function render(path: string) {
  let metadata: any;
  const html = renderToString(<StaticRouter location={path}><SeoCollector.Provider value={data => { metadata = data; }}><AppContent /></SeoCollector.Provider></StaticRouter>);
  if (!metadata) throw new Error(`Missing SEO: ${path}`);
  return { html, metadata };
}
