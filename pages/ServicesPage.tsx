
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, getRandomCTA, BASE_URL } from '../constants';
import { CheckCircle2, MessageCircle, ChevronRight, Sparkles, ShieldAlert, ArrowRight } from 'lucide-react';
import NotFound from './NotFound';
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
        streetAddress: 'Rod. BR-277, 3641 - Cajuru',
        addressLocality: 'Curitiba',
        addressRegion: 'PR',
        postalCode: '81480-270',
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

  if (serviceId && !currentService) return <NotFound />;

  return (
    <div className="bg-white">
      <EnhancedSEO
        title={serviceId ? `${currentService?.title} em Curitiba` : "Serviços de construção a seco em Curitiba"}
        description={`${currentService?.description} Assessoria técnica especializada da KY Drywall. Soluções em construção a seco. Atendimento em Curitiba e Região Metropolitana.`}
        keywords={`${serviceId}, serviços ${serviceId} curitiba, ${currentService?.title}, construção a seco, steel frame curitiba, drywall curitiba, telhado shingle, materiais certificados`}
        canonical={serviceId ? `${BASE_URL}/servicos/${serviceId}` : `${BASE_URL}/servicos`}
        ogType="website"
        ogImage={currentService?.image}
        schema={serviceSchema}
      />
      {/* Hero Section */}
      <section className="relative h-[48vh] min-h-[380px] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src={currentService?.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D31219] mb-4">
              <Link to="/" className="text-slate-400 hover:text-white transition-colors">Início</Link>
              <ChevronRight size={13} />
              <span className="text-white">Serviços & Sistemas</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight text-white mb-4">
              {serviceId ? currentService?.title : "Serviços de Construção a Seco"}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Especificação técnica, quantitativo detalhado e fornecimento de materiais certificados para obras de alto padrão em Curitiba e RMC.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo SEO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[#D31219] text-xs font-bold uppercase tracking-wider">
                  Engenharia & Desempenho
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                  Soluções Técnicas em Construção a Seco
                </h2>
              </div>

              <div 
                className="text-slate-700 text-sm sm:text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: currentService?.description || '' }}
              />

              <p className="text-slate-600 text-sm leading-relaxed">
                Para assegurar máxima conformidade técnica, utilizamos placas de gesso acartonado e perfis estruturais de espessura nominal certificada pela ABNT. Nosso time técnico oferece suporte para cálculo de modulação e modulação de montantes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { title: "Agilidade de Execução", desc: "Obra até 70% mais rápida que alvenaria" },
                  { title: "Sustentabilidade", desc: "Redução de mais de 80% do entulho" },
                  { title: "Conforto Termoacústico", desc: "Isolamento com lã mineral ou PET" },
                  { title: "Precisão Dimensional", desc: "Encaixes perfeitos e prumo milimétrico" }
                ].map(b => (
                  <div key={b.title} className="p-4 bg-slate-50 rounded border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      <span className="text-xs font-bold text-slate-900">{b.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 pl-6">{b.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-3">
                <a 
                  href={`https://wa.me/5541996457421?text=Olá! Gostaria de um orçamento para ${encodeURIComponent(currentService?.title || 'serviços')}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#D31219] text-white font-semibold px-6 py-3.5 rounded inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider hover:bg-red-700 transition-colors shadow-sm"
                >
                  <MessageCircle size={16} /> Solicitar Cotação no WhatsApp
                </a>
                <Link 
                  to="/produtos" 
                  className="bg-white text-slate-800 border border-slate-300 font-semibold px-6 py-3.5 rounded inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider hover:border-[#D31219] hover:text-[#D31219] transition-colors"
                >
                  Ver Materiais Compatíveis
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 p-8 rounded-lg text-white border border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert size={24} className="text-[#D31219]" />
                <h3 className="text-lg font-bold text-white tracking-tight">Especificação Técnica</h3>
              </div>
              <div className="space-y-4 text-xs text-slate-300">
                <div className="p-3 bg-white/5 rounded border border-white/10">
                  <p className="font-semibold text-white mb-1">Perfis Barbieri Z180</p>
                  <p className="text-slate-400">Aço galvanizado de alta durabilidade e resistência contra corrosão.</p>
                </div>
                <div className="p-3 bg-white/5 rounded border border-white/10">
                  <p className="font-semibold text-white mb-1">Placas Drywall Certificadas</p>
                  <p className="text-slate-400">Opções Standard (ST), Resistente à Umidade (RU) e Resistente ao Fogo (RF).</p>
                </div>
                <div className="p-3 bg-white/5 rounded border border-white/10">
                  <p className="font-semibold text-white mb-1">Tratamento de Juntas</p>
                  <p className="text-slate-400">Fitas microperfuradas e massas de acabamento com elasticidade permanente.</p>
                </div>
                <div className="p-3 bg-white/5 rounded border border-white/10">
                  <p className="font-semibold text-white mb-1">Isolamento Acústico</p>
                  <p className="text-slate-400">Lã de PET e lã de rocha para atenuação de ruídos e isolamento térmico.</p>
                </div>
              </div>

              <div className="mt-8 bg-white/5 p-4 rounded border border-white/10 flex items-start gap-3">
                <Sparkles size={18} className="text-[#D31219] shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  <strong className="text-white">Garantia Técnica KY Drywall:</strong> Mais de duas décadas de experiência com entrega ágil e estoque pronto para montagem em Curitiba.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outros Serviços Navegação */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#D31219] text-xs font-bold uppercase tracking-wider">
              Portfólio de Soluções
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Conheça Nossas Especialidades
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.filter(s => s.id !== serviceId).slice(0, 3).map(s => (
              <Link 
                key={s.id} 
                to={`/servicos/${s.id}`} 
                className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-[#D31219]/40 hover:shadow-md transition-all group flex flex-col"
              >
                <div className="h-44 overflow-hidden bg-slate-100">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#D31219] transition-colors">
                      {s.title}
                    </h4>
                    <p 
                      className="text-slate-600 text-xs line-clamp-2 leading-relaxed mb-4"
                      dangerouslySetInnerHTML={{ __html: s.description }}
                    />
                  </div>
                  <div className="flex items-center gap-1.5 text-[#D31219] font-semibold text-xs pt-3 border-t border-slate-100">
                    <span>Ver Detalhes</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
