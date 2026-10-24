
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MessageCircle, PlusCircle, Check } from 'lucide-react';
import { Product, QuoteItem } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [added, setAdded] = useState(false);
  const whatsappMsg = `Olá, gostaria de consultar o preço do produto: ${product.name}`;
  const whatsappUrl = `https://wa.me/5541996457421?text=${encodeURIComponent(whatsappMsg)}`;

  const addToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const stored = localStorage.getItem('ky_quote_list');
    let list: QuoteItem[] = stored ? JSON.parse(stored) : [];
    
    const existingIndex = list.findIndex(item => item.productId === product.id);
    if (existingIndex > -1) {
      list[existingIndex].quantity += 1;
    } else {
      list.push({ productId: product.id, name: product.name, quantity: 1 });
    }
    
    localStorage.setItem('ky_quote_list', JSON.stringify(list));
    window.dispatchEvent(new CustomEvent('quote-updated'));
    
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="ky-card rounded-2xl overflow-hidden group flex flex-col h-full">
      {/* Image Wrapper */}
      <Link to={`/produto/${product.id}`} className="block relative overflow-hidden aspect-square bg-slate-50 border-b border-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          onError={(e) => (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/159306/construction-site-build-construction-structure-159306.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-slate-950/90 backdrop-blur-sm text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest border border-white/10">
            {product.category}
          </span>
        </div>
        
        {/* Quick Add Overlay */}
        <button
          onClick={addToQuote}
          title="Adicionar à cotação"
          className="absolute bottom-4 right-4 bg-white text-slate-900 p-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all hover:bg-[#D31219] hover:text-white duration-300 border border-slate-200"
        >
          {added ? <Check size={20} strokeWidth={3} className="text-emerald-600 group-hover:text-white" /> : <PlusCircle size={20} strokeWidth={2.5} />}
        </button>
      </Link>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <Link to={`/produto/${product.id}`} className="flex-grow group/title">
          <h3 className="text-slate-900 font-bold text-base md:text-lg leading-tight mb-3 group-hover/title:text-[#D31219] transition-colors line-clamp-2">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2 mb-6 text-[10px] text-slate-400 font-black uppercase tracking-widest">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span>Pronta Entrega Curitiba</span>
          </div>
        </Link>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <button
            onClick={addToQuote}
            className={`flex items-center justify-center gap-2 py-3 px-2 border rounded-xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-[0.95] ${
              added 
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                : 'text-slate-900 border-slate-200 hover:border-slate-300 bg-slate-50'
            }`}
          >
            {added ? 'Feito' : 'Cote+'}
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-2 bg-[#D31219] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-950 transition-all shadow-md active:scale-[0.95]"
          >
            <MessageCircle size={16} />
            Preço
          </a>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;
