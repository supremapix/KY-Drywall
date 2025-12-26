
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, ChevronRight, X, MessageCircle, Info } from 'lucide-react';
import { PRODUCTS, CATEGORIES, getRandomCTA } from '../constants';
import ProductCard from '../components/ProductCard';
import SearchSuggestions from '../components/SearchSuggestions';

const ProductList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | 'Todos'>('Todos');
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc'>('name-asc');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [cta, setCta] = useState('');

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) setSelectedCategory(cat);
    setCta(getRandomCTA());
  }, [searchParams]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      return 0;
    });
  }, [searchTerm, selectedCategory, sortBy]);

  const searchSuggestions = useMemo(() => {
    if (searchTerm.length < 2) return [];
    return PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 6);
  }, [searchTerm]);

  return (
    <div className="bg-gray-50 min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4">
        
        {/* Banner de Categoria (Impactante) */}
        <div className="bg-[#003366] rounded-[3rem] p-12 mb-16 relative overflow-hidden text-white shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <Info size={200} />
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className="bg-[#D31219] text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em] mb-6 inline-block">
              Estoque Imediato Curitiba
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
              {selectedCategory === 'Todos' ? 'Catálogo Completo de Materiais' : selectedCategory}
            </h1>
            <p className="text-lg text-gray-300 font-medium mb-10 italic">
              "Qualidade técnica comprovada para obras residenciais e comerciais. Não feche sua obra em Curitiba sem consultar nossos especialistas."
            </p>
            <a 
              href="https://wa.me/5541996457421" 
              className="bg-white text-[#003366] font-black px-10 py-5 rounded-2xl flex items-center justify-center gap-4 text-xs uppercase tracking-widest hover:bg-[#D31219] hover:text-white transition-all shadow-xl w-fit"
            >
              <MessageCircle size={20} />
              {cta}
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 sticky top-28">
              <h3 className="font-black text-xl text-gray-900 mb-8 border-b-2 border-[#D31219] pb-4 uppercase tracking-tighter flex items-center gap-2">
                <Filter size={20} className="text-[#D31219]" /> Departamentos
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedCategory('Todos')}
                  className={`w-full text-left px-5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                    selectedCategory === 'Todos' 
                      ? 'bg-[#003366] text-white shadow-lg' 
                      : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  Ver Todos os Produtos
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                      selectedCategory === cat 
                        ? 'bg-[#003366] text-white shadow-lg' 
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-[2rem] shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="relative w-full md:w-96" ref={searchRef}>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Pesquise por placa, perfil, massa..."
                  className="w-full pl-12 pr-10 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#003366]/5 transition-all text-sm font-semibold"
                  value={searchTerm}
                  onFocus={() => setShowSuggestions(true)}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSuggestions(true);
                  }}
                />
                <SearchSuggestions suggestions={searchSuggestions} isVisible={showSuggestions} onSelect={() => setShowSuggestions(false)} />
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto">
                <button 
                  onClick={() => setIsSidebarOpen(true)}
                  className="lg:hidden flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-[#1A1A1A] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest"
                >
                  <Filter size={18} /> Filtrar
                </button>

                <select
                  className="w-full md:w-auto bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-[10px] font-black uppercase tracking-widest focus:outline-none focus:ring-4 focus:ring-[#003366]/5"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                >
                  <option value="name-asc">Ordem Alfabética (A-Z)</option>
                  <option value="name-desc">Ordem Alfabética (Z-A)</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-20 rounded-[4rem] text-center border-2 border-dashed border-gray-100">
                <Search size={60} className="text-gray-200 mx-auto mb-8" />
                <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">Produto não encontrado</h3>
                <p className="text-gray-400 font-medium mb-10">Tente buscar por termos genéricos como "placa", "perfil" ou "holdflex".</p>
                <button onClick={() => {setSearchTerm(''); setSelectedCategory('Todos');}} className="bg-[#003366] text-white font-black px-12 py-5 rounded-2xl text-[10px] uppercase tracking-widest shadow-xl">Limpar Todos os Filtros</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Filter */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 lg:hidden backdrop-blur-sm">
          <div className="absolute bottom-0 left-0 w-full bg-white rounded-t-[3rem] p-10 animate-in slide-in-from-bottom duration-500 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-10 border-b pb-6">
              <h3 className="text-2xl font-black uppercase tracking-tighter">Escolher Categoria</h3>
              <button onClick={() => setIsSidebarOpen(false)} className="bg-gray-100 p-3 rounded-full text-gray-500"><X size={24} /></button>
            </div>
            
            <div className="grid grid-cols-1 gap-4 pb-10">
              <button
                onClick={() => {setSelectedCategory('Todos'); setIsSidebarOpen(false);}}
                className={`text-left px-8 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${selectedCategory === 'Todos' ? 'bg-[#003366] text-white shadow-xl' : 'bg-gray-50 text-gray-500'}`}
              >
                Todas as Categorias
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {setSelectedCategory(cat); setIsSidebarOpen(false);}}
                  className={`text-left px-8 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${selectedCategory === cat ? 'bg-[#003366] text-white shadow-xl' : 'bg-gray-50 text-gray-500'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
