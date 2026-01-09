
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, getRandomCTA, BASE_URL } from '../constants';
import { CheckCircle2, MessageCircle, ChevronRight, Sparkles, ShieldAlert, ArrowRight } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ServicesPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [ctaPhrase, setCtaPhrase] = useState('');

  const currentService = serviceId ? SERVICES.find(s => s.id === serviceId) : SERVICES[0];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: currentService?.title || 'Serviços KY Drywall',
    description: currentService?.description || 'Serviços especializados em construção a seco',
    provider: {
      '@type': 'LocalBusiness',
      name: 'KY Drywall & Steel Frame',
      telephone: '+554135284232',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rod. BR 277 - 3641',
        addressLocality: 'Curitiba',
        addressRegion: 'PR',
        postalCode: '82590-300',
        addressCountry: 'BR'
      }
    },
    areaServed: {
      '@type': 'City',
      name: 'Curitiba'
    },
    serviceType: currentService?.title,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'BRL'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Catálogo de Serviços',
      itemListElement: SERVICES.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description
        }
      }))
    }
  };

  useEffect(() => {
    setCtaPhrase(getRandomCTA());
    window.scrollTo(0, 0);
  }, [serviceId]);

  return (
    <div className="bg-white">
      <EnhancedSEO
        title={`${currentService?.title} - Serviços`}
        description={`${currentService?.description} Assessoria técnica especializada da KY Drywall. Materiais certificados ABNT. Atendimento em Curitiba e Região Metropolitana.`}
        keywords={`${serviceId}, serviços ${serviceId} curitiba, ${currentService?.title}, construção a seco, steel frame curitiba, drywall curitiba, telhado shingle, materiais certificados`}
        canonical={`${BASE_URL}/servicos/${serviceId || 'steel-frame'}`}
        ogType="website"
        ogImage={currentService?.image}
        schema={serviceSchema}
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <img src={currentService?.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            {currentService?.title}
          </h1>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D31219]">
            <Link to="/" className="text-white hover:text-[#D31219]">Início</Link>
            <ChevronRight size={14} />
            <span>Serviços KY</span>
          </div>
        </div>
      </section>

      {/* Conteúdo SEO */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">Engenharia <br/><span className="text-[#D31219]">a Seco</span></h2>
              <div className="prose prose-xl text-gray-600 font-medium italic">
                <p dangerouslySetInnerHTML={{ __html: currentService?.description }} />
              </div>
              <p className="text-gray-600">Para garantir o melhor resultado em sua obra, utilize as <Link to="/produtos" className="text-[#D31219] font-bold">**placas e perfis**</Link> certificados pela KY. Nosso sistema de **{currentService?.title}** atende a todas as normas de desempenho **ABNT**.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Agilidade Extrema", "Sustentabilidade", "Conforto Térmico", "Baixo Desperdício"].map(b => (
                  <div key={b} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                    <CheckCircle2 size={24} className="text-green-500" />
                    <span className="text-sm font-black uppercase tracking-widest text-gray-800">{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <a href={`https://wa.me/5541996457421?text=Olá! Quero um orçamento para ${currentService?.title}. Preciso de assessoria técnica especializada.`} className="bg-[#D31219] text-white font-black px-12 py-6 rounded-2xl inline-flex items-center justify-center gap-4 text-xs uppercase tracking-widest shadow-xl hover:bg-black hover:scale-105 transition-all">
                  <MessageCircle size={24} /> Orçamento Gratuito
                </a>
                <Link to="/produtos" className="bg-white text-[#003366] border-2 border-[#003366] font-black px-12 py-6 rounded-2xl inline-flex items-center justify-center gap-4 text-xs uppercase tracking-widest hover:bg-[#003366] hover:text-white transition-all">
                  Ver Materiais
                </Link>
              </div>
            </div>

            <div className="bg-[#111] p-12 md:p-16 rounded-[4rem] text-white">
               <div className="flex items-center gap-4 mb-10">
                 <ShieldAlert size={32} className="text-[#D31219]" />
                 <h3 className="text-3xl font-black uppercase tracking-tighter">Especificação <span className="text-[#D31219]">Técnica</span></h3>
               </div>
               <div className="space-y-6 text-gray-400">
                  <p>• Uso de **Perfis Z180** da Barbieri;</p>
                  <p>• **Placas Drywall** resistentes a fogo e umidade;</p>
                  <p>• Tratamento de juntas com **Massa Holdflex**;</p>
                  <p>• Isolamento com **Lã de Pet** sustentável.</p>
               </div>
               <div className="mt-12 bg-white/5 p-8 rounded-3xl border border-white/10">
                  <Sparkles size={24} className="text-[#D31219] mb-4" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Garantia Técnica KY: Nossa equipe acompanha o projeto da fundação ao acabamento.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outros Serviços Navegação */}
      <section className="py-24 bg-gray-50 border-t">
        <div className="container mx-auto px-4 text-center mb-16">
          <h3 className="text-3xl font-black uppercase tracking-tighter">Conheça Nossas <span className="text-[#D31219]">Especialidades</span></h3>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.filter(s => s.id !== serviceId).slice(0, 3).map(s => (
            <Link key={s.id} to={`/servicos/${s.id}`} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl group border">
              <div className="h-48 overflow-hidden"><img src={s.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
              <div className="p-8">
                <h4 className="text-xl font-black uppercase mb-4 tracking-tight group-hover:text-[#D31219] transition-colors">{s.title}</h4>
                <div className="flex items-center gap-2 text-[#D31219] font-black uppercase text-[10px] tracking-widest">Saiba Mais <ArrowRight size={16}/></div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
