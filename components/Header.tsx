
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ShoppingCart, Phone, Mail } from 'lucide-react';
import { NAV_ITEMS, SITE_ASSETS, COMPANY_INFO } from '../constants';
import { QuoteItem } from '../types';
import QuoteDrawer from './QuoteDrawer';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteCount, setQuoteCount] = useState(0);

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

  return (
    <>
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
          <div className="hidden lg:block opacity-90">Entrega Rápida em Curitiba e RMC</div>
        </div>
      </div>
      
      <header className="sticky top-[32px] md:top-[36px] z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={SITE_ASSETS.logo} 
              alt="KY Drywall" 
              className="h-10 md:h-14 w-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x80?text=KY+DRYWALL';
              }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              item.label !== 'Nossos Produtos' && (
                <div key={item.label} className="relative group py-2">
                  <Link
                    to={item.path}
                    className="flex items-center gap-1 font-semibold text-gray-900 hover:text-[#D31219] transition-colors text-sm"
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} />}
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
              )
            ))}
          </nav>

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
            <button className="lg:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] md:top-[84px] z-[55] bg-white overflow-y-auto">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-bold text-gray-900 hover:text-[#D31219] transition-colors text-base py-3 border-b border-gray-100"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 flex flex-col gap-1 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-[#D31219] font-medium py-2"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/produtos"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-[#D31219] text-white font-bold text-center px-8 py-4 rounded-lg hover:bg-black transition-all text-sm shadow-md mt-4"
            >
              Nossos Produtos
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Vim do site e quero fazer um orçamento`}
              className="block bg-[#003366] text-white font-bold text-center px-8 py-4 rounded-lg hover:bg-black transition-all text-sm shadow-md mt-2"
            >
              WhatsApp - Orçamento
            </a>
          </nav>
        </div>
      )}

      <QuoteDrawer isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
};

export default Header;
