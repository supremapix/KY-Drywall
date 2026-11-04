
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Award, ShieldCheck, Building2, HardHat, Warehouse, Clock, Truck } from 'lucide-react';
import { getRandomCTA, COMPANY_INFO, BASE_URL, SITE_ASSETS } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';

const About: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KY Drywall & Steel Frame',
    description: 'Distribuidora de materiais para construção a seco de Curitiba. Especialistas em Steel Frame, Drywall, Telhado Shingle e Isolamento Acústico',
    url: BASE_URL,
    logo: `${BASE_URL}/logotipo-ky-drywall.png`,
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
    slogan: 'Materiais para construção a seco'
  };

  const [cta, setCta] = useState('');

  useEffect(() => {
    setCta(getRandomCTA());
  }, []);

  return (
    <div className="ky-interior-page bg-white">
      <EnhancedSEO
        title="A Empresa - KY Drywall & Steel Frame"
        description="Conheça a KY Drywall, distribuidora de materiais para construção a seco de Curitiba. Especialistas em Steel Frame, Drywall, Telhado Shingle e Isolamento Acústico. Assessoria técnica especializada."
        keywords="sobre ky drywall, empresa drywall curitiba, distribuidora steel frame, história ky drywall, distribuidora curitiba, materiais construção seco, barbieri curitiba"
        canonical={`${BASE_URL}/empresa`}
        ogType="website"
        schema={organizationSchema}
      />
      <section className="ky-interior-hero py-14 md:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="ky-r-kicker">CONHEÇA A KY</span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
              Materiais para construir.<br/><span className="text-[#D31219]">Gente para orientar.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              KY Drywall &amp; Steel Frame. Fornecimento de insumos para construção a seco e isolamento termoacústico em Curitiba e RMC.
            </p>
          </div>
          <figure className="overflow-hidden border border-slate-200 bg-white">
            <img src={SITE_ASSETS.storefront} alt="Fachada da loja KY Drywall na Rodovia BR-277, no Cajuru, Curitiba" width="1824" height="1361" fetchPriority="high" className="w-full h-auto" />
            <figcaption className="px-6 py-4 text-sm text-slate-600">Rod. BR-277, 3641 · Cajuru · Curitiba</figcaption>
          </figure>
        </div>
      </section>

      {/* Sobre a Empresa */}
      <section className="py-14 md:py-20 ky-section-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 text-[#D31219] text-xs font-bold uppercase tracking-wide bg-red-50 border border-red-100 px-3 py-1 rounded">
                <span>02 — INFRAESTRUTURA & TRADIÇÃO</span>
              </div>
              <h2 className="ky-title-mark text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
                Fornecimento Estruturado para <br/> o Canteiro de Obras
              </h2>
              <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                <p>
                  A <strong className="text-slate-950 font-bold">KY Drywall & Steel Frame</strong> é referência no fornecimento de materiais para construtoras, engenheiros e montadores. Localizada estrategicamente na Rod. BR-277, no Cajuru, contamos com acesso logístico imediato.
                </p>
                <p>
                  O catálogo inclui produtos de marcas como <strong className="text-slate-950 font-bold">Barbieri</strong> (perfis de aço), <strong className="text-slate-950 font-bold">Holdflex</strong> e principais fabricantes de placas e isolamentos.
                </p>
                <p>
                  Converse com a equipe sobre a lista de materiais. Projetos estruturais e sua compatibilização exigem um profissional habilitado.
                </p>
              </div>

              <div className="ky-card p-8 rounded-sm max-w-md">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4">Atendimento de Balcão</p>
                <div className="space-y-3 text-sm text-slate-900 font-bold uppercase tracking-tight">
                  <p className="flex items-center gap-3"><Clock size={18} className="text-[#D31219] shrink-0"/> {COMPANY_INFO.hours.weekdays}</p>
                  <p className="flex items-center gap-3"><Clock size={18} className="text-[#D31219] shrink-0"/> {COMPANY_INFO.hours.saturday}</p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-[#D31219] text-white font-bold px-10 py-5 rounded-sm inline-flex items-center justify-center gap-3 text-xs uppercase tracking-wide hover:bg-slate-900 transition-all shadow-none active:scale-[0.98]"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Comercial</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                  className="w-full sm:w-auto bg-white text-slate-950 border border-slate-200 font-bold px-10 py-5 rounded-sm inline-flex items-center justify-center gap-3 text-xs uppercase tracking-wide hover:border-[#D31219] transition-all active:scale-[0.98]"
                >
                  <span>Ligar: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="ky-card rounded-sm overflow-hidden shadow-none relative border-t-8 border-t-[#D31219]">
                <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                  <p className="text-xs font-bold text-[#D31219] uppercase tracking-wide">Showroom BR-277</p>
                </div>
                <img
                  src={SITE_ASSETS.storefront}
                  alt="Loja KY Drywall Curitiba"
                  className="w-full aspect-[16/10] object-cover object-top"
                />
                <div className="p-8 bg-slate-50 border-t border-slate-100">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-slate-900 uppercase tracking-wide">Unidade Cajuru</p>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wide mt-1">Ponto de Retirada & Showroom</p>
                    </div>
                    <span className="text-xs font-bold text-[#D31219] bg-white border border-red-100 px-3 py-1.5 rounded-lg shadow-sm">
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
      <section className="py-14 md:py-20 ky-section-tech border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 text-[#D31219] text-xs font-bold uppercase tracking-wide bg-red-50 border border-red-100 px-3 py-1 rounded mb-6">
              <span>03 — COMPROMISSO TÉCNICO</span>
            </div>
            <h2 className="ky-title-mark text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight mx-auto inline-block">
              A Logística que sua <br/> Obra Necessita
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Warehouse,
                title: 'Estoque Centralizado',
                desc: 'Consulte modelos, quantidades e disponibilidade de placas e perfis na unidade Cajuru.'
              },
              {
                icon: HardHat,
                title: 'Apoio a Projetos',
                desc: 'Envie seu projeto e lista de materiais para cotação. Dimensionamento e desempenho devem ser validados pelo responsável técnico.'
              },
              {
                icon: Truck,
                title: 'Entrega sob Consulta',
                desc: 'Consulte frete, prazo, acesso ao local e condições de descarga para o endereço da obra.'
              }
            ].map((item, i) => (
              <div key={i} className="ky-card p-10 rounded-sm group">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center text-[#D31219] mb-8 group-hover:bg-[#D31219] group-hover:text-white transition-all">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-4 tracking-tight">{item.title}</h3>
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
