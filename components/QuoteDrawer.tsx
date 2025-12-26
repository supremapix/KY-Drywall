
import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, Trash2, Plus, Minus, MessageCircle, ArrowRight, PackageOpen } from 'lucide-react';
import { QuoteItem, Product } from '../types';
import { PRODUCTS } from '../constants';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteDrawer: React.FC<QuoteDrawerProps> = ({ isOpen, onClose }) => {
  const [items, setItems] = useState<QuoteItem[]>([]);

  const loadItems = () => {
    const stored = localStorage.getItem('ky_quote_list');
    if (stored) {
      setItems(JSON.parse(stored));
    } else {
      setItems([]);
    }
  };

  useEffect(() => {
    loadItems();
    const handleUpdate = () => loadItems();
    window.addEventListener('quote-updated', handleUpdate);
    return () => window.removeEventListener('quote-updated', handleUpdate);
  }, []);

  const updateQuantity = (productId: string, delta: number) => {
    const newList = items.map(item => {
      if (item.productId === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    saveItems(newList);
  };

  const removeItem = (productId: string) => {
    const newList = items.filter(item => item.productId !== productId);
    saveItems(newList);
  };

  const clearQuote = () => {
    saveItems([]);
  };

  const saveItems = (newList: QuoteItem[]) => {
    localStorage.setItem('ky_quote_list', JSON.stringify(newList));
    setItems(newList);
    window.dispatchEvent(new CustomEvent('quote-updated'));
  };

  const sendToWhatsApp = () => {
    if (items.length === 0) return;

    const messageHeader = "*SOLICITAÇÃO DE ORÇAMENTO - KY DRYWALL*\n\nOlá! Gostaria de uma cotação para os seguintes materiais:\n\n";
    const messageBody = items.map((item, index) => {
      return `${index + 1}. *${item.name}* \n   📦 Quantidade: ${item.quantity}\n`;
    }).join('\n');
    
    const messageFooter = "\n\nFavor informar disponibilidade e condições de pagamento.";
    const fullMessage = encodeURIComponent(messageHeader + messageBody + messageFooter);
    
    window.open(`https://wa.me/5541996457421?text=${fullMessage}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
        {/* Header */}
        <div className="p-6 bg-[#003366] text-white flex justify-between items-center shadow-lg">
          <div className="flex items-center gap-3">
            <ShoppingCart size={24} className="text-[#D31219]" />
            <div>
              <h2 className="text-xl font-black uppercase tracking-tighter">Minha Cotação</h2>
              <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{items.length} itens selecionados</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {items.length > 0 ? (
            <>
              {items.map((item) => {
                const product = PRODUCTS.find(p => p.id === item.productId);
                return (
                  <div 
                    key={item.productId}
                    className="flex gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 group hover:border-[#D31219] transition-all"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-white border border-gray-100 flex-shrink-0">
                      <img 
                        src={product?.image || 'https://via.placeholder.com/150'} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="text-xs font-black text-gray-900 uppercase tracking-tight mb-2 line-clamp-2">
                        {item.name}
                      </h4>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-1">
                          <button 
                            onClick={() => updateQuantity(item.productId, -1)}
                            className="p-1 hover:text-[#D31219] transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-xs font-black min-w-[20px] text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.productId, 1)}
                            className="p-1 hover:text-[#D31219] transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeItem(item.productId)}
                          className="text-gray-300 hover:text-red-500 transition-colors p-2"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              <button 
                onClick={clearQuote}
                className="w-full text-center py-2 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-[#D31219] transition-colors"
              >
                Limpar toda a lista
              </button>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
              <div className="bg-gray-100 p-8 rounded-full">
                <PackageOpen size={64} className="text-gray-300" />
              </div>
              <div>
                <h3 className="text-xl font-black uppercase text-gray-400">Sua lista está vazia</h3>
                <p className="text-sm text-gray-400 max-w-[200px] mx-auto mt-2">Navegue por nossos produtos e adicione itens para cotação.</p>
              </div>
              <button 
                onClick={onClose}
                className="bg-[#003366] text-white px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl hover:bg-[#D31219] transition-all"
              >
                Ver Produtos
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 bg-gray-50 border-t border-gray-200 space-y-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Total de Itens</span>
              <span className="text-lg font-black text-[#003366]">
                {items.reduce((acc, curr) => acc + curr.quantity, 0)} un
              </span>
            </div>
            
            <button 
              onClick={sendToWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 shadow-2xl transition-all uppercase tracking-widest text-xs group"
            >
              <MessageCircle size={24} />
              Pedir Cotação WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-[9px] text-center text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
              Enviaremos sua lista completa para <br/>nossa equipe comercial via WhatsApp.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteDrawer;
