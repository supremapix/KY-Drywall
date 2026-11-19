// Permanent targets for URLs captured by the Wayback CDX API
// (kydrywall.com.br*, 2016–2025). Assets, xmlrpc and wp-json are omitted.
// Neighbourhood archives point at the current location URL when one exists.
import { readFileSync } from 'node:fs';

const PAGE = {
  '/drywall': '/servicos/drywall',
  '/drywall.html': '/servicos/drywall',
  '/forro-e-parede-em-drywall': '/servicos/drywall',
  '/forro-e-parede-em-drywall.html': '/servicos/drywall',
  '/forro': '/servicos/drywall',
  '/forros_parede_drywall_sancas_gesso-liso': '/servicos/drywall',
  '/gesso': '/servicos/drywall',
  '/gesso-em-curitiba': '/servicos/drywall',
  '/gesso-drywall-para-projetos-residenciais': '/servicos/drywall',
  '/drywall-gesso-acartonado': '/servicos/drywall',
  '/dry-wall-curitiba-confianca': '/servicos/drywall',
  '/paredes-em-dry-wall': '/servicos/drywall',
  '/paredes-em-gesso': '/servicos/drywall',
  '/paredes-paineis-perfis': '/servicos/drywall',
  '/saiba-mais-sobre-gesso': '/servicos/drywall',
  '/o-gesso-na-construcao-civil': '/servicos/drywall',
  '/solucoes-drywall-residencias-comercio-e-escritorios': '/servicos/drywall',
  '/deixe-sua-casa-linda-com-decorados-em-gesso-sancas-e-drywall': '/servicos/drywall',
  '/veja-as-diferencas-gesso-comum-e-drywall-gesso-acartonado': '/servicos/drywall',
  '/servicos-como-divisorias-de-gesso-ou-drywall': '/servicos/drywall',
  '/construcao-steel-frame': '/servicos/steel-frame',
  '/construcao-steel-frame.html': '/servicos/steel-frame',
  '/estruturas-para-telhados-steel-frame': '/servicos/telhado-steel',
  '/estruturas-para-telhados-steel-frame.html': '/servicos/telhado-steel',
  '/coberturas-com-telhas-shingle': '/servicos/shingle',
  '/coberturas-com-telhas-shingle.html': '/servicos/shingle',
  '/forro-em-pvc-modulado': '/servicos/pvc-modular',
  '/forro-em-pvc-modulado.html': '/servicos/pvc-modular',
  '/contato-orcamento': '/contato',
  '/orcamentos': '/contato',
  '/orcamento-gesso-online-gesseiro-camargo-curitiba-pr': '/contato',
  '/simulador': '/contato',
  '/casa-do-gesseiro-em-curitiba': '/empresa',
  '/empresa-de-gesso-com-garantia': '/empresa',
  '/profissionais-gesseiros-gesso-em-decoracao': '/empresa',
  '/construcao-a-seco': '/servicos',
  '/reformas': '/servicos',
  '/placa-cimenticia': '/produto/pl6',
  '/placas': '/produtos',
  '/produtos/categoria-produto/drywall': '/produtos',
  '/custo-da-colocacao-de-gesso-em-teto-curitiba': '/blog/b8',
  '/sitemap.xml/drywall.html': '/servicos/drywall',
  '/sitemap.xml/forro-em-pvc-modulado.html': '/servicos/pvc-modular',
  '/sitemap.xml/index.html': '/',
};

const CATEGORY_TOPIC = {
  'dry-wall': '/servicos/drywall',
  'gesso': '/servicos/drywall',
  'forro-em-curitiba': '/servicos/drywall',
  'paredes-em-cimenticia': '/servicos/drywall',
  'paredes-paineis-perfis': '/servicos/drywall',
  'construcao-a-seco': '/servicos',
  'reformas': '/servicos',
  'simulador': '/contato',
};

// WordPress ?p= captures were 301s. Values are the permalink path, resolved
// through PAGE so the public redirect skips the dead permalink.
const WP_POST_IDS = {
  '7': '/orcamentos',
  '10': '/gesso-em-curitiba',
  '16': '/paredes-em-gesso',
  '18': '/paredes-em-dry-wall',
  '34': '/reformas',
  '36': '/construcao-a-seco',
  '281': '/gesso',
  '282': '/drywall',
  '285': '/forro',
  '301': '/paredes-paineis-perfis',
  '307': '/placa-cimenticia',
  '325': '/contato-orcamento',
  '333': '/orcamento-gesso-online-gesseiro-camargo-curitiba-pr',
  '390': '/forros_parede_drywall_sancas_gesso-liso',
  '393': '/servicos-como-divisorias-de-gesso-ou-drywall',
  '396': '/drywall-gesso-acartonado',
  '399': '/gesso-drywall-para-projetos-residenciais',
  '403': '/dry-wall-curitiba-confianca',
  '415': '/saiba-mais-sobre-gesso',
  '422': '/profissionais-gesseiros-gesso-em-decoracao',
  '429': '/custo-da-colocacao-de-gesso-em-teto-curitiba',
  '430': '/o-gesso-na-construcao-civil',
  '431': '/simulador',
  '432': '/placas',
  '441': '/empresa-de-gesso-com-garantia',
  '444': '/veja-as-diferencas-gesso-comum-e-drywall-gesso-acartonado',
  '479': '/deixe-sua-casa-linda-com-decorados-em-gesso-sancas-e-drywall',
  '483': '/solucoes-drywall-residencias-comercio-e-escritorios',
};

const BAIRRO_ALIAS = {
  'alto-da-rua-quinze': 'alto-da-xv',
};

const ASSET_EXT = /\.(?:css|js|png|jpe?g|gif|webp|svg|ico|woff2?|eot|ttf|map|pdf|xml)$/i;

function loadWaybackPaths() {
  return JSON.parse(readFileSync(new URL('./wayback-paths.json', import.meta.url), 'utf8'));
}

function locationTarget(routes, slug) {
  if (routes.has(`/drywall-em/${slug}`)) return `/drywall-em/${slug}`;
  if (routes.has(`/regiao-metropolitana/curitiba/${slug}`)) return `/regiao-metropolitana/curitiba/${slug}`;
  if (routes.has(`/regiao-metropolitana/${slug}`)) return `/regiao-metropolitana/${slug}`;
  return null;
}

function bairroTarget(routes, rest) {
  const mapped = BAIRRO_ALIAS[rest] || rest;
  for (const slug of [mapped, `bairro-${rest}`]) {
    const target = locationTarget(routes, slug);
    if (target) return target;
  }
  return null;
}

function cityTarget(routes, categorySlug) {
  if (!categorySlug.startsWith('cidade')) return null;
  const rest = categorySlug.slice('cidade'.length);
  const cities = [...routes]
    .filter(route => /^\/regiao-metropolitana\/[^/]+$/.test(route))
    .map(route => route.split('/')[2])
    .sort((a, b) => b.length - a.length);
  const city = cities.find(slug => slug === rest);
  return city ? locationTarget(routes, city) : null;
}

function categoryTarget(routes, slug) {
  if (CATEGORY_TOPIC[slug]) return CATEGORY_TOPIC[slug];
  if (slug.startsWith('bairro-')) return bairroTarget(routes, slug.slice('bairro-'.length));
  return cityTarget(routes, slug);
}

function classify(routes, path) {
  if (PAGE[path]) return PAGE[path];
  if (path === '/feed' || path === '/comments' || path === '/comments/feed' || path.startsWith('/author/') || /^\/page\/\d+$/.test(path)) return '/blog';
  if (path.startsWith('/category/')) {
    const slug = path.slice('/category/'.length);
    return categoryTarget(routes, slug);
  }
  return null;
}

function resolvePath(routes, path, depth = 0) {
  if (depth > 4) return null;
  const direct = classify(routes, path);
  if (direct) return direct;
  if (path.endsWith('/feed') && path !== '/feed') return resolvePath(routes, path.slice(0, -'/feed'.length), depth + 1);
  if (path.endsWith('/embed') && path !== '/embed') return resolvePath(routes, path.slice(0, -'/embed'.length), depth + 1);
  return null;
}

function skipped(path) {
  // cleanUrls already 308s these to the canonical 200 page.
  if (path === '/contato.html' || path === '/index.html') return true;
  if (path === '/' || path === '/embed' || path === '/favicon.ico' || path === '/robots.txt' || path === '/sitemap.xml') return true;
  if (/^\/(?:wp-content|wp-includes|wp-json|xmlrpc\.php|assets)(?:\/|$)/.test(path)) return true;
  if (ASSET_EXT.test(path) && !path.startsWith('/sitemap.xml/')) return true;
  if (/^\/(?:drywall-em|steel-frame-em|localizacao)(?:\/|-)/.test(path)) return true;
  if (path.startsWith('/regiao-metropolitana/') || path.startsWith('/produto/') || path.startsWith('/blog/') || path === '/servicos' || path.startsWith('/servicos/')) return true;
  if (['/blog', '/empresa', '/contato', '/faq', '/links', '/sitemap', '/steel-frame', '/produtos', '/mapa-do-site', '/mapa-site'].includes(path)) return true;
  return false;
}

function rule(source, destination) {
  return { source, destination, statusCode: 301 };
}

export function buildLegacyRedirects(routes) {
  const paths = new Set(loadWaybackPaths());
  for (const path of Object.keys(PAGE)) paths.add(path);
  const direct = new Map();
  for (const path of [...paths].sort()) {
    if (routes.has(path) || skipped(path)) continue;
    const destination = resolvePath(routes, path);
    if (!destination) throw new Error(`Unmapped archived URL: ${path}`);
    if (!routes.has(destination)) throw new Error(`Legacy redirect leaves the canonical set: ${path} -> ${destination}`);
    if (destination !== path) direct.set(path, destination);
  }
  for (const [id, permalink] of Object.entries(WP_POST_IDS)) {
    if (!PAGE[permalink]) throw new Error(`WordPress post ${id} permalink is not mapped: ${permalink}`);
  }
  const redirects = [];
  for (const [source, destination] of direct) {
    redirects.push(rule(source, destination));
    // trailingSlash:false answers "/path/" with its own 308. Listing both
    // makes the archived WordPress form a single 301 when the rule wins.
    if (!source.includes('.') && source !== '/') redirects.push(rule(`${source}/`, destination));
  }
  for (const id of Object.keys(WP_POST_IDS).sort((a, b) => Number(a) - Number(b))) {
    redirects.push({
      source: '/',
      has: [{ type: 'query', key: 'p', value: { eq: id } }],
      destination: PAGE[WP_POST_IDS[id]],
      statusCode: 301,
    });
  }
  return redirects;
}
