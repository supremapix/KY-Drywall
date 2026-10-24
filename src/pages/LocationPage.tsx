
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, CheckCircle2, ShieldCheck, Zap, HardHat, Recycle, Timer, ChevronRight, MessageCircle, ArrowLeft, Phone, Package, Clock, Truck, Star, Home, Building2, ExternalLink } from 'lucide-react';
import { BASE_URL, SERVICES, NEIGHBORHOODS, CITIES_RMC, getRandomCTA, PRODUCTS, COMPANY_INFO, SITE_ASSETS, normalizeLocationName } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import NotFound from './NotFound';
import ProductCard from '../components/ProductCard';

import RegionalNotice from '../components/RegionalNotice';

interface LocationPageProps {
  type: 'drywall' | 'steel';
  overrideSlug?: string;
}

const LocationPage: React.FC<LocationPageProps> = ({ type, overrideSlug }) => {
  const params = useParams<{ location: string }>();
  const location = overrideSlug || params.location;
  const navigate = useNavigate();
  const [cta1, setCta1] = useState('');
  const [cta2, setCta2] = useState('');

  const allLocations = [...NEIGHBORHOODS, ...CITIES_RMC];

  const formattedName = React.useMemo(() => {
    if (!location) return 'Localização';

    const matchedLocation = allLocations.find(loc => normalizeLocationName(loc) === location);
    if (matchedLocation) return matchedLocation;

    return location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }, [location]);

  const serviceName = type === 'drywall' ? 'Drywall' : 'Steel Frame';

  useEffect(() => {
    if (!location) {
      navigate('/', { replace: true });
      return;
    }

    setCta1(getRandomCTA());
    cta2; // To avoid unused warning if removed elsewhere
    setCta2(getRandomCTA());
    window.scrollTo(0, 0);
  }, [location, navigate]);

  const featuredProducts = type === 'drywall'
    ? PRODUCTS.filter(p => ['Placas', 'Massas', 'Fitas', 'Parafusos'].includes(p.category)).slice(0, 6)
    : PRODUCTS.filter(p => ['Perfis', 'Parafusos', 'Ferragens', 'Placas'].includes(p.category)).slice(0, 6);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${BASE_URL}/${type === 'drywall' ? 'drywall' : 'steel-frame'}-em/${location}/#service`,
        "name": `${serviceName} em ${formattedName}`,
        "serviceType": "Construção a Seco",
        "description": `Serviços completos de ${serviceName} em ${formattedName}. Instalação, materiais e assessoria técnica especializada.`,
        "provider": { "@id": `${BASE_URL}/#organization` },
        "areaServed": { "@type": "Place", "name": formattedName },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": `${BASE_URL}/${type === 'drywall' ? 'drywall' : 'steel-frame'}-em/${location}`,
          "servicePhone": "+554135284232"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `${serviceName} em ${formattedName}`,
            "item": `${BASE_URL}/${type === 'drywall' ? 'drywall' : 'steel-frame'}-em/${location}`
          }
        ]
      }
    ]
  };

  const pageTitle = `${serviceName} em ${formattedName} | KY Drywall`;
  const pageDescription = `${serviceName} para ${formattedName}: materiais e atendimento da KY Drywall & Steel Frame. Loja física na Rod. BR-277, 3641 - Cajuru, Curitiba. Solicite orçamento: (41) 3528-4232.`;
  const pageKeywords = `${serviceName.toLowerCase()} ${formattedName.toLowerCase()}, ${serviceName.toLowerCase()} curitiba, materiais ${serviceName.toLowerCase()}, instalação ${serviceName.toLowerCase()}, orçamento ${serviceName.toLowerCase()}, ${type} ${formattedName.toLowerCase()}, construção a seco ${formattedName.toLowerCase()}`;

  if (!location || !allLocations.some(loc => normalizeLocationName(loc) === location)) {
    return <NotFound />;
  }

  return (
    <div className="bg-white min-h-screen">
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={`${BASE_URL}/${type === 'drywall' ? 'drywall' : 'steel-frame'}-em/${location}`}
        schema={schema}
        noindex={true}
      />

      {/* Hero Section - Industrial Showroom */}
      <section className="bg-white py-20 md:py-32 text-slate-900 relative overflow-hidden border-b-2 border-slate-100">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-100"></div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-10 font-black uppercase tracking-[0.2em]">
            <Link to="/" className="hover:text-[#D31219] flex items-center gap-1.5 transition-colors">
              <Home size={12} />
              INÍCIO
            </Link>
            <ChevronRight size={12} className="text-slate-300" />
            <span className="text-slate-950 font-black">{formattedName.toUpperCase()}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D31219]"></span>
                <span>01 — ATENDIMENTO EM {formattedName.toUpperCase()}</span>
              </div>

              <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.05] mb-10 text-slate-950">
                {serviceName} em <br/> <span className="text-[#D31219]">{formattedName}</span>
              </h1>

              <p className="text-slate-600 text-lg sm:text-2xl leading-relaxed mb-12 max-w-2xl font-medium">
                Distribuição especializada e estoque a pronta entrega de chapas, perfis normatizados e isolamentos para obras em <strong className="text-slate-950 font-black">{formattedName}</strong>.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                  className="bg-[#D31219] hover:bg-red-700 text-white font-black px-10 py-5 rounded-2xl text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-xl active:scale-[0.98]"
                >
                  <MessageCircle size={20} /> Orçamento WhatsApp
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                  className="bg-white hover:bg-slate-50 text-slate-950 font-black px-10 py-5 rounded-2xl text-xs uppercase tracking-[0.2em] transition-all border-2 border-slate-100 flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  <Phone size={20} /> {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            {/* Right Storefront Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-2xl group">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={SITE_ASSETS.storefront}
                    alt="Centro de Distribuição KY Drywall"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/159306/construction-site-build-construction-structure-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/80 mb-1">Unidade Curitiba</p>
                      <h3 className="text-lg font-black text-white">Showroom BR-277</h3>
                    </div>
                    <a
                      href={COMPANY_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#D31219] text-white p-3 rounded-xl transition-all shadow-lg hover:scale-110 active:scale-95"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RegionalNotice />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3 space-y-20">
            <div>
              <div className="inline-flex items-center gap-2 text-[#D31219] text-xs font-mono font-bold uppercase tracking-wider mb-6">
                <span>02 — VANTAGENS LOGÍSTICAS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 mb-10 text-center md:text-left">
                Eficiência para Obras em {formattedName}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: `Entrega em ${formattedName}`,
                    icon: Truck,
                    text: `Logística ágil para transporte de placas e perfis com integridade total.`
                  },
                  {
                    title: `Cálculo Técnico`,
                    icon: HardHat,
                    text: `Apoio no levantamento preciso de montantes e fixadores para evitar desperdício.`
                  },
                  {
                    title: `Marcas Homologadas`,
                    icon: Package,
                    text: `Trabalhamos com marcas de referência com laudos técnicos de conformidade.`
                  },
                  {
                    title: `Rapidez de Montagem`,
                    icon: Zap,
                    text: `A construção a seco reduz o cronograma da obra em até 70% comparado à alvenaria.`
                  },
                  {
                    title: `Normas ABNT`,
                    icon: ShieldCheck,
                    text: `Atendimento integral às normas NBR 15758 (Drywall) e NBR 16970 (Steel Frame).`
                  },
                  {
                    title: `Obra Limpa`,
                    icon: Recycle,
                    text: `Sistema sustentável que gera até 80% menos entulho no canteiro.`
                  }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-xl border border-slate-200 bg-white hover:border-[#D31219]/20 transition-all shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 text-[#D31219] flex items-center justify-center shrink-0 border border-slate-100">
                        <item.icon size={20} />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 leading-tight">{item.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b border-slate-100 pb-6">
                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 text-[#D31219] text-xs font-mono font-bold uppercase tracking-wider mb-3">
                    <span>03 — MATERIAIS</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Destaques para {formattedName}
                  </h2>
                </div>
                <Link to="/produtos" className="text-sm font-bold text-[#D31219] hover:underline uppercase tracking-widest text-center">
                  Ver Catálogo Completo →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {featuredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            {/* In-page CTA */}
            <div className="bg-slate-900 p-8 md:p-12 rounded-2xl text-white relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
                <div className="text-center md:text-left">
                  <span className="text-[#D31219] text-[10px] font-black uppercase tracking-[0.2em] block mb-3">Cotação Imediata</span>
                  <h3 className="text-2xl sm:text-3xl font-black mb-4 leading-tight">
                    Orçamento de {serviceName} para {formattedName}
                  </h3>
                  <p className="text-slate-400 text-base max-w-md leading-relaxed">
                    Envie seu projeto ou lista de medidas. Retornamos com o quantitativo exato e custos de logística.
                  </p>
                </div>
                <div className="flex flex-col gap-3 shrink-0">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de um orçamento para ${serviceName} em ${formattedName}.`}
                    className="bg-[#D31219] hover:bg-red-700 text-white text-sm font-black uppercase tracking-widest px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg active:scale-[0.98]"
                  >
                    <MessageCircle size={18} /> WhatsApp
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                    className="bg-slate-800 hover:bg-slate-700 text-white text-sm font-black uppercase tracking-widest px-8 py-4 rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                  >
                    <Phone size={18} /> Ligar Agora
                  </a>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              {/* Contact Card */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-3">
                  <Phone size={18} className="text-[#D31219]" />
                  Central Curitiba
                </h4>
                <div className="space-y-6 mb-8">
                  <div>
                    <span className="text-[10px] uppercase font-black text-slate-400 tracking-[0.15em] block mb-1">Telefone Principal</span>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-xl font-black text-slate-900 hover:text-[#D31219] transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black text-slate-400 tracking-[0.15em] block mb-1">Centro de Distribuição</span>
                    <p className="text-sm text-slate-600 font-bold leading-relaxed">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de informações sobre ${serviceName} em ${formattedName}`}
                  className="w-full bg-slate-950 hover:bg-slate-900 text-white text-xs font-black uppercase tracking-widest py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-md"
                >
                  <MessageCircle size={18} /> Falar com Especialista
                </a>
              </div>

              {/* Bairros */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <MapPin size={16} className="text-[#D31219]" />
                  Curitiba: Outras Regiões
                </h4>
                <div className="grid grid-cols-1 gap-2 max-h-[300px] overflow-y-auto pr-4 custom-scrollbar">
                  {NEIGHBORHOODS.map(n => (
                    <Link
                      key={n}
                      to={`/drywall-em/${normalizeLocationName(n)}`}
                      className={`flex items-center justify-between py-2 px-3 rounded-lg transition-all text-xs font-bold ${normalizeLocationName(n) === location ? 'bg-white text-[#D31219] shadow-sm border border-[#D31219]/10' : 'text-slate-500 hover:bg-white hover:text-slate-900'}`}
                    >
                      <span className="truncate">{n}</span>
                      <ChevronRight size={14} className={normalizeLocationName(n) === location ? 'text-[#D31219]' : 'text-slate-300'} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
