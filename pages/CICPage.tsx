
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, Phone, ChevronRight, Home, Package, Truck, Star, Factory, Building2, Map } from 'lucide-react';
import { BASE_URL, SERVICES, CIC_LOCATIONS, getRandomCTA, PRODUCTS, COMPANY_INFO, normalizeLocationName } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import ProductCard from '../components/ProductCard';

const CICPage: React.FC = () => {
  const [cta1, setCta1] = useState('');
  const [cta2, setCta2] = useState('');

  useEffect(() => {
    setCta1(getRandomCTA());
    setCta2(getRandomCTA());
    window.scrollTo(0, 0);
  }, []);

  const featuredProducts = PRODUCTS.filter(p =>
    ['Placas', 'Perfis', 'Massas', 'Parafusos', 'Ferragens'].includes(p.category)
  ).slice(0, 6);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${BASE_URL}/drywall-em-cic/#service`,
        "name": "Drywall e Steel Frame no CIC - Cidade Industrial de Curitiba",
        "serviceType": "Construção a Seco",
        "description": "Serviços completos de Drywall e Steel Frame no CIC (Cidade Industrial de Curitiba). Atendemos todas as vilas: Vila Nossa Senhora da Luz, Vila Verde, Vila Barigui, Caiuá, Parigot de Souza e região industrial.",
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${BASE_URL}/#organization`,
          "name": "KY Drywall & Steel Frame",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "CIC - Cidade Industrial de Curitiba",
            "addressRegion": "PR",
            "addressCountry": "BR"
          },
          "telephone": "+554135284232",
          "areaServed": {
            "@type": "City",
            "name": "CIC - Cidade Industrial de Curitiba"
          }
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
            "name": "CIC - Cidade Industrial",
            "item": `${BASE_URL}/drywall-em-cic`
          }
        ]
      }
    ]
  };

  const pageTitle = "Drywall e Steel Frame no CIC - Cidade Industrial de Curitiba | KY Drywall";
  const pageDescription = "Atendemos o CIC (Cidade Industrial de Curitiba) com entrega rápida de materiais para drywall e steel frame. Vila Nossa Senhora da Luz, Vila Verde, Vila Barigui, Caiuá, Parigot de Souza e toda região industrial. Orçamento via WhatsApp. Ligue: (41) 3528-4232";
  const pageKeywords = "drywall cic, steel frame cic, cidade industrial curitiba, drywall vila nossa senhora da luz, drywall vila verde, drywall vila barigui, drywall caiuá, materiais construção cic, drywall região industrial";

  return (
    <div className="bg-white min-h-screen">
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={`${BASE_URL}/drywall-em-cic`}
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
            <span className="text-white/60">CIC - Cidade Industrial</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-tight">
            Drywall e Steel Frame no <span className="text-[#D31219]">CIC</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl font-medium leading-relaxed mb-4">
            Atendemos toda a Cidade Industrial de Curitiba com entrega rápida e assessoria técnica especializada.
          </p>
          <p className="text-base md:text-lg text-gray-400 max-w-4xl font-medium leading-relaxed mb-10">
            Cobertura completa: CIC Norte, CIC Central, CIC Sul, Vila Nossa Senhora da Luz, Vila Verde, Vila Barigui, Vila Caiuá, Conjunto Caiuá, Conjunto Parigot de Souza, Vila Sabará, Vila Tecnológica e toda região industrial.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <Truck size={18} className="text-[#D31219]" />
              <span className="text-sm font-bold">Entrega no CIC</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <Factory size={18} className="text-[#D31219]" />
              <span className="text-sm font-bold">Área Industrial</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <Star size={18} className="text-[#D31219]" />
              <span className="text-sm font-bold">Assessoria Técnica</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de um orçamento para Drywall/Steel Frame no CIC`}
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
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-8 leading-tight">
                Regiões e Localidades do <span className="text-[#D31219]">CIC</span> Atendidas
              </h2>
              <p className="text-gray-600 font-medium mb-12 text-lg leading-relaxed">
                A KY Drywall atende toda a Cidade Industrial de Curitiba, incluindo todas as vilas, conjuntos habitacionais e áreas industriais. Entrega rápida e atendimento especializado.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-[2.5rem] border border-gray-100 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#D31219] p-4 rounded-2xl">
                      <Map size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-gray-900">Divisões do CIC</h3>
                  </div>
                  <div className="space-y-3">
                    {CIC_LOCATIONS.divisions.map(division => (
                      <Link
                        key={division}
                        to={`/drywall-em-${normalizeLocationName(division)}`}
                        className="flex items-center justify-between p-4 rounded-2xl hover:bg-white transition-all group border border-transparent hover:border-[#D31219]/20"
                      >
                        <span className="text-sm font-bold text-gray-700 group-hover:text-[#D31219]">{division}</span>
                        <ChevronRight size={18} className="text-gray-300 group-hover:text-[#D31219]" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-[2.5rem] border border-gray-100 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#D31219] p-4 rounded-2xl">
                      <Factory size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-gray-900">Áreas Industriais</h3>
                  </div>
                  <div className="space-y-3">
                    {CIC_LOCATIONS.areas.map(area => (
                      <Link
                        key={area}
                        to={`/drywall-em-${normalizeLocationName(area)}`}
                        className="flex items-center justify-between p-4 rounded-2xl hover:bg-white transition-all group border border-transparent hover:border-[#D31219]/20"
                      >
                        <span className="text-sm font-bold text-gray-700 group-hover:text-[#D31219]">{area}</span>
                        <ChevronRight size={18} className="text-gray-300 group-hover:text-[#D31219]" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-[#D31219] p-4 rounded-2xl">
                    <Building2 size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900">Vilas e Conjuntos</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {CIC_LOCATIONS.vilas.map(vila => (
                    <Link
                      key={vila}
                      to={`/drywall-em-${normalizeLocationName(vila)}`}
                      className="flex items-center justify-between p-5 rounded-2xl hover:bg-white transition-all group border border-transparent hover:border-[#D31219]/20 hover:shadow-lg"
                    >
                      <span className="text-sm font-bold text-gray-700 group-hover:text-[#D31219]">{vila}</span>
                      <ChevronRight size={18} className="text-gray-300 group-hover:text-[#D31219]" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-4 leading-tight">
                Produtos para o <span className="text-[#D31219]">CIC</span>
              </h2>
              <p className="text-gray-600 font-medium mb-12 text-lg leading-relaxed">
                Entregamos materiais para construção a seco em toda região do CIC. Estoque completo com pronta entrega.
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
                  Atendimento<br/>Exclusivo CIC
                </h3>
                <p className="text-lg md:text-xl mb-10 text-white/90 font-medium leading-relaxed max-w-2xl">
                  Resposta rápida via WhatsApp com preços competitivos e condições especiais para obras no CIC.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de um orçamento para obra no CIC. Preciso de assessoria técnica.`}
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
                Nossos <span className="text-[#D31219]">Serviços</span> no CIC
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
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Vim do site e gostaria de informações sobre materiais para o CIC`}
                  className="w-full bg-[#D31219] text-white font-black px-8 py-5 rounded-2xl text-xs uppercase tracking-widest hover:bg-white hover:text-[#D31219] transition-all flex items-center justify-center gap-3 shadow-xl hover:scale-105 group"
                >
                  <MessageCircle size={20} className="group-hover:rotate-12 transition-transform"/> {cta2}
                </a>
              </div>

              <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100">
                <h4 className="text-xl font-black uppercase tracking-tight mb-8 border-b-2 border-[#D31219] pb-6 flex items-center gap-2">
                  <MapPin className="text-[#D31219]" size={24}/> Localidades do CIC
                </h4>
                <div className="space-y-2">
                  <Link
                    to={`/drywall-em-${normalizeLocationName(CIC_LOCATIONS.main)}`}
                    className="group flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-[#D31219]/20"
                  >
                    <span className="text-xs font-bold text-gray-600 group-hover:text-[#D31219]">{CIC_LOCATIONS.main}</span>
                    <ChevronRight size={16} className="text-gray-300 group-hover:text-[#D31219]" />
                  </Link>
                  {CIC_LOCATIONS.divisions.slice(0, 3).map(div => (
                    <Link
                      key={div}
                      to={`/drywall-em-${normalizeLocationName(div)}`}
                      className="group flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-[#D31219]/20"
                    >
                      <span className="text-xs font-bold text-gray-600 group-hover:text-[#D31219]">{div}</span>
                      <ChevronRight size={16} className="text-gray-300 group-hover:text-[#D31219]" />
                    </Link>
                  ))}
                  {CIC_LOCATIONS.vilas.slice(0, 5).map(vila => (
                    <Link
                      key={vila}
                      to={`/drywall-em-${normalizeLocationName(vila)}`}
                      className="group flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-[#D31219]/20"
                    >
                      <span className="text-xs font-bold text-gray-600 group-hover:text-[#D31219]">{vila}</span>
                      <ChevronRight size={16} className="text-gray-300 group-hover:text-[#D31219]" />
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

export default CICPage;
