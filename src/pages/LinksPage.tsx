import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import { BASE_URL, COMPANY_INFO, SITE_ASSETS } from '../constants';
import { Globe, Instagram, MessageCircle, MapPin, Download, Phone, ChevronRight, Navigation, Package, BookOpen } from 'lucide-react';
import { SupremaCredit } from '../components/Footer';

export default function LinksPage() {
  const serviceLinks = [
    { 
      label: 'Pedir orçamento pelo WhatsApp', 
      desc: 'Fale agora com nossa equipe comercial',
      href: `https://wa.me/${COMPANY_INFO.whatsapp}`, 
      icon: MessageCircle, 
      primary: true 
    },
    { 
      label: 'Suporte Técnico Especializado', 
      desc: 'Dúvidas sobre Steel Frame e Drywall',
      href: `https://wa.me/${COMPANY_INFO.whatsappLucilene}`, 
      icon: Phone 
    },
  ];

  const exploreLinks = [
    { 
      label: 'Catálogo de Produtos', 
      desc: 'Confira nosso estoque completa',
      href: `${BASE_URL}/produtos`, 
      icon: Package 
    },
    { 
      label: 'Acesse o Site Oficial', 
      desc: 'Conheça nossas soluções completas',
      href: `${BASE_URL}/`, 
      icon: Globe 
    },
    { 
      label: 'Blog e Manuais Técnicos', 
      desc: 'Conhecimento especializado',
      href: `${BASE_URL}/blog`, 
      icon: BookOpen 
    },
    { 
      label: 'Siga no Instagram', 
      desc: '@kydrywall',
      href: COMPANY_INFO.instagram, 
      icon: Instagram 
    },
  ];

  return (
    <section className="bg-slate-50 min-h-screen flex flex-col items-center justify-start relative overflow-hidden font-sans">
      <EnhancedSEO
        title="Central de Atendimento | KY Drywall & Steel Frame"
        description="Acesse todos os canais oficiais da KY Drywall em um só lugar. Orçamentos, suporte técnico, catálogo e localização."
        canonical={`${BASE_URL}/links`}
        ogImage={`${BASE_URL}${SITE_ASSETS.logo}`}
      />
      
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-100"></div>

      <div className="w-full max-w-2xl px-4 py-8 md:py-12 relative z-10">
        {/* Compact Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 mb-6 shadow-sm flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <img
            src={SITE_ASSETS.logo}
            alt="KY Drywall & Steel Frame"
            className="w-40 md:w-48 h-auto object-contain"
          />
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-black text-slate-900 leading-tight mb-2">
              Central de Atendimento
            </h1>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Distribuidora especializada em sistemas de construção a seco para Curitiba e Região Metropolitana.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Atendimento Group */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 px-2">
              <div className="h-4 w-1 bg-[#D31219] rounded-full"></div>
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest">Atendimento Direto</h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {serviceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 min-h-[72px] rounded-xl border transition-all active:scale-[0.98] group ${
                    link.primary
                      ? 'bg-[#D31219] border-[#D31219] text-white shadow-lg shadow-red-900/10'
                      : 'bg-white border-slate-200 hover:border-[#D31219] text-slate-900 shadow-sm'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${link.primary ? 'bg-white/10' : 'bg-slate-50 group-hover:bg-red-50 group-hover:text-[#D31219] transition-colors'}`}>
                    <link.icon size={22} strokeWidth={link.primary ? 2.5 : 2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm md:text-base truncate">{link.label}</div>
                    <div className={`text-[11px] md:text-xs font-medium truncate ${link.primary ? 'text-white/80' : 'text-slate-400'}`}>
                      {link.desc}
                    </div>
                  </div>
                  <ChevronRight size={18} className={link.primary ? 'text-white/40' : 'text-slate-300'} />
                </a>
              ))}
            </div>
          </div>

          {/* Explorar Group */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 px-2">
              <div className="h-4 w-1 bg-[#D31219] rounded-full"></div>
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest">Explore a KY Drywall</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {exploreLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-4 p-4 min-h-[72px] bg-white border border-slate-200 rounded-xl hover:border-[#D31219] transition-all shadow-sm group active:scale-[0.98]"
                >
                  <div className="p-2.5 bg-slate-50 rounded-lg group-hover:bg-red-50 group-hover:text-[#D31219] transition-colors">
                    <link.icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="font-bold text-sm text-slate-900 truncate leading-snug">{link.label}</div>
                    <div className="text-[11px] font-medium text-slate-400 truncate">{link.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Endereço Block */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-[#D31219] shrink-0" />
                  <h3 className="font-bold text-slate-900">Showroom BR-277</h3>
                </div>
                <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-xs">
                  {COMPANY_INFO.address}
                </p>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-900 font-black">
                    <Phone size={16} className="text-slate-400" />
                    <span>{COMPANY_INFO.phone}</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0">
                <a
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-black text-xs uppercase tracking-widest px-6 py-4 rounded-xl hover:bg-black transition-all shadow-md"
                >
                  <Navigation size={16} /> Como Chegar
                </a>
              </div>
            </div>
          </div>

          {/* QR Code and Footer */}
          <div className="text-center space-y-8 pb-12">
            <div className="inline-block bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center max-w-[240px]">
              <div className="mb-4 flex justify-center">
                <img
                  src="/qr-ky-links.svg"
                  alt="QR Code"
                  width="120"
                  height="120"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                Escaneie para acessar esta central no celular
              </p>
              <a
                href="/qr-ky-links.svg"
                download="KY-Drywall-Central.svg"
                className="inline-flex items-center gap-2 text-[10px] font-black text-slate-500 hover:text-[#D31219] py-2 px-4 rounded-lg bg-slate-50 border border-slate-100 hover:border-[#D31219] transition-all uppercase tracking-widest"
              >
                <Download size={12} /> Salvar QR Code
              </a>
            </div>

            <SupremaCredit />
          </div>
        </div>
      </div>
    </section>
  );
}
