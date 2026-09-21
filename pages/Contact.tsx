
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
    <div className="bg-slate-50 min-h-screen py-16 lg:py-20">
      <EnhancedSEO
        title="Contato e Orçamento Técnico - KY Drywall Curitiba"
        description="Fale diretamente com os consultores da KY Drywall para cotações técnicas e pedidos. Atendimento rápido para obras em Curitiba e Região Metropolitana."
        keywords="contato ky drywall, orçamento drywall curitiba, telefone ky drywall, whatsapp drywall, orçamento steel frame, falar com especialista, carlos ky drywall, lucilene ky drywall"
        canonical={`${BASE_URL}/contato`}
        ogType="website"
        schema={contactPageSchema}
      />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <header className="mb-12">
            <span className="text-[#D31219] text-xs font-bold uppercase tracking-wider block mb-2">
              Atendimento Comercial & Técnico
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
              Cotação e Suporte Técnico
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Fale com um dos nossos consultores técnicos ou envie uma mensagem direta para calcular o quantitativo exato dos insumos da sua obra.
            </p>
          </header>

          {/* Cards de Especialistas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {/* Especialista 1 */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-[#D31219]/10 flex items-center justify-center text-[#D31219]">
                    <User size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D31219] block">Suporte de Engenharia</span>
                    <h3 className="text-lg font-bold text-slate-900">Carlos</h3>
                  </div>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Especificação estrutural para Steel Frame, sistemas drywall e telhados shingle de alta performance.
                </p>
                <p className="text-xs font-semibold text-slate-700 mb-5">
                  (41) 99645-7421
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppAgent('Carlos', COMPANY_INFO.whatsapp)}
                className="w-full bg-[#D31219] hover:bg-red-700 text-white py-3 rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle size={15} /> Conversar com Carlos
              </button>
            </div>

            {/* Especialista 2 */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <User size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">Comercial & Faturamento</span>
                    <h3 className="text-lg font-bold text-slate-900">Lucilene</h3>
                  </div>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Cotações de atacado, condições de pagamento faturado e agendamento de entregas com frete dedicado.
                </p>
                <p className="text-xs font-semibold text-slate-700 mb-5">
                  {COMPANY_INFO.phoneLucilene}
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppAgent('Lucilene', '5541999067259')}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle size={15} /> Conversar com Lucilene
              </button>
            </div>
          </div>

          {/* FORMULÁRIO DE CONTATO */}
          <section className="mb-12">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 bg-slate-900 p-8 text-white flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded bg-[#D31219]/20 border border-[#D31219]/40 flex items-center justify-center text-[#D31219] mb-6">
                      <ClipboardList size={20} />
                    </div>
                    <h2 className="text-xl font-bold tracking-tight mb-3">
                      Envie Sua Solicitação
                    </h2>
                    <p className="text-slate-300 text-xs leading-relaxed mb-8">
                      Preencha os campos ao lado com a metragem ou lista de materiais. Sua mensagem será enviada diretamente aos nossos operadores.
                    </p>
                    <div className="space-y-3 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D31219]"></div>
                        <span>Atendimento no mesmo dia útil</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D31219]"></div>
                        <span>Apoio no cálculo de modulação</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D31219]"></div>
                        <span>Preços direto de distribuidor</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400">
                    <p className="font-semibold text-white">Central Telefônica:</p>
                    <p>{COMPANY_INFO.phone}</p>
                  </div>
                </div>

                <div className="lg:col-span-3 p-8">
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Seu Nome / Empresa</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ex: Engenharia & Cia"
                          className="w-full bg-slate-50 border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-400 transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">WhatsApp / Telefone</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(41) 99999-9999"
                          className="w-full bg-slate-50 border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-400 transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Segmento do Projeto</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-400 transition-colors"
                      >
                        <option value="Drywall">Paredes e Forros em Drywall</option>
                        <option value="Steel Frame">Estrutura em Steel Frame</option>
                        <option value="Telhado Shingle">Telhas e Sistema Shingle</option>
                        <option value="Produtos">Compra de Materiais e Acessórios</option>
                        <option value="Outros">Outras Dúvidas Técnicas</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Descrição do Pedido ou Metragem</label>
                      <textarea 
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Informe metragens, tipos de placas ou dúvidas sobre perfis..."
                        className="w-full bg-slate-50 border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-400 transition-colors resize-none"
                      ></textarea>
                    </div>

                    {isQuoteView && quoteItems.length > 0 && (
                      <div className="bg-red-50 p-3 rounded border border-red-200 text-xs text-red-800">
                        Sua lista de cotação com {quoteItems.length} {quoteItems.length === 1 ? 'item' : 'itens'} será incluída automaticamente.
                      </div>
                    )}

                    <button 
                      type="submit"
                      className="w-full bg-[#D31219] hover:bg-red-700 text-white font-semibold py-3.5 rounded transition-colors text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <Send size={15} />
                      Enviar Solicitação no WhatsApp
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Dados de Contato e Balcão */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="flex items-center gap-4 p-5 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-[#D31219] shrink-0">
                <Phone size={18}/>
              </div>
              <div>
                <p className="text-[11px] uppercase font-bold text-slate-400">Telefone Fixo</p>
                <p className="text-xs font-bold text-slate-900">{COMPANY_INFO.phone}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 p-5 bg-white rounded-lg border border-slate-200">
              <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-[#D31219] shrink-0">
                <Clock size={18}/>
              </div>
              <div>
                <p className="text-[11px] uppercase font-bold text-slate-400">Expediente</p>
                <p className="text-xs font-bold text-slate-900">{COMPANY_INFO.hours.weekdays}</p>
              </div>
            </div>
            <a href="https://maps.app.goo.gl/RcpAnuqvVRpjQBQD6" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-[#D31219] shrink-0">
                <MapPin size={18}/>
              </div>
              <div>
                <p className="text-[11px] uppercase font-bold text-slate-400">Endereço</p>
                <p className="text-xs font-bold text-slate-900">BR-277, 3641 - Cajuru</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
