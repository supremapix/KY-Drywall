
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
    <div className="bg-white rounded-lg border border-slate-200 hover:border-[#D31219]/50 hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col h-full">
      {/* Image Wrapper */}
      <Link to={`/produto/${product.id}`} className="block relative overflow-hidden aspect-square bg-slate-50 border-b border-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="bg-slate-900 text-white text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        
        {/* Quick Add Overlay */}
        <button
          onClick={addToQuote}
          title="Adicionar à cotação rápida"
          className="absolute bottom-3 right-3 bg-white text-slate-800 p-2.5 rounded shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all hover:bg-[#D31219] hover:text-white duration-200 border border-slate-200"
        >
          {added ? <Check size={18} strokeWidth={2.5} className="text-emerald-600 group-hover:text-white" /> : <PlusCircle size={18} strokeWidth={2} />}
        </button>
      </Link>

      {/* Content */}
      <div className="p-4 md:p-5 flex flex-col flex-grow">
        <Link to={`/produto/${product.id}`} className="flex-grow">
          <h3 className="text-slate-900 font-semibold text-sm md:text-base leading-snug mb-2 group-hover:text-[#D31219] transition-colors line-clamp-2">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2 mb-4 text-[11px] text-slate-500 font-medium">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Estoque Curitiba & Região</span>
          </div>
        </Link>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto pt-2">
          <button
            onClick={addToQuote}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-2 border rounded text-[11px] font-semibold tracking-wide transition-colors ${
              added 
                ? 'bg-emerald-50 text-emerald-700 border-emerald-300' 
                : 'text-slate-700 border-slate-200 hover:border-[#D31219] hover:text-[#D31219] hover:bg-red-50/20'
            }`}
          >
            {added ? 'Adicionado' : 'Cotação'}
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#D31219] text-white rounded text-[11px] font-semibold tracking-wide hover:bg-slate-900 transition-colors shadow-sm"
          >
            <MessageCircle size={14} />
            Consultar
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
