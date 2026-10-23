import fs from 'node:fs';
import path from 'node:path';
const files = fs.readdirSync('dist',{recursive:true}).filter(p=>p.endsWith('.html'));
const missing=new Map();let localImages=0;let localLinks=0;let localNoindex=0;
for(const file of files){
 const html=fs.readFileSync(path.join('dist',file),'utf8');
 for(const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)){
  const url=decodeURIComponent(match[1]);
  if(url.startsWith('//')) continue;
  if(/\.(webp|png|jpe?g|svg)$/i.test(url))localImages++;else localLinks++;
  if(!fs.existsSync('dist'+url)&&!fs.existsSync('dist'+url+'.html')&&!/^\/(localizacao\/|mapa-site$|mapa-do-site$)/.test(url))missing.set(url,file);
 }
 if(/^(drywall|steel-frame)-em[\\/]/.test(file)){
  if(!html.includes('content="noindex, follow"'))throw new Error('Local page indexed: '+file);
  localNoindex++;
 }
}
const result={htmlFiles:files.length,localImages,localLinks,localNoindex,missing:[...missing]};
fs.writeFileSync('audit/output-check.json',JSON.stringify(result,null,2));
console.log(result);
if(missing.size)process.exitCode=1;
