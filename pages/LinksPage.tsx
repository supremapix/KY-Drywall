import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import { BASE_URL, COMPANY_INFO, SITE_ASSETS } from '../constants';

export default function LinksPage() {
  const channels = [
    ['🌐 Acessar Site', `${BASE_URL}/`],
    ['📸 Seguir no Instagram', COMPANY_INFO.instagram],
    ['💬 WhatsApp Carlos', `https://wa.me/${COMPANY_INFO.whatsapp}`],
    ['💬 WhatsApp Lucilene', `https://wa.me/${COMPANY_INFO.whatsappLucilene}`],
    ['📍 Como Chegar / Localização', COMPANY_INFO.mapsUrl]
  ];
  return <section className="bg-gray-50 px-4 py-12 md:py-16">
    <EnhancedSEO title="KY Drywall | Site, Instagram e WhatsApp"
      description="Acesse os canais oficiais da KY Drywall & Steel Frame: site, Instagram, WhatsApps e localização."
      canonical={`${BASE_URL}/links`} ogImage={`${BASE_URL}${SITE_ASSETS.logo}`} />
    <div className="max-w-md mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 text-center">
      <img src={SITE_ASSETS.logo} alt="KY Drywall & Steel Frame" width="200" height="100" className="mx-auto mb-6 w-48 h-24 object-contain" />
      <h1 className="text-2xl sm:text-3xl font-black text-[#003366] leading-tight">KY Drywall &amp; Steel Frame</h1>
      <p className="text-gray-600 leading-relaxed mt-4 mb-7">Soluções em Drywall, Steel Frame e construção a seco em Curitiba e Região Metropolitana.</p>
      <nav aria-label="Canais oficiais" className="flex flex-col gap-3">
        {channels.map(([label, href]) => <a key={label} href={href} className="min-h-14 p-4 rounded-xl bg-[#003366] text-white font-bold hover:bg-[#D31219] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#D31219] transition-colors">{label}</a>)}
      </nav>
      <p className="text-sm text-gray-600 mt-6">{COMPANY_INFO.address}</p>
      <a href="tel:+554135284232" className="inline-block p-3 text-[#003366] font-bold">{COMPANY_INFO.phone}</a>
      <div className="border-t border-gray-100 mt-5 pt-6">
        <p className="font-bold text-[#003366]">Escaneie e acesse nossos canais oficiais</p>
        <img src="/qr-ky-links.svg" alt="QR Code para https://www.kydrywall.com.br/links" width="256" height="256" className="mx-auto my-4 w-full max-w-64 h-auto" />
        <a href="/qr-ky-links.svg" download="KY-Drywall-QR-Code.svg" className="inline-block min-h-14 p-4 rounded-xl bg-[#D31219] text-white font-bold hover:bg-red-800">Baixar QR Code</a>
      </div>
    </div>
  </section>;
}
