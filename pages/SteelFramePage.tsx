import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  ChevronRight,
  ShieldCheck,
  Clock,
  Leaf,
  Ruler,
  Weight,
  Zap,
  ArrowRight,
  CheckCircle2,
  Building2,
  Hammer,
  TrendingDown,
  Award,
  Phone,
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import { BASE_URL, SERVICES } from '../constants';

const STEEL_FRAME_IMAGES = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/projeto-stell-frame.png-bAiwJLHNjOpiURXX8I0tGfLyNCau5x.jpeg',
  render: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/steel-frame-yfbTyNsPB5CHvelFOwWPfb75qIZ8vl.png',
};

const BENEFITS = [
  {
    icon: Clock,
    title: 'Rapidez na Execucao',
    value: '70%',
    label: 'Mais rapido',
    description: 'Obra finalizada em semanas, nao em meses. Processo industrializado com montagem agil no canteiro.',
  },
  {
    icon: Ruler,
    title: 'Precisao Milimetrica',
    value: '0.5mm',
    label: 'Tolerancia',
    description: 'Perfis cortados com precisao industrial. Encaixes perfeitos, sem retrabalho e sem desperdicio.',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    value: '90%',
    label: 'Menos residuos',
    description: 'Construcao limpa e seca. Aco 100% reciclavel e reducao drastica de entulho na obra.',
  },
  {
    icon: Weight,
    title: 'Estrutura Leve',
    value: '40%',
    label: 'Mais leve',
    description: 'Estrutura significativamente mais leve que alvenaria. Menos carga na fundacao e economia no projeto.',
  },
];

const SPECS = [
  { label: 'Perfis Estruturais', value: 'Aco Galvanizado Z180 Barbieri' },
  { label: 'Espessura', value: '0.80mm a 1.25mm' },
  { label: 'Fechamento Externo', value: 'Placa Cimenticia + OSB' },
  { label: 'Fechamento Interno', value: 'Drywall ST / RU / RF' },
  { label: 'Isolamento', value: 'La de Pet / La de Rocha' },
  { label: 'Cobertura', value: 'Steel Frame + Shingle / Ceramica' },
  { label: 'Garantia Estrutural', value: 'Projeto calculado por engenheiro' },
  { label: 'Norma Tecnica', value: 'ABNT NBR 15253 e NBR 15575' },
];

const TIMELINE = [
  { step: 1, title: 'Projeto Executivo', duration: '2-3 semanas', description: 'Desenvolvimento completo do projeto estrutural com calculo de cargas.' },
  { step: 2, title: 'Fabricacao dos Perfis', duration: '1-2 semanas', description: 'Corte e preparacao dos perfis em fabrica com precisao milimetrica.' },
  { step: 3, title: 'Montagem Estrutural', duration: '2-4 semanas', description: 'Montagem da estrutura completa: paredes, lajes e cobertura.' },
  { step: 4, title: 'Fechamento e Acabamento', duration: '3-5 semanas', description: 'Instalacao de placas, isolamento, instalacoes e acabamento final.' },
];

function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);
  return count;
}

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const SteelFramePage: React.FC = () => {
  const benefitsSection = useInView(0.15);
  const timelineSection = useInView(0.15);
  const compareSection = useInView(0.15);

  const steelFrameSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Construcao com Steel Frame - KY Drywall',
    description: 'Sistema construtivo industrializado com estrutura metalica galvanizada. Obra ate 70% mais rapida, sustentavel e com projeto executivo detalhado.',
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
        addressCountry: 'BR',
      },
    },
    areaServed: { '@type': 'City', name: 'Curitiba' },
    serviceType: 'Construcao com Steel Frame',
  };

  return (
    <div className="bg-white">
      <EnhancedSEO
        title="Steel Frame - Construcao Inteligente | KY Drywall Curitiba"
        description="Sistema construtivo Steel Frame: obra 70% mais rapida, sustentavel e com projeto executivo detalhado. Assessoria tecnica especializada da KY Drywall em Curitiba e regiao."
        keywords="steel frame curitiba, construcao steel frame, construcao a seco, estrutura metalica, steel frame parana, casa steel frame, KY Drywall"
        canonical={`${BASE_URL}/steel-frame`}
        ogType="website"
        ogImage={STEEL_FRAME_IMAGES.hero}
        schema={steelFrameSchema}
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={STEEL_FRAME_IMAGES.hero}
            alt="Projeto Steel Frame KY Drywall - Estrutura metálica galvanizada"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 border border-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D31219]"></span>
              Engenharia e Construção a Seco
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Sistemas Construtivos em <span className="text-[#D31219]">Steel Frame</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-10">
              Construção industrializada com perfis de aço galvanizado Barbieri Z180. Sua obra até{' '}
              <strong className="text-white font-semibold">70% mais rápida</strong>, sustentável e com projeto executivo calculado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href="https://wa.me/5541996457421?text=Olá! Gostaria de consultar projeto e valores para Steel Frame."
                target="_blank"
                rel="noreferrer"
                className="bg-[#D31219] text-white font-semibold px-8 py-4 rounded flex items-center justify-center gap-2.5 hover:bg-red-700 transition-colors text-sm shadow-sm"
              >
                <MessageCircle size={18} />
                Solicitar Cotação no WhatsApp
              </a>
              <a
                href="tel:+554135284232"
                className="bg-white/10 text-white font-semibold px-8 py-4 rounded flex items-center justify-center gap-2.5 border border-white/20 hover:bg-white/20 transition-colors text-sm backdrop-blur-sm"
              >
                <Phone size={18} />
                (41) 3528-4232
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: '70%', label: 'Mais Rápido que Alvenaria' },
                { value: '90%', label: 'Menos Resíduos no Canteiro' },
                { value: '40%', label: 'Mais Leve na Fundação' },
                { value: 'NBR 15253', label: 'Norma Técnica Atendida' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded p-4 text-left">
                  <div className="text-2xl font-bold text-[#D31219]">{stat.value}</div>
                  <div className="text-[11px] font-medium text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-6 left-0 right-0 z-10 border-t border-white/10 pt-4 hidden md:block">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Link to="/" className="hover:text-white transition-colors">Início</Link>
              <ChevronRight size={12} />
              <Link to="/servicos/steel-frame" className="hover:text-white transition-colors">Serviços</Link>
              <ChevronRight size={12} />
              <span className="text-[#D31219] font-medium">Steel Frame</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: O que é Steel Frame */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-[#D31219] text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-[2px] bg-[#D31219]"></span>
                Inovação e Produtividade
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Engenharia de Precisão para Obras Residenciais e Comerciais
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  O <strong className="text-slate-900 font-semibold">Light Steel Frame (LSF)</strong> é um sistema construtivo estruturado com perfis de aço galvanizado conformados a frio. Substitui a alvenaria tradicional por uma solução industrializada com montagem a seco, alta resistência sísmica e conforto termoacústico.
                </p>
                <p>
                  Na <strong className="text-slate-900 font-semibold">KY Drywall</strong>, disponibilizamos assessoria técnica completa: desde a especificação e modulação dos perfis Barbieri Z180 até a entrega de placas OSB, cimentícias, lãs de isolamento e acessórios de fixação com pronta entrega em Curitiba.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {['Perfis Barbieri Z180', 'Cálculo de Cargas', 'Montagem Industrializada', 'Assessoria na Modulação'].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2.5 p-3.5 bg-slate-50 rounded border border-slate-200">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      <span className="text-xs font-semibold text-slate-800">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md bg-white">
                <img
                  src={STEEL_FRAME_IMAGES.render}
                  alt="Estrutura Steel Frame montada - KY Drywall"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold">Estrutura Galvanizada Z180</p>
                    <p className="text-[11px] text-slate-400">Proteção anticorrosiva e durabilidade superior</p>
                  </div>
                  <span className="text-xs font-semibold text-[#D31219] bg-red-950/50 border border-[#D31219]/30 px-2.5 py-1 rounded">
                    Desde 1998
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Benefícios com Indicadores Reais */}
      <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-200" ref={benefitsSection.ref}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-[#D31219] text-xs font-bold uppercase tracking-wider">
              Desempenho Construtivo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1">
              Vantagens Comprovadas no Canteiro de Obras
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Métricas mensuráveis que reduzem o custo global da edificação e aumentam a previsibilidade do cronograma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit) => {
              const numericValue = parseInt(benefit.value);
              const count = useCountUp(
                isNaN(numericValue) ? 0 : numericValue,
                2000,
                benefitsSection.inView
              );
              return (
                <div
                  key={benefit.title}
                  className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:border-[#D31219]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 bg-[#D31219]/10 rounded flex items-center justify-center mb-4 text-[#D31219]">
                      <benefit.icon size={20} />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                      {!isNaN(numericValue) ? `${count}%` : benefit.value}
                    </div>
                    <div className="text-xs font-semibold text-[#D31219] uppercase tracking-wide mb-2">
                      {benefit.label}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section: Comparativo Steel Frame vs Alvenaria */}
      <section className="py-20 lg:py-24 bg-slate-950 text-white" ref={compareSection.ref}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#D31219] text-xs font-bold uppercase tracking-wider">
              Análise Comparativa
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Steel Frame vs. Alvenaria Convencional
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Critérios técnicos e operacionais avaliados para tomada de decisão em novos empreendimentos.
            </p>
          </div>

          <div className="max-w-4xl border border-slate-800 rounded-lg overflow-hidden bg-slate-900/60">
            <div className="grid grid-cols-3 gap-0 border-b border-slate-800 bg-slate-900 text-xs font-bold uppercase tracking-wider">
              <div className="p-4 text-slate-400">Critério Técnico</div>
              <div className="p-4 text-[#D31219] text-center bg-slate-800/60 border-x border-slate-800">
                Steel Frame
              </div>
              <div className="p-4 text-slate-400 text-center">
                Alvenaria Tradicional
              </div>
            </div>

            {[
              { criteria: 'Tempo de Obra', steel: '3 a 5 meses', alvenaria: '12 a 18 meses' },
              { criteria: 'Geração de Entulho', steel: 'Mínima (< 1%)', alvenaria: 'Alta (20% a 25%)' },
              { criteria: 'Peso Estrutural', steel: 'Até 40% mais leve', alvenaria: 'Elevado sobre fundação' },
              { criteria: 'Tolerância e Precisão', steel: 'Milimétrica (0.5mm)', alvenaria: 'Centimétrica com ajustes' },
              { criteria: 'Desempenho Acústico', steel: 'Superior (Lã integrada)', alvenaria: 'Básico (requer reforço)' },
              { criteria: 'Sustentabilidade', steel: 'Aço 100% reciclável', alvenaria: 'Alto consumo de água' },
              { criteria: 'Previsibilidade de Custos', steel: 'Alta (sem desperdício)', alvenaria: 'Média/Baixa variação' },
            ].map((row, idx) => (
              <div
                key={row.criteria}
                className={`grid grid-cols-3 gap-0 border-b border-slate-800/60 last:border-b-0 text-xs ${
                  idx % 2 === 0 ? 'bg-slate-900/40' : 'bg-transparent'
                }`}
              >
                <div className="p-4 font-medium text-slate-300">{row.criteria}</div>
                <div className="p-4 font-semibold text-white text-center bg-slate-800/30 border-x border-slate-800 flex items-center justify-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  {row.steel}
                </div>
                <div className="p-4 text-slate-400 text-center flex items-center justify-center">
                  {row.alvenaria}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Timeline do Processo */}
      <section className="py-20 lg:py-24 bg-white" ref={timelineSection.ref}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-[#D31219] text-xs font-bold uppercase tracking-wider">
              Fluxo Executivo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1">
              Etapas do Cronograma Construtivo
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Planejamento linear que elimina retrabalhos e assegura a conformidade com as normas ABNT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE.map((phase) => (
              <div 
                key={phase.step} 
                className="bg-slate-50 rounded-lg p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-bold text-slate-300 mb-3">
                    {String(phase.step).padStart(2, '0')}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {phase.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#D31219] mb-3">
                    Prazo médio: {phase.duration}
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Especificações Técnicas */}
      <section className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#D31219] text-xs font-bold uppercase tracking-wider">
                Parâmetros Normativos
              </span>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Especificações dos Materiais
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Todos os insumos comercializados pela KY Drywall possuem rastreabilidade de fábrica e certificação técnica de conformidade com as normas ABNT NBR 15253 e NBR 15575.
              </p>

              <div className="space-y-3">
                {SPECS.map((spec) => (
                  <div key={spec.label} className="flex items-start gap-3.5 p-4 bg-white rounded border border-slate-200">
                    <ShieldCheck size={18} className="text-[#D31219] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                        {spec.label}
                      </div>
                      <div className="text-xs font-bold text-slate-900 mt-0.5">{spec.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 sticky top-28">
              <div className="bg-slate-900 rounded-lg p-8 text-white border border-slate-800">
                <div className="flex items-center gap-3 mb-6">
                  <Award size={24} className="text-[#D31219]" />
                  <h3 className="text-lg font-bold text-white">
                    Diferenciais KY Drywall & Steel Frame
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Building2, text: 'Mais de 25 anos de solidez no mercado de Curitiba' },
                    { icon: Zap, text: 'Distribuidor oficial Barbieri com perfis galvanizados Z180' },
                    { icon: ShieldCheck, text: 'Assessoria técnica especializada para cálculo e quantificação' },
                    { icon: Hammer, text: 'Estoque completo de placas, parafusos, massas e isolamentos' },
                    { icon: TrendingDown, text: 'Condições comerciais diferenciadas para construtoras e instaladores' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-white/10 rounded flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon size={15} className="text-[#D31219]" />
                      </div>
                      <p className="text-slate-300 text-xs leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <a
                    href="https://wa.me/5541996457421?text=Olá! Gostaria de um orçamento detalhado de materiais para Steel Frame."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#D31219] text-white font-semibold px-6 py-3.5 rounded flex items-center justify-center gap-2 hover:bg-red-700 transition-colors text-xs uppercase tracking-wider"
                  >
                    <MessageCircle size={16} />
                    Solicitar Orçamento de Materiais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={STEEL_FRAME_IMAGES.hero}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-[#D31219] text-xs font-bold uppercase tracking-wider mb-2 block">
              Atendimento Consultivo
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Pronto para Estruturar sua Obra com Segurança?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Envie sua planta ou lista de materiais para análise técnica. Retornamos com quantitativo detalhado e cotação direta de fábrica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5541996457421?text=Olá! Gostaria de um orçamento para obra em Steel Frame."
                target="_blank"
                rel="noreferrer"
                className="bg-[#D31219] text-white font-semibold px-8 py-4 rounded flex items-center justify-center gap-2 hover:bg-red-700 transition-colors text-xs uppercase tracking-wider shadow-sm"
              >
                <MessageCircle size={16} />
                Falar com Engenheiro Técnico
              </a>
              <Link
                to="/produtos"
                className="bg-white/10 text-white font-semibold px-8 py-4 rounded flex items-center justify-center gap-2 border border-white/20 hover:bg-white/20 transition-colors text-xs uppercase tracking-wider"
              >
                Consultar Catálogo de Materiais <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Outros Serviços */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#D31219] text-xs font-bold uppercase tracking-wider">
              Soluções Complementares
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Conheça Nossos Outros Sistemas Construtivos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.filter((s) => s.id !== 'steel-frame')
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.id}
                  to={`/servicos/${s.id}`}
                  className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-[#D31219]/40 hover:shadow-md transition-all group flex flex-col"
                >
                  <div className="h-48 overflow-hidden bg-slate-100">
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
                      <span>Ver Especificações</span>
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

export default SteelFramePage;
