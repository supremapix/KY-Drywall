// One route inventory for prerendering, sitemap generation and regression checks.
export function getRoutes({ regionalRoutes = [], PRODUCTS, SERVICES, BLOG_POSTS, NEIGHBORHOODS, CITIES_RMC, ALL_CIC_LOCATIONS, REDIRECTIONS, normalizeLocationName }) {
  const locations = [...new Set([...NEIGHBORHOODS, ...CITIES_RMC, ...ALL_CIC_LOCATIONS]
    .map(normalizeLocationName).map(slug => REDIRECTIONS[slug] || slug))];
  const routes = [...new Set(['/', '/empresa', '/steel-frame', '/servicos', '/produtos', '/contato', '/blog', '/faq', '/sitemap', '/links',
    ...regionalRoutes,
    ...SERVICES.map(service => `/servicos/${service.id}`),
    ...PRODUCTS.map(product => `/produto/${product.id}`),
    ...BLOG_POSTS.map(post => `/blog/${post.id}`),
    ...locations.flatMap(slug => [`/drywall-em/${slug}`, `/steel-frame-em/${slug}`])])];
  const aliases = { '/mapa-do-site': '/sitemap', '/mapa-site': '/sitemap' };
  for (const slug of [...locations, ...Object.keys(REDIRECTIONS)]) {
    const target = REDIRECTIONS[slug] || slug;
    aliases[`/localizacao/${slug}`] = `/drywall-em/${target}`;
    aliases[`/localizacao-${slug}`] = `/drywall-em/${target}`;
    for (const service of ['drywall', 'steel-frame']) {
      aliases[`/${service}-em-${slug}`] = `/${service}-em/${target}`;
      if (target !== slug) aliases[`/${service}-em/${slug}`] = `/${service}-em/${target}`;
    }
  }
  return { routes, locations, aliases };
}
