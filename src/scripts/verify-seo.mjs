import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const origin = 'https://www.kydrywall.com.br';
const xml = await readFile('dist/sitemap.xml', 'utf8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(new Set(urls).size, urls.length);
const inventory = JSON.parse(await readFile('src/seo/indexable-routes.json', 'utf8'));
assert.deepEqual([...urls].sort(), inventory.map(route => origin + route).sort(), 'Sitemap must cover every canonical route');
const redirects = JSON.parse(await readFile('vercel.json', 'utf8')).redirects;
for (const [from, to] of [['/mapa-site', '/sitemap'], ['/mapa-do-site', '/sitemap'], ['/drywall-em/cidade-industrial-de-curitiba', '/drywall-em/cic'], ['/steel-frame-em/cic-sul', '/steel-frame-em/cic'], ['/localizacao/:location', '/drywall-em/:location'], ['/drywall-em-:location', '/drywall-em/:location'], ['/steel-frame-em-:location', '/steel-frame-em/:location'], ['/localizacao-:location', '/drywall-em/:location']]) {
  assert.ok(redirects.some(rule => rule.source === from && rule.destination === to && rule.permanent), `Missing permanent alias redirect: ${from}`);
}
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
