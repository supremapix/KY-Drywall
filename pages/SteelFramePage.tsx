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
        streetAddress: 'Rod. BR 277 - 3641',
        addressLocality: 'Curitiba',
        addressRegion: 'PR',
        postalCode: '82590-300',
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

      {/* Hero Section - Full Impact */}
      <section className="relative min-h-[90vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={STEEL_FRAME_IMAGES.hero}
            alt="Projeto Steel Frame KY Drywall - Estrutura metalica galvanizada"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        </div>

        {/* Geometric accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
          <svg viewBox="0 0 400 800" className="w-full h-full">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[2px] bg-[#D31219]" />
              <span className="text-[#D31219] text-[10px] font-black uppercase tracking-[0.4em]">
                Tecnologia Construtiva
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Steel
              <br />
              <span className="text-[#D31219]">Frame</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl mb-12">
              Construcao inteligente com estrutura de aco galvanizado. Sua obra ate{' '}
              <strong className="text-white">70% mais rapida</strong>, sustentavel e com projeto
              executivo detalhado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="https://wa.me/5541996457421?text=Ola! Quero saber mais sobre construcao em Steel Frame. Preciso de assessoria tecnica."
                className="bg-[#D31219] text-white font-black px-12 py-6 rounded-2xl flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(211,18,25,0.3)] hover:shadow-[0_20px_60px_rgba(211,18,25,0.5)] hover:scale-105 transition-all uppercase tracking-widest text-xs group"
              >
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                Solicitar Projeto
              </a>
              <a
                href="tel:+554135284232"
                className="bg-white/10 text-white font-black px-12 py-6 rounded-2xl flex items-center justify-center gap-3 border-2 border-white/20 backdrop-blur-md uppercase tracking-widest text-xs hover:bg-white/20 transition-all"
              >
                <Phone size={20} />
                (41) 3528-4232
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '70%', label: 'Mais Rapido' },
                { value: '90%', label: 'Menos Residuos' },
                { value: '40%', label: 'Mais Leve' },
                { value: '25+', label: 'Anos Durabilidade' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center">
                  <div className="text-2xl md:text-3xl font-black text-[#D31219]">{stat.value}</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Inicio</Link>
              <ChevronRight size={14} />
              <Link to="/servicos/steel-frame" className="text-gray-400 hover:text-white transition-colors">Servicos</Link>
              <ChevronRight size={14} />
              <span className="text-[#D31219]">Steel Frame</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: O que e Steel Frame */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-[#D31219]" />
                <span className="text-[#D31219] text-[10px] font-black uppercase tracking-[0.3em]">
                  Construcao Inteligente
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-[0.9] mb-8">
                O Futuro da
                <br />
                <span className="text-[#D31219]">Construcao</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  O <strong className="text-gray-900">Steel Frame</strong> e um sistema construtivo
                  industrializado que utiliza perfis de aco galvanizado como estrutura principal. Ele substitui 
                  a alvenaria convencional com uma solucao mais rapida, mais leve e mais sustentavel.
                </p>
                <p>
                  Na <strong className="text-gray-900">KY Drywall</strong>, oferecemos o servico completo: do
                  projeto executivo detalhado a montagem final, com materiais de primeira linha -{' '}
                  <strong className="text-[#D31219]">perfis Barbieri Z180</strong>, placas certificadas e
                  isolamento de alta performance.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-10">
                {['Projeto Executivo', 'Calculo Estrutural', 'Montagem Completa', 'Assessoria Tecnica'].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      <span className="text-sm font-bold text-gray-800">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src={STEEL_FRAME_IMAGES.render}
                  alt="Render 3D de estrutura Steel Frame - KY Drywall"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#D31219] text-white p-8 rounded-3xl shadow-2xl hidden lg:block">
                <div className="text-4xl font-black">Desde</div>
                <div className="text-5xl font-black">1998</div>
                <div className="text-[10px] font-bold uppercase tracking-widest mt-1 text-white/80">
                  No mercado
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Beneficios com Contadores Animados */}
      <section className="py-24 lg:py-32 bg-gray-50" ref={benefitsSection.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none">
              Vantagens <span className="text-[#D31219]">Comprovadas</span>
            </h2>
            <p className="text-gray-500 mt-6 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Numeros que fazem a diferenca no seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, idx) => {
              const numericValue = parseInt(benefit.value);
              const count = useCountUp(
                isNaN(numericValue) ? 0 : numericValue,
                2000,
                benefitsSection.inView
              );
              return (
                <div
                  key={benefit.title}
                  className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-[#D31219]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D31219] transition-colors">
                    <benefit.icon
                      size={28}
                      className="text-[#D31219] group-hover:text-white transition-colors"
                    />
                  </div>
                  <div className="text-5xl font-black text-gray-900 mb-1">
                    {!isNaN(numericValue) ? `${count}%` : benefit.value}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D31219] mb-4">
                    {benefit.label}
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section: Comparativo Steel Frame vs Alvenaria */}
      <section className="py-24 lg:py-32 bg-[#111] text-white" ref={compareSection.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Steel Frame <span className="text-[#D31219]">vs</span> Alvenaria
            </h2>
            <p className="text-gray-500 mt-6 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Compare e decida com dados reais
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-0 mb-2">
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 p-4">Criterio</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-[#D31219] p-4 text-center bg-white/5 rounded-t-2xl">
                Steel Frame
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 p-4 text-center">
                Alvenaria
              </div>
            </div>

            {[
              { criteria: 'Tempo de Obra', steel: '3-5 meses', alvenaria: '12-18 meses', steelWins: true },
              { criteria: 'Geracao de Entulho', steel: 'Minima', alvenaria: 'Alta', steelWins: true },
              { criteria: 'Peso da Estrutura', steel: 'Ate 40% mais leve', alvenaria: 'Pesada', steelWins: true },
              { criteria: 'Precisao', steel: 'Milimetrica', alvenaria: 'Centimetrica', steelWins: true },
              { criteria: 'Isolamento Termico', steel: 'Superior (la integrada)', alvenaria: 'Basico', steelWins: true },
              { criteria: 'Sustentabilidade', steel: 'Aco 100% reciclavel', alvenaria: 'Alto impacto', steelWins: true },
              { criteria: 'Manutencao', steel: 'Baixa', alvenaria: 'Media/Alta', steelWins: true },
            ].map((row, idx) => (
              <div
                key={row.criteria}
                className={`grid grid-cols-3 gap-0 ${idx % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
              >
                <div className="p-5 text-sm font-bold text-gray-300 flex items-center">{row.criteria}</div>
                <div className="p-5 text-sm font-black text-white text-center bg-white/5 flex items-center justify-center gap-2">
                  <CheckCircle2 size={16} className="text-green-400" />
                  {row.steel}
                </div>
                <div className="p-5 text-sm text-gray-500 text-center flex items-center justify-center">
                  {row.alvenaria}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Timeline do Processo */}
      <section className="py-24 lg:py-32" ref={timelineSection.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none">
              Etapas do <span className="text-[#D31219]">Projeto</span>
            </h2>
            <p className="text-gray-500 mt-6 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Do projeto a entrega das chaves
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TIMELINE.map((phase) => (
                <div key={phase.step} className="relative group">
                  <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:border-[#D31219]/20 transition-all duration-500 h-full flex flex-col">
                    <div className="text-7xl font-black text-gray-100 group-hover:text-[#D31219]/10 transition-colors mb-4">
                      {String(phase.step).padStart(2, '0')}
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-2">
                      {phase.title}
                    </h3>
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#D31219] mb-4">
                      {phase.duration}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed flex-grow">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section: Especificacoes Tecnicas */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-[#D31219]" />
                <span className="text-[#D31219] text-[10px] font-black uppercase tracking-[0.3em]">
                  Dados Tecnicos
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-[0.9] mb-8">
                Especificacao
                <br />
                <span className="text-[#D31219]">Tecnica</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Utilizamos materiais de primeira linha com certificacao ABNT, garantindo seguranca, durabilidade
                e desempenho superior para sua construcao.
              </p>

              <div className="space-y-4">
                {SPECS.map((spec) => (
                  <div key={spec.label} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <ShieldCheck size={20} className="text-[#D31219] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
                        {spec.label}
                      </div>
                      <div className="text-sm font-bold text-gray-900">{spec.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sticky top-8">
              <div className="bg-[#111] rounded-[3rem] p-10 md:p-14 text-white">
                <div className="flex items-center gap-4 mb-8">
                  <Award size={32} className="text-[#D31219]" />
                  <h3 className="text-2xl font-black uppercase tracking-tight">
                    Por que a <span className="text-[#D31219]">KY</span>?
                  </h3>
                </div>
                <div className="space-y-6">
                  {[
                    { icon: Building2, text: 'Mais de 25 anos de experiencia no mercado' },
                    { icon: Hammer, text: 'Equipe propria de montagem especializada' },
                    { icon: TrendingDown, text: 'Melhor custo-beneficio de Curitiba e regiao' },
                    { icon: Zap, text: 'Distribuidor oficial Barbieri - perfis Z180' },
                    { icon: ShieldCheck, text: 'Projetos calculados por engenheiro estrutural' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <item.icon size={18} className="text-[#D31219]" />
                      </div>
                      <p className="text-gray-300 text-sm font-medium leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <a
                    href="https://wa.me/5541996457421?text=Ola! Quero um orcamento para construcao em Steel Frame."
                    className="w-full bg-[#D31219] text-white font-black px-8 py-6 rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:bg-white hover:text-[#D31219] transition-all uppercase tracking-widest text-xs group"
                  >
                    <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                    Orcamento Gratuito
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

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
            Pronto para
            <br />
            <span className="text-[#D31219]">Construir?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Solicite um orcamento sem compromisso. Nossa equipe tecnica esta pronta para
            transformar seu projeto em realidade com a tecnologia Steel Frame.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5541996457421?text=Ola! Quero um orcamento para Steel Frame. Preciso de assessoria tecnica especializada."
              className="bg-[#D31219] text-white font-black px-14 py-7 rounded-2xl flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(211,18,25,0.3)] hover:scale-105 transition-all uppercase tracking-widest text-xs group"
            >
              <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" />
              Falar com Especialista
            </a>
            <Link
              to="/produtos"
              className="bg-white/10 text-white font-black px-14 py-7 rounded-2xl flex items-center justify-center gap-3 border-2 border-white/20 backdrop-blur-md uppercase tracking-widest text-xs hover:bg-white/20 transition-all"
            >
              Ver Materiais <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Outros Servicos */}
      <section className="py-24 bg-gray-50 border-t">
        <div className="container mx-auto px-4 text-center mb-16">
          <h3 className="text-3xl font-black uppercase tracking-tighter">
            Conheca Nossas <span className="text-[#D31219]">Especialidades</span>
          </h3>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.filter((s) => s.id !== 'steel-frame')
            .slice(0, 3)
            .map((s) => (
              <Link
                key={s.id}
                to={`/servicos/${s.id}`}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl group border"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-black uppercase mb-4 tracking-tight group-hover:text-[#D31219] transition-colors">
                    {s.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[#D31219] font-black uppercase text-[10px] tracking-widest">
                    Saiba Mais <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default SteelFramePage;
