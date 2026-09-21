
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

const HERO_SLIDES = [
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ky-loja-cajuru-drywall-stell-fame.png-CAi9KHi0wcqQLptb0qLFGSWQZaXr98.jpeg',
    badge: 'Showroom & Distribuidora',
    title: 'A Maior Loja de Drywall e Steel Frame de Curitiba',
    subtitle: 'Estruturas completas, perfis normatizados e estoque a pronta entrega na BR-277 (Cajuru).'
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/projeto-stell-frame.png-bAiwJLHNjOpiURXX8I0tGfLyNCau5x.jpeg',
    badge: 'Engenharia Construtiva',
    title: 'Construção Inteligente em Steel Frame',
    subtitle: 'Sua obra residencial ou comercial até 70% mais rápida, sustentável e com projeto executivo calculado.'
  },
  {
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920',
    badge: 'Distribuidor Oficial Barbieri',
    title: 'Perfis de Aço Galvanizado Z180 de Alta Resistência',
    subtitle: 'Segurança estrutural rigorosamente alinhada às normas ABNT NBR 15253 e NBR 15575.'
  },
  {
    image: 'https://images.pexels.com/photos/8092357/pexels-photo-8092357.jpeg?auto=compress&cs=tinysrgb&w=1920',
    badge: 'Logística Ágil',
    title: 'Pronta Entrega em Curitiba e Região Metropolitana',
    subtitle: 'Frota própria para entrega rápida de placas, perfis, massas e isolamentos direto no seu canteiro.'
  }
];

const FEATURED_CATEGORIES = ['Todos', 'Placas', 'Perfis', 'Lã (Isolamento)', 'Massas'];

const Home: React.FC = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

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

      {/* Hero Section */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-slate-950 text-white overflow-hidden">
        {/* Background Slides */}
        <div className="absolute inset-0 z-0">
          {HERO_SLIDES.map((slide, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentHero ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={slide.image} 
                alt="" 
                className="w-full h-full object-cover opacity-35" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/10 border border-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D31219]"></span>
              {HERO_SLIDES[currentHero].badge}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
              {HERO_SLIDES[currentHero].title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-10 font-normal">
              {HERO_SLIDES[currentHero].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="https://wa.me/5541996457421?text=Olá! Vim pelo site da KY Drywall e gostaria de solicitar uma cotação."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#D31219] text-white font-semibold px-8 py-4 rounded text-sm hover:bg-red-700 transition-colors shadow-sm"
              >
                <MessageCircle size={18} />
                Solicitar Cotação no WhatsApp
              </a>
              <Link 
                to="/produtos" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded text-sm border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Explorar Catálogo de Produtos
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Slide navigation indicators */}
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentHero(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentHero ? 'w-8 bg-[#D31219]' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Authority & Benefits Bar */}
      <section className="bg-slate-900 border-b border-slate-800 text-slate-200 py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded bg-[#D31219]/10 text-[#D31219] flex items-center justify-center shrink-0 border border-[#D31219]/20">
                <Truck size={20} />
              </div>
              <div>
                <p className="font-semibold text-xs text-white">Pronta Entrega</p>
                <p className="text-[11px] text-slate-400">Frota própria em Curitiba e RMC</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded bg-[#D31219]/10 text-[#D31219] flex items-center justify-center shrink-0 border border-[#D31219]/20">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="font-semibold text-xs text-white">Aço Z180 Barbieri</p>
                <p className="text-[11px] text-slate-400">Conformidade NBR 15253</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded bg-[#D31219]/10 text-[#D31219] flex items-center justify-center shrink-0 border border-[#D31219]/20">
                <Building2 size={20} />
              </div>
              <div>
                <p className="font-semibold text-xs text-white">Engenharia e Suporte</p>
                <p className="text-[11px] text-slate-400">Assessoria na modulação</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded bg-[#D31219]/10 text-[#D31219] flex items-center justify-center shrink-0 border border-[#D31219]/20">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-semibold text-xs text-white">Showroom Cajuru</p>
                <p className="text-[11px] text-slate-400">BR-277 com amplo estoque</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destaque: Steel Frame Construtivo */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-[#D31219] text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-[2px] bg-[#D31219]"></span>
                Tecnologia Construtiva Industrializada
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
                Construção Inteligente com Estruturas em <span className="text-[#D31219]">Steel Frame</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                O Light Steel Frame combina engenharia de precisão milimétrica e perfis galvanizados de alta resistência. Reduz o tempo de execução, elimina desperdícios de materiais no canteiro e garante isolamento termoacústico superior.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-2xl font-bold text-[#D31219]">Até 70%</p>
                  <p className="text-xs font-medium text-slate-700 mt-0.5">Mais rápido que alvenaria</p>
                  <p className="text-[11px] text-slate-500 mt-1">Montagem industrializada e limpa</p>
                </div>

                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-2xl font-bold text-[#D31219]">90% Menos</p>
                  <p className="text-xs font-medium text-slate-700 mt-0.5">Resíduos e entulho na obra</p>
                  <p className="text-[11px] text-slate-500 mt-1">Obra a seco e sustentável</p>
                </div>

                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-2xl font-bold text-[#D31219]">0.5 mm</p>
                  <p className="text-xs font-medium text-slate-700 mt-0.5">Precisão milimétrica</p>
                  <p className="text-[11px] text-slate-500 mt-1">Encaixes sem retrabalho</p>
                </div>

                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-2xl font-bold text-[#D31219]">100% Aço</p>
                  <p className="text-xs font-medium text-slate-700 mt-0.5">Perfis Barbieri Z180</p>
                  <p className="text-[11px] text-slate-500 mt-1">Proteção contra corrosão</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5 pt-4">
                <Link
                  to="/steel-frame"
                  className="inline-flex items-center justify-center gap-2 bg-[#D31219] text-white font-semibold px-6 py-3.5 rounded text-xs uppercase tracking-wider hover:bg-slate-950 transition-colors shadow-sm"
                >
                  Conhecer Sistema Steel Frame
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="https://wa.me/5541996457421?text=Olá! Gostaria de consultar projeto e valores para Steel Frame."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 font-semibold px-6 py-3.5 rounded text-xs uppercase tracking-wider border border-slate-300 hover:border-[#D31219] hover:text-[#D31219] transition-colors"
                >
                  <MessageCircle size={15} />
                  Falar com Consultor Técnico
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 bg-white shadow-md">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/steel-frame-yfbTyNsPB5CHvelFOwWPfb75qIZ8vl.png"
                  alt="Estrutura de Steel Frame KY Drywall Curitiba"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold">Engenharia Especializada</p>
                    <p className="text-[11px] text-slate-400">Atendimento a construtoras, arquitetos e engenheiros</p>
                  </div>
                  <span className="text-xs font-bold text-[#D31219] border border-[#D31219]/30 bg-red-950/40 px-2.5 py-1 rounded">
                    Curitiba e RMC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sistemas Construtivos (Services Grid) */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-[#D31219] text-xs font-bold uppercase tracking-wider mb-2">
              Sistemas Construtivos Especializados
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Soluções Completas para Reformas, Edificações e Obras Comerciais
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Materiais homologados pelas principais fabricantes com certificação técnica e suporte logístico ágil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col hover:border-[#D31219]/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-56 overflow-hidden relative bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-900/90 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                      Sistema Técnico
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#D31219] transition-colors">
                    {service.title}
                  </h3>
                  <p 
                    className="text-slate-600 text-xs leading-relaxed mb-6 flex-grow"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      to={service.id === 'steel-frame' ? '/steel-frame' : `/servicos/${service.id}`}
                      className="text-xs font-semibold text-slate-700 hover:text-[#D31219] transition-colors flex items-center gap-1"
                    >
                      Ver Detalhes
                      <ChevronRight size={14} />
                    </Link>
                    <a
                      href={`https://wa.me/5541996457421?text=Olá! Gostaria de um orçamento para ${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#D31219] text-white text-xs font-semibold px-3.5 py-2 rounded hover:bg-slate-900 transition-colors"
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
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-[#D31219] text-xs font-bold uppercase tracking-wider mb-2">
                Estoque Pronta Entrega
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Materiais em Destaque
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Placas, perfis metálicos, isolamentos acústicos e massas de acabamento.
              </p>
            </div>

            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#D31219] hover:text-slate-900 transition-colors uppercase tracking-wider pb-1 border-b border-[#D31219]/30"
            >
              Acessar Catálogo Completo
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {FEATURED_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded text-xs font-semibold transition-all ${
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
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[#D31219] text-xs font-bold uppercase tracking-wider">
                Logística Própria
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Atendimento Técnico e Entrega em Curitiba e Região Metropolitana
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Contamos com frota ágil para atender obras de todos os portes. Descarregamento seguro de placas e perfis no seu canteiro de obras, com pontualidade e integridade das cargas.
              </p>

              <div className="bg-slate-50 p-5 rounded border border-slate-200 space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-800 font-semibold">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Entrega programada ou expressa na grande Curitiba</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-800 font-semibold">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Veículos adequados para transporte de placas e perfis</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-800 font-semibold">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Retirada imediata no balcão do Cajuru (BR-277)</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/5541996457421?text=Olá! Gostaria de consultar frete e prazo de entrega para minha região."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D31219] text-white font-semibold px-6 py-3 rounded text-xs uppercase tracking-wider hover:bg-slate-900 transition-colors shadow-sm"
                >
                  <MessageCircle size={15} />
                  Consultar Prazo para Meu Bairro
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Bairros */}
              <div className="bg-slate-50 p-6 rounded border border-slate-200">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200 flex items-center justify-between">
                  <span>Bairros de Curitiba</span>
                  <span className="text-[10px] text-slate-500 font-normal">{NEIGHBORHOODS.length} regiões</span>
                </h3>
                <div className="grid grid-cols-1 gap-2 max-h-[320px] overflow-y-auto custom-scrollbar pr-2">
                  {NEIGHBORHOODS.map(n => (
                    <Link 
                      key={n} 
                      to={`/drywall-em/${normalizeLocationName(n)}`} 
                      className="text-xs text-slate-600 hover:text-[#D31219] transition-colors py-1 flex items-center gap-1.5"
                    >
                      <ChevronRight size={12} className="text-[#D31219]" />
                      <span>{n}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Cidades RMC */}
              <div className="bg-slate-50 p-6 rounded border border-slate-200">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200 flex items-center justify-between">
                  <span>Cidades da Região (RMC)</span>
                  <span className="text-[10px] text-slate-500 font-normal">{CITIES_RMC.length} municípios</span>
                </h3>
                <div className="grid grid-cols-1 gap-2 max-h-[320px] overflow-y-auto custom-scrollbar pr-2">
                  {CITIES_RMC.map(c => (
                    <Link 
                      key={c} 
                      to={`/drywall-em/${normalizeLocationName(c)}`} 
                      className="text-xs text-slate-600 hover:text-[#D31219] transition-colors py-1 flex items-center gap-1.5"
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

      {/* FAQ & Central de Dúvidas Técnicas */}
      <section className="py-20 lg:py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4">
              <HelpCircle size={14} className="text-[#D31219]" />
              Esclarecimento Técnico
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Dúvidas Frequentes sobre Drywall e Steel Frame
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
              Consulte especificações sobre tipos de placas, isolamento térmico e acústico, normas de instalação e comparativos de custos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-slate-900 p-6 rounded border border-slate-800">
              <div className="w-10 h-10 rounded bg-[#D31219]/20 text-[#D31219] flex items-center justify-center mb-4">
                <Layers size={20} />
              </div>
              <h3 className="font-semibold text-sm text-white mb-2">Placas & Drywall</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Diferenças entre placas Standard (ST), Resistente à Umidade (RU) e Resistente ao Fogo (RF).
              </p>
              <Link to="/faq#drywall" className="text-xs font-semibold text-[#D31219] hover:text-white transition-colors flex items-center gap-1">
                Ver Perguntas Drywall <ChevronRight size={13} />
              </Link>
            </div>

            <div className="bg-slate-900 p-6 rounded border border-slate-800">
              <div className="w-10 h-10 rounded bg-[#D31219]/20 text-[#D31219] flex items-center justify-center mb-4">
                <HomeIcon size={20} />
              </div>
              <h3 className="font-semibold text-sm text-white mb-2">Estrutura Steel Frame</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Modulação de perfis estruturais, fundação radiê, fechamento cimentício e cálculo de cargas.
              </p>
              <Link to="/faq#steelframe" className="text-xs font-semibold text-[#D31219] hover:text-white transition-colors flex items-center gap-1">
                Ver Perguntas Steel Frame <ChevronRight size={13} />
              </Link>
            </div>

            <div className="bg-slate-900 p-6 rounded border border-slate-800">
              <div className="w-10 h-10 rounded bg-[#D31219]/20 text-[#D31219] flex items-center justify-center mb-4">
                <Clock size={20} />
              </div>
              <h3 className="font-semibold text-sm text-white mb-2">Prazos & Logística</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Condições de pagamento para construtores, prazos de entrega e retirada na loja de Curitiba.
              </p>
              <Link to="/faq" className="text-xs font-semibold text-[#D31219] hover:text-white transition-colors flex items-center gap-1">
                Acessar FAQ Completo <ChevronRight size={13} />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 bg-[#D31219] text-white font-semibold px-8 py-3.5 rounded text-xs uppercase tracking-wider hover:bg-red-700 transition-colors shadow-sm"
            >
              Explorar Base de Conhecimento (FAQ)
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog & Notícias Técnicas */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[#D31219] text-xs font-bold uppercase tracking-wider mb-2">
                Engenharia & Arquitetura
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Artigos e Manuais Técnicos
              </h2>
            </div>
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D31219] hover:text-slate-900 transition-colors uppercase tracking-wider pb-1 border-b border-[#D31219]/30"
            >
              Ver Todos os Artigos
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
              <div 
                key={post.id} 
                className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col hover:border-[#D31219]/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                      {post.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[11px] text-slate-400 font-medium mb-2">{post.date}</span>
                  <h3 className="text-base font-bold text-slate-900 mb-2.5 group-hover:text-[#D31219] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6 line-clamp-2 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-xs font-semibold text-slate-800 hover:text-[#D31219] transition-colors flex items-center gap-1 mt-auto"
                  >
                    Ler Artigo Completo
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
