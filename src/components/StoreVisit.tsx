import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { COMPANY_INFO, SITE_ASSETS } from '../constants';
export default function StoreVisit(){return <section className="ky-visit-panel" aria-labelledby="ky-visit-title"><figure><img src={SITE_ASSETS.storefront} alt="Fachada real da KY Drywall na BR-277, Cajuru, Curitiba" loading="lazy" width="1824" height="1361"/><figcaption>KY Drywall & Steel Frame · Loja no Cajuru</figcaption></figure><div><span>VENHA CONHECER A KY</span><h2 id="ky-visit-title">Sua loja de materiais.<br/>Perto da sua obra.</h2><p>Rod. BR-277, 3641 · Cajuru<br/>Curitiba, PR</p><p>Seg. a sex. 7h30–17h30 · Sáb. 7h30–12h</p><a href={COMPANY_INFO.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={20}/> Ver como chegar <ArrowUpRight size={20}/></a><Link to="/links">Todos os contatos da KY <ArrowUpRight size={18}/></Link></div></section>}
