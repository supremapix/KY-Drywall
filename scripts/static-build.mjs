import { createServer } from 'vite';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', optimizeDeps: { noDiscovery: true, include: [] }, ssr: { noExternal: ['react-router-dom', 'react-router'], resolve: { conditions: ['module-sync', 'module', 'import'] } } });
try {
  const app = await server.ssrLoadModule('/seo/render.tsx');
  const { BASE_URL, PRODUCTS, SERVICES, BLOG_POSTS, NEIGHBORHOODS, CITIES_RMC, normalizeLocationName, render } = app;
  const locations = [...new Set([...NEIGHBORHOODS, ...CITIES_RMC].map(normalizeLocationName))];
  const routes = ['/', '/empresa', '/steel-frame', '/servicos', '/produtos', '/contato', '/blog', '/faq', '/sitemap', '/links',
    ...SERVICES.map(s => `/servicos/${s.id}`), ...PRODUCTS.map(p => `/produto/${p.id}`), ...BLOG_POSTS.map(p => `/blog/${p.id}`),
    ...locations.flatMap(loc => [`/drywall-em/${loc}`, `/steel-frame-em/${loc}`])];
  const template = await readFile('dist/index.html', 'utf8');
  const escape = text => String(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  for (const route of [...new Set(routes), '/404']) {
    const { html, metadata: m } = render(route);
    if (route !== '/404' && (m.noindex || m.url !== BASE_URL + route)) throw new Error(`Noncanonical/indexable route ${route}: ${m.url}`);
    const head = `<title>${escape(m.title)}</title>
<meta name="description" content="${escape(m.description)}">
<meta name="robots" content="${m.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}">
<link rel="canonical" href="${escape(m.url)}">
<meta property="og:title" content="${escape(m.title)}">
<meta property="og:description" content="${escape(m.description)}">
<meta property="og:url" content="${escape(m.url)}">
<meta property="og:image" content="${escape(m.image)}">
<meta property="og:type" content="${escape(m.type)}">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="KY Drywall &amp; Steel Frame">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escape(m.title)}">
<meta name="twitter:description" content="${escape(m.description)}">
<meta name="twitter:image" content="${escape(m.image)}">
<script id="ky-schema" type="application/ld+json">${JSON.stringify(m.schema).replace(/</g, '\\u003c')}</script>`;
    const output = template.replace(/<title>[\s\S]*?<\/title>/g, '').replace(/<meta\s+(?:name="(?:description|keywords|robots|twitter:[^"]+)"|property="og:[^"]+")[^>]*>/g, '').replace(/<link rel="canonical"[^>]*>/g, '').replace('</head>', head + '\n</head>').replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    const destination = route === '/' ? 'dist/index.html' : route === '/404' ? 'dist/404.html' : `dist${route}.html`;
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, output);
  }
  const indexable = JSON.parse(await readFile('seo/indexable-routes.json', 'utf8'));
  if (indexable.some(route => !routes.includes(route))) throw new Error('Sitemap includes an unknown route');
  const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + [...new Set(indexable)].map(route => `  <url><loc>${BASE_URL}${route}</loc></url>`).join('\n') + '\n</urlset>\n';
  await writeFile('public/sitemap.xml', sitemap);
  await writeFile('dist/sitemap.xml', sitemap);
  // All dynamic local routes already exist; aliases redirect before static lookup.
  const redirects = locations.map(loc => `/localizacao/${loc} /drywall-em/${loc} 301`).join('\n');
  await writeFile('dist/_redirects', `https://kydrywall.com.br/* https://www.kydrywall.com.br/:splat 301!\n${redirects}\n/* /404.html 404\n`);
  console.log(`Static HTML: ${routes.length} existing routes; sitemap: ${indexable.length} URLs; real 404 generated.`);
} finally { await server.close(); }
