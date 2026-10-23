import fs from 'node:fs';
const files=fs.readdirSync('dist',{recursive:true}).filter(f=>f.endsWith('.html'));
const urls=[...new Set(files.flatMap(f=>[...fs.readFileSync('dist/'+f,'utf8').matchAll(/<img[^>]*src="(https:[^"]+)"/g)].map(m=>m[1].replaceAll('&amp;','&'))))];
const results=[];
for(let start=0;start<urls.length;start+=6){
 await Promise.all(urls.slice(start,start+6).map(async url=>{
  try{const response=await fetch(url,{method:'HEAD',signal:AbortSignal.timeout(15000)});results.push({url,status:response.status,type:response.headers.get('content-type')});}
  catch(error){results.push({url,error:error.message});}
 }));
}
fs.writeFileSync('audit/external-images.json',JSON.stringify(results,null,2));
console.log(JSON.stringify({checked:results.length,failures:results.filter(r=>r.status!==200)},null,2));
