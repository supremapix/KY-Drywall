
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
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-3 transition-all duration-500 border border-gray-100 overflow-hidden group flex flex-col h-full active:scale-[0.98]">
      {/* Image Wrapper */}
      <Link to={`/produto/${product.id}`} className="block relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-[#1A1A1A] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            {product.category}
          </span>
        </div>
        
        {/* Quick Add Overlay */}
        <button
          onClick={addToQuote}
          className="absolute bottom-4 right-4 bg-white text-[#D31219] p-3 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all hover:bg-[#D31219] hover:text-white duration-300"
        >
          {added ? <Check size={20} strokeWidth={3} /> : <PlusCircle size={20} strokeWidth={3} />}
        </button>
      </Link>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <Link to={`/produto/${product.id}`} className="flex-grow">
          <h3 className="text-gray-900 font-bold text-base md:text-lg mb-2 group-hover:text-[#D31219] transition-colors line-clamp-2">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-1 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < 4 ? "text-[#D31219] fill-[#D31219]" : "text-gray-200"} 
                />
              ))}
            </div>
            <span className="text-[10px] font-bold text-gray-400 ml-1">Rated 5.0</span>
          </div>
        </Link>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <button
            onClick={addToQuote}
            className={`flex items-center justify-center gap-1 py-3 px-2 border-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${added ? 'bg-green-50 text-green-600 border-green-200' : 'text-gray-800 border-gray-100 hover:border-[#D31219] hover:text-[#D31219]'}`}
          >
            {added ? 'Salvo' : 'Cotar'}
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-2 bg-[#D31219] text-white rounded-xl text-[10px] font-black uppercase tracking-wider hover:bg-[#1A1A1A] transition-all shadow-md"
          >
            <MessageCircle size={14} />
            Preço
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
