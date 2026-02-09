
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ShoppingCart, Phone, Mail, Home, Building2, Wrench, Package, MessageCircle, BookOpen, MapPin } from 'lucide-react';
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
    { label: 'Mapa do Site', path: '/sitemap' },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#D31219] text-white py-2 px-4 sticky top-0 z-[60] border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center text-[9px] md:text-[11px] font-black uppercase tracking-widest">
          <div className="flex items-center gap-4 md:gap-8">
            <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-black transition-colors">
              <Phone size={12} />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hidden sm:flex items-center gap-2 hover:text-black transition-colors">
              <Mail size={12} />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
          <div className="hidden lg:block opacity-90">Entrega Rapida em Curitiba e RMC</div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-[32px] md:top-[36px] z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <img
              src={SITE_ASSETS.logo}
              alt="KY Drywall"
              className="h-10 md:h-14 w-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x80?text=KY+DRYWALL';
              }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) =>
              item.label !== 'Nossos Produtos' ? (
                <div key={item.label} className="relative group py-2">
                  <Link
                    to={item.path}
                    className="flex items-center gap-1 font-semibold text-gray-900 hover:text-[#D31219] transition-colors text-sm"
                  >
                    {item.label}
                    {item.children && <ChevronRight size={14} className="rotate-90" />}
                  </Link>
                  {item.children && (
                    <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-64 border-t-2 border-[#D31219]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#D31219] font-medium"
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
              className="font-semibold text-gray-900 hover:text-[#D31219] transition-colors text-sm"
            >
              Blog
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-6">
            <button onClick={() => setIsQuoteOpen(true)} className="relative p-2.5 text-[#003366] rounded-full hover:bg-gray-100">
              <ShoppingCart size={22} />
              {quoteCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#D31219] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {quoteCount}
                </span>
              )}
            </button>
            <Link to="/produtos" className="hidden md:block bg-[#D31219] text-white font-bold px-8 py-3 rounded-lg hover:bg-black transition-all text-sm shadow-md">
              Nossos Produtos
            </Link>
            <button
              className="lg:hidden text-gray-900 p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-white z-[56] lg:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header do menu */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500"
            aria-label="Fechar menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Itens do menu */}
        <nav className="py-2">
          {allNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedItem === item.label;

            return (
              <div key={item.label}>
                <div className="flex items-center">
                  {hasChildren ? (
                    <button
                      onClick={() => setExpandedItem(isExpanded ? null : item.label)}
                      className={`flex items-center gap-3 w-full px-5 py-3.5 text-left transition-colors ${
                        isActive
                          ? 'bg-red-50 text-[#D31219] font-bold'
                          : 'text-gray-800 hover:bg-gray-50 font-medium'
                      }`}
                    >
                      <span className={`flex-shrink-0 ${isActive ? 'text-[#D31219]' : 'text-gray-400'}`}>
                        {MENU_ICONS[item.label] || <ChevronRight size={18} />}
                      </span>
                      <span className="text-sm flex-1">{item.label}</span>
                      <ChevronRight
                        size={16}
                        className={`text-gray-400 transition-transform duration-200 ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 w-full px-5 py-3.5 transition-colors ${
                        isActive
                          ? 'bg-red-50 text-[#D31219] font-bold'
                          : 'text-gray-800 hover:bg-gray-50 font-medium'
                      }`}
                    >
                      <span className={`flex-shrink-0 ${isActive ? 'text-[#D31219]' : 'text-gray-400'}`}>
                        {MENU_ICONS[item.label] || <ChevronRight size={18} />}
                      </span>
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  )}
                </div>

                {/* Sub-menu items */}
                {hasChildren && isExpanded && (
                  <div className="bg-gray-50 border-l-2 border-[#D31219] ml-5">
                    <Link
                      to={item.path}
                      className="block px-5 py-2.5 text-xs font-bold text-[#D31219] uppercase tracking-wider hover:bg-gray-100 border-b border-gray-100"
                    >
                      Ver Todos os {item.label}
                    </Link>
                    {item.children!.map((child) => {
                      const isChildActive = location.pathname === child.path;
                      return (
                        <Link
                          key={child.label}
                          to={child.path}
                          className={`block px-5 py-2.5 text-xs transition-colors ${
                            isChildActive
                              ? 'text-[#D31219] font-bold bg-red-50/50'
                              : 'text-gray-600 hover:text-[#D31219] hover:bg-gray-100 font-medium'
                          }`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Separador */}
        <div className="mx-5 my-2 border-t border-gray-100" />

        {/* CTA Produtos */}
        <div className="px-5 py-3">
          <Link
            to="/produtos"
            className="flex items-center justify-center gap-2 w-full bg-[#D31219] text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors text-sm shadow-md"
          >
            <Package size={18} />
            Ver Todos os Produtos
          </Link>
        </div>

        {/* WhatsApp CTA */}
        <div className="px-5 pb-3">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors text-sm shadow-md"
          >
            <Phone size={18} />
            Fale pelo WhatsApp
          </a>
        </div>

        {/* Contatos rapidos */}
        <div className="px-5 py-4 bg-gray-50 border-t border-gray-100 mt-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Contato Direto</p>
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-2 text-xs text-gray-600 hover:text-[#D31219] mb-2 font-medium"
          >
            <Phone size={14} className="text-gray-400" />
            {COMPANY_INFO.phone}
          </a>
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="flex items-center gap-2 text-xs text-gray-600 hover:text-[#D31219] font-medium"
          >
            <Mail size={14} className="text-gray-400" />
            {COMPANY_INFO.email}
          </a>
        </div>
      </div>

      <QuoteDrawer isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
};

export default Header;
