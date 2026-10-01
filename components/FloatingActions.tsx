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
        // Fallback
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
      color: 'bg-[#25D366] hover:bg-[#20ba59] text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.18-.176.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.176.2-.301.3-.502.101-.2.05-.377-.025-.527-.075-.15-.677-1.631-.928-2.235-.245-.588-.493-.508-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.802.377-.276.301-1.053 1.03-1.053 2.511 0 1.482 1.079 2.912 1.23 3.113.15.2 2.124 3.244 5.147 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.78-.727 2.031-1.431.251-.703.251-1.306.175-1.431-.075-.126-.276-.201-.577-.351z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${urlEncoded}`,
      color: 'bg-[#1877F2] hover:bg-[#166fe5] text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Twitter (X)',
      href: `https://twitter.com/intent/tweet?text=${titleEncoded}&url=${urlEncoded}`,
      color: 'bg-black hover:bg-slate-900 text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Pinterest',
      href: `https://pinterest.com/pin/create/button/?url=${urlEncoded}&media=${imageEncoded}&description=${titleEncoded}`,
      color: 'bg-[#E60023] hover:bg-[#cc001f] text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.373-.056.235-.19.284-.438.171-1.636-.76-2.658-3.148-2.658-5.069 0-4.128 3.001-7.92 8.653-7.92 4.542 0 8.071 3.237 8.071 7.563 0 4.515-2.846 8.149-6.797 8.149-1.328 0-2.576-.69-3.003-1.506l-.818 3.119c-.296 1.137-1.099 2.563-1.637 3.435 1.205.372 2.483.573 3.81.573 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${urlEncoded}`,
      color: 'bg-[#0A66C2] hover:bg-[#095196] text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Threads',
      href: `https://threads.net/intent/post?text=${shareTextEncoded}%20${urlEncoded}`,
      color: 'bg-zinc-900 hover:bg-black text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c2.72 0 5.187-.996 7.078-2.646l-1.391-1.442C16.143 19.336 14.167 20 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8c0 1.839-.523 3.636-1.566 5.093l1.637 1.157C21.365 16.488 22 14.301 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      )
    }
  ];

  const agents = [
    { name: 'Carlos', role: 'Vendas Técnicas & Obras', phone: '5541996457421' },
    { name: 'Lucilene', role: 'Atendimento & Cotações', phone: '5541999067259' }
  ];

  const handleAgentClick = (phone: string, name: string) => {
    const msg = `Olá, ${name}! Acessei o site da KY Drywall & Steel Frame (${currentUrl || BASE_URL}) e gostaria de solicitar um orçamento.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      {/* 1. CANTO INFERIOR ESQUERDO: BOTÃO DE COMPARTILHAMENTO */}
      <div className="fixed bottom-6 left-6 z-50">
        {/* Popup de Compartilhamento com efeito Glassmorphism */}
        {isShareOpen && (
          <div className="mb-3 w-72 sm:w-80 bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-700/80 p-4 shadow-2xl text-white animate-in fade-in slide-in-from-bottom-4 duration-200">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-red-950/60 text-[#D31219] border border-red-900/40">
                  <Share2 size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Compartilhar</h4>
                  <p className="text-[10px] text-slate-400">Divulgue esta página nas redes</p>
                </div>
              </div>
              <button
                onClick={() => setIsShareOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Fechar popup de compartilhamento"
              >
                <X size={16} />
              </button>
            </div>

            {/* Grid de Redes Sociais */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {shareLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${item.color} flex flex-col items-center justify-center p-2 rounded-xl transition-transform duration-200 hover:scale-105 shadow-md`}
                  title={`Compartilhar no ${item.name}`}
                >
                  <div className="mb-1">{item.icon}</div>
                  <span className="text-[10px] font-semibold tracking-tight">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Botão Copiar Link Semântico */}
            <button
              onClick={handleCopyLink}
              className={`w-full py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all duration-200 ${
                copied 
                  ? 'bg-emerald-600 border-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.4)]' 
                  : 'bg-slate-800 hover:bg-slate-750 border-slate-700 text-slate-200 hover:text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check size={14} className="text-white" />
                  <span>Link Copiado com Sucesso!</span>
                </>
              ) : (
                <>
                  <Copy size={14} className="text-slate-400" />
                  <span>Copiar Link da Página</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Botão Gatilho do Compartilhamento */}
        <button
          onClick={() => setIsShareOpen(!isShareOpen)}
          className="relative group bg-slate-900 hover:bg-slate-800 text-white p-3.5 rounded-full shadow-2xl border border-slate-700/80 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Compartilhar esta página"
          title="Compartilhar nas redes sociais"
        >
          {/* Efeito de pulso/brilho suave no fundo */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-600/30 to-blue-600/30 blur-sm group-hover:blur-md transition-all duration-300 animate-pulse"></span>
          
          <div className="relative flex items-center gap-2">
            <Share2 size={18} className="text-[#D31219] group-hover:text-red-400 transition-colors" />
            <span className="hidden sm:inline text-xs font-bold tracking-wide pr-1">
              Compartilhar
            </span>
          </div>
        </button>
      </div>

      {/* 2. CANTO INFERIOR DIREITO: CONTATO RÁPIDO & VOLTAR AO TOPO */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Botão Voltar ao Topo */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-slate-900/90 text-white hover:bg-[#D31219] p-2.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center border border-slate-700/60 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-2"
            title="Voltar ao topo da página"
            aria-label="Voltar ao topo"
          >
            <ChevronUp size={18} />
          </button>
        )}

        {/* Popup WhatsApp Agents (se aberto) */}
        {isWhatsAppOpen && (
          <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-200">
            <div className="bg-slate-900 px-4 py-3.5 text-white flex justify-between items-center border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-white">Atendimento WhatsApp</h4>
                  <p className="text-[10px] text-slate-400">KY Drywall & Steel Frame</p>
                </div>
              </div>
              <button 
                onClick={() => setIsWhatsAppOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded transition-colors"
                aria-label="Fechar janela"
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="p-3.5 space-y-2 bg-slate-50">
              {agents.map((agent) => (
                <button
                  key={agent.name}
                  onClick={() => handleAgentClick(agent.phone, agent.name)}
                  className="w-full bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between hover:border-[#D31219] hover:bg-red-50/20 transition-all group text-left shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 group-hover:bg-[#D31219] group-hover:text-white transition-colors">
                      <User size={15} />
                    </div>
                    <div>
                      <p className="font-bold text-xs text-slate-900">{agent.name}</p>
                      <p className="text-[10px] text-slate-500">{agent.role}</p>
                    </div>
                  </div>
                  <ChevronRight size={15} className="text-slate-400 group-hover:text-[#D31219] transition-colors" />
                </button>
              ))}
            </div>
            
            <div className="px-3.5 py-2 text-center text-[10px] text-slate-500 bg-white border-t border-slate-100 font-medium">
              Segunda a Sexta: 07:30 - 17:30 • Sábado: 07:30 - 12:00
            </div>
          </div>
        )}

        {/* Grupo de Ações de Contato Rápido (Ligar + WhatsApp 24h) */}
        <div className="flex items-center gap-2">
          {/* Botão Ligar Agora */}
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
            className="bg-gradient-to-r from-red-600 via-[#D31219] to-red-800 text-white px-3.5 py-3 rounded-full shadow-xl hover:shadow-[0_0_20px_rgba(211,18,25,0.4)] flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 group border border-red-500/40"
            title="Ligar agora para (41) 3528-4232"
            aria-label="Ligar Agora"
          >
            <PhoneCall size={18} className="animate-bounce shrink-0" />
            <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
              Ligar Agora
            </span>
          </a>

          {/* Botão WhatsApp 24h */}
          <button
            onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
            className="relative bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-[0_0_20px_rgba(34,197,94,0.45)] flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95 group border border-emerald-400/30"
            title="Falar no WhatsApp"
            aria-label="Atendimento no WhatsApp"
          >
            {/* Luz indicadora verde Online Agora */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>

            <MessageCircle size={20} className="shrink-0 transition-transform duration-300 group-hover:rotate-12" />

            <div className="hidden sm:flex flex-col items-start leading-none text-left">
              <span className="text-xs font-extrabold tracking-wide">WhatsApp 24h</span>
              <span className="text-[9px] font-medium text-emerald-100 opacity-90">Online Agora</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingActions;
