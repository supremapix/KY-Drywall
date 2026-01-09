
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, CheckCircle2, ShieldCheck, Zap, HardHat, Recycle, Timer, ChevronRight, MessageCircle, ArrowLeft, Phone, Package, Clock, Truck, Star, Home } from 'lucide-react';
import { BASE_URL, SERVICES, NEIGHBORHOODS, CITIES_RMC, getRandomCTA, PRODUCTS, COMPANY_INFO, normalizeLocationName } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
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
        "@id": `${BASE_URL}/${type}-em-${location}/#service`,
        "name": `${serviceName} em ${formattedName}`,
        "serviceType": "Construção a Seco",
        "description": `Serviços completos de ${serviceName} em ${formattedName}. Instalação, materiais e assessoria técnica especializada.`,
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${BASE_URL}/#organization`,
          "name": "KY Drywall & Steel Frame",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": formattedName,
            "addressRegion": "PR",
            "addressCountry": "BR"
          },
          "telephone": "+554135284232",
          "areaServed": {
            "@type": "City",
            "name": formattedName
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": `${BASE_URL}/${type}-em-${location}`,
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
            "item": `${BASE_URL}/${type}-em-${location}`
          }
        ]
      }
    ]
  };

  const pageTitle = `${serviceName} em ${formattedName} | Entrega Rápida | Orçamento Grátis | KY Drywall`;
  const pageDescription = `${serviceName} em ${formattedName} com a KY Drywall & Steel Frame. Entrega imediata de placas, perfis, massas e acessórios. Atendimento especializado, orçamento via WhatsApp e os melhores preços. Maior estoque de Curitiba. Ligue: (41) 3528-4232`;
  const pageKeywords = `${serviceName.toLowerCase()} ${formattedName.toLowerCase()}, ${serviceName.toLowerCase()} curitiba, materiais ${serviceName.toLowerCase()}, instalação ${serviceName.toLowerCase()}, orçamento ${serviceName.toLowerCase()}, ${type} ${formattedName.toLowerCase()}, construção a seco ${formattedName.toLowerCase()}`;

  if (!location) {
    return null;
  }

  return (
    <div className="bg-white min-h-screen">
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={`${BASE_URL}/${type}-em-${location}`}
        schema={schema}
      />

      <section className="bg-gradient-to-br from-[#003366] via-[#002447] to-[#001829] py-16 md:py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[#D31219] mb-8 tracking-[0.3em]">
            <Link to="/" className="hover:text-white flex items-center gap-1 transition-colors"><Home size={14}/> Início</Link>
            <ChevronRight size={10}/>
            <span className="text-white/60">Atendimento em {formattedName}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-tight">
            {serviceName} em <span className="text-[#D31219]">{formattedName}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl font-medium leading-relaxed mb-10">
            A KY Drywall é a maior distribuidora de materiais para construção a seco em Curitiba. Atendemos {formattedName} com entrega rápida, assessoria técnica especializada e os melhores preços do mercado.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <Truck size={18} className="text-[#D31219]" />
              <span className="text-sm font-bold">Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <Package size={18} className="text-[#D31219]" />
              <span className="text-sm font-bold">Maior Estoque</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <Star size={18} className="text-[#D31219]" />
              <span className="text-sm font-bold">Assessoria Técnica</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de um orçamento para ${serviceName} em ${formattedName}`}
              className="bg-[#D31219] text-white font-black px-10 py-5 rounded-2xl text-xs uppercase tracking-widest hover:bg-white hover:text-[#D31219] transition-all shadow-2xl flex items-center justify-center gap-3 group"
            >
              <MessageCircle size={20} className="group-hover:rotate-12 transition-transform"/> Orçamento Gratuito
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="bg-white/10 backdrop-blur-md text-white font-black px-10 py-5 rounded-2xl text-xs uppercase tracking-widest hover:bg-white hover:text-[#003366] transition-all border-2 border-white/30 flex items-center justify-center gap-3"
            >
              <Phone size={20}/> {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3 space-y-20">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-12 leading-tight">
                Por que escolher a <span className="text-[#D31219]">KY Drywall</span><br/>em {formattedName}?
              </h2>
              <div className="grid grid-cols-1 gap-8">
                {[
                  {
                    title: `Entrega Expressa em ${formattedName}`,
                    icon: Truck,
                    text: `Nossa frota própria garante entrega no mesmo dia para ${formattedName}. Trabalhamos com as melhores marcas como Barbieri, Gypsum e Holdflex. Receba seus materiais rapidamente e comece sua obra sem atrasos.`
                  },
                  {
                    title: `Assessoria Técnica Especializada`,
                    icon: HardHat,
                    text: `Equipe técnica qualificada para orientar na escolha dos materiais ideais para sua obra. Calculamos quantitativos precisos, evitando desperdícios. Suporte completo do projeto à execução em ${formattedName}.`
                  },
                  {
                    title: `Maior Estoque de Curitiba`,
                    icon: Package,
                    text: `Mais de 50 produtos disponíveis em estoque permanente. Placas ST, RU e RF, perfis de todas as medidas, parafusos, fitas, massas e todos os acessórios para ${serviceName.toLowerCase()}. Tudo em pronta entrega para ${formattedName}.`
                  },
                  {
                    title: `Obra 70% Mais Rápida`,
                    icon: Zap,
                    text: `O sistema de construção a seco reduz o tempo de obra drasticamente. Menos resíduos, mais economia e acabamento profissional. Reduza custos com mão de obra e finalize projetos em ${formattedName} no prazo.`
                  },
                  {
                    title: `Garantia de Qualidade`,
                    icon: ShieldCheck,
                    text: `Todos os produtos com certificação e garantia do fabricante. Materiais testados e aprovados para construção civil. Atendemos normas técnicas brasileiras e garantimos a qualidade em cada entrega para ${formattedName}.`
                  },
                  {
                    title: `Sustentabilidade`,
                    icon: Recycle,
                    text: `Construção a seco gera até 80% menos resíduos que obras convencionais. Materiais recicláveis e processos sustentáveis. Contribua para o meio ambiente com tecnologia moderna em sua obra em ${formattedName}.`
                  }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-6 items-start bg-gradient-to-br from-gray-50 to-white p-10 rounded-[3rem] border border-gray-100 group hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                    <div className="bg-gradient-to-br from-[#003366] to-[#002447] p-6 rounded-3xl text-[#D31219] group-hover:from-[#D31219] group-hover:to-[#a00e13] group-hover:text-white transition-all duration-500 shrink-0 shadow-xl">
                      <item.icon size={40} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-4 leading-tight">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed font-medium text-base">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-4 leading-tight">
                Produtos para <span className="text-[#D31219]">{formattedName}</span>
              </h2>
              <p className="text-gray-600 font-medium mb-12 text-lg leading-relaxed">
                Confira os principais materiais que entregamos em {formattedName} com pronta entrega. Estoque completo para sua obra de {serviceName.toLowerCase()}.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="text-center mt-12">
                <Link to="/produtos" className="inline-flex items-center gap-3 bg-[#003366] text-white font-black px-12 py-6 rounded-2xl text-xs uppercase tracking-widest hover:bg-[#D31219] transition-all shadow-xl hover:scale-105 group">
                  Ver Catálogo Completo <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#D31219] to-[#a00e13] p-12 md:p-20 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                <MessageCircle size={300} />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
                  Solicite seu<br/>Orçamento Agora
                </h3>
                <p className="text-lg md:text-xl mb-10 text-white/90 font-medium leading-relaxed max-w-2xl">
                  Atendimento especializado para {formattedName}. Resposta rápida via WhatsApp com preços competitivos e condições especiais para sua obra.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de um orçamento para ${serviceName} em ${formattedName}. Preciso de assessoria técnica.`}
                    className="bg-white text-[#D31219] font-black px-12 py-6 rounded-2xl text-xs uppercase tracking-widest hover:bg-[#003366] hover:text-white transition-all shadow-2xl flex items-center justify-center gap-3 group"
                  >
                    <MessageCircle size={22} className="group-hover:rotate-12 transition-transform"/> {cta1}
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                    className="bg-[#003366] text-white font-black px-12 py-6 rounded-2xl text-xs uppercase tracking-widest hover:bg-white hover:text-[#003366] transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    <Phone size={22}/> Ligar Agora
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-12 leading-tight">
                Nossos <span className="text-[#D31219]">Serviços</span> em {formattedName}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SERVICES.map(service => (
                  <Link
                    key={service.id}
                    to={`/servicos/${service.id}`}
                    className="group relative overflow-hidden rounded-[3rem] h-80 hover:shadow-2xl transition-all hover:scale-[1.02] duration-500"
                  >
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <h3 className="text-2xl font-black uppercase mb-3 group-hover:text-[#D31219] transition-colors leading-tight">{service.title}</h3>
                      <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed font-medium">{service.description.replace(/<[^>]*>/g, '')}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-12 md:p-16 rounded-[4rem] border border-gray-100 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 mb-8 leading-tight">
                Informações de <span className="text-[#D31219]">Entrega</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D31219] p-3 rounded-2xl text-white shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-sm mb-2 text-gray-900">Horário de Atendimento</h4>
                      <p className="text-sm text-gray-600 font-medium">{COMPANY_INFO.hours.weekdays}</p>
                      <p className="text-sm text-gray-600 font-medium">{COMPANY_INFO.hours.saturday}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D31219] p-3 rounded-2xl text-white shrink-0">
                      <Truck size={24} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-sm mb-2 text-gray-900">Prazo de Entrega</h4>
                      <p className="text-sm text-gray-600 font-medium">Entrega no mesmo dia para {formattedName} (sujeito a disponibilidade)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D31219] p-3 rounded-2xl text-white shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-sm mb-2 text-gray-900">Loja Física</h4>
                      <p className="text-sm text-gray-600 font-medium">{COMPANY_INFO.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D31219] p-3 rounded-2xl text-white shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-sm mb-2 text-gray-900">Contato</h4>
                      <p className="text-sm text-gray-600 font-medium">{COMPANY_INFO.phone}</p>
                      <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} className="text-sm text-[#D31219] font-black hover:underline">WhatsApp: {COMPANY_INFO.whatsapp}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              <div className="bg-gradient-to-br from-[#003366] to-[#002447] p-10 rounded-[3rem] shadow-2xl text-white border border-white/10">
                <h4 className="text-xl font-black uppercase tracking-tight mb-8 flex items-center gap-2 border-b border-white/20 pb-6">
                  <Phone className="text-[#D31219]" size={24}/> Fale Conosco
                </h4>
                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-black">Telefone</p>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-xl font-black hover:text-[#D31219] transition-colors block">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-black">Horário</p>
                    <p className="text-sm font-bold leading-relaxed">{COMPANY_INFO.hours.weekdays}</p>
                    <p className="text-sm font-bold">{COMPANY_INFO.hours.saturday}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-black">Endereço</p>
                    <p className="text-sm font-bold leading-relaxed">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Vim do site e gostaria de informações sobre ${serviceName} em ${formattedName}`}
                  className="w-full bg-[#D31219] text-white font-black px-8 py-5 rounded-2xl text-xs uppercase tracking-widest hover:bg-white hover:text-[#D31219] transition-all flex items-center justify-center gap-3 shadow-xl hover:scale-105 group"
                >
                  <MessageCircle size={20} className="group-hover:rotate-12 transition-transform"/> {cta2}
                </a>
              </div>

              <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100">
                <h4 className="text-xl font-black uppercase tracking-tight mb-8 border-b-2 border-[#D31219] pb-6 flex items-center gap-2">
                  <MapPin className="text-[#D31219]" size={24}/> Bairros de Curitiba
                </h4>
                <div className="grid grid-cols-1 gap-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {NEIGHBORHOODS.map(n => (
                    <Link
                      key={n}
                      to={`/drywall-em-${normalizeLocationName(n)}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className={`group flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-all ${normalizeLocationName(n) === location ? 'bg-[#D31219]/5 border border-[#D31219]/20' : ''}`}
                    >
                      <span className={`text-xs font-bold ${normalizeLocationName(n) === location ? 'text-[#D31219]' : 'text-gray-600 group-hover:text-[#D31219]'}`}>{n}</span>
                      <ChevronRight size={16} className={`${normalizeLocationName(n) === location ? 'text-[#D31219]' : 'text-gray-300 group-hover:text-[#D31219]'}`} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100">
                <h4 className="text-xl font-black uppercase tracking-tight mb-8 border-b-2 border-[#D31219] pb-6 flex items-center gap-2">
                  <MapPin className="text-[#D31219]" size={24}/> Região Metropolitana
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {CITIES_RMC.map(c => (
                    <Link
                      key={c}
                      to={`/drywall-em-${normalizeLocationName(c)}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className={`group flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-all ${normalizeLocationName(c) === location ? 'bg-[#D31219]/5 border border-[#D31219]/20' : ''}`}
                    >
                      <span className={`text-xs font-bold ${normalizeLocationName(c) === location ? 'text-[#D31219]' : 'text-gray-600 group-hover:text-[#D31219]'}`}>{c}</span>
                      <ChevronRight size={16} className={`${normalizeLocationName(c) === location ? 'text-[#D31219]' : 'text-gray-300 group-hover:text-[#D31219]'}`} />
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
