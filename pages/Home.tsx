
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Star, TrendingUp, MapPin, Globe, ChevronRight, Clock, Building2, Map, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { SERVICES, BLOG_POSTS, NEIGHBORHOODS, CITIES_RMC, getRandomCTA, SITE_ASSETS, PRODUCTS, normalizeLocationName, BASE_URL } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';

const HERO_SLIDES = [
  {
    image: '/gemini_generated_image_jk8nftjk8nftjk8n.png',
    title: 'A <span class="text-[#D31219]">Maior Loja</span> de Curitiba',
    subtitle: 'Venha nos visitar na BR-277 - Cajuru'
  },
  {
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Sua Obra <span class="text-[#D31219]">70% Mais Rápida</span>',
    subtitle: 'Sistemas de Construção a Seco'
  },
  {
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Distribuidor <span class="text-[#D31219]">Barbieri</span> Oficial',
    subtitle: 'Perfis Steel Frame Z180 - Alta Resistência'
  },
  {
    image: 'https://images.pexels.com/photos/8092357/pexels-photo-8092357.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: '<span class="text-[#D31219]">Entrega Imediata</span> em Curitiba',
    subtitle: 'Placas, Perfis e Acessórios em Estoque'
  }
];

// Selecionando produtos "Premium" (Placas e Perfis de Steel Frame)
const PREMIUM_PRODUCTS = PRODUCTS.filter(p => 
  p.category === 'Placas' || 
  p.category === 'Perfis' || 
  p.category === 'Lã (Isolamento)'
).slice(0, 10);

const Home: React.FC = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const [heroCTA, setHeroCTA] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    setHeroCTA(getRandomCTA());
    return () => clearInterval(timer);
  }, []);

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
          url: `${BASE_URL}/gemini_generated_image_jk8nftjk8nftjk8n.png`
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+554135284232',
          contactType: 'customer service',
          areaServed: 'BR',
          availableLanguage: 'Portuguese'
        },
        sameAs: [
          'https://wa.me/5541996457421'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'KY Drywall & Steel Frame',
        publisher: {
          '@id': `${BASE_URL}/#organization`
        }
      },
      {
        '@type': 'Store',
        '@id': `${BASE_URL}/#store`,
        name: 'KY Drywall & Steel Frame - Loja Física',
        image: `${BASE_URL}/gemini_generated_image_jk8nftjk8nftjk8n.png`,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'BR-277, Cajuru',
          addressLocality: 'Curitiba',
          addressRegion: 'PR',
          postalCode: '82900-000',
          addressCountry: 'BR'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '-25.4284',
          longitude: '-49.2733'
        },
        telephone: '+554135284232',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '08:00',
            closes: '18:00'
          }
        ]
      }
    ]
  };

  return (
    <div className="overflow-hidden bg-white">
      <EnhancedSEO
        title="KY Drywall & Steel Frame - Maior Loja de Curitiba | BR-277 Cajuru"
        description="A maior loja de Drywall e Steel Frame de Curitiba. Distribuidor oficial Barbieri. Placas, perfis, massas, parafusos e acessórios. Entrega imediata. Venha nos visitar na BR-277, Cajuru."
        keywords="drywall curitiba, steel frame curitiba, placas drywall, perfis steel frame, construção a seco, gesso acartonado, barbieri, loja drywall curitiba, materiais construção"
        canonical={BASE_URL}
        schema={homeSchema}
      />
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          {HERO_SLIDES.map((slide, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentHero ? 'opacity-100' : 'opacity-0'}`}>
              <img src={slide.image} alt="" className="w-full h-full object-cover transform scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-white">
            <span className="inline-block bg-[#D31219] text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.3em] mb-6 animate-pulse">
              {HERO_SLIDES[currentHero].subtitle}
            </span>
            <h1 className="text-5xl md:text-8xl font-black leading-none mb-6 uppercase tracking-tighter" dangerouslySetInnerHTML={{ __html: HERO_SLIDES[currentHero].title }} />
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-10 max-w-2xl leading-relaxed">
              Maior estoque de Curitiba com entrega rápida. Assessoria técnica especializada e os melhores preços do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5541996457421?text=Olá! Vim do site e quero fazer um orçamento" className="bg-[#D31219] text-white font-black px-12 py-6 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[0_20px_50px_rgba(211,18,25,0.3)] hover:shadow-[0_20px_60px_rgba(211,18,25,0.5)] hover:scale-105 uppercase tracking-widest text-xs group active:scale-95">
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" /> Orçamento Gratuito
              </a>
              <Link to="/produtos" className="bg-white/10 text-white font-black px-12 py-6 rounded-2xl flex items-center justify-center border-2 border-white/30 backdrop-blur-md uppercase tracking-widest text-xs hover:bg-white/20 transition-all">
                Ver Catálogo Completo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Soluções de Elite (Serviços Premium com Impacto) */}
      <section className="py-32 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-1/2 -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none">
              Soluções <span className="text-[#D31219]">de Elite</span>
            </h2>
            <p className="text-gray-500 mt-6 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Sistemas de Alto Desempenho para <span className="text-[#003366]">Curitiba e RMC</span>
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <EliteServiceCard key={service.id} service={service} isFeatured={idx === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO: ESTEIRA DE PRODUTOS PREMIUM (CONVEYOR BELT) */}
      <section className="py-24 bg-[#050505] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 mb-16">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-[#D31219] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                <Zap size={16} className="animate-pulse" /> Materiais de Alta Performance
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Esteira <span className="text-[#D31219]">KY-PRO</span> 2025
              </h2>
            </div>
            <Link to="/produtos" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors flex items-center gap-2 border-b border-gray-800 pb-2">
              Explorar Catálogo Completo <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Esteira Animada */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
          
          <div className="flex animate-marquee gap-8 py-10">
            {[...PREMIUM_PRODUCTS, ...PREMIUM_PRODUCTS].map((product, idx) => (
              <div key={`${product.id}-${idx}`} className="w-[320px] shrink-0">
                <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/10 hover:border-[#D31219]/50 transition-all group relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                    <ShieldCheck size={100} />
                  </div>
                  
                  <div className="aspect-square rounded-3xl overflow-hidden mb-6 bg-white p-4">
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  
                  <div className="flex-grow">
                    <span className="text-[#D31219] text-[9px] font-black uppercase tracking-[0.2em] mb-2 block">{product.category}</span>
                    <h4 className="text-lg font-black uppercase tracking-tight mb-3 line-clamp-2 leading-tight">{product.name}</h4>
                    <p className="text-gray-500 text-[11px] leading-relaxed font-medium line-clamp-2 italic">
                      {product.description.replace(/\*\*/g, '')}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (<Star key={i} size={10} className="fill-[#D31219] text-[#D31219]" />))}
                    </div>
                    <Link to={`/produto/${product.id}`} className="bg-[#D31219] p-3 rounded-xl hover:bg-white hover:text-[#D31219] transition-all">
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Cobertura Geográfica */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-[#111] rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
            <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none -translate-y-1/2 translate-x-1/2"><Globe size={400} /></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                  Atendimento <br/><span className="text-[#D31219]">Presencial</span> Especializado
                </h2>
                <p className="text-gray-400 text-lg mb-12 font-medium leading-relaxed">
                  Entregamos em todos os bairros de Curitiba e Região Metropolitana com frota própria. Do Batel ao CIC, assessoria técnica completa em sua obra.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/5541996457421?text=Olá! Quero saber sobre entrega na minha região" className="bg-[#D31219] text-white font-black px-12 py-6 rounded-2xl inline-flex items-center justify-center gap-4 text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform group">
                    <MessageCircle size={22} /> Consultar Entrega
                  </a>
                  <Link to="/blog" className="bg-white/10 text-white font-black px-12 py-6 rounded-2xl inline-flex items-center justify-center gap-4 text-xs uppercase tracking-widest hover:bg-white/20 transition-all border-2 border-white/10">
                    Ver Localidades <MapPin size={22} />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
                  <h3 className="text-[#D31219] text-[10px] font-black uppercase tracking-[0.3em] mb-8 border-b border-white/10 pb-4">Bairros Curitiba</h3>
                  <div className="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto custom-scrollbar pr-4">
                    {NEIGHBORHOODS.map(n => (
                      <Link key={n} to={`/drywall-em-${normalizeLocationName(n)}`} className="text-[10px] font-bold text-gray-400 hover:text-white transition-colors uppercase flex items-center gap-2">
                        <ChevronRight size={12} className="text-[#D31219]" /> {n}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
                  <h3 className="text-[#D31219] text-[10px] font-black uppercase tracking-[0.3em] mb-8 border-b border-white/10 pb-4">Cidades RMC</h3>
                  <div className="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto custom-scrollbar pr-4">
                    {CITIES_RMC.map(c => (
                      <Link key={c} to={`/drywall-em-${normalizeLocationName(c)}`} className="text-[10px] font-bold text-gray-400 hover:text-white transition-colors uppercase flex items-center gap-2">
                        <ChevronRight size={12} className="text-[#D31219]" /> {c}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Notícias Técnicas */}
      <section className="py-32 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Conhecimento <span className="text-[#D31219]">Técnico</span></h2>
              <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mt-4 italic">Insights e tendências para o mercado da construção em 2025</p>
            </div>
            <Link to="/blog" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#D31219] hover:gap-5 transition-all">Ver Todo o Blog <ArrowRight size={16}/></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {BLOG_POSTS.map(post => (
              <div key={post.id} className="bg-white rounded-[3.5rem] overflow-hidden shadow-xl border border-gray-100 group hover:-translate-y-4 transition-all duration-700">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[#D31219] text-[9px] font-black uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">{post.tag}</span>
                    <span className="text-gray-400 text-[9px] font-bold uppercase">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tight leading-tight group-hover:text-[#D31219] transition-colors">{post.title}</h3>
                  <p className="text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed font-medium italic">"{post.excerpt}"</p>
                  <Link to={`/blog/${post.id}`} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-900 group-hover:gap-4 transition-all">Ler Matéria <ArrowRight size={14} className="text-[#D31219]" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Componente para o Card de Serviço de Elite (Impactante)
const EliteServiceCard: React.FC<{ service: any, isFeatured?: boolean }> = ({ service, isFeatured }) => (
  <div className={`relative bg-white rounded-[4rem] overflow-hidden border transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] group flex flex-col h-full ${isFeatured ? 'border-[#D31219] ring-4 ring-[#D31219]/5 shadow-2xl scale-105 z-10 lg:-translate-y-6' : 'border-gray-100 hover:border-[#D31219]/30'}`}>
    <div className="h-72 overflow-hidden relative">
      <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      
      {isFeatured && (
        <div className="absolute top-6 right-6">
          <div className="bg-[#D31219] text-white p-3 rounded-2xl shadow-2xl animate-bounce">
            <Sparkles size={20} />
          </div>
        </div>
      )}

      <div className="absolute bottom-8 left-8 right-8 text-white">
        <p className="text-[#D31219] text-[9px] font-black uppercase tracking-[0.4em] mb-2 drop-shadow-lg">Serviço Premium</p>
        <h3 className="text-3xl font-black uppercase tracking-tighter leading-none drop-shadow-2xl">{service.title}</h3>
      </div>
    </div>
    
    <div className="p-12 flex flex-col flex-grow">
      <p className="text-gray-500 text-sm leading-relaxed mb-10 font-medium italic flex-grow" dangerouslySetInnerHTML={{ __html: service.description }} />
      
      <div className="space-y-4">
        <a
          href={`https://wa.me/5541996457421?text=Olá! Quero um orçamento para ${service.title}. Preciso de assessoria técnica.`}
          target="_blank"
          rel="noreferrer"
          className={`w-full flex items-center justify-between px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all group/btn shadow-xl hover:scale-105 ${isFeatured ? 'bg-[#D31219] text-white hover:bg-black' : 'bg-gray-900 text-white hover:bg-[#D31219]'}`}
        >
          <span>Orçamento Grátis Agora</span>
          <MessageCircle size={18} className="group-hover/btn:rotate-12 transition-transform" />
        </a>
        <Link to={`/servicos/${service.id}`} className="block text-center text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#D31219] transition-colors">
          Ver Especificações Técnicas
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
