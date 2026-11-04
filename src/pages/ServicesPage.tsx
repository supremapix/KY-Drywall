
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, getRandomCTA, BASE_URL } from '../constants';
import { CheckCircle2, MessageCircle, ChevronRight, Sparkles, ShieldAlert, ArrowRight, HardHat } from 'lucide-react';
import NotFound from './NotFound';
import EnhancedSEO from '../components/EnhancedSEO';

import ProjectChecklist from '../components/ProjectChecklist';

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
    (document.getElementById('ky-page-scroll') || window).scrollTo(0, 0);
  }, [serviceId]);

  if (serviceId && !currentService) return <NotFound />;

  return (
    <div className="ky-interior-page bg-white">
      <EnhancedSEO
        title={serviceId ? `${currentService?.title} em Curitiba` : "Serviços de construção a seco em Curitiba"}
        description={`${currentService?.description} Assessoria técnica especializada da KY Drywall. Soluções em construção a seco. Atendimento em Curitiba e Região Metropolitana.`}
        keywords={`${serviceId}, serviços ${serviceId} curitiba, ${currentService?.title}, construção a seco, steel frame curitiba, drywall curitiba, telhado shingle, materiais para construção a seco`}
        canonical={serviceId ? `${BASE_URL}/servicos/${serviceId}` : `${BASE_URL}/servicos`}
        ogType="website"
        ogImage={currentService?.image}
        schema={serviceSchema}
      />
      {/* Hero Section - Industrial Showroom */}
      <section className="ky-interior-hero relative py-14 md:py-20 ky-section-white overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500 mb-10">
              <Link to="/" className="hover:text-[#D31219] transition-colors">INÍCIO</Link>
              <ChevronRight size={10} className="text-slate-300" />
              <span className="text-slate-950 font-bold">01 — SISTEMAS TÉCNICOS</span>
            </div>
            <h1 className="ky-title-mark text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-slate-950 mb-10">
              {serviceId ? currentService?.title : "Sistemas de Construção"}
            </h1>
            <p className="text-slate-600 text-lg sm:text-2xl leading-relaxed max-w-2xl font-medium">
              Especificação rigorosa e fornecimento de materiais para construção a seco ABNT para obras de alto padrão em Curitiba.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo SEO */}
      <section className="py-14 md:py-20 ky-section-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="text-[#D31219] text-xs font-bold uppercase tracking-wide bg-red-50 border border-red-100 px-3 py-1 rounded">
                  02 — DESEMPENHO & ENGENHARIA
                </span>
                <h2 className="ky-title-mark text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight mt-6">
                  Soluções em Construção a Seco
                </h2>
              </div>

              <div
                className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium space-y-6"
                dangerouslySetInnerHTML={{ __html: currentService?.description || '' }}
              />

              <p className="text-slate-500 text-sm leading-relaxed font-medium italic border-l-4 border-slate-100 pl-6">
                Espessura, revestimento e modulação dos perfis devem constar no projeto. Consulte a documentação do fabricante e o responsável técnico antes da execução.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: "AGILIDADE", desc: "Montagem conforme o cronograma do projeto" },
                  { title: "SUSTENTÁVEL", desc: "Planejamento de cortes e descarte de resíduos" },
                  { title: "CONFORTO", desc: "Desempenho conforme o sistema" },
                  { title: "PRECISÃO", desc: "Montagem conforme o projeto" }
                ].map(b => (
                  <div key={b.title} className="ky-card p-6 rounded-sm group transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 size={18} className="text-[#D31219] shrink-0" />
                      <span className="text-xs font-bold text-slate-950 uppercase tracking-wide">{b.title}</span>
                    </div>
                    <p className="text-sm text-slate-500 pl-7 font-medium">{b.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-100 mt-10">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                    <Sparkles size={16} className="text-[#D31219]" />
                    Suporte na Obra
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Não apenas vendemos materiais. Nossa equipe oferece suporte para leitura de projetos e indicação de parceiros instaladores experientes em sistemas de construção a seco.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                    <HardHat size={16} className="text-[#D31219]" />
                    Logística KY
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Consulte nossa equipe sobre entregas programadas e disponibilidade de frota para o transporte de perfis e chapas de grande porte em sua região.
                  </p>
                </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/5541996457421?text=Olá! Gostaria de um orçamento para ${encodeURIComponent(currentService?.title || 'serviços')}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#D31219] text-white font-bold px-10 py-5 rounded-sm inline-flex items-center justify-center gap-3 text-xs uppercase tracking-wide hover:bg-slate-900 transition-all shadow-none active:scale-[0.98]"
                >
                  <MessageCircle size={20} /> Solicitar Cotação
                </a>
                <Link
                  to="/produtos"
                  className="bg-white text-slate-950 border border-slate-200 font-bold px-10 py-5 rounded-sm inline-flex items-center justify-center gap-3 text-xs uppercase tracking-wide hover:border-[#D31219] transition-all active:scale-[0.98]"
                >
                  Ver Materiais
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 ky-card p-10 rounded-sm relative overflow-hidden border-t-8 border-t-[#D31219]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-red-50 text-[#D31219] rounded-sm flex items-center justify-center shadow-sm border border-red-100">
                    <ShieldAlert size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 tracking-tight">Especificação Técnica</h3>
                </div>
                <div className="space-y-6">
                  <div className="p-5 bg-slate-50 rounded-sm border border-slate-100 group hover:border-[#D31219]/20 transition-colors">
                    <p className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">Perfis Barbieri</p>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">Aço galvanizado de alta durabilidade e resistência contra corrosão marinha e urbana.</p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-sm border border-slate-100 group hover:border-[#D31219]/20 transition-colors">
                    <p className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">Placas Certificadas</p>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">Opções Standard (ST), Resistente à Umidade (RU) e Resistente ao Fogo (RF).</p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-sm border border-slate-100 group hover:border-[#D31219]/20 transition-colors">
                    <p className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">Tratamento de Juntas</p>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">Fitas microperfuradas e massas com tecnologia de elasticidade permanente.</p>
                  </div>
                </div>

                <div className="mt-10 bg-red-50 p-6 rounded-sm border border-red-100 flex items-start gap-4">
                  <Sparkles size={24} className="text-[#D31219] shrink-0 mt-1" />
                  <p className="text-xs text-slate-700 leading-relaxed font-bold">
                    <strong className="text-[#D31219] block mb-1">Garantia KY Drywall:</strong> Mais de duas décadas de experiência com entrega ágil e estoque pronto em Curitiba.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectChecklist serviceId={serviceId} />

      {/* Outros Serviços Navegação */}
      <section className="py-20 ky-section-tech border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#D31219] text-xs font-bold uppercase tracking-wider">
              Portfólio de Soluções
            </span>
            <h3 className="ky-title-mark text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1 mx-auto inline-block">
              Conheça Nossas Especialidades
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.filter(s => s.id !== serviceId).slice(0, 3).map(s => (
              <Link
                key={s.id}
                to={`/servicos/${s.id}`}
                className="ky-card rounded-lg overflow-hidden group flex flex-col"
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
