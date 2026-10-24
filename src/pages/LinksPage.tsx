import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import { BASE_URL, COMPANY_INFO, SITE_ASSETS } from '../constants';
import { Globe, Instagram, MessageCircle, MapPin, Download, Phone } from 'lucide-react';
import { SupremaCredit } from '../components/Footer';

export default function LinksPage() {
  const channels = [
    { label: 'Acessar Site Oficial', href: `${BASE_URL}/`, icon: Globe, highlight: true },
    { label: 'WhatsApp Atendimento Comercial', href: `https://wa.me/${COMPANY_INFO.whatsapp}`, icon: MessageCircle, highlight: true },
    { label: 'WhatsApp Atendimento Técnico', href: `https://wa.me/${COMPANY_INFO.whatsappLucilene}`, icon: MessageCircle },
    { label: 'Instagram Oficial', href: COMPANY_INFO.instagram, icon: Instagram },
    { label: 'Como Chegar (Google Maps)', href: COMPANY_INFO.mapsUrl, icon: MapPin }
  ];

  return (
    <section className="bg-white min-h-screen px-4 py-16 flex items-center justify-center relative overflow-hidden">
      {/* Blueprint Grid Texture */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-100"></div>
      
      <EnhancedSEO
        title="KY Drywall | Canais Oficiais de Atendimento"
        description="Acesse os canais oficiais da KY Drywall & Steel Frame: site, WhatsApp comercial e técnico, Instagram e localização."
        canonical={`${BASE_URL}/links`}
        ogImage={`${BASE_URL}${SITE_ASSETS.logo}`}
      />
      
      <div className="w-full max-w-md bg-white rounded-[32px] border border-slate-200 p-8 md:p-10 shadow-2xl text-center relative z-10">
        <div className="mb-10">
          <img
            src={SITE_ASSETS.logo}
            alt="KY Drywall & Steel Frame"
            className="mx-auto w-48 h-auto object-contain"
          />
        </div>
        
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-[#D31219] text-[10px] font-black uppercase tracking-[0.2em] bg-red-50 border border-red-100 px-3 py-1 rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D31219]"></span>
            <span>CANAIS DE ATENDIMENTO</span>
          </div>
          <h1 className="text-2xl font-black text-slate-950 tracking-tight leading-tight">
            Curitiba & Região <br/> Metropolitana
          </h1>
        </div>

        <nav aria-label="Canais oficiais" className="flex flex-col gap-3.5">
          {channels.map(({ label, href, icon: Icon, highlight }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`flex items-center justify-center gap-3 py-4.5 px-6 rounded-2xl text-xs font-black uppercase tracking-[0.15em] transition-all shadow-sm active:scale-[0.98] border-2 ${
                highlight
                  ? 'bg-[#D31219] border-[#D31219] hover:bg-red-700 hover:border-red-700 text-white shadow-red-900/10'
                  : 'bg-white border-slate-100 hover:border-[#D31219] text-slate-900'
              }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t-2 border-slate-50 text-xs text-slate-600 space-y-3">
          <p className="flex items-center justify-center gap-2 text-slate-900 font-bold">
            <MapPin size={14} className="text-[#D31219] shrink-0" />
            <span>{COMPANY_INFO.address}</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone size={14} className="text-slate-400 shrink-0" />
            <a href="tel:+554135284232" className="text-slate-900 font-black hover:text-[#D31219] transition-colors">
              {COMPANY_INFO.phone}
            </a>
          </p>
        </div>

        <div className="border-t-2 border-slate-50 mt-8 pt-8">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
            Acesso Rápido Showroom
          </p>
          <div className="bg-slate-50 p-4 rounded-2xl border-2 border-slate-100 inline-block mb-6">
            <img
              src="/qr-ky-links.svg"
              alt="QR Code para https://www.kydrywall.com.br/links"
              width="160"
              height="160"
              className="w-32 h-32 object-contain"
            />
          </div>
          <div>
            <a
              href="/qr-ky-links.svg"
              download="KY-Drywall-QR-Code.svg"
              className="inline-flex items-center gap-2 text-[10px] font-black text-slate-500 hover:text-[#D31219] py-2 px-4 rounded-xl border-2 border-slate-100 hover:border-[#D31219] transition-all uppercase tracking-widest"
            >
              <Download size={14} /> Baixar QR Code
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-50">
          <SupremaCredit />
        </div>
      </div>
    </section>
  );
}
