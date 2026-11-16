import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { lastmodForRoute } from '../seo/lastmod.mjs';
import { buildLegacyRedirects } from '../seo/legacy-redirects.mjs';
const origin = 'https://www.kydrywall.com.br';
const xml = await readFile('dist/sitemap.xml', 'utf8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
const lastmods = [...xml.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map(match => match[1]);
assert.equal(new Set(urls).size, urls.length);
assert.equal(lastmods.length, urls.length, 'Every sitemap URL needs a real lastmod');
assert.ok(lastmods.every(date => /^\d{4}-\d{2}-\d{2}$/.test(date)), 'lastmod must be YYYY-MM-DD from the content history');
assert.ok(new Set(lastmods).size > 1, 'lastmod must follow each page history, not one build timestamp');
const inventory = JSON.parse(await readFile('src/seo/indexable-routes.json', 'utf8'));
assert.deepEqual([...urls].sort(), inventory.map(route => origin + route).sort(), 'Sitemap must cover every canonical route');
for (const url of urls) {
  const route = new URL(url).pathname;
  const block = xml.slice(xml.indexOf(`<loc>${url}</loc>`), xml.indexOf('</url>', xml.indexOf(`<loc>${url}</loc>`)));
  assert.equal(block.match(/<lastmod>(.*?)<\/lastmod>/)[1], lastmodForRoute(route), `lastmod drifted from git history: ${route}`);
}
const vercelConfig = JSON.parse(await readFile('vercel.json', 'utf8'));
const redirects = vercelConfig.redirects;
for (const [from, to] of [['/mapa-site', '/sitemap'], ['/mapa-do-site', '/sitemap'], ['/drywall-em/cidade-industrial-de-curitiba', '/drywall-em/cic'], ['/steel-frame-em/cic-sul', '/steel-frame-em/cic'], ['/localizacao/:location', '/drywall-em/:location'], ['/drywall-em-:location', '/drywall-em/:location'], ['/steel-frame-em-:location', '/steel-frame-em/:location'], ['/localizacao-:location', '/drywall-em/:location']]) {
  assert.ok(redirects.some(rule => rule.source === from && rule.destination === to && rule.permanent), `Missing permanent alias redirect: ${from}`);
}
const legacy = buildLegacyRedirects(new Set(inventory));
const committedLegacy = redirects.filter(rule => rule.statusCode === 301);
assert.deepEqual(committedLegacy, legacy, 'vercel.json 301s drifted from the Wayback mapping');
assert.ok(legacy.length > 0, 'Expected legacy 301 redirects');
const legacySources = new Set(legacy.filter(rule => !rule.has).map(rule => rule.source.replace(/\/$/, '') || '/'));
for (const url of urls) assert.ok(!legacySources.has(new URL(url).pathname), `Canonical URL is also a redirect: ${url}`);
const robotsHeader = (vercelConfig.headers || []).find(rule => (rule.headers || []).some(header => header.key === 'X-Robots-Tag' && header.value === 'noindex'));
assert.ok(robotsHeader, 'Missing X-Robots-Tag noindex header');
assert.equal(robotsHeader.has?.[0]?.type, 'host');
assert.match(JSON.stringify(robotsHeader.has[0].value), /vercel/);
const robots = await readFile('dist/robots.txt', 'utf8');
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`), 'Missing canonical sitemap declaration');
assert.ok(!/^Disallow:\s*\/\s*$/m.test(robots), 'Robots must allow public pages');
for (const url of urls) {
  const route = new URL(url).pathname;
  const html = await readFile(route === '/' ? 'dist/index.html' : `dist${route}.html`, 'utf8');
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, url);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, url);
  assert.ok(html.includes(`<link rel="canonical" href="${url}">`), url);
  assert.ok(html.includes('content="index, follow, max-image-preview:large"'), `Sitemap route must be indexable: ${url}`);
  assert.ok(!/<meta[^>]+content="[^"]*noindex/.test(html), `Sitemap route has noindex: ${url}`);
  assert.equal(new URL(url).origin, origin, `Wrong sitemap host: ${url}`);
  assert.ok(html.includes(`<meta property="og:url" content="${url}">`), `Open Graph canonical mismatch: ${url}`);
  assert.equal((html.match(/<title>/g) || []).length, 1, `Duplicate title: ${url}`);
  assert.ok(/<meta name="description" content="[^"]+">/.test(html), `Missing description: ${url}`);
  const graph = JSON.parse(html.match(/<script id="ky-schema" type="application\/ld\+json">(.*?)<\/script>/)[1])['@graph'];
  const organizations = graph.filter(node => node['@id'] === `${origin}/#organization`);
  assert.equal(organizations.length, 1, url);
  assert.deepEqual(organizations[0].address, { '@type': 'PostalAddress', streetAddress: 'Rod. BR-277, 3641 - Cajuru', addressLocality: 'Curitiba', addressRegion: 'PR', postalCode: '81480-270', addressCountry: 'BR' });
  assert.ok(!/"(?:availability|aggregateRating|review)":/.test(JSON.stringify(graph)), url);
}
const links = await readFile('dist/links.html', 'utf8');
for (const href of ['https://instagram.com/kydrywall', 'https://wa.me/5541996457421', 'https://wa.me/5541999067259', '/qr-ky-links.svg']) assert.ok(links.includes(`href="${href}"`));
assert.ok(/<a[^>]+href="\/qr-ky-links\.svg"[^>]+download="KY-Drywall-Central\.svg"/.test(links), 'Official QR link must remain downloadable');
const qr = await readFile('dist/qr-ky-links.svg', 'utf8');
assert.ok(qr.includes('<svg'), 'Downloadable QR asset must exist as SVG');
assert.ok((await readFile('dist/404.html', 'utf8')).includes('content="noindex, follow"'));
console.log(`${urls.length} sitemap routes verified: canonical, H1, entity/NAP, schemas; official links and 404 verified.`);
