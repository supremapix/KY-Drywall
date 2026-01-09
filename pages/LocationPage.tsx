
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, CheckCircle2, ShieldCheck, Zap, HardHat, Recycle, Timer, ChevronRight, MessageCircle, ArrowLeft, Phone, Package, Clock, Truck, Star } from 'lucide-react';
import { BASE_URL, SERVICES, NEIGHBORHOODS, CITIES_RMC, getRandomCTA, PRODUCTS, COMPANY_INFO, normalizeLocationName } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import ProductCard from '../components/ProductCard';

interface LocationPageProps {
  type: 'drywall' | 'steel';
}

const LocationPage: React.FC<LocationPageProps> = ({ type }) => {
  const { location } = useParams<{ location: string }>();
  const [cta1, setCta1] = useState('');
  const [cta2, setCta2] = useState('');

  const allLocations = [...NEIGHBORHOODS, ...CITIES_RMC];
  const formattedName = allLocations.find(loc => normalizeLocationName(loc) === location) ||
    (location ? location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '');
  const serviceName = type === 'drywall' ? 'Drywall' : 'Steel Frame';

  useEffect(() => {
    setCta1(getRandomCTA());
    setCta2(getRandomCTA());
    window.scrollTo(0, 0);
  }, [location]);

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

  return (
    <div className="bg-white min-h-screen">
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={`${BASE_URL}/${type}-em-${location}`}
        schema={schema}
      />

      {/* Hero Header */}
      <section className="bg-[#003366] py-20 md:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920" alt={`Obra em ${formattedName}`} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[#D31219] mb-8 tracking-[0.3em]">
            <Link to="/" className="hover:text-white flex items-center gap-1"><ArrowLeft size={12}/> Início</Link>
            <ChevronRight size={10}/>
            <span>Atendimento em {formattedName}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-tight">
            {serviceName} em <span className="text-[#D31219]">{formattedName}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl font-medium leading-relaxed mb-8">
            A KY Drywall é a maior distribuidora de materiais para construção a seco em Curitiba. Atendemos {formattedName} com entrega rápida, assessoria técnica especializada e os melhores preços do mercado.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
              <Truck size={18} className="text-[#D31219]" />
              <span className="text-sm font-bold">Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
              <Package size={18} className="text-[#D31219]" />
              <span className="text-sm font-bold">Maior Estoque</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
              <Star size={18} className="text-[#D31219]" />
              <span className="text-sm font-bold">Assessoria Técnica</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3 space-y-16">
            {/* Vantagens */}
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-12">
                Por que escolher a <span className="text-[#D31219]">KY Drywall</span> em {formattedName}?
              </h2>
              <div className="grid grid-cols-1 gap-8">
                {[
                  {
                    title: `Entrega Rápida em ${formattedName}`,
                    icon: Truck,
                    text: `Nossa frota própria garante entrega no mesmo dia para ${formattedName}. Trabalhamos com as melhores marcas como Barbieri, Gypsum e Holdflex.`
                  },
                  {
                    title: `Assessoria Técnica Especializada`,
                    icon: HardHat,
                    text: `Equipe técnica qualificada para orientar na escolha dos materiais ideais. Calculamos quantitativos e oferecemos suporte completo para sua obra em ${formattedName}.`
                  },
                  {
                    title: `Maior Estoque de Curitiba`,
                    icon: Package,
                    text: `Mais de 50 produtos disponíveis em estoque. Placas, perfis, parafusos, fitas, massas e todos os acessórios para ${serviceName.toLowerCase()} em pronta entrega.`
                  },
                  {
                    title: `Construção até 70% Mais Rápida`,
                    icon: Zap,
                    text: `O sistema de construção a seco reduz o tempo de obra significativamente. Menos resíduos, mais economia e acabamento profissional em ${formattedName}.`
                  }
                ].map((sec, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-8 items-start bg-gray-50 p-10 rounded-[3rem] border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                    <div className="bg-[#003366] p-6 rounded-3xl text-[#D31219] group-hover:bg-[#D31219] group-hover:text-white transition-colors shrink-0">
                      <sec.icon size={40} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-4">{sec.title}</h3>
                      <p className="text-gray-600 leading-relaxed font-medium">{sec.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Produtos em Destaque */}
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-4">
                Produtos para <span className="text-[#D31219]">{formattedName}</span>
              </h2>
              <p className="text-gray-600 font-medium mb-12 text-lg">
                Confira alguns dos principais materiais que entregamos em {formattedName} com pronta entrega
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="text-center mt-12">
                <Link to="/produtos" className="inline-flex items-center gap-3 bg-[#003366] text-white font-black px-10 py-5 rounded-2xl text-xs uppercase tracking-widest hover:bg-[#D31219] transition-all shadow-xl">
                  Ver Catálogo Completo <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* CTA Orçamento */}
            <div className="bg-[#D31219] p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10">
                <Package size={200} />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
                  Solicite seu Orçamento
                </h3>
                <p className="text-lg mb-8 text-white/90 font-medium">
                  Atendimento especializado para {formattedName}. Resposta em minutos via WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de um orçamento para ${serviceName} em ${formattedName}`}
                    className="bg-white text-[#D31219] font-black px-10 py-5 rounded-2xl text-[11px] uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    <MessageCircle size={20}/> {cta1}
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                    className="bg-[#003366] text-white font-black px-10 py-5 rounded-2xl text-[11px] uppercase tracking-widest hover:bg-white hover:text-[#003366] transition-all flex items-center justify-center gap-3"
                  >
                    <Phone size={20}/> Ligar Agora
                  </a>
                </div>
              </div>
            </div>

            {/* Serviços Disponíveis */}
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-12">
                Nossos <span className="text-[#D31219]">Serviços</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SERVICES.map(service => (
                  <Link
                    key={service.id}
                    to={`/servicos/${service.id}`}
                    className="group relative overflow-hidden rounded-[2.5rem] h-64 hover:shadow-2xl transition-all"
                  >
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-xl font-black uppercase mb-2 group-hover:text-[#D31219] transition-colors">{service.title}</h3>
                      <p className="text-sm text-gray-300 line-clamp-2">{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              {/* Contato Rápido */}
              <div className="bg-[#003366] p-8 rounded-[3rem] shadow-xl text-white">
                <h4 className="text-xl font-black uppercase tracking-tight mb-6 flex items-center gap-2">
                  <Phone className="text-[#D31219]" size={20}/> Fale Conosco
                </h4>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Telefone</p>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-lg font-black hover:text-[#D31219] transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Horário de Atendimento</p>
                    <p className="text-sm font-bold">{COMPANY_INFO.hours.weekdays}</p>
                    <p className="text-sm font-bold">{COMPANY_INFO.hours.saturday}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Endereço</p>
                    <p className="text-sm font-bold">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Vim do site e gostaria de informações sobre ${serviceName} em ${formattedName}`}
                  className="w-full bg-[#D31219] text-white font-black px-6 py-4 rounded-2xl text-xs uppercase tracking-widest hover:bg-white hover:text-[#D31219] transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18}/> {cta2}
                </a>
              </div>

              {/* Bairros de Curitiba */}
              <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100">
                <h4 className="text-xl font-black uppercase tracking-tight mb-6 border-b-2 border-[#D31219] pb-4 flex items-center gap-2">
                  <MapPin className="text-[#D31219]" size={20}/> Bairros de Curitiba
                </h4>
                <div className="grid grid-cols-1 gap-2 max-h-[400px] overflow-y-auto">
                  {NEIGHBORHOODS.map(n => (
                    <Link
                      key={n}
                      to={`/drywall-em-${normalizeLocationName(n)}`}
                      className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-all"
                    >
                      <span className="text-xs font-bold text-gray-600 group-hover:text-[#D31219]">{n}</span>
                      <ChevronRight size={14} className="text-gray-300 group-hover:text-[#D31219]" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Cidades RMC */}
              <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100">
                <h4 className="text-xl font-black uppercase tracking-tight mb-6 border-b-2 border-[#D31219] pb-4 flex items-center gap-2">
                  <MapPin className="text-[#D31219]" size={20}/> Região Metropolitana
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {CITIES_RMC.map(c => (
                    <Link
                      key={c}
                      to={`/drywall-em-${normalizeLocationName(c)}`}
                      className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-all"
                    >
                      <span className="text-xs font-bold text-gray-600 group-hover:text-[#D31219]">{c}</span>
                      <ChevronRight size={14} className="text-gray-300 group-hover:text-[#D31219]" />
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
