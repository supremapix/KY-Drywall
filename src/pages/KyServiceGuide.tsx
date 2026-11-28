import { COMPANY_INFO } from '../constants';
import React from 'react';
import { Link,useParams } from 'react-router-dom';
import { ArrowUpRight,MessageCircle } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import NotFound from './NotFound';
import { BASE_URL } from '../constants';
import { kyGroups,kyRows,kyServicePath,kyClusterLabel,kyImageAlt,type KyGroup } from '../kyServices';
import './KyServiceGuide.css';

const groupKeys=Object.keys(kyGroups) as KyGroup[];
const img=(key:string)=>'/guias-ky/'+(key==='cobertura-comercial'?'estrutura':key)+'.webp';
const groupShort:Record<KyGroup,string>={coberturas:'Coberturas em Curitiba',drywall:'Drywall e gesso em Curitiba'};
const GroupsIntro:React.FC<{group:KyGroup}>=({group})=><aside className="kyg-panel"><h2>{group==='coberturas'?'Por onde começar a cotação':'Planeje a compra antes do fechamento'}</h2><p>{group==='coberturas'?'Separe estrutura, telhas, proteção, fixações e drenagem. Para imóveis existentes, descreva primeiro o que já está instalado; para obra nova, reúna cortes e desenhos da cobertura.':'Separe chapas, perfis, componentes de fixação, isolamento e materiais de acabamento. Informe a função de cada ambiente e o que precisa ficar acessível para instalação ou manutenção.'}</p><p>A loja KY fica no Cajuru, em Curitiba. Informe o bairro ou a cidade da Região Metropolitana para conferir disponibilidade, retirada e opções de entrega. O fornecimento de materiais e a execução devem ser tratados como escopos separados.</p></aside>;
const Quote=()=> <a className="kyg-quote" href={'https://wa.me/' + COMPANY_INFO.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={20} aria-hidden="true"/> Cotar materiais com a KY</a>;
const Art=({id}:{id:string})=><figure className="kyg-art"><img src={img(id)} width="1200" height="675" alt={kyImageAlt[id]}/><figcaption>Imagem ilustrativa gerada por IA. Não representa obra da KY.</figcaption></figure>;

export function KyHubCards(){return <section className="kyg-entry" aria-label="Guias de sistemas"><div className="kyg-wrap kyg-groups">{groupKeys.map(g=><Link key={g} to={kyServicePath(kyGroups[g].slug)} className="kyg-card"><span>{kyRows[g].length} guias</span><strong>{kyGroups[g].title}</strong><p>{kyGroups[g].intro}</p><span>Ver todos os {kyRows[g].length} serviços <ArrowUpRight size={16}/></span></Link>)}</div></section>}
export default function KyServiceGuide(){
 const {serviceId:slug}=useParams<{serviceId:string}>();
 const key=groupKeys.find(g=>kyGroups[g].slug===slug||kyRows[g].some(r=>r[0]===slug));
 if(!key||!slug)return <NotFound/>;
 const g=kyGroups[key],rows=kyRows[key],row=rows.find(r=>r[0]===slug);
 const title=row?.[1]||g.title, intro=row?.[3]||g.intro, image=row?.[2]||g.clusters[0],url=BASE_URL+kyServicePath(slug);
 const crumbs=[{name:'Início',path:'/'},{name:'Serviços',path:'/servicos'},...(row?[{name:g.title,path:kyServicePath(g.slug)}]:[])];
 const nodes=[{'@type':'BreadcrumbList',itemListElement:[...crumbs,{name:title,path:kyServicePath(slug)}].map((c,i)=>({'@type':'ListItem',position:i+1,name:c.name,item:BASE_URL+c.path}))},
 row?{'@type':'Article',headline:title,description:intro,image:BASE_URL+img(image),mainEntityOfPage:url,publisher:{'@id':BASE_URL+'/#organization'}}:{'@type':'ItemList',name:title,itemListElement:rows.map((r,i)=>({'@type':'ListItem',position:i+1,name:r[1],url:BASE_URL+kyServicePath(r[0])}))}];
 const related=row?rows.filter(r=>r[0]!==slug&&r[2]===row[2]).concat(rows.filter(r=>r[0]!==slug&&r[2]!==row[2])).slice(0,3):[];
 return <article className="kyg">
   <EnhancedSEO title={row?title+' em Curitiba':groupShort[key]} description={intro} canonical={url} ogImage={img(image)} ogType={row?'article':'website'} schema={{'@graph':nodes}}/>
   <div className="kyg-wrap">
     <nav className="kyg-crumb" aria-label="Você está aqui">{crumbs.map(c=><Link key={c.path} to={c.path}>{c.name}</Link>)}<span aria-current="page">{title}</span></nav>
     <header className="kyg-hero"><div><span className="kyg-kicker">KY Drywall · Cajuru, Curitiba</span><h1>{title}</h1><p>{intro}</p><Quote/></div><Art id={image}/></header>
     {row?<><section className="kyg-panel"><h2>O que enviar para orçamento</h2><p>{row[4]}.</p><p>Informe também o bairro ou município e se a consulta é só para materiais ou inclui avaliação da execução. Confirme com o atendimento a disponibilidade, a entrega e os limites do escopo.</p></section>
     <section className="kyg-panel"><h2>Pergunta frequente</h2><h3>{row[5]}</h3><p>{row[6]}</p></section>
     <section className="kyg-panel"><h2>Veja também</h2><ul className="kyg-links">{related.map(r=><li key={r[0]}><Link to={kyServicePath(r[0])}>{r[1]} <ArrowUpRight size={16} aria-hidden="true"/></Link></li>)}</ul><Link to={kyServicePath(g.slug)}>Ver todos os {rows.length} serviços de {key==='drywall'?'drywall, gesso e fechamento':'coberturas e telhados'}</Link></section></>:
     <><GroupsIntro group={key}/><section className="kyg-panel"><h2>Todos os {rows.length} serviços</h2><div className="kyg-grid">{g.clusters.map(id=><section key={id} className="kyg-card"><h3>{kyClusterLabel[id]}</h3><ul className="kyg-links">{rows.filter(r=>r[2]===id).map(r=><li key={r[0]}><Link to={kyServicePath(r[0])}>{r[1]} <ArrowUpRight size={16} aria-hidden="true"/></Link></li>)}</ul></section>)}</div></section></>}
     <section className="kyg-panel kyg-final"><div><h2>Quer conferir materiais e escopo?</h2><p>Envie as medidas e o local da obra pelo WhatsApp.</p></div><Quote/></section>
   </div>
 </article>
}
