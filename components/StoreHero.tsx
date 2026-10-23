import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, MapPin, MessageCircle, Phone, Clock } from 'lucide-react';
import { COMPANY_INFO, SITE_ASSETS } from '../constants';
import './StoreHero.css';

/** Facade explicitly selected by the owner; preserve the complete image and its markings. */
export default function StoreHero() {
  return <section className="ky-store-hero" aria-labelledby="ky-store-title">
    <div className="ky-store-layout">
      <div className="ky-store-intro">
        <p className="ky-store-eyebrow"><span aria-hidden="true" /> LOJA NO CAJURU · CURITIBA</p>
        <h1 id="ky-store-title">Sua loja de <span>Drywall e</span><span>Steel Frame.</span></h1>
        <p className="ky-store-lead">Da estrutura ao acabamento, encontre materiais para sua obra e converse com a equipe da KY.</p>

      </div>

      <div className="ky-store-panel">
        <div className="ky-store-panel-heading">
          <img src={SITE_ASSETS.logo} alt="KY Drywall & Steel Frame" width="150" height="65" />
          <span>MATERIAIS PARA<br />CONSTRUÇÃO A SECO</span>
        </div>
        <figure className="ky-store-facade">
          <img src={SITE_ASSETS.storefront} alt="Fachada da KY Drywall, imagem fornecida pela empresa" width="1824" height="1361" fetchPriority="high" />
          <figcaption>KY Drywall & Steel Frame · Cajuru, Curitiba</figcaption>
        </figure>
        <div className="ky-store-address">
          <MapPin size={24} aria-hidden="true" />
          <div><strong>Visite a loja na BR-277</strong><p>Rod. BR-277, 3641 · Cajuru<br />Curitiba, PR</p></div>
          <a href={COMPANY_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver o endereço da loja KY no mapa"><ArrowUpRight size={24} aria-hidden="true" /><span>Ver mapa</span></a>
        </div>
      </div>
      <div className="ky-store-support">
        <p className="ky-store-description">Placas, perfis, massas, fixadores e isolamento. Traga sua lista ou envie o projeto para consultar os itens, a disponibilidade e as condições de atendimento.</p>
        <div className="ky-store-actions">
          <a className="ky-store-primary" href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de conversar com a equipe da KY sobre os materiais para minha obra.')}`} target="_blank" rel="noopener noreferrer"><MessageCircle size={22} aria-hidden="true" /> Falar com a KY no WhatsApp <ArrowUpRight size={20} aria-hidden="true" /></a>
          <Link className="ky-store-secondary" to="/produtos">Explorar o catálogo <ArrowRight size={20} aria-hidden="true" /></Link>
        </div>
        <a className="ky-store-phone" href="tel:+554135284232"><Phone size={18} aria-hidden="true" /><span>Prefere ligar? <strong>{COMPANY_INFO.phone}</strong></span></a>
      </div>
    </div>
    <div className="ky-store-details">
      <div><Clock size={22} aria-hidden="true" /><p><strong>Planeje sua visita</strong><span>Seg. a sex.: 7h30–17h30 · Sáb.: 7h30–12h</span></p></div>
      <div><MapPin size={22} aria-hidden="true" /><p><strong>Atendimento a partir do Cajuru</strong><span>Consulte entrega, frete e prazo para seu endereço.</span></p></div>
      <Link to="/empresa">Conheça a KY <ArrowRight size={20} aria-hidden="true" /></Link>
    </div>
  </section>;
}
