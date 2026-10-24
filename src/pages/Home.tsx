
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  MapPin, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  Building2, 
  Truck, 
  CheckCircle2, 
  Layers, 
  Home as HomeIcon, 
  HelpCircle,
  FileText,
  Phone
} from 'lucide-react';
import { SERVICES, BLOG_POSTS, NEIGHBORHOODS, CITIES_RMC, PRODUCTS, normalizeLocationName, BASE_URL, COMPANY_INFO } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import ProductCard from '../components/ProductCard';

import StoreHero from '../components/StoreHero';

const FEATURED_CATEGORIES = ['Todos', 'Placas', 'Perfis', 'Lã (Isolamento)', 'Massas'];

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProducts = PRODUCTS.filter(p => {
    if (selectedCategory === 'Todos') {
      return ['Placas', 'Perfis', 'Lã (Isolamento)', 'Massas'].includes(p.category);
    }
    return p.category === selectedCategory;
  }).slice(0, 8);

  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'KY Drywall & Steel Frame',
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/logotipo-ky-drywall.png`
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+554135284232',
          contactType: 'customer service',
          areaServed: 'BR',
          availableLanguage: 'Portuguese'
        },
        sameAs: ['https://wa.me/5541996457421']
      },
      {
        '@type': 'Store',
        '@id': `${BASE_URL}/#store`,
        name: 'KY Drywall & Steel Frame - Loja Física',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ky-loja-cajuru-drywall-stell-fame.png-CAi9KHi0wcqQLptb0qLFGSWQZaXr98.jpeg',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Rod. BR-277, 3641 - Cajuru',
          addressLocality: 'Curitiba',
          addressRegion: 'PR',
          postalCode: '81480-270',
          addressCountry: 'BR'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '-25.4284',
          longitude: '-49.2733'
        },
        telephone: '+554135284232'
      }
    ]
  };

  return (
    <div className="bg-white text-slate-900">
      <EnhancedSEO
        title="KY Drywall & Steel Frame | Distribuidora em Curitiba"
        description="Loja e distribuidora de Drywall e Steel Frame em Curitiba. Placas, perfis galvanizados Barbieri, isolamento termoacústico e assessoria técnica para obras."
        keywords="drywall curitiba, steel frame curitiba, placas drywall, perfis steel frame, barbieri z180, construcao a seco curitiba, materiais drywall"
        canonical={BASE_URL}
        schema={homeSchema}
      />

      <StoreHero />

      {/* Authority & Benefits Bar - Light Version */}
      <section className="bg-slate-50 border-b border-slate-200 text-slate-700 py-10 relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-red-50 text-[#D31219] flex items-center justify-center shrink-0 border border-red-100">
                <Truck size={22} />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-bold text-sm text-slate-900">Pronta Entrega</p>
                <p className="text-xs text-slate-500 mt-0.5">Frota própria em Curitiba e RMC</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-red-50 text-[#D31219] flex items-center justify-center shrink-0 border border-red-100">
                <ShieldCheck size={22} />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-bold text-sm text-slate-900">Aço Z180 Barbieri</p>
                <p className="text-xs text-slate-500 mt-0.5">Conformidade ABNT NBR 15253</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-red-50 text-[#D31219] flex items-center justify-center shrink-0 border border-red-100">
                <Building2 size={22} />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-bold text-sm text-slate-900">Engenharia e Suporte</p>
                <p className="text-xs text-slate-500 mt-0.5">Cálculo de modulação para obra</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-red-50 text-[#D31219] flex items-center justify-center shrink-0 border border-red-100">
                <MapPin size={22} />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-bold text-sm text-slate-900">Showroom Cajuru</p>
                <p className="text-xs text-slate-500 mt-0.5">BR-277 com estoque físico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destaque: Steel Frame Construtivo */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-[#D31219] text-xs font-mono font-bold uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded">
                <span>02 — STEEL FRAME ESTRUTURAL</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                Construção Industrializada em <span className="text-[#D31219]">Steel Frame</span>
              </h2>

              <p className="text-slate-700 text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                O Light Steel Frame combina engenharia de precisão e perfis galvanizados de alta resistência Z180. Reduz o tempo de execução no canteiro, elimina desperdício de materiais e oferece excelente isolamento térmico no inverno curitibano.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 text-center">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-2xl sm:text-3xl font-black text-[#D31219]">Até 70%</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">Mais rápido que alvenaria</p>
                  <p className="text-xs text-slate-500 mt-0.5">Montagem limpa e ágil</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-2xl sm:text-3xl font-black text-[#D31219]">90% Menos</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">Entulho e resíduos</p>
                  <p className="text-xs text-slate-500 mt-0.5">Construção sustentável</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-2xl sm:text-3xl font-black text-[#D31219]">Precisão</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">Cálculo estrutural</p>
                  <p className="text-xs text-slate-500 mt-0.5">Sem improviso na obra</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-2xl sm:text-3xl font-black text-[#D31219]">100% Aço</p>
                  <p className="text-xs font-bold text-slate-800 mt-1">Perfis Barbieri Z180</p>
                  <p className="text-xs text-slate-500 mt-0.5">Proteção galvânica</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5 pt-4 justify-center lg:justify-start">
                <Link
                  to="/steel-frame"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D31219] text-white font-bold px-6 py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider hover:bg-slate-950 transition-colors shadow-md min-h-[48px]"
                >
                  <span>Conhecer Sistema Steel Frame</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/5541996457421?text=Olá! Gostaria de consultar projeto e valores para Steel Frame."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-bold px-6 py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider border border-slate-300 hover:border-[#D31219] hover:text-[#D31219] transition-colors min-h-[48px]"
                >
                  <MessageCircle size={16} />
                  <span>Falar com Consultor</span>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/steel-frame-yfbTyNsPB5CHvelFOwWPfb75qIZ8vl.png"
                  alt="Estrutura de Steel Frame KY Drywall Curitiba"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=STEEL+FRAME+KY+DRYWALL';
                  }}
                />
                <div className="p-4 bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                  <div>
                    <p className="text-sm font-bold">Suporte Técnico para Construtores e Engenheiros</p>
                    <p className="text-xs text-slate-400">Atendimento de balcão e cotações rápidas na BR-277</p>
                  </div>
                  <span className="text-xs font-bold text-[#D31219] border border-[#D31219]/30 bg-red-950/40 px-3 py-1 rounded-md shrink-0">
                    Curitiba & RMC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sistemas Construtivos (Services Grid) */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-[#D31219] text-xs font-mono font-bold uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded mb-3">
              <span>03 — SISTEMAS CONSTRUTIVOS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
              Soluções Completas para Reformas, Edificações e Obras Comerciais
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Materiais de marcas consolidadas com certificação técnica ABNT e suporte logístico ágil para o seu canteiro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col hover:border-[#D31219]/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-56 overflow-hidden relative bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=KY+DRYWALL';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                      Sistema Técnico
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow text-center md:text-left">
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#D31219] transition-colors">
                    {service.title}
                  </h3>
                  <p 
                    className="text-slate-600 text-xs leading-relaxed mb-6 flex-grow"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <Link
                      to={service.id === 'steel-frame' ? '/steel-frame' : `/servicos/${service.id}`}
                      className="w-full sm:w-auto text-xs font-bold text-slate-800 hover:text-[#D31219] transition-colors flex items-center justify-center gap-1 py-2"
                    >
                      <span>Ver Detalhes</span>
                      <ChevronRight size={14} />
                    </Link>
                    <a
                      href={`https://wa.me/5541996457421?text=Olá! Gostaria de um orçamento para ${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto bg-[#D31219] text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-slate-900 transition-colors text-center"
                    >
                      Orçar Material
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo de Materiais em Destaque */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-center md:text-left">
            <div>
              <div className="inline-flex items-center justify-center md:justify-start gap-2 text-[#D31219] text-xs font-mono font-bold uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded mb-3">
                <span>04 — ESTOQUE PRONTA ENTREGA</span>
              </div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950">
                Materiais e Insumos em Destaque
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Placas, perfis metálicos Barbieri, isolamentos acústicos e massas de acabamento.
              </p>
            </div>

            <Link
              to="/produtos"
              className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#D31219] hover:text-slate-900 transition-colors uppercase tracking-wider pb-1 border-b border-[#D31219]/30 min-h-[48px]"
            >
              <span>Acessar Catálogo Completo</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
            {FEATURED_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all min-h-[44px] ${
                  selectedCategory === category
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura Geográfica: Curitiba & RMC */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-[#D31219] text-xs font-mono font-bold uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded">
                <span>05 — LOGÍSTICA CURITIBA & RMC</span>
              </div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950">
                Entrega Rápida e Suporte Técnico nos Canteiros
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Logística com frota própria para descarregamento rápido e seguro de placas e perfis no seu canteiro de obras em Curitiba e toda Região Metropolitana.
              </p>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3 text-left">
                <div className="flex items-center gap-2.5 text-xs text-slate-800 font-bold">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Entrega programada ou rápida na Grande Curitiba</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-800 font-bold">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Veículos adequados para placas e perfis compridos</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-800 font-bold">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Retirada imediata na loja da BR-277 (Cajuru)</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/5541996457421?text=Olá! Gostaria de consultar frete e prazo de entrega para minha região."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D31219] text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider hover:bg-slate-900 transition-colors shadow-md min-h-[48px]"
                >
                  <MessageCircle size={16} />
                  <span>Consultar Prazo para Meu Bairro</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Bairros */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200 flex items-center justify-between">
                  <span>Bairros de Curitiba</span>
                  <span className="text-[10px] text-slate-500 font-normal">{NEIGHBORHOODS.length} regiões</span>
                </h3>
                <div className="grid grid-cols-1 gap-2 max-h-[320px] overflow-y-auto custom-scrollbar pr-2">
                  {NEIGHBORHOODS.map(n => (
                    <Link 
                      key={n} 
                      to={`/drywall-em/${normalizeLocationName(n)}`} 
                      className="text-xs text-slate-600 hover:text-[#D31219] transition-colors py-1 flex items-center gap-1.5 font-medium"
                    >
                      <ChevronRight size={12} className="text-[#D31219]" />
                      <span>{n}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Cidades RMC */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200 flex items-center justify-between">
                  <span>Cidades da Região (RMC)</span>
                  <span className="text-[10px] text-slate-500 font-normal">{CITIES_RMC.length} municípios</span>
                </h3>
                <div className="grid grid-cols-1 gap-2 max-h-[320px] overflow-y-auto custom-scrollbar pr-2">
                  {CITIES_RMC.map(c => (
                    <Link 
                      key={c} 
                      to={`/steel-frame-em/${normalizeLocationName(c)}`} 
                      className="text-xs text-slate-600 hover:text-[#D31219] transition-colors py-1 flex items-center gap-1.5 font-medium"
                    >
                      <ChevronRight size={12} className="text-[#D31219]" />
                      <span>{c}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Central de Dúvidas Técnicas - Light Version */}
      <section className="py-16 md:py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-100"></div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#D31219] text-[10px] font-black uppercase tracking-widest mb-4 shadow-sm">
              <HelpCircle size={14} />
              <span>06 — CENTRAL TÉCNICA (FAQ)</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
              Dúvidas Frequentes
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-medium">
              Consulte especificações técnicas sobre placas, isolamento acústico e normas ABNT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 text-center md:text-left">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-[#D31219]/30 group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D31219] flex items-center justify-center mb-6 mx-auto md:mx-0 border border-red-100 group-hover:scale-110 transition-transform">
                <Layers size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">Placas & Drywall</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Diferenças entre placas Standard (ST), Resistente à Umidade (RU) e Resistente ao Fogo (RF).
              </p>
              <Link to="/faq#drywall" className="text-xs font-black text-[#D31219] hover:text-slate-900 transition-colors flex items-center justify-center md:justify-start gap-2 uppercase tracking-widest">
                <span>Ver Perguntas Drywall</span> <ChevronRight size={14} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-[#D31219]/30 group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D31219] flex items-center justify-center mb-6 mx-auto md:mx-0 border border-red-100 group-hover:scale-110 transition-transform">
                <HomeIcon size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">Estrutura Steel Frame</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Modulação de perfis estruturais, fundação radier, fechamento cimentício e cálculo de cargas.
              </p>
              <Link to="/faq#steelframe" className="text-xs font-black text-[#D31219] hover:text-slate-900 transition-colors flex items-center justify-center md:justify-start gap-2 uppercase tracking-widest">
                <span>Ver Perguntas Steel Frame</span> <ChevronRight size={14} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-[#D31219]/30 group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D31219] flex items-center justify-center mb-6 mx-auto md:mx-0 border border-red-100 group-hover:scale-110 transition-transform">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">Prazos & Logística</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Condições para construtores, faturamento, prazos de entrega e retirada na loja de Curitiba.
              </p>
              <Link to="/faq" className="text-xs font-black text-[#D31219] hover:text-slate-900 transition-colors flex items-center justify-center md:justify-start gap-2 uppercase tracking-widest">
                <span>Acessar FAQ Completo</span> <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/faq"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-950 text-white font-black px-10 py-5 rounded-2xl text-base uppercase tracking-widest hover:bg-[#D31219] transition-all shadow-xl active:scale-[0.98] min-h-[60px]"
            >
              <span>Explorar Base de Conhecimento</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog & Notícias Técnicas */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-center md:text-left">
            <div>
              <div className="inline-flex items-center justify-center md:justify-start gap-2 text-[#D31219] text-xs font-mono font-bold uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded mb-3">
                <span>07 — ARTIGOS & MANUAIS TÉCNICOS</span>
              </div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950">
                Guias Executivos e Dicas de Engenharia
              </h2>
            </div>
            <Link 
              to="/blog" 
              className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#D31219] hover:text-slate-900 transition-colors uppercase tracking-wider pb-1 border-b border-[#D31219]/30 min-h-[44px]"
            >
              <span>Ver Todos os Artigos</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map(post => (
              <div 
                key={post.id} 
                className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col hover:border-[#D31219]/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=BLOG+KY+DRYWALL';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                      {post.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow text-center md:text-left">
                  <span className="text-xs text-slate-400 font-semibold mb-2">{post.date}</span>
                  <h3 className="text-base font-bold text-slate-900 mb-2.5 group-hover:text-[#D31219] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6 line-clamp-2 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-xs font-bold text-slate-800 hover:text-[#D31219] transition-colors flex items-center justify-center md:justify-start gap-1 mt-auto"
                  >
                    <span>Ler Artigo Completo</span>
                    <ArrowRight size={13} className="text-[#D31219]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
