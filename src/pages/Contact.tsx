
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, MessageCircle, Navigation, ChevronRight, User, Smartphone, Send, ClipboardList } from 'lucide-react';
import { QuoteItem } from '../types';
import { getRandomCTA, COMPANY_INFO, BASE_URL } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';

const Contact: React.FC = () => {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contato - KY Drywall & Steel Frame',
    description: 'Entre em contato com a KY Drywall. Orçamento gratuito e assessoria técnica especializada em Curitiba',
    url: `${BASE_URL}/contato`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'KY Drywall & Steel Frame',
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
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+5541996457421',
          contactType: 'customer service',
          areaServed: 'BR',
          availableLanguage: 'Portuguese',
          name: 'Carlos - Suporte Técnico'
        },
        {
          '@type': 'ContactPoint',
          telephone: '+5541999067259',
          contactType: 'sales',
          areaServed: 'BR',
          availableLanguage: 'Portuguese',
          name: 'Lucilene - Comercial & Vendas'
        }
      ]
    }
  };

  const [searchParams] = useSearchParams();
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [cta1, setCta1] = useState('');
  const [cta2, setCta2] = useState('');
  const [formCTA, setFormCTA] = useState('');
  const isQuoteView = searchParams.get('view') === 'quote';

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Drywall',
    message: ''
  });

  useEffect(() => {
    const stored = localStorage.getItem('ky_quote_list');
    if (stored) setQuoteItems(JSON.parse(stored));
    setCta1(getRandomCTA());
    setCta2(getRandomCTA());
    setFormCTA(getRandomCTA());
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let quoteText = "";
    if (isQuoteView && quoteItems.length > 0) {
      quoteText = "\n\n*ITENS DA COTAÇÃO:*\n" + quoteItems.map(i => `• ${i.name} (Qtd: ${i.quantity})`).join('\n');
    }

    const message = `*SOLICITAÇÃO DE ORÇAMENTO - SITE KY*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*Assunto:* ${formData.subject}\n` +
      `*Mensagem:* ${formData.message}${quoteText}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5541996457421?text=${encodedMessage}`, '_blank');
  };

  const handleWhatsAppAgent = (agent: string, phone: string) => {
    let msg = `Olá ${agent}, vim pelo site e gostaria de um orçamento.\n\n`;
    if (isQuoteView && quoteItems.length > 0) {
      msg += "*Meus itens da lista:*\n" + quoteItems.map(i => `• ${i.name} (Qtd: ${i.quantity})`).join('\n');
    }
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      <EnhancedSEO
        title="Contato e Orçamento Técnico - KY Drywall Curitiba"
        description="Fale diretamente com os consultores da KY Drywall para cotações técnicas e pedidos. Atendimento rápido para obras em Curitiba e Região Metropolitana."
        keywords="contato ky drywall, orçamento drywall curitiba, telefone ky drywall, whatsapp drywall, orçamento steel frame, falar com especialista, carlos ky drywall, lucilene ky drywall"
        canonical={`${BASE_URL}/contato`}
        ogType="website"
        schema={contactPageSchema}
      />

      {/* Hero Section - Industrial Showroom */}
      <section className="bg-white py-20 md:py-32 text-slate-900 relative overflow-hidden border-b-2 border-slate-100">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-100"></div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-[#D31219] text-[10px] font-black uppercase tracking-[0.2em] bg-red-50 border border-red-100 px-4 py-2 rounded-full mb-10 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D31219]"></span>
              <span>01 — ATENDIMENTO DIRETO</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.05] mb-10 text-slate-950">
              Cotação e <span className="text-[#D31219]">Suporte</span> Técnico
            </h1>
            <p className="text-slate-600 text-lg sm:text-2xl leading-relaxed max-w-2xl font-medium">
              Fale com nossos consultores técnicos em Curitiba para calcular o quantitativo exato da sua obra. Atendimento humano e especializado.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Cards de Especialistas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {/* Especialista 1 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-[#D31219]/30 transition-all">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-[#D31219] group-hover:bg-[#D31219] group-hover:text-white transition-colors">
                    <User size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D31219] block mb-0.5">Suporte de Engenharia</span>
                    <h3 className="text-xl font-bold text-slate-900">Carlos</h3>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Especialista em especificação estrutural para Steel Frame, sistemas drywall e telhados shingle de alta performance.
                </p>
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-8 text-lg">
                  <Smartphone size={18} className="text-slate-400" />
                  (41) 99645-7421
                </div>
              </div>
              <button
                onClick={() => handleWhatsAppAgent('Carlos', COMPANY_INFO.whatsapp)}
                className="w-full bg-[#D31219] hover:bg-red-700 text-white py-4 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
              >
                <MessageCircle size={20} /> Conversar com Carlos
              </button>
            </div>

            {/* Especialista 2 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-emerald-600/30 transition-all">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <User size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-0.5">Comercial & Faturamento</span>
                    <h3 className="text-xl font-bold text-slate-900">Lucilene</h3>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Foco em cotações de atacado, condições de pagamento faturado e logística de entrega para grandes obras.
                </p>
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-8 text-lg">
                  <Smartphone size={18} className="text-slate-400" />
                  {COMPANY_INFO.phoneLucilene}
                </div>
              </div>
              <button
                onClick={() => handleWhatsAppAgent('Lucilene', '5541999067259')}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
              >
                <MessageCircle size={20} /> Conversar com Lucilene
              </button>
            </div>
          </div>

          {/* FORMULÁRIO DE CONTATO - Light Theme */}
          <section className="mb-20">
            <div className="inline-flex items-center gap-2 text-[#D31219] text-[10px] font-black uppercase tracking-[0.2em] mb-8 bg-red-50 border border-red-100 px-4 py-2 rounded-full shadow-sm">
              <ClipboardList size={14} />
              <span>02 — SOLICITAÇÃO DE ORÇAMENTO</span>
            </div>
            <div className="bg-white rounded-[32px] border border-slate-200 shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 bg-slate-900 p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 z-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl font-black tracking-tight mb-6">
                      Envie Seu <span className="text-[#D31219]">Projeto</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-12">
                      Informe os detalhes da sua obra ou anexe sua lista de materiais. Retornamos com o quantitativo técnico exato.
                    </p>
                    <div className="space-y-6">
                      {[
                        'Cotação enviada no mesmo dia',
                        'Apoio no cálculo de modulação',
                        'Preços direto de distribuidora'
                      ].map((text, i) => (
                        <div key={i} className="flex items-center gap-4 text-base font-bold text-slate-100">
                          <div className="w-2 h-2 rounded-full bg-[#D31219]"></div>
                          <span>{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-16 pt-8 border-t border-slate-800 relative z-10">
                    <p className="text-[10px] uppercase font-black text-slate-500 mb-2 tracking-[0.2em]">Canais Oficiais Curitiba:</p>
                    <p className="text-2xl font-black text-white leading-none">{COMPANY_INFO.phone}</p>
                    <p className="text-xs text-slate-400 mt-2 font-medium">Rod. BR-277, 3641 - Cajuru</p>
                  </div>
                </div>

                <div className="lg:col-span-3 p-10 md:p-16 bg-white">
                  <form onSubmit={handleFormSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-sm font-black text-slate-900 uppercase tracking-widest block ml-1">Seu Nome / Empresa</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ex: Construtora Silva"
                          className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 h-[64px] text-lg text-slate-900 focus:outline-none focus:border-[#D31219] focus:ring-4 focus:ring-red-50 transition-all placeholder:text-slate-300 font-medium"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-black text-slate-900 uppercase tracking-widest block ml-1">WhatsApp de Contato</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(41) 99999-9999"
                          className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 h-[64px] text-lg text-slate-900 focus:outline-none focus:border-[#D31219] focus:ring-4 focus:ring-red-50 transition-all placeholder:text-slate-300 font-medium"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-900 uppercase tracking-widest block ml-1">Tipo de Material ou Serviço</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 h-[64px] text-lg text-slate-900 focus:outline-none focus:border-[#D31219] transition-all appearance-none font-bold"
                      >
                        <option value="Drywall">Paredes e Forros em Drywall</option>
                        <option value="Steel Frame">Estrutura em Steel Frame</option>
                        <option value="Telhado Shingle">Sistema de Telhado Shingle</option>
                        <option value="Produtos">Compra de Materiais (Atacado)</option>
                        <option value="Outros">Outras Dúvidas Técnicas</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-900 uppercase tracking-widest block ml-1">Mensagem ou Lista de Materiais</label>
                      <textarea 
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Informe as medidas das paredes, tipos de placas ou sua lista completa..."
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 text-lg text-slate-900 focus:outline-none focus:border-[#D31219] focus:ring-4 focus:ring-red-50 transition-all resize-none placeholder:text-slate-300 font-medium"
                      ></textarea>
                    </div>

                    {isQuoteView && quoteItems.length > 0 && (
                      <div className="bg-red-50 p-6 rounded-2xl border-2 border-[#D31219]/20 text-sm font-black text-[#D31219] flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-[#D31219] animate-ping"></div>
                        <span>Sua lista de cotação com {quoteItems.length} {quoteItems.length === 1 ? 'item será anexada' : 'itens será anexada'}.</span>
                      </div>
                    )}

                    <button 
                      type="submit"
                      className="w-full bg-[#D31219] hover:bg-red-700 text-white font-black py-6 rounded-2xl transition-all text-lg uppercase tracking-widest flex items-center justify-center gap-4 shadow-xl active:scale-[0.98]"
                    >
                      <Send size={24} />
                      Enviar via WhatsApp
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Dados de Contato e Balcão */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="flex items-center gap-5 p-6 bg-white rounded-xl border border-slate-200 hover:border-[#D31219] transition-all group shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-[#D31219] shrink-0 group-hover:bg-[#D31219] group-hover:text-white transition-colors">
                <Phone size={22}/>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-0.5">Telefone Fixo</p>
                <p className="text-base font-bold text-slate-900">{COMPANY_INFO.phone}</p>
              </div>
            </a>
            <div className="flex items-center gap-5 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-[#D31219] shrink-0">
                <Clock size={22}/>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-0.5">Expediente</p>
                <p className="text-base font-bold text-slate-900">{COMPANY_INFO.hours.weekdays}</p>
              </div>
            </div>
            <a href="https://maps.app.goo.gl/RcpAnuqvVRpjQBQD6" target="_blank" rel="noreferrer" className="flex items-center gap-5 p-6 bg-white rounded-xl border border-slate-200 hover:border-[#D31219] transition-all group shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-[#D31219] shrink-0 group-hover:bg-[#D31219] group-hover:text-white transition-colors">
                <MapPin size={22}/>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-0.5">Endereço</p>
                <p className="text-base font-bold text-slate-900">BR-277, 3641 - Cajuru</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
