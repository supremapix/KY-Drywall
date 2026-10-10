
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Award, ShieldCheck, Building2, HardHat, Warehouse, Clock, Truck } from 'lucide-react';
import { getRandomCTA, COMPANY_INFO, BASE_URL } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';

const About: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KY Drywall & Steel Frame',
    description: 'Maior distribuidora de materiais para construção a seco de Curitiba. Especialistas em Steel Frame, Drywall, Telhado Shingle e Isolamento Acústico',
    url: BASE_URL,
    logo: 'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=800',
    telephone: '+554135284232',
    email: 'carlos@kydrywall.com.br',
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:30',
        closes: '17:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '07:30',
        closes: '12:00'
      }
    ],
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Curitiba'
      },
      {
        '@type': 'State',
        name: 'Paraná'
      }
    ],
    sameAs: [
      'https://www.facebook.com/kydrywall',
      'https://www.instagram.com/kydrywall'
    ],
    foundingDate: '2010',
    slogan: 'Sua Obra 70% Mais Rápida'
  };

  const [cta, setCta] = useState('');

  useEffect(() => {
    setCta(getRandomCTA());
  }, []);

  return (
    <div className="bg-white">
      <EnhancedSEO
        title="A Empresa - KY Drywall & Steel Frame"
        description="Conheça a KY Drywall, maior distribuidora de materiais para construção a seco de Curitiba. Especialistas em Steel Frame, Drywall, Telhado Shingle e Isolamento Acústico. Assessoria técnica especializada."
        keywords="sobre ky drywall, empresa drywall curitiba, distribuidora steel frame, história ky drywall, maior distribuidora curitiba, materiais construção seco, barbieri curitiba"
        canonical={`${BASE_URL}/empresa`}
        ogType="website"
        schema={organizationSchema}
      />
      {/* Hero Section */}
      <section className="bg-slate-950 py-16 md:py-24 text-white relative overflow-hidden bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="absolute inset-0 opacity-20 z-0">
          <img 
            src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="" 
            className="w-full h-full object-cover" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x800?text=KY+DRYWALL';
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60 z-0"></div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0">
            <span className="inline-flex items-center justify-center md:justify-start gap-2 px-3.5 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-white text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span>01 — DISTRIBUIDORA ESPECIALIZADA EM CURITIBA</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 text-white leading-tight">
              A Solidez da KY Drywall & Steel Frame
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Tradição e liderança no fornecimento de insumos para construção a seco, steel frame, isolamento acústico e coberturas em Curitiba e Região Metropolitana.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre a Empresa */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center justify-center md:justify-start gap-2 text-[#D31219] text-xs font-mono font-bold uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded">
                <span>02 — INFRAESTRUTURA & TRADIÇÃO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Fornecimento Estruturado para o Canteiro de Obras
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  A <strong className="text-slate-900 font-bold">KY Drywall & Steel Frame</strong> é referência no fornecimento de materiais para construtoras, engenheiros, arquitetos e montadores especializados. Localizada estrategicamente na Rod. BR-277, no Cajuru, contamos com acesso logístico imediato para atendimento em toda a Grande Curitiba e Litoral.
                </p>
                <p>
                  Somos parceiros e distribuidores de indústrias consagradas, como <strong className="text-slate-900 font-bold">Barbieri</strong> (perfis estruturais galvanizados Z180), <strong className="text-slate-900 font-bold">Holdflex</strong> (massas de acabamento) e principais fabricantes de placas de gesso acartonado e isolamentos.
                </p>
                <p>
                  Oferecemos assessoria técnica consultiva para elaboração de quantitativos, compatibilização de projetos estruturais em steel frame e especificação de soluções termoacústicas sob medida.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-left">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Horário de Funcionamento do Balcão</p>
                <div className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <p className="flex items-center gap-2"><Clock size={15} className="text-[#D31219] shrink-0"/> {COMPANY_INFO.hours.weekdays}</p>
                  <p className="flex items-center gap-2"><Clock size={15} className="text-[#D31219] shrink-0"/> {COMPANY_INFO.hours.saturday}</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center md:justify-start">
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de falar com o time comercial da KY Drywall.`} 
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-[#D31219] text-white font-bold px-6 py-4 rounded-xl inline-flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors shadow-md min-h-[48px]"
                >
                  <MessageCircle size={18} />
                  <span>Falar no WhatsApp</span>
                </a>
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} 
                  className="w-full sm:w-auto bg-white text-slate-900 border border-slate-300 font-bold px-6 py-4 rounded-xl inline-flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider hover:border-[#D31219] hover:text-[#D31219] transition-colors min-h-[48px]"
                >
                  <span>Ligar: (41) 3528-4232</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ky-loja-cajuru-drywall-stell-fame.png-CAi9KHi0wcqQLptb0qLFGSWQZaXr98.jpeg" 
                  alt="Loja KY Drywall na BR-277 Cajuru - Materiais de Construção a Seco" 
                  className="w-full h-auto object-cover" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=LOJA+KY+DRYWALL';
                  }}
                />
                <div className="p-4 bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                  <div>
                    <p className="text-xs font-bold">Unidade Cajuru (BR-277)</p>
                    <p className="text-[11px] text-slate-400">Ponto de retirada e showroom de produtos</p>
                  </div>
                  <span className="text-xs font-bold text-[#D31219] bg-red-950/50 border border-[#D31219]/30 px-2.5 py-1 rounded">
                    Curitiba - PR
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Competitivos */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center justify-center gap-2 text-[#D31219] text-xs font-mono font-bold uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded mb-3">
              <span>03 — COMPROMISSO TÉCNICO</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight mt-1">
              Por que Comprar na KY Drywall?
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Segurança operacional e pontualidade na cadeia de suprimentos da sua edificação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: Warehouse, 
                title: 'Estoque Centralizado Pronta Entrega', 
                desc: 'Centenas de toneladas de placas de drywall, montantes, guias, parafusos fosfatizados e massas para retirada imediata ou entrega no mesmo dia.' 
              },
              { 
                icon: HardHat, 
                title: 'Consultoria e Apoio a Projetos', 
                desc: 'Profissionais capacitados para validar especificações de carga, desempenho acústico e modulação estrutural de perfis metálicos Barbieri.' 
              },
              { 
                icon: Truck, 
                title: 'Frota Própria com Entrega Segura', 
                desc: 'Veículos preparados para transportar placas sem quebras e perfis sem empenamentos, com descarregamento técnico no local de obra.' 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#D31219]/40 transition-colors flex flex-col justify-between text-center md:text-left items-center md:items-start">
                <div>
                  <div className="w-12 h-12 bg-red-950/10 border border-red-200 rounded-xl flex items-center justify-center text-[#D31219] mb-4">
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
