import {readFile, access} from 'node:fs/promises';
import assert from 'node:assert/strict';
const origin='https://www.kydrywall.com.br';
const routes=JSON.parse(await readFile('src/seo/indexable-routes.json','utf8'));
const inbound=new Set(); const titles=new Set(); let images=0; let articles=0;
const exists=async path=>{try{await access(path);return true;}catch{return false;}};
const checked=new Set();
for(const route of routes){
 const html=await readFile(route==='/'?'dist/index.html':`dist${route}.html`,'utf8');
 const title=html.match(/<title>(.*?)<\/title>/s)?.[1]; assert.ok(title,route); assert.ok(!titles.has(title),`Duplicate title: ${route}`);titles.add(title);
 assert.ok(/<main\b/.test(html),`No content landmark: ${route}`);
 for(const tag of html.matchAll(/<img\b[^>]*>/g)){images++;assert.ok(/\balt="[^"]+"/.test(tag[0]),`Missing image description: ${route}`);}
 for(const match of html.matchAll(/\b(href|src)="([^"]+)"/g)){
  const [_,attr,value]=match;if(!value.startsWith('/')||value.startsWith('//'))continue;
  const path=new URL(value,origin).pathname;
  if(attr==='href'&&path!==route)inbound.add(path);
  if(checked.has(path))continue;checked.add(path);
  assert.ok(await exists(`dist${path}`)||await exists(`dist${path}.html`)||await exists(`dist${path}/index.html`),`Missing local target ${path} on ${route}`);
 }
 const graph=JSON.parse(html.match(/<script id="ky-schema" type="application\/ld\+json">(.*?)<\/script>/s)[1])['@graph'];
 for(const article of graph.filter(n=>n['@type']==='BlogPosting')){
  articles++;assert.ok(article.image.startsWith('https://'),`Relative article image ${route}`);
  assert.ok(html.includes(`<meta property="og:image" content="${article.image}">`),`Wrong article share image ${route}`);
 }
}
for(const route of routes)if(route!=='/')assert.ok(inbound.has(route),`Orphan canonical route: ${route}`);
const clientSEO=await readFile('src/components/EnhancedSEO.tsx','utf8');assert.ok(clientSEO.includes("'index, follow, max-image-preview:large'"));assert.ok(!clientSEO.includes('robotsMeta.remove()'));
console.log(`${routes.length} HTML pages: unique titles, semantic main, ${images} image alts, ${articles} article images, local assets/links and zero orphan canonical routes verified.`);
