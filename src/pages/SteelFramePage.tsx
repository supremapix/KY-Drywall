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
    name: 'Construção com Steel Frame - KY Drywall',
    description: 'Sistema construtivo industrializado com estrutura metálica galvanizada. Obra até 70% mais rápida, sustentável e com projeto executivo detalhado.',
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
    serviceType: 'Construção com Steel Frame',
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-red-100 selection:text-[#D31219]">
      <EnhancedSEO
        title="Steel Frame - Construção Inteligente | KY Drywall Curitiba"
        description="Sistema construtivo Steel Frame: obra 70% mais rápida, sustentável e com projeto executivo detalhado. Assessoria técnica especializada da KY Drywall em Curitiba e região."
        keywords="steel frame curitiba, construcao steel frame, construcao a seco, estrutura metalica, steel frame parana, casa steel frame, KY Drywall"
        canonical={`${BASE_URL}/steel-frame`}
        ogType="website"
        ogImage={STEEL_FRAME_IMAGES.hero}
        schema={steelFrameSchema}
      />

      {/* Hero Section - Light & Engineering Focused */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F8F9FA] border-b border-slate-200">
        {/* Engineering Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#D31219]"></span>
                01 — SISTEMAS ESTRUTURAIS
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.05] mb-8">
                Construção Inteligente em <span className="text-[#D31219]">Steel Frame</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10 mx-auto lg:mx-0">
                Sistemas industrializados com perfis de aço galvanizado Barbieri Z180. 
                Obra limpa, <span className="text-slate-900 font-bold">70% mais rápida</span> e com desperdício zero.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                <a
                  href="https://wa.me/5541996457421?text=Olá! Gostaria de um orçamento para obra em Steel Frame."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-[#D31219] text-white font-bold px-10 py-5 rounded flex items-center justify-center gap-3 hover:bg-red-700 transition-all text-sm uppercase tracking-wider shadow-lg shadow-red-900/10 active:scale-[0.98]"
                >
                  <MessageCircle size={20} />
                  <span>Cotação via WhatsApp</span>
                </a>
                <a
                  href="tel:+554135284232"
                  className="w-full sm:w-auto bg-white text-slate-900 font-bold px-10 py-5 rounded flex items-center justify-center gap-3 border-2 border-slate-200 hover:border-slate-300 transition-all text-sm uppercase tracking-wider active:scale-[0.98]"
                >
                  <Phone size={20} />
                  <span>(41) 3528-4232</span>
                </a>
              </div>

              {/* Authority Stamps */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    <ShieldCheck size={20} className="text-[#D31219]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Norma Técnica</div>
                    <div className="text-xs font-black text-slate-800">ABNT NBR 15575</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    <Award size={20} className="text-[#D31219]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Especialista</div>
                    <div className="text-xs font-black text-slate-800">Desde 1998</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src={STEEL_FRAME_IMAGES.hero}
                  alt="Estrutura Steel Frame KY Drywall"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur p-4 rounded-lg border border-white/20">
                    <p className="text-[10px] font-bold text-[#D31219] uppercase tracking-widest mb-1">Destaque Técnico</p>
                    <p className="text-sm font-bold text-slate-900">Perfis Barbieri Z180 Galvanizados</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-50 rounded-full blur-3xl -z-10 opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-100 rounded-full blur-3xl -z-10 opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: O que é Steel Frame - Engineering Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2 sticky top-32">
              <div className="text-[11px] font-mono font-bold text-[#D31219] uppercase tracking-[0.2em] mb-4">
                02 — CONCEITO E APLICAÇÃO
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none mb-8">
                Engenharia de Precisão para <br className="hidden sm:block" />
                <span className="text-slate-400">Obras de Alto Padrão.</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  O <strong className="text-slate-900 font-bold">Light Steel Frame</strong> é um sistema construtivo industrializado estruturado com perfis de aço galvanizado. 
                  Ao contrário da alvenaria convencional, cada componente é projetado para máxima eficiência estrutural e termoacústica.
                </p>
                <p>
                  Na <strong className="text-slate-900 font-bold">KY Drywall</strong>, não entregamos apenas materiais. Oferecemos assessoria técnica completa para modulação, 
                  quantitativo preciso e logística inteligente para Curitiba e Região Metropolitana.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Cálculo Estrutural Dedicado',
                  'Logística Própria (BR-277)',
                  'Estoque Pronta Entrega',
                  'Assessoria na Obra'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 py-3 border-b border-slate-100">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                    <span className="text-sm font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Building2 size={120} />
                </div>
                <img
                  src={STEEL_FRAME_IMAGES.render}
                  alt="Estrutura de montagem Steel Frame"
                  className="w-full rounded-lg shadow-lg mb-8"
                />
                <h3 className="text-xl font-bold text-slate-900 mb-4">Por que escolher o sistema seco?</h3>
                <p className="text-slate-600 mb-6">
                  A construção a seco elimina 95% do consumo de água e reduz o peso da estrutura em até 40%. 
                  Isso resulta em fundações mais baratas e canteiros de obra impecáveis.
                </p>
                <div className="h-[1px] w-full bg-slate-200 my-6"></div>
                <div className="flex items-center gap-4">
                  <div className="bg-white px-3 py-1 rounded border border-slate-200 text-[10px] font-bold text-slate-500 uppercase">Aço Z180</div>
                  <div className="bg-white px-3 py-1 rounded border border-slate-200 text-[10px] font-bold text-slate-500 uppercase">OSB Estrutural</div>
                  <div className="bg-white px-3 py-1 rounded border border-slate-200 text-[10px] font-bold text-slate-500 uppercase">Placa Cimentícia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Benefícios Numerados - Ruler Style Divider */}
      <div className="w-full h-12 flex items-center bg-slate-50 border-y border-slate-200 px-4 overflow-hidden">
        <div className="flex gap-8 opacity-20 select-none whitespace-nowrap font-mono text-[10px]">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i}>| {i * 10}cm | {'-'.repeat(20)}</span>
          ))}
        </div>
      </div>

      <section className="py-24 bg-[#FDFDFD]" ref={benefitsSection.ref}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[11px] font-mono font-bold text-[#D31219] uppercase tracking-[0.2em] mb-4">
              03 — INDICADORES TÉCNICOS
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Vantagens <span className="text-slate-400 italic">Reais</span> no Canteiro.
            </h2>
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
                  className="group bg-white p-8 border border-slate-200 hover:border-[#D31219] transition-all duration-300 relative"
                >
                  <div className="absolute top-0 right-0 p-4 text-4xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                    0{idx + 1}
                  </div>
                  <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mb-6 text-[#D31219] group-hover:bg-[#D31219] group-hover:text-white transition-colors">
                    <benefit.icon size={24} />
                  </div>
                  <div className="text-4xl font-black text-slate-900 mb-2">
                    {!isNaN(numericValue) ? `${count}%` : benefit.value}
                  </div>
                  <div className="text-[10px] font-bold text-[#D31219] uppercase tracking-widest mb-4">
                    {benefit.label}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section: Comparativo Técnico - Blue-print Table style */}
      <section className="py-24 bg-white border-t border-slate-100" ref={compareSection.ref}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-1/2">
              <div className="text-[11px] font-mono font-bold text-[#D31219] uppercase tracking-[0.2em] mb-4">
                04 — ANÁLISE COMPARATIVA
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">
                Steel Frame vs. <br />
                <span className="text-slate-400">Alvenaria Tradicional</span>
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-slate-600 leading-relaxed">
                A comparação técnica revela que, embora o custo direto de materiais possa ser similar, a economia global em tempo, 
                mão de obra e desperdício torna o Steel Frame a opção mais rentável para obras planejadas.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px] border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
                <div className="p-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Atributo</div>
                <div className="p-6 text-center text-[11px] font-black text-[#D31219] uppercase tracking-widest border-x border-slate-200 bg-red-50/30">Steel Frame (KY)</div>
                <div className="p-6 text-center text-[11px] font-bold text-slate-400 uppercase tracking-widest">Alvenaria</div>
              </div>

              {[
                { criteria: 'Tempo de Obra', steel: '3 a 5 meses', alvenaria: '12 a 18 meses' },
                { criteria: 'Geração de Entulho', steel: 'Mínima (< 1%)', alvenaria: 'Alta (20% a 25%)' },
                { criteria: 'Peso Estrutural', steel: 'Até 40% mais leve', alvenaria: 'Elevado' },
                { criteria: 'Precisão', steel: 'Milimétrica (0.5mm)', alvenaria: 'Centimétrica' },
                { criteria: 'Conforto Térmico', steel: 'Excelente (Isolantes)', alvenaria: 'Depende de espessura' },
                { criteria: 'Sustentabilidade', steel: 'Aço 100% reciclável', alvenaria: 'Alto impacto' },
              ].map((row, idx) => (
                <div
                  key={row.criteria}
                  className={`grid grid-cols-3 border-b border-slate-100 last:border-b-0 group hover:bg-slate-50/50 transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-[#FDFDFD]'
                  }`}
                >
                  <div className="p-6 text-sm font-bold text-slate-700">{row.criteria}</div>
                  <div className="p-6 text-center text-sm font-black text-slate-900 border-x border-slate-100 bg-red-50/10 flex items-center justify-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    {row.steel}
                  </div>
                  <div className="p-6 text-center text-sm text-slate-400 flex items-center justify-center">{row.alvenaria}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section: Timeline - Processo Step by Step */}
      <section className="py-24 bg-slate-50" ref={timelineSection.ref}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] font-mono font-bold text-[#D31219] uppercase tracking-[0.2em] mb-4">
              05 — FLUXO EXECUTIVO
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6">
              Do Projeto à Chave <br />
              <span className="text-slate-400">em tempo recorde.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIMELINE.map((phase) => (
              <div 
                key={phase.step} 
                className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="text-6xl font-black text-slate-50 absolute -top-2 -left-2 z-0">
                  {phase.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-black text-slate-900 mb-2">{phase.title}</h3>
                  <div className="inline-block px-2 py-0.5 bg-red-50 text-[10px] font-bold text-[#D31219] rounded mb-4">
                    {phase.duration}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Especificações Técnicas - Card List */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="text-[11px] font-mono font-bold text-[#D31219] uppercase tracking-[0.2em] mb-4">
                06 — ESPECIFICAÇÕES
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none mb-12">
                Insumos Certificados e <br />
                <span className="text-slate-400">Rastreabilidade Total.</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SPECS.map((spec) => (
                  <div key={spec.label} className="p-6 bg-slate-50 border border-slate-200 rounded-lg group hover:bg-white hover:border-[#D31219] transition-all">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 group-hover:text-[#D31219]">{spec.label}</div>
                    <div className="text-sm font-black text-slate-800">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 sticky top-32">
              <div className="bg-slate-900 rounded-2xl p-10 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D31219] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="text-2xl font-black text-white mb-8">KY Drywall Diferenciais</h3>
                
                <div className="space-y-6">
                  {[
                    { icon: Building2, text: '25 Anos de Mercado em Curitiba' },
                    { icon: Zap, text: 'Distribuidor Barbieri Z180' },
                    { icon: ShieldCheck, text: 'Assessoria Técnica Dedicada' },
                    { icon: Hammer, text: 'Estoque Completo em Curitiba' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center shrink-0">
                        <item.icon size={20} className="text-[#D31219]" />
                      </div>
                      <p className="text-slate-300 font-bold text-sm leading-tight mt-2">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-10 border-t border-white/10">
                  <a
                    href="https://wa.me/5541996457421?text=Olá! Gostaria de um orçamento detalhado de materiais para Steel Frame."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#D31219] text-white font-black px-8 py-5 rounded-lg flex items-center justify-center gap-3 hover:bg-red-700 transition-all text-xs uppercase tracking-widest"
                  >
                    <MessageCircle size={20} />
                    Solicitar Orçamento Técnico
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Clean White */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-5">
          <div className="inline-block p-4 rounded-full bg-red-50 text-[#D31219] mb-8">
            <Building2 size={48} />
          </div>
          <h2 className="text-3xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.05] mb-8">
            Sua obra merece a precisão do <span className="text-[#D31219]">Aço.</span>
          </h2>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            Traga seu projeto para a KY Drywall. Garantimos os melhores materiais e suporte técnico do Paraná.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5541996457421?text=Olá! Gostaria de falar com um engenheiro sobre Steel Frame."
              target="_blank"
              rel="noreferrer"
              className="bg-slate-900 text-white font-black px-12 py-6 rounded-lg flex items-center justify-center gap-3 hover:bg-black transition-all text-sm uppercase tracking-widest shadow-xl"
            >
              <MessageCircle size={20} />
              Falar com Especialista
            </a>
            <Link
              to="/contato"
              className="bg-white text-slate-900 font-black px-12 py-6 rounded-lg flex items-center justify-center gap-3 border-2 border-slate-200 hover:border-slate-900 transition-all text-sm uppercase tracking-widest"
            >
              Visitar Nossa Loja
            </Link>
          </div>
        </div>
      </section>

      {/* Outros Serviços - Bottom Carousel style */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Explore Mais</div>
              <h3 className="text-2xl font-black text-slate-900">Outras Soluções KY</h3>
            </div>
            <Link to="/servicos" className="text-xs font-bold text-[#D31219] uppercase tracking-widest hover:underline flex items-center gap-2">
              Ver Todos <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.filter((s) => s.id !== 'steel-frame')
              .slice(0, 4)
              .map((s) => (
                <Link
                  key={s.id}
                  to={`/servicos/${s.id}`}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all group"
                >
                  <div className="aspect-video rounded-lg bg-slate-100 mb-6 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <h4 className="font-black text-slate-900 mb-2 group-hover:text-[#D31219] transition-colors">{s.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: s.description }} />
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SteelFramePage;
