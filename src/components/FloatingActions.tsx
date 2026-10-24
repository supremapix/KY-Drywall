import React, { useState, useEffect } from 'react';
import { 
  Share2, 
  X, 
  Check, 
  Copy, 
  Phone, 
  PhoneCall,
  MessageCircle, 
  ChevronUp, 
  ChevronRight,
  User,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, BASE_URL } from '../constants';

const DEFAULT_SHARE_IMAGE = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ky-loja-cajuru-drywall-stell-fame.png-CAi9KHi0wcqQLptb0qLFGSWQZaXr98.jpeg';

export const FloatingActions: React.FC = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
      setPageTitle(document.title || 'KY Drywall & Steel Frame');
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update current URL on location changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
      setPageTitle(document.title || 'KY Drywall & Steel Frame');
    }
  }, [isShareOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    const url = currentUrl || BASE_URL;
    const title = pageTitle || 'KY Drywall & Steel Frame';
    const message = `Estou indicando o melhor KY Drywall & Steel Frame: ${title} (${url})`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(message).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }).catch(() => {
        prompt('Copie o texto abaixo:', message);
      });
    } else {
      prompt('Copie o texto abaixo:', message);
    }
  };

  const urlEncoded = encodeURIComponent(currentUrl || BASE_URL);
  const titleEncoded = encodeURIComponent(pageTitle || 'KY Drywall & Steel Frame');
  const shareTextEncoded = encodeURIComponent(`Estou indicando a KY Drywall & Steel Frame: ${pageTitle || 'Construção a Seco em Curitiba'}`);
  const imageEncoded = encodeURIComponent(DEFAULT_SHARE_IMAGE);

  const shareLinks = [
    {
      name: 'WhatsApp',
      href: `https://api.whatsapp.com/send?text=${shareTextEncoded}%20${urlEncoded}`,
      color: 'bg-[#25D366] hover:brightness-110 text-white',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.18-.176.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.176.2-.301.3-.502.101-.2.05-.377-.025-.527-.075-.15-.677-1.631-.928-2.235-.245-.588-.493-.508-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.802.377-.276.301-1.053 1.03-1.053 2.511 0 1.482 1.079 2.912 1.23 3.113.15.2 2.124 3.244 5.147 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.78-.727 2.031-1.431.251-.703.251-1.306.175-1.431-.075-.126-.276-.201-.577-.351z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${urlEncoded}`,
      color: 'bg-[#1877F2] hover:brightness-110 text-white',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      href: `https://twitter.com/intent/tweet?text=${titleEncoded}&url=${urlEncoded}`,
      color: 'bg-slate-900 hover:brightness-110 text-white',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Pinterest',
      href: `https://pinterest.com/pin/create/button/?url=${urlEncoded}&media=${imageEncoded}&description=${titleEncoded}`,
      color: 'bg-[#E60023] hover:brightness-110 text-white',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.373-.056.235-.19.284-.438.171-1.636-.76-2.658-3.148-2.658-5.069 0-4.128 3.001-7.92 8.653-7.92 4.542 0 8.071 3.237 8.071 7.563 0 4.515-2.846 8.149-6.797 8.149-1.328 0-2.576-.69-3.003-1.506l-.818 3.119c-.296 1.137-1.099 2.563-1.637 3.435 1.205.372 2.483.573 3.81.573 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${urlEncoded}`,
      color: 'bg-[#0A66C2] hover:brightness-110 text-white',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Threads',
      href: `https://threads.net/intent/post?text=${shareTextEncoded}%20${urlEncoded}`,
      color: 'bg-black hover:brightness-110 text-white',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c2.72 0 5.187-.996 7.078-2.646l-1.391-1.442C16.143 19.336 14.167 20 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8c0 1.839-.523 3.636-1.566 5.093l1.637 1.157C21.365 16.488 22 14.301 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      )
    }
  ];

  const agents = [
    { name: 'Carlos', role: 'Engenharia & Obras', phone: '5541996457421' },
    { name: 'Lucilene', role: 'Vendas & CD', phone: '5541999067259' }
  ];

  const handleAgentClick = (phone: string, name: string) => {
    const msg = `Olá, ${name}! Acessei o site da KY Drywall (${currentUrl || BASE_URL}) e gostaria de cotação de materiais.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      {/* LEFT: SHARE ACTION */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-4">
        {/* Share Popup - Blueprint Style */}
        {isShareOpen && (
          <div className="w-72 sm:w-80 bg-white rounded-3xl border-2 border-slate-900 p-6 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#D31219]/10 flex items-center justify-center text-[#D31219]">
                  <Share2 size={20} />
                </div>
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-900 leading-none">Compartilhar</h4>
                  <p className="text-[10px] text-slate-400 mt-1">Sugerir para parceiros</p>
                </div>
              </div>
              <button
                onClick={() => setIsShareOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {shareLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${item.color} flex flex-col items-center justify-center p-3 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-sm`}
                  title={`Enviar via ${item.name}`}
                >
                  {item.icon}
                  <span className="text-[9px] font-bold mt-2 uppercase tracking-tight">{item.name}</span>
                </a>
              ))}
            </div>

            <button
              onClick={handleCopyLink}
              className={`w-full py-4 px-4 rounded-2xl border-2 font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 ${
                copied 
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-700' 
                  : 'bg-white border-slate-100 hover:border-slate-900 text-slate-900'
              }`}
            >
              {copied ? (
                <>
                  <Check size={16} />
                  <span>Copiado com Sucesso!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copiar Link da Página</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Share Trigger */}
        <button
          onClick={() => setIsShareOpen(!isShareOpen)}
          className="group relative flex items-center gap-3 bg-white border-2 border-slate-900 p-2 sm:p-3 rounded-full shadow-xl hover:bg-slate-50 transition-all active:scale-95"
          aria-label="Opções de compartilhamento"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900 flex items-center justify-center text-white">
            <Share2 size={20} className="group-hover:rotate-12 transition-transform" />
          </div>
          <span className="hidden sm:inline-block pr-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
            Compartilhar
          </span>
        </button>
      </div>

      {/* RIGHT: CONTACT ACTIONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {/* Back to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-900 flex items-center justify-center shadow-lg hover:border-slate-900 transition-all animate-in fade-in slide-in-from-bottom-2"
            title="Voltar ao topo"
          >
            <ChevronUp size={24} />
          </button>
        )}

        {/* WhatsApp Agents Menu */}
        {isWhatsAppOpen && (
          <div className="w-72 sm:w-80 bg-white rounded-3xl border-2 border-slate-900 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest leading-none">Consultores Online</h4>
                  <p className="text-[10px] text-slate-400 mt-1">Resposta em poucos minutos</p>
                </div>
              </div>
              <button 
                onClick={() => setIsWhatsAppOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="p-6 bg-slate-50 space-y-3">
              {agents.map((agent) => (
                <button
                  key={agent.name}
                  onClick={() => handleAgentClick(agent.phone, agent.name)}
                  className="w-full bg-white p-4 rounded-2xl border-2 border-slate-100 hover:border-[#D31219] flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#D31219] group-hover:text-white transition-all">
                      <User size={18} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-black text-slate-900 uppercase">{agent.name}</p>
                      <p className="text-[10px] font-bold text-slate-400">{agent.role}</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-slate-200 group-hover:text-[#D31219] group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>

            <div className="bg-white px-6 py-4 border-t border-slate-100 text-center">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Atendimento: 07:30 às 17:30</span>
            </div>
          </div>
        )}

        {/* Quick Contact Buttons */}
        <div className="flex items-center gap-2">
          {/* Call Button */}
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
            className="h-12 sm:h-14 px-6 bg-white border-2 border-slate-900 rounded-full flex items-center gap-3 shadow-xl hover:bg-slate-50 transition-all active:scale-95 group"
            title="Ligar para a loja"
          >
            <PhoneCall size={20} className="text-[#D31219] group-hover:animate-bounce" />
            <span className="hidden sm:inline-block text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Ligar Agora</span>
          </a>

          {/* WhatsApp Primary */}
          <button
            onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
            className="h-12 sm:h-14 px-6 bg-[#25D366] border-2 border-slate-900 rounded-full flex items-center gap-3 shadow-xl hover:brightness-110 transition-all active:scale-95 group"
            title="Abrir WhatsApp"
          >
            <MessageCircle size={22} className="text-white group-hover:rotate-12 transition-transform" />
            <div className="hidden sm:flex flex-col items-start leading-tight">
              <span className="text-[10px] font-black uppercase tracking-widest text-white">WhatsApp 24h</span>
              <span className="text-[8px] font-bold text-white/80 uppercase">Atendimento Local</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingActions;
