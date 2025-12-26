
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, MessageCircle, Navigation, ChevronRight, User, Smartphone, Send, ClipboardList } from 'lucide-react';
import { QuoteItem } from '../types';
import { getRandomCTA } from '../constants';

const Contact: React.FC = () => {
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
    <div className="bg-white min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-20">
            <span className="text-[#D31219] font-black uppercase tracking-[0.3em] text-xs mb-6 block">Atendimento Imediato 2025</span>
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 uppercase tracking-tighter leading-none">
              Orçamento <span className="text-[#D31219]">Rápido</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed italic">
              "Fale diretamente com nossos especialistas ou preencha o formulário abaixo para receber uma proposta técnica detalhada."
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {/* Especialista 1 */}
            <button 
              onClick={() => handleWhatsAppAgent('Carlos', '5541996457421')}
              className="bg-[#1A1A1A] text-white p-12 rounded-[4rem] flex flex-col items-center text-center group hover:bg-[#D31219] transition-all duration-500 shadow-2xl relative overflow-hidden"
            >
              <div className="bg-white/10 p-6 rounded-full mb-8 group-hover:scale-110 transition-transform">
                <User size={60} className="text-[#D31219] group-hover:text-white" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D31219] group-hover:text-white mb-2">Suporte Técnico</span>
              <h3 className="text-4xl font-black uppercase mb-4">Carlos</h3>
              <p className="text-gray-400 group-hover:text-white/80 mb-8 font-medium">Especialista em especificações de Steel Frame e Telhado Shingle.</p>
              <div className="bg-[#D31219] group-hover:bg-white group-hover:text-[#D31219] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3">
                <MessageCircle size={20} /> {cta1 || 'Iniciar WhatsApp'}
              </div>
            </button>

            {/* Especialista 2 */}
            <button 
              onClick={() => handleWhatsAppAgent('Lucilene', '5541999067259')}
              className="bg-gray-50 text-gray-900 p-12 rounded-[4rem] flex flex-col items-center text-center group hover:bg-green-600 hover:text-white transition-all duration-500 shadow-2xl border border-gray-100"
            >
              <div className="bg-gray-200 p-6 rounded-full mb-8 group-hover:scale-110 transition-transform">
                <User size={60} className="text-green-600 group-hover:text-white" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600 group-hover:text-white mb-2">Comercial & Vendas</span>
              <h3 className="text-4xl font-black uppercase mb-4">Lucilene</h3>
              <p className="text-gray-500 group-hover:text-white/80 mb-8 font-medium">Atendimento focado em prazos, logística e melhores condições de pagamento.</p>
              <div className="bg-green-600 group-hover:bg-white group-hover:text-green-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3">
                <MessageCircle size={20} /> {cta2 || 'Chamar no WhatsApp'}
              </div>
            </button>
          </div>

          {/* FORMULÁRIO DE CONTATO */}
          <section className="mb-24">
            <div className="bg-white rounded-[4rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 bg-[#1A1A1A] p-12 md:p-16 text-white flex flex-col justify-center">
                  <ClipboardList size={48} className="text-[#D31219] mb-8" />
                  <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-tight">Solicite seu <span className="text-[#D31219]">Orçamento Online</span></h2>
                  <p className="text-gray-400 font-medium mb-10 leading-relaxed">
                    Preencha os dados ao lado e nossa central de atendimento receberá sua solicitação instantaneamente via WhatsApp.
                  </p>
                  <ul className="space-y-4">
                    {['Resposta em minutos', 'Assessoria técnica inclusa', 'Tabela de preços atualizada'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest">
                        <div className="w-2 h-2 rounded-full bg-[#D31219]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-3 p-12 md:p-16">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Seu Nome</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ex: João da Silva"
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#D31219]/20 transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">WhatsApp / Telefone</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(41) 99999-9999"
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#D31219]/20 transition-all font-medium"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Assunto do Contato</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#D31219]/20 transition-all font-black uppercase tracking-widest text-xs"
                      >
                        <option value="Drywall">Forro e Parede Drywall</option>
                        <option value="Steel Frame">Construção Steel Frame</option>
                        <option value="Telhado Shingle">Telhado Shingle</option>
                        <option value="Produtos">Compra de Materiais</option>
                        <option value="Outros">Outros Assuntos</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Sua Mensagem</label>
                      <textarea 
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Descreva brevemente o que você precisa..."
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#D31219]/20 transition-all font-medium resize-none"
                      ></textarea>
                    </div>

                    {isQuoteView && quoteItems.length > 0 && (
                      <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-[10px] font-bold text-red-800">
                         ⚠️ Sua lista de cotação com {quoteItems.length} itens será enviada junto com esta mensagem.
                      </div>
                    )}

                    <button 
                      type="submit"
                      className="w-full bg-[#D31219] hover:bg-black text-white font-black py-6 rounded-2xl transition-all shadow-2xl uppercase tracking-widest text-xs flex items-center justify-center gap-4 group"
                    >
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      {formCTA || 'Enviar para o WhatsApp'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="tel:4135284232" className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
              <div className="bg-gray-100 p-4 rounded-2xl text-[#D31219]"><Phone size={32}/></div>
              <div>
                <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Telefone Fixo</p>
                <p className="text-xl font-black">(41) 3528-4232</p>
              </div>
            </a>
            <div className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-gray-100">
              <div className="bg-gray-100 p-4 rounded-2xl text-[#D31219]"><Clock size={32}/></div>
              <div>
                <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Horário</p>
                <p className="text-sm font-black uppercase">Seg-Sex: 07:30 - 17:30</p>
              </div>
            </div>
            <a href="https://maps.app.goo.gl/RcpAnuqvVRpjQBQD6" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
              <div className="bg-gray-100 p-4 rounded-2xl text-[#D31219]"><MapPin size={32}/></div>
              <div>
                <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Visite-nos</p>
                <p className="text-sm font-black uppercase">BR 277, 3641 - Cajuru</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
