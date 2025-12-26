
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Search } from 'lucide-react';

interface SearchSuggestionsProps {
  suggestions: Product[];
  isVisible: boolean;
  onSelect: () => void;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({ suggestions, isVisible, onSelect }) => {
  if (!isVisible || suggestions.length === 0) return null;

  return (
    <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[80] animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="p-2 border-b border-gray-50 bg-gray-50">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">Sugestões de produtos</span>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {suggestions.map((product) => (
          <Link
            key={product.id}
            to={`/produto/${product.id}`}
            onClick={onSelect}
            className="flex items-center gap-4 p-3 hover:bg-blue-50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow overflow-hidden">
              <h4 className="font-bold text-sm text-gray-800 truncate group-hover:text-[#003366] transition-colors">
                {product.name}
              </h4>
              <p className="text-[10px] text-gray-500">{product.category}</p>
            </div>
            <Search size={14} className="text-gray-300 group-hover:text-[#003366]" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchSuggestions;
