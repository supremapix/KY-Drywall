import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const QUOTE_CITIES = new Set(['curitiba', 'pinhais', 'colombo']);
const cache = new Map();

function git(args) {
  const key = args.join('\0');
  if (cache.has(key)) return cache.get(key);
  let value = null;
  try {
    const out = execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    value = out ? out.slice(0, 10) : null;
  } catch {
    value = null;
  }
  cache.set(key, value);
  return value;
}

function dateOf(paths) {
  const date = git(['log', '-1', '--format=%cI', '--', ...paths]);
  if (!date) throw new Error(`No git date for ${paths.join(', ')}`);
  return date;
}

function patchDate(path, pattern) {
  const date = git(['log', '-1', '--format=%cI', '-G', pattern, '--', path]);
  if (!date) throw new Error(`No patch date for ${pattern}`);
  return date;
}

function rangeDate(path, start, end) {
  const date = git(['log', '-1', '--format=%cI', '-L', `${start},${end}:${path}`]);
  if (!date) throw new Error(`No range date for ${path} ${start}`);
  return date;
}

function newest(dates) {
  return dates.filter(Boolean).sort().at(-1);
}

const BLOG_FILES = {
  b1: ['src/editorialPlanning.ts'],
  b2: ['src/editorialAcoustics.ts'],
  b3: ['src/editorialRoof.ts'],
  b4: ['src/editorialCost.ts'],
  b7: ['src/editorialBuying.ts'],
  b8: ['src/editorialUpdates.ts'],
  b10: ['src/editorialUpdates.ts'],
};

const BLOG_RANGE = {
  b5: ['/"b5":/', '/"b6":/'],
  b6: ['/"b6":/', '/"b7":/'],
  b9: ['/"b9":/', '/"b10":/'],
};

function blogDate(id) {
  if (BLOG_FILES[id]) return dateOf(BLOG_FILES[id]);
  if (BLOG_RANGE[id]) return rangeDate('src/pages/BlogPostPage.tsx', ...BLOG_RANGE[id]);
  throw new Error(`No lastmod source for /blog/${id}`);
}

function locationDate(route) {
  const slug = route.split('/').pop();
  const dates = [dateOf(['src/pages/LocationPage.tsx'])];
  if (route.startsWith('/drywall-em/') && slug === 'fazenda-rio-grande') dates.push(dateOf(['src/components/FazendaBuyingGuide.tsx']));
  if (route.startsWith('/drywall-em/') && QUOTE_CITIES.has(slug)) dates.push(patchDate('src/components/LocalPlanning.tsx', 'Como comparar um orçamento de drywall'));
  return newest(dates);
}

export function lastmodFor(route) {
  if (route === '/') return dateOf(['src/pages/Home.tsx']);
  if (route === '/empresa') return dateOf(['src/pages/About.tsx']);
  if (route === '/steel-frame') return dateOf(['src/pages/SteelFramePage.tsx']);
  if (route === '/servicos' || route.startsWith('/servicos/')) return dateOf(['src/pages/ServicesPage.tsx']);
  if (route === '/produtos') return dateOf(['src/pages/ProductList.tsx']);
  if (route.startsWith('/produto/')) return newest([dateOf(['src/pages/ProductDetails.tsx']), dateOf(['src/productBuyingNotes.ts'])]);
  if (route === '/contato') return dateOf(['src/pages/Contact.tsx']);
  if (route === '/blog') return dateOf(['src/pages/Blog.tsx']);
  if (route.startsWith('/blog/')) return blogDate(route.slice('/blog/'.length));
  if (route === '/faq') return dateOf(['src/pages/FAQPage.tsx']);
  if (route === '/sitemap') return dateOf(['src/pages/Sitemap.tsx']);
  if (route === '/links') return dateOf(['src/pages/LinksPage.tsx']);
  if (route.startsWith('/regiao-metropolitana')) return newest([dateOf(['src/pages/RegionalDirectory.tsx']), dateOf(['src/regionalDirectory.ts'])]);
  if (route.startsWith('/drywall-em/') || route.startsWith('/steel-frame-em/')) return locationDate(route);
  throw new Error(`No lastmod for ${route}`);
}

export function readLastmodFallback() {
  try {
    return JSON.parse(readFileSync(new URL('./lastmod.json', import.meta.url), 'utf8'));
  } catch {
    return {};
  }
}

export function lastmodForRoute(route, fallback = readLastmodFallback()) {
  try {
    return lastmodFor(route);
  } catch (error) {
    if (fallback[route]) return fallback[route];
    throw error;
  }
}
