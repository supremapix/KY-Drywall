
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
      {/* Hero Section - Industrial Showroom */}
      <section className="bg-white py-20 md:py-32 text-slate-900 relative overflow-hidden border-b-2 border-slate-100">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-100"></div>
        <div className="absolute inset-0 opacity-10 z-0">
          <img 
            src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Obra Industrial" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D31219]"></span>
              <span>01 — DISTRIBUIDORA ESPECIALIZADA</span>
            </span>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-8 text-slate-950 leading-[1.05]">
              A Solidez da <br/> <span className="text-[#D31219]">KY Drywall</span> & Steel Frame
            </h1>
            <p className="text-lg sm:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl">
              Desde 1998, liderando o fornecimento de insumos para construção a seco e isolamento termoacústico em Curitiba e RMC.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre a Empresa */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 text-[#D31219] text-[10px] font-black uppercase tracking-[0.2em] bg-red-50 border border-red-100 px-3 py-1 rounded">
                <span>02 — INFRAESTRUTURA & TRADIÇÃO</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Fornecimento Estruturado para <br/> o Canteiro de Obras
              </h2>
              <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                <p>
                  A <strong className="text-slate-950 font-black">KY Drywall & Steel Frame</strong> é referência no fornecimento de materiais para construtoras, engenheiros e montadores. Localizada estrategicamente na Rod. BR-277, no Cajuru, contamos com acesso logístico imediato.
                </p>
                <p>
                  Somos parceiros e distribuidores de indústrias consagradas, como <strong className="text-slate-950 font-black">Barbieri</strong> (perfis Z180), <strong className="text-slate-950 font-black">Holdflex</strong> e principais fabricantes de placas e isolamentos.
                </p>
                <p>
                  Oferecemos assessoria técnica consultiva para elaboração de quantitativos e compatibilização de projetos estruturais em steel frame.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-100 max-w-md">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Atendimento de Balcão</p>
                <div className="space-y-3 text-sm text-slate-900 font-black uppercase tracking-tight">
                  <p className="flex items-center gap-3"><Clock size={18} className="text-[#D31219] shrink-0"/> {COMPANY_INFO.hours.weekdays}</p>
                  <p className="flex items-center gap-3"><Clock size={18} className="text-[#D31219] shrink-0"/> {COMPANY_INFO.hours.saturday}</p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}`} 
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-[#D31219] text-white font-black px-10 py-5 rounded-2xl inline-flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] hover:bg-red-700 transition-all shadow-xl active:scale-[0.98]"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Comercial</span>
                </a>
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} 
                  className="w-full sm:w-auto bg-white text-slate-950 border-2 border-slate-100 font-black px-10 py-5 rounded-2xl inline-flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] hover:border-[#D31219] transition-all active:scale-[0.98]"
                >
                  <span>Ligar: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[40px] overflow-hidden border-2 border-slate-100 shadow-2xl bg-white relative">
                <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                  <p className="text-[10px] font-black text-[#D31219] uppercase tracking-widest">Showroom BR-277</p>
                </div>
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ky-loja-cajuru-drywall-stell-fame.png-CAi9KHi0wcqQLptb0qLFGSWQZaXr98.jpeg" 
                  alt="Loja KY Drywall Curitiba" 
                  className="w-full h-auto object-cover" 
                />
                <div className="p-8 bg-slate-50 border-t-2 border-slate-100">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-black text-slate-900 uppercase tracking-widest">Unidade Cajuru</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Ponto de Retirada & Showroom</p>
                    </div>
                    <span className="text-[10px] font-black text-[#D31219] bg-white border border-red-100 px-3 py-1.5 rounded-lg shadow-sm">
                      CURITIBA - PR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Competitivos */}
      <section className="py-20 md:py-32 bg-slate-50 border-t-2 border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 text-[#D31219] text-[10px] font-black uppercase tracking-[0.2em] bg-red-50 border border-red-100 px-3 py-1 rounded mb-6">
              <span>03 — COMPROMISSO TÉCNICO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              A Logística que sua <br/> Obra Necessita
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Warehouse, 
                title: 'Estoque Centralizado', 
                desc: 'Centenas de toneladas de placas de drywall e perfis Barbieri para retirada imediata em nosso CD no Cajuru.' 
              },
              { 
                icon: HardHat, 
                title: 'Apoio a Projetos', 
                desc: 'Validação de especificações de carga e desempenho acústico por consultores com décadas de experiência.' 
              },
              { 
                icon: Truck, 
                title: 'Frota Especializada', 
                desc: 'Veículos equipados para transporte de placas sem quebras e perfis sem empenamento, com descarga técnica.' 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border-2 border-slate-100 shadow-sm hover:border-[#D31219]/40 transition-all group">
                <div className="w-16 h-16 bg-slate-50 border-2 border-slate-100 rounded-2xl flex items-center justify-center text-[#D31219] mb-8 group-hover:bg-[#D31219] group-hover:text-white transition-all">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-slate-950 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
