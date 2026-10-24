
import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, Trash2, Plus, Minus, MessageCircle, ArrowRight, PackageOpen } from 'lucide-react';
import { QuoteItem, Product } from '../types';
import { PRODUCTS, COMPANY_INFO } from '../constants';

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

    const messageHeader = "*SOLICITAÇÃO DE COTAÇÃO - KY DRYWALL*\n\nOlá! Gostaria de um orçamento para os seguintes itens:\n\n";
    const messageBody = items.map((item, index) => {
      return `${index + 1}. *${item.name}* (Quantidade: ${item.quantity})`;
    }).join('\n');
    
    const messageFooter = "\n\nPor gentileza, informar preços, disponibilidade e condições de entrega.";
    const fullMessage = encodeURIComponent(messageHeader + messageBody + messageFooter);
    
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${fullMessage}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-200"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="relative w-full max-w-md bg-white h-full shadow-xl flex flex-col z-10">
        {/* Header */}
        <div className="px-5 py-4 bg-slate-900 text-white flex justify-between items-center border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <ShoppingCart size={18} className="text-[#D31219]" />
            <div>
              <h2 className="text-sm font-bold tracking-tight">Lista de Cotação</h2>
              <p className="text-[11px] text-slate-400">{items.length} {items.length === 1 ? 'item selecionado' : 'itens selecionados'}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded transition-colors"
            aria-label="Fechar gaveta de cotação"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-5 space-y-3">
          {items.length > 0 ? (
            <>
              {items.map((item) => {
                const product = PRODUCTS.find(p => p.id === item.productId);
                return (
                  <div 
                    key={item.productId}
                    className="flex gap-3 bg-white p-3 rounded border border-slate-200"
                  >
                    <div className="w-16 h-16 rounded overflow-hidden bg-slate-50 border border-slate-100 flex-shrink-0 flex items-center justify-center p-1">
                      <img 
                        src={product?.image || '/ky-drywall-logo.webp'} 
                        alt={item.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <div className="flex-grow min-w-0 flex flex-col justify-between">
                      <h4 className="text-xs font-semibold text-slate-900 leading-snug truncate" title={item.name}>
                        {item.name}
                      </h4>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="inline-flex items-center border border-slate-200 rounded bg-slate-50">
                          <button 
                            onClick={() => updateQuantity(item.productId, -1)}
                            className="p-1 text-slate-600 hover:text-[#D31219] transition-colors"
                            aria-label="Diminuir quantidade"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="text-xs font-bold px-2 min-w-[24px] text-center text-slate-900">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.productId, 1)}
                            className="p-1 text-slate-600 hover:text-[#D31219] transition-colors"
                            aria-label="Aumentar quantidade"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeItem(item.productId)}
                          className="text-slate-400 hover:text-red-600 transition-colors p-1"
                          aria-label="Remover item"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              <div className="pt-2 text-center">
                <button 
                  onClick={clearQuote}
                  className="text-xs text-slate-400 hover:text-[#D31219] font-medium transition-colors"
                >
                  Limpar lista de cotação
                </button>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <PackageOpen size={24} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Sua lista está vazia</h3>
                <p className="text-xs text-slate-500 max-w-[220px] mx-auto mt-1 leading-relaxed">
                  Adicione insumos e perfis através do nosso catálogo para solicitar um orçamento.
                </p>
              </div>
              <button 
                onClick={onClose}
                className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Explorar Catálogo
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-600 uppercase tracking-wider text-[11px]">Total de volumes:</span>
              <span className="font-bold text-slate-900 text-sm">
                {items.reduce((acc, curr) => acc + curr.quantity, 0)} un
              </span>
            </div>
            
            <button 
              onClick={sendToWhatsApp}
              className="w-full bg-[#D31219] hover:bg-red-700 text-white font-semibold py-3 px-4 rounded flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-colors"
            >
              <MessageCircle size={16} />
              <span>Enviar Cotação via WhatsApp</span>
              <ArrowRight size={14} />
            </button>
            
            <p className="text-[11px] text-center text-slate-500 leading-snug">
              Atendimento ágil com cálculo de frete para Curitiba e Região Metropolitana.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteDrawer;
