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
    <section className="bg-slate-950 min-h-screen px-4 py-16 flex items-center justify-center relative overflow-hidden bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:30px_30px]">
      <EnhancedSEO
        title="KY Drywall | Canais Oficiais de Atendimento"
        description="Acesse os canais oficiais da KY Drywall & Steel Frame: site, WhatsApp comercial e técnico, Instagram e localização."
        canonical={`${BASE_URL}/links`}
        ogImage={`${BASE_URL}${SITE_ASSETS.logo}`}
      />
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-2xl text-center relative z-10">
        <div className="mb-8">
          <img
            src={SITE_ASSETS.logo}
            alt="KY Drywall & Steel Frame"
            className="mx-auto w-48 h-auto object-contain"
          />
        </div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-snug mb-3">
          Canais de Atendimento
        </h1>
        <p className="text-sm text-slate-500 mb-10 leading-relaxed font-bold uppercase tracking-widest">
          Curitiba & Região Metropolitana
        </p>

        <nav aria-label="Canais oficiais" className="flex flex-col gap-3">
          {channels.map(({ label, href, icon: Icon, highlight }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all shadow-sm active:scale-[0.98] ${
                highlight
                  ? 'bg-[#D31219] hover:bg-red-700 text-white shadow-red-900/10'
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-600 space-y-2">
          <p className="flex items-center justify-center gap-1.5 text-slate-700 font-medium">
            <MapPin size={14} className="text-[#D31219] shrink-0" />
            <span>{COMPANY_INFO.address}</span>
          </p>
          <p className="flex items-center justify-center gap-1.5">
            <Phone size={14} className="text-slate-500 shrink-0" />
            <a href="tel:+554135284232" className="text-slate-900 font-bold hover:text-[#D31219] transition-colors">
              {COMPANY_INFO.phone}
            </a>
          </p>
        </div>

        <div className="border-t border-slate-100 mt-6 pt-6">
          <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
            QR Code de Acesso Rápido
          </p>
          <div className="bg-slate-50 p-3 rounded border border-slate-200 inline-block mb-4">
            <img
              src="/qr-ky-links.svg"
              alt="QR Code para https://www.kydrywall.com.br/links"
              width="180"
              height="180"
              className="w-36 h-36 object-contain"
            />
          </div>
          <div>
            <a
              href="/qr-ky-links.svg"
              download="KY-Drywall-QR-Code.svg"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#D31219] py-2 px-3 rounded border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <Download size={14} /> Baixar QR Code SVG
            </a>
          </div>
        </div>

        <SupremaCredit />
      </div>
    </section>
  );
}
