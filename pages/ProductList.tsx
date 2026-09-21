
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
    <div className="bg-gray-50 min-h-screen py-8 md:py-12">
      <EnhancedSEO
        title="Produtos - Catálogo Completo"
        description="Catálogo completo de materiais para Drywall e Steel Frame. Placas, perfis, massas, fitas, parafusos, lã de isolamento e acessórios. Marcas Barbieri, Holdflex, Isover. Pronta entrega em Curitiba."
        keywords="produtos drywall curitiba, catálogo steel frame, placas drywall, perfis metálicos, massa holdflex, perfis barbieri, lã de pet, parafusos drywall, materiais construção seco"
        canonical={`${BASE_URL}/produtos`}
        ogType="website"
        schema={itemListSchema}
      />
      <div className="container mx-auto px-4">
        
        {/* Banner de Categoria */}
        <div className="bg-slate-900 rounded-lg p-8 sm:p-12 mb-10 relative overflow-hidden text-white border border-slate-800">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D31219]/20 border border-[#D31219]/30 text-[#D31219] text-xs font-semibold uppercase tracking-wider mb-4">
              Estoque Imediato em Curitiba
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-white">
              {selectedCategory === 'Todos' ? 'Catálogo Geral de Materiais' : selectedCategory}
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Placas, perfis metálicos estruturais, massas de tratamento de juntas e isolamentos termoacústicos homologados para obras residenciais e corporativas.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="https://wa.me/5541996457421?text=Olá! Gostaria de uma cotação com base no catálogo de materiais."
                target="_blank"
                rel="noreferrer"
                className="bg-[#D31219] text-white font-semibold px-6 py-3 rounded flex items-center gap-2 text-xs uppercase tracking-wider hover:bg-red-700 transition-colors shadow-sm"
              >
                <MessageCircle size={16} />
                Solicitar Cotação Rápida
              </a>
              <span className="text-xs text-slate-400">
                {filteredProducts.length} itens disponíveis
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white p-5 rounded-lg border border-slate-200 sticky top-28">
              <h3 className="font-bold text-xs text-slate-900 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wider flex items-center gap-2">
                <Filter size={14} className="text-[#D31219]" />
                Departamentos
              </h3>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory('Todos')}
                  className={`w-full text-left px-3 py-2 rounded text-xs font-medium transition-colors flex items-center justify-between ${
                    selectedCategory === 'Todos' 
                      ? 'bg-slate-900 text-white font-semibold' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>Todos os Produtos</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${selectedCategory === 'Todos' ? 'bg-white/20 text-white' : 'text-slate-400 bg-slate-100'}`}>
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
                      className={`w-full text-left px-3 py-2 rounded text-xs font-medium transition-colors flex items-center justify-between ${
                        isSelected 
                          ? 'bg-slate-900 text-white font-semibold' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span className="truncate pr-2">{cat}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'text-slate-400 bg-slate-100'}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Toolbar */}
            <div className="bg-white p-3.5 rounded-lg border border-slate-200 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-80" ref={searchRef}>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="text"
                  placeholder="Buscar placa, perfil, fita..."
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded text-xs font-medium focus:outline-none focus:border-slate-400 transition-colors"
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
                  className="lg:hidden flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 text-white rounded text-xs font-semibold"
                >
                  <Filter size={14} /> Filtrar
                </button>

                <select
                  className="w-full md:w-auto bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs font-medium focus:outline-none focus:border-slate-400 text-slate-700"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                >
                  <option value="name-asc">Ordenar por Nome (A-Z)</option>
                  <option value="name-desc">Ordenar por Nome (Z-A)</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-lg text-center border border-slate-200">
                <Search size={40} className="text-slate-300 mx-auto mb-4" />
                <h3 className="text-base font-bold text-slate-900 mb-1">Nenhum produto localizado</h3>
                <p className="text-slate-500 text-xs mb-6">Tente buscar por termos genéricos como "placa", "perfil" ou "massa".</p>
                <button 
                  onClick={() => {setSearchTerm(''); setSelectedCategory('Todos');}} 
                  className="bg-slate-900 text-white font-semibold px-5 py-2.5 rounded text-xs hover:bg-slate-800 transition-colors"
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
        <div className="fixed inset-0 z-[100] bg-slate-950/60 lg:hidden backdrop-blur-xs flex flex-col justify-end">
          <div className="bg-white rounded-t-xl p-6 max-h-[80vh] overflow-y-auto border-t border-slate-200">
            <div className="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Filtrar por Categoria</h3>
              <button onClick={() => setIsSidebarOpen(false)} className="p-1 rounded text-slate-500 hover:text-slate-900"><X size={20} /></button>
            </div>
            
            <div className="grid grid-cols-1 gap-2 pb-6">
              <button
                onClick={() => {setSelectedCategory('Todos'); setIsSidebarOpen(false);}}
                className={`text-left px-4 py-3 rounded text-xs font-semibold transition-colors ${selectedCategory === 'Todos' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}
              >
                Todas as Categorias
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {setSelectedCategory(cat); setIsSidebarOpen(false);}}
                  className={`text-left px-4 py-3 rounded text-xs font-semibold transition-colors ${selectedCategory === cat ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}
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
