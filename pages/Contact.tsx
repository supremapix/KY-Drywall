
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

      {/* Hero Section */}
      <section className="bg-slate-950 py-16 md:py-24 text-white relative overflow-hidden bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-[#D31219] text-xs font-mono font-bold uppercase tracking-wider bg-[#D31219]/10 border border-[#D31219]/30 px-3 py-1 rounded mb-6">
              <span>01 — ATENDIMENTO DIRETO</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
              Cotação e Suporte Técnico
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
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

          {/* FORMULÁRIO DE CONTATO */}
          <section className="mb-16">
            <div className="inline-flex items-center gap-2 text-[#D31219] text-xs font-mono font-bold uppercase tracking-wider mb-6">
              <span>02 — SOLICITAÇÃO FORMAL</span>
            </div>
            <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 bg-slate-950 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                  {/* Decorative ruler line */}
                  <div className="absolute top-0 right-0 w-px h-full bg-slate-800 hidden lg:block"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-[#D31219]/20 border border-[#D31219]/40 flex items-center justify-center text-[#D31219] mb-8">
                      <ClipboardList size={24} />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight mb-4">
                      Envie Seu Pedido
                    </h2>
                    <p className="text-slate-400 text-base leading-relaxed mb-10">
                      Informe os detalhes do seu projeto ou anexe sua lista de materiais. Atendimento técnico especializado.
                    </p>
                    <div className="space-y-4">
                      {[
                        'Atendimento no mesmo dia útil',
                        'Apoio no cálculo de modulação',
                        'Preços direto de distribuidor'
                      ].map((text, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D31219]"></div>
                          <span>{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-800 relative z-10">
                    <p className="text-xs uppercase font-bold text-slate-500 mb-2 tracking-widest">Loja Física Curitiba:</p>
                    <p className="text-lg font-bold text-white">{COMPANY_INFO.phone}</p>
                  </div>
                </div>

                <div className="lg:col-span-3 p-8 md:p-12 bg-white">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 block ml-1">Seu Nome / Empresa</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Nome completo ou empresa"
                          className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 h-[56px] text-lg text-slate-900 focus:outline-none focus:border-[#D31219] transition-all placeholder:text-slate-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 block ml-1">WhatsApp / Telefone</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(41) 99999-9999"
                          className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 h-[56px] text-lg text-slate-900 focus:outline-none focus:border-[#D31219] transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 block ml-1">Segmento do Projeto</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 h-[56px] text-lg text-slate-900 focus:outline-none focus:border-[#D31219] transition-all appearance-none"
                      >
                        <option value="Drywall">Paredes e Forros em Drywall</option>
                        <option value="Steel Frame">Estrutura em Steel Frame</option>
                        <option value="Telhado Shingle">Telhas e Sistema Shingle</option>
                        <option value="Produtos">Compra de Materiais e Acessórios</option>
                        <option value="Outros">Outras Dúvidas Técnicas</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 block ml-1">Descrição do Pedido ou Metragem</label>
                      <textarea 
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Informe metragens, tipos de placas ou dúvidas sobre perfis..."
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-4 text-lg text-slate-900 focus:outline-none focus:border-[#D31219] transition-all resize-none placeholder:text-slate-400"
                      ></textarea>
                    </div>

                    {isQuoteView && quoteItems.length > 0 && (
                      <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-sm font-bold text-[#D31219] flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#D31219] animate-pulse"></div>
                        Lista de cotação ({quoteItems.length} {quoteItems.length === 1 ? 'item' : 'itens'}) será enviada.
                      </div>
                    )}

                    <button 
                      type="submit"
                      className="w-full bg-[#D31219] hover:bg-red-700 text-white font-black py-5 rounded-xl transition-all text-base uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg hover:shadow-red-900/20 active:scale-[0.98]"
                    >
                      <Send size={20} />
                      Enviar Solicitação no WhatsApp
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
