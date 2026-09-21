
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, CheckCircle2, ShieldCheck, Zap, HardHat, Recycle, Timer, ChevronRight, MessageCircle, ArrowLeft, Phone, Package, Clock, Truck, Star, Home } from 'lucide-react';
import { BASE_URL, SERVICES, NEIGHBORHOODS, CITIES_RMC, getRandomCTA, PRODUCTS, COMPANY_INFO, normalizeLocationName } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import NotFound from './NotFound';
import ProductCard from '../components/ProductCard';

interface LocationPageProps {
  type: 'drywall' | 'steel';
}

const LocationPage: React.FC<LocationPageProps> = ({ type }) => {
  const { location } = useParams<{ location: string }>();
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
      />

      <section className="bg-slate-900 py-12 md:py-16 text-white border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 font-medium">
            <Link to="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home size={13} /> Início
            </Link>
            <ChevronRight size={11} />
            <Link to="/blog" className="hover:text-white transition-colors">Atendimento Regional</Link>
            <ChevronRight size={11} />
            <span className="text-slate-200">{formattedName}</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-[#D31219] text-xs font-bold uppercase tracking-wider mb-2 block">
              Distribuição & Especificação Técnica
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
              {serviceName} em <span className="text-white">{formattedName}</span>
            </h1>
            <p className="text-xs sm:text-base text-slate-300 font-normal leading-relaxed mb-6">
              Distribuição autorizada de insumos de {serviceName.toLowerCase()} para {formattedName} e região. Fornecimento direto com pronta entrega, memorial de cálculo e suporte técnico para instaladores, engenheiros e construtores.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-6 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded border border-slate-700">
                <Truck size={14} className="text-[#D31219]" />
                <span>Logística para {formattedName}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded border border-slate-700">
                <Package size={14} className="text-[#D31219]" />
                <span>Estoque Permanente</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded border border-slate-700">
                <ShieldCheck size={14} className="text-[#D31219]" />
                <span>Normas ABNT NBR 15758</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de um orçamento para ${serviceName} em ${formattedName}`}
                className="bg-[#D31219] hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={15} /> Solicitar Cotação
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-4 py-2.5 rounded text-xs uppercase tracking-wider transition-colors border border-slate-700 flex items-center justify-center gap-2"
              >
                <Phone size={15} /> {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3 space-y-12">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-6">
                Vantagens e Logística em {formattedName}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: `Entrega Programada em ${formattedName}`,
                    icon: Truck,
                    text: `Frota própria e logística ágil para transporte com integridade de placas, perfis de até 3m e compostos pastosos.`
                  },
                  {
                    title: `Cálculo de Quantitativo`,
                    icon: HardHat,
                    text: `Nossa equipe técnica apoia o levantamento preciso de montantes, parafusos e fitas para evitar sobras.`
                  },
                  {
                    title: `Marcas Homologadas`,
                    icon: Package,
                    text: `Trabalhamos com marcas de referência nacional com laudos técnicos de conformidade e garantia de fábrica.`
                  },
                  {
                    title: `Eficiência e Agilidade`,
                    icon: Zap,
                    text: `A montagem a seco reduz o cronograma da obra em até 70% sem sobrecarga na estrutura predial.`
                  },
                  {
                    title: `Garantia e Laudos`,
                    icon: ShieldCheck,
                    text: `Atendimento integral às normas ABNT NBR 15758 (Drywall) e ABNT NBR 16970 (Light Steel Framing).`
                  },
                  {
                    title: `Resíduo Mínimo`,
                    icon: Recycle,
                    text: `Construção sustentável com aço reciclável e gesso reutilizável, gerando até 80% menos entulho.`
                  }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded border border-slate-200 bg-white flex flex-col justify-between">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="p-2 rounded bg-slate-100 text-[#D31219] shrink-0">
                        <item.icon size={18} />
                      </div>
                      <h3 className="text-xs font-bold text-slate-900 leading-snug">{item.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                    Materiais em Destaque para {formattedName}
                  </h2>
                  <p className="text-xs text-slate-500">Insumos homologados disponíveis para expedição imediata.</p>
                </div>
                <Link to="/produtos" className="text-xs font-semibold text-[#D31219] hover:text-red-700">
                  Ver Todos →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featuredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            {/* In-page CTA */}
            <div className="bg-slate-900 p-6 sm:p-8 rounded text-white border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-[#D31219] text-[10px] font-bold uppercase tracking-wider block mb-1">Cotação Rápida</span>
                <h3 className="text-lg font-bold mb-1">
                  Orçamento de {serviceName} para {formattedName}
                </h3>
                <p className="text-xs text-slate-300 max-w-md">
                  Envie sua lista de medidas ou projeto arquitetônico. Retornamos com quantitativo e custos de frete.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de um orçamento para ${serviceName} em ${formattedName}. Preciso de assessoria técnica.`}
                  className="bg-[#D31219] hover:bg-red-700 text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded transition-colors flex items-center gap-2"
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded border border-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <Phone size={14} /> Ligar
                </a>
              </div>
            </div>

            {/* Servicos */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
                Sistemas e Soluções Construtivas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES.map(service => (
                  <Link
                    key={service.id}
                    to={`/servicos/${service.id}`}
                    className="p-4 rounded border border-slate-200 bg-white hover:border-slate-400 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">{service.title}</h3>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {service.description.replace(/<[^>]*>/g, '')}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#D31219] mt-3 inline-flex items-center gap-1">
                      Ver detalhes <ChevronRight size={12} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Informações de entrega */}
            <div className="p-5 rounded border border-slate-200 bg-slate-50/70">
              <h3 className="text-sm font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                Diretrizes de Retirada & Expedição
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900 mb-0.5">Endereço do Centro de Distribuição:</p>
                  <p>{COMPANY_INFO.address}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-0.5">Horário de Expedição:</p>
                  <p>{COMPANY_INFO.hours.weekdays} | {COMPANY_INFO.hours.saturday}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-0.5">Prazo Estimado para {formattedName}:</p>
                  <p>Sob consulta no momento do pedido (expedições diárias).</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-0.5">Central Telefônica:</p>
                  <p>{COMPANY_INFO.phone} / WhatsApp: {COMPANY_INFO.whatsapp}</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              {/* Contact Card */}
              <div className="bg-slate-900 p-5 rounded border border-slate-800 text-white">
                <h4 className="text-sm font-bold text-white mb-3 border-b border-slate-800 pb-2 flex items-center gap-2">
                  <Phone size={15} className="text-[#D31219]" />
                  Central de Atendimento
                </h4>
                <div className="space-y-3 text-xs text-slate-300 mb-5">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">Telefone</span>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="font-bold text-white hover:text-[#D31219]">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">Horário</span>
                    <p>{COMPANY_INFO.hours.weekdays}</p>
                    <p>{COMPANY_INFO.hours.saturday}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">Endereço</span>
                    <p>{COMPANY_INFO.address}</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Vim do site e gostaria de informações sobre ${serviceName} em ${formattedName}`}
                  className="w-full bg-[#D31219] hover:bg-red-700 text-white text-xs font-semibold uppercase tracking-wider py-2.5 px-4 rounded transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={15} /> Contatar via WhatsApp
                </a>
              </div>

              {/* Bairros de Curitiba */}
              <div className="bg-white p-5 rounded border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-100 pb-2 flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#D31219]" />
                  Outros Bairros de Curitiba
                </h4>
                <div className="grid grid-cols-1 gap-1 max-h-[300px] overflow-y-auto pr-1 text-xs">
                  {NEIGHBORHOODS.map(n => (
                    <Link
                      key={n}
                      to={`/drywall-em/${normalizeLocationName(n)}`}
                      className={`flex items-center justify-between py-1.5 px-2 rounded hover:bg-slate-50 transition-colors ${normalizeLocationName(n) === location ? 'bg-red-50 text-[#D31219] font-bold' : 'text-slate-600'}`}
                    >
                      <span className="truncate">{n}</span>
                      <ChevronRight size={12} className="text-slate-400 shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Cidades da RMC */}
              <div className="bg-white p-5 rounded border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-100 pb-2 flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#003366]" />
                  Cidades da Região Metropolitana
                </h4>
                <div className="grid grid-cols-1 gap-1 text-xs">
                  {CITIES_RMC.map(c => (
                    <Link
                      key={c}
                      to={`/drywall-em/${normalizeLocationName(c)}`}
                      className={`flex items-center justify-between py-1.5 px-2 rounded hover:bg-slate-50 transition-colors ${normalizeLocationName(c) === location ? 'bg-red-50 text-[#D31219] font-bold' : 'text-slate-600'}`}
                    >
                      <span className="truncate">{c}</span>
                      <ChevronRight size={12} className="text-slate-400 shrink-0" />
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
