
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, ChevronRight, X, MessageCircle, Info } from 'lucide-react';
import { PRODUCTS, CATEGORIES, getRandomCTA, BASE_URL } from '../constants';
import ProductCard from '../components/ProductCard';
import SearchSuggestions from '../components/SearchSuggestions';
import EnhancedSEO from '../components/EnhancedSEO';

const ProductList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | 'Todos'>('Todos');
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc'>('name-asc');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [cta, setCta] = useState('');

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Catálogo de Produtos KY Drywall',
    description: 'Catálogo completo de materiais para Drywall, Steel Frame, placas, perfis, massas, fitas e acessórios',
    url: `${BASE_URL}/produtos`,
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.slice(0, 10).map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.image,
        brand: {
          '@type': 'Brand',
          name: product.specs.find(s => s.includes('Marca:'))?.replace('Marca: ', '') || 'KY Drywall'
        },
        category: product.category,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'BRL',
          seller: {
            '@type': 'Organization',
            name: 'KY Drywall & Steel Frame'
          }
        }
      }
    }))
  };

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
    <div className="bg-[#FDFDFD] min-h-screen pt-24 pb-20">
      <EnhancedSEO
        title="Catálogo de Materiais Drywall e Steel Frame | KY Drywall"
        description="Confira nosso catálogo completo: placas, perfis Barbieri, massas Holdflex e isolamentos Isover. Pronta entrega direto da BR-277 em Curitiba."
        keywords="produtos drywall curitiba, catálogo steel frame, placas drywall, perfis metálicos, massa holdflex, perfis barbieri, lã de pet, parafusos drywall, materiais construção seco"
        canonical={`${BASE_URL}/produtos`}
        ogType="website"
        schema={itemListSchema}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
      {/* Hero Section - Industrial Showroom */}
      <section className="bg-white py-20 md:py-32 text-slate-900 relative overflow-hidden border-b-2 border-slate-100">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-100"></div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-[#D31219] text-[10px] font-black uppercase tracking-[0.2em] bg-red-50 border border-red-100 px-4 py-2 rounded-full mb-10 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D31219]"></span>
              <span>01 — CATÁLOGO TÉCNICO</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.05] mb-10 text-slate-950">
              {selectedCategory === 'Todos' ? 'Materiais e Insumos' : selectedCategory}
            </h1>
            <p className="text-slate-600 text-lg sm:text-2xl leading-relaxed max-w-2xl font-medium mb-12">
              Trabalhamos com marcas homologadas (Barbieri, Holdflex, Isover) para garantir a conformidade técnica da sua obra.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="https://wa.me/5541996457421"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#D31219] text-white font-black px-10 py-5 rounded-2xl inline-flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] hover:bg-red-700 transition-all shadow-xl active:scale-[0.98]"
              >
                <MessageCircle size={20} />
                <span>Consultar Preços</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                <Info size={16} className="text-[#D31219]" />
                <span>{filteredProducts.length} itens catalogados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 sticky top-32 shadow-sm">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 rounded bg-[#D31219]/10 flex items-center justify-center text-[#D31219]">
                  <Filter size={16} />
                </div>
                <h3 className="font-black text-xs text-slate-900 uppercase tracking-widest">
                  Departamentos
                </h3>
              </div>
              
              <nav className="space-y-1.5">
                <button
                  onClick={() => setSelectedCategory('Todos')}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                    selectedCategory === 'Todos' 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>Todos os Materiais</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${selectedCategory === 'Todos' ? 'bg-white/20 text-white' : 'text-slate-400 bg-slate-100'}`}>
                    {PRODUCTS.length}
                  </span>
                </button>
                {CATEGORIES.map((cat) => {
                  const count = PRODUCTS.filter(p => p.category === cat).length;
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                        isSelected 
                          ? 'bg-slate-900 text-white shadow-md' 
                          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span className="truncate pr-2">{cat}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'text-slate-400 bg-slate-100'}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Info Box */}
              <div className="mt-8 p-5 bg-red-50 rounded-xl border border-red-100">
                <div className="flex items-center gap-2 mb-3 text-[#D31219]">
                  <Info size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Dica Técnica</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                  Não localizou o que precisa? Nossa loja física possui estoque de itens especiais sob consulta.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-grow">
            {/* Control Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm">
              <div className="relative w-full md:w-96" ref={searchRef}>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="O que você está procurando hoje?"
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold placeholder:text-slate-400 focus:outline-none focus:border-[#D31219] focus:bg-white transition-all shadow-inner"
                  value={searchTerm}
                  onFocus={() => setShowSuggestions(true)}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSuggestions(true);
                  }}
                />
                <SearchSuggestions suggestions={searchSuggestions} isVisible={showSuggestions} onSelect={() => setShowSuggestions(false)} />
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <button 
                  onClick={() => setIsSidebarOpen(true)}
                  className="lg:hidden flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest"
                >
                  <Filter size={16} /> Categorias
                </button>

                <select
                  className="w-full md:w-auto bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-[#D31219] text-slate-700 cursor-pointer hover:bg-white transition-colors"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                >
                  <option value="name-asc">Nome (A-Z)</option>
                  <option value="name-desc">Nome (Z-A)</option>
                </select>
              </div>
            </div>

            {/* Results Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white py-24 px-10 rounded-3xl text-center border-2 border-dashed border-slate-200">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={32} className="text-slate-300" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Sem resultados para sua busca</h3>
                <p className="text-slate-500 mb-8 max-w-sm mx-auto">Não encontramos nada para "{searchTerm}". Tente usar palavras-chave mais simples.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setSelectedCategory('Todos');}} 
                  className="bg-slate-900 text-white font-black px-8 py-4 rounded-xl text-xs uppercase tracking-widest hover:bg-black transition-all shadow-lg active:scale-95"
                >
                  Limpar Todos os Filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Filter */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950/80 lg:hidden backdrop-blur-sm flex flex-col justify-end">
          <div className="bg-white rounded-t-[40px] p-8 max-h-[85vh] overflow-y-auto shadow-2xl border-t border-slate-100">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em]">Categorias</h3>
              <button 
                onClick={() => setIsSidebarOpen(false)} 
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-3 pb-10">
              <button
                onClick={() => {setSelectedCategory('Todos'); setIsSidebarOpen(false);}}
                className={`text-left px-6 py-5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${selectedCategory === 'Todos' ? 'bg-[#D31219] text-white shadow-xl shadow-red-900/20' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
              >
                Todas as Categorias
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {setSelectedCategory(cat); setIsSidebarOpen(false);}}
                  className={`text-left px-6 py-5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${selectedCategory === cat ? 'bg-[#D31219] text-white shadow-xl shadow-red-900/20' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
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
