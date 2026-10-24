
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ShoppingCart, Phone, Mail, Home, Building2, Wrench, Package, MessageCircle, BookOpen, MapPin, HelpCircle } from 'lucide-react';
import { NAV_ITEMS, SITE_ASSETS, COMPANY_INFO } from '../constants';
import { QuoteItem } from '../types';
import QuoteDrawer from './QuoteDrawer';

const MENU_ICONS: Record<string, React.ReactNode> = {
  'Início': <Home size={18} />,
  'A Empresa': <Building2 size={18} />,
  'Serviços': <Wrench size={18} />,
  'Nossos Produtos': <Package size={18} />,
  'Contato': <MessageCircle size={18} />,
  'Blog': <BookOpen size={18} />,
  'Perguntas Frequentes': <HelpCircle size={18} />,
  'Mapa do Site': <MapPin size={18} />,
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteCount, setQuoteCount] = useState(0);
  const location = useLocation();

  const updateCount = () => {
    const stored = localStorage.getItem('ky_quote_list');
    if (stored) {
      const list: QuoteItem[] = JSON.parse(stored);
      setQuoteCount(list.length);
    } else {
      setQuoteCount(0);
    }
  };

  useEffect(() => {
    updateCount();
    window.addEventListener('quote-updated', updateCount);
    return () => window.removeEventListener('quote-updated', updateCount);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setExpandedItem(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const allNavItems = [
    ...NAV_ITEMS,
    { label: 'Blog', path: '/blog' },
    { label: 'Perguntas Frequentes', path: '/faq' },
    { label: 'Mapa do Site', path: '/sitemap' },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#D31219] text-white py-2 px-4 sticky top-0 z-[60] border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-bold uppercase tracking-wider">
          <div className="flex items-center gap-4 md:gap-8">
            <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-slate-200 transition-colors">
              <Phone size={14} />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hidden sm:flex items-center gap-2 hover:text-slate-200 transition-colors">
              <Mail size={14} />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
          <div className="hidden lg:block opacity-90 text-xs">Atendimento Técnico & Entrega Rápida — Curitiba e RMC</div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-[36px] z-50 bg-white shadow-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#D31219] rounded-md" onClick={() => setIsMenuOpen(false)}>
            <img
              src={SITE_ASSETS.logo}
              alt="KY Drywall & Steel Frame"
              className="h-10 md:h-14 w-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x80?text=KY+DRYWALL';
              }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) =>
              item.label !== 'Nossos Produtos' ? (
                <div key={item.label} className="relative group py-2">
                  <Link
                    to={item.path}
                    className="flex items-center gap-1 font-bold text-slate-800 hover:text-[#D31219] transition-colors text-sm uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-[#D31219] rounded px-1"
                  >
                    {item.label}
                    {item.children && <ChevronRight size={14} className="rotate-90 text-slate-400 group-hover:text-[#D31219]" />}
                  </Link>
                  {item.children && (
                    <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-64 border-t-2 border-[#D31219] border-x border-b border-slate-200">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="block px-4 py-2.5 text-xs text-slate-700 hover:bg-slate-50 hover:text-[#D31219] font-bold"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : null
            )}
            <Link
              to="/blog"
              className="font-bold text-slate-800 hover:text-[#D31219] transition-colors text-sm uppercase tracking-wide"
            >
              Blog
            </Link>
            <Link
              to="/faq"
              className="font-bold text-slate-800 hover:text-[#D31219] transition-colors text-sm uppercase tracking-wide"
            >
              FAQ
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <button 
              onClick={() => setIsQuoteOpen(true)} 
              className="relative min-h-[48px] px-3 py-2 text-slate-800 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D31219]"
              title="Lista de cotação"
              aria-label="Acessar lista de cotação"
            >
              <ShoppingCart size={20} className="text-[#D31219]" />
              <span className="hidden sm:inline text-xs font-bold text-slate-800 uppercase tracking-wider">Cotação</span>
              {quoteCount > 0 && (
                <span className="bg-[#D31219] text-white text-xs font-extrabold px-2 py-0.5 rounded-full min-w-[20px] text-center">
                  {quoteCount}
                </span>
              )}
            </button>
            <Link to="/produtos" className="hidden md:inline-flex items-center gap-2 bg-[#D31219] text-white font-bold px-5 py-3 rounded text-xs uppercase tracking-wider hover:bg-slate-900 transition-colors shadow-sm min-h-[48px]">
              Catálogo de Produtos
            </Link>
            
            {/* Mobile Menu Button - Minimum 56x56px with "MENU" text */}
            <button
              className="lg:hidden min-w-[56px] min-h-[56px] bg-[#D31219] text-white font-bold px-3 py-2 rounded-lg hover:bg-slate-900 transition-colors flex items-center justify-center gap-2 shadow-md focus:outline-none focus:ring-2 focus:ring-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              <span className="text-xs font-black uppercase tracking-wider">MENU</span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Drawer - Demo Proposal (Light Version) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-white text-slate-900 w-full h-full overflow-y-auto flex flex-col animate-in fade-in slide-in-from-bottom duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
        >
          {/* Menu Top Bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-white sticky top-0 z-10 shadow-sm">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
              <img src={SITE_ASSETS.logo} alt="KY Drywall" className="h-10 w-auto" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="min-w-[56px] min-h-[56px] flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-black text-sm uppercase transition-all border border-slate-200 active:scale-95"
              aria-label="FECHAR menu"
            >
              <X size={24} />
              <span>FECHAR</span>
            </button>
          </div>

          {/* Quick Call & WhatsApp Buttons in Menu Header */}
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D31219] mb-5 text-center">Atendimento Rápido Balcão & Obras</p>
            <div className="grid grid-cols-1 gap-4">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="flex items-center justify-center gap-4 bg-slate-900 hover:bg-slate-800 text-white font-black py-5 px-6 rounded-2xl text-lg transition-all min-h-[64px] shadow-lg active:scale-[0.98]"
              >
                <Phone size={22} />
                <span>Ligar (41) 3528-4232</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 bg-[#D31219] hover:bg-red-700 text-white font-black py-5 px-6 rounded-2xl text-lg transition-all min-h-[64px] shadow-lg active:scale-[0.98]"
              >
                <MessageCircle size={22} />
                <span>WhatsApp Orçamentos</span>
              </a>
            </div>
          </div>

          {/* Nav Links list - High Contrast & Large Touch Targets */}
          <nav className="flex-1 py-6 bg-white">
            {allNavItems.map((item) => {
              const isActive = location.pathname === item.path;
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = expandedItem === item.label;

              return (
                <div key={item.label} className="border-b border-slate-50">
                  {hasChildren ? (
                    <div>
                      <button
                        onClick={() => setExpandedItem(isExpanded ? null : item.label)}
                        className={`w-full min-h-[72px] px-8 flex items-center justify-between text-left transition-all ${
                          isActive ? 'bg-red-50 text-[#D31219] font-black' : 'text-slate-800 hover:bg-slate-50 font-bold'
                        }`}
                        aria-expanded={isExpanded}
                      >
                        <div className="flex items-center gap-5">
                          <span className={isActive ? 'text-[#D31219]' : 'text-slate-400'}>
                            {MENU_ICONS[item.label] || <ChevronRight size={24} />}
                          </span>
                          <span className="text-xl sm:text-2xl">{item.label}</span>
                        </div>
                        <ChevronRight
                          size={24}
                          className={`text-slate-400 transition-transform duration-300 ${
                            isExpanded ? 'rotate-90 text-[#D31219]' : ''
                          }`}
                        />
                      </button>

                      {/* Accordion sub-items */}
                      {isExpanded && (
                        <div className="bg-slate-50/80 border-l-[6px] border-[#D31219] py-3">
                          <Link
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-10 py-4 text-base font-black text-[#D31219] uppercase tracking-widest hover:bg-white min-h-[56px] flex items-center"
                          >
                            Ver Todos os {item.label}
                          </Link>
                          {item.children!.map((child) => (
                            <Link
                              key={child.label}
                              to={child.path}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-10 py-4 text-lg font-bold text-slate-600 hover:text-slate-950 hover:bg-white min-h-[56px] flex items-center border-t border-slate-200/40"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`min-h-[72px] px-8 flex items-center gap-5 transition-all ${
                        isActive ? 'bg-red-50 text-[#D31219] font-black' : 'text-slate-800 hover:bg-slate-50 font-bold'
                      }`}
                    >
                      <span className={isActive ? 'text-[#D31219]' : 'text-slate-400'}>
                        {MENU_ICONS[item.label] || <ChevronRight size={24} />}
                      </span>
                      <span className="text-xl sm:text-2xl">{item.label}</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Menu Footer Info */}
          <div className="p-8 bg-slate-50 border-t border-slate-100 text-center">
            <p className="text-sm font-black text-slate-900 mb-2 uppercase tracking-widest">KY Drywall & Steel Frame</p>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">{COMPANY_INFO.address}</p>
          </div>
        </div>
      )}

      <QuoteDrawer isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
};

export default Header;
