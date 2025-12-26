
import React, { useMemo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, MessageCircle, Star, Shield, Truck, PhoneCall, Info, PlusCircle, Check, Share2, ClipboardList, Target, User, Send } from 'lucide-react';
import { PRODUCTS, getRandomCTA } from '../constants';
import { Review, QuoteItem } from '../types';

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isAdded, setIsAdded] = useState(false);
  const [ctaPhrase, setCtaPhrase] = useState('');
  
  // Review form state
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [userName, setUserName] = useState('');
  const [isReviewing, setIsReviewing] = useState(false);

  const product = useMemo(() => 
    PRODUCTS.find(p => p.id === productId), 
    [productId]
  );

  useEffect(() => {
    if (productId) {
      const stored = localStorage.getItem(`ky_reviews_${productId}`);
      if (stored) {
        setReviews(JSON.parse(stored));
      } else {
        // Mock initial reviews
        const initial = [
          { id: '1', userName: 'Carlos Engenharia', rating: 5, comment: 'Material de excelente qualidade, entrega rápida no Cajuru.', date: '10/01/2025' },
          { id: '2', userName: 'Juliana Arq', rating: 4, comment: 'Ótimo acabamento para forros de alto padrão.', date: '05/01/2025' }
        ];
        setReviews(initial);
        localStorage.setItem(`ky_reviews_${productId}`, JSON.stringify(initial));
      }
    }
    setCtaPhrase(getRandomCTA());
    window.scrollTo(0, 0);
  }, [productId]);

  const addToQuote = () => {
    if (!product) return;
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
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !newComment) return;

    const review: Review = {
      id: Date.now().toString(),
      userName,
      comment: newComment,
      rating: newRating,
      date: new Date().toLocaleDateString('pt-BR')
    };

    const updatedReviews = [review, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem(`ky_reviews_${productId}`, JSON.stringify(updatedReviews));
    
    setUserName('');
    setNewComment('');
    setIsReviewing(false);
  };

  if (!product) return null;

  const whatsappUrl = `https://wa.me/5541996457421?text=${encodeURIComponent(`Olá, gostaria de um orçamento para o produto: ${product.name}`)}`;

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400 mb-10 tracking-[0.2em]">
          <Link to="/" className="hover:text-[#D31219]">Home</Link>
          <ChevronRight size={12} />
          <Link to="/produtos" className="hover:text-[#D31219]">Produtos</Link>
          <ChevronRight size={12} />
          <span className="text-gray-900 truncate">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-gray-50 border-8 border-gray-50 group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <Shield size={24} className="text-[#D31219]" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Certificação Técnica ABNT</span>
               </div>
               <button className="p-3 text-gray-400 hover:text-[#D31219] transition-colors"><Share2 size={20}/></button>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-4">
              <span className="bg-[#D31219]/10 text-[#D31219] text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest">
                {product.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter leading-[1.1]">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={i < Math.round(product.rating) ? "text-[#D31219] fill-[#D31219]" : "text-gray-200"} />
                ))}
              </div>
              <span className="text-sm font-black text-gray-900 ml-2">{reviews.length} Avaliações Técnicas</span>
            </div>

            <div className="prose prose-red max-w-none text-gray-600 text-lg leading-relaxed mb-10 font-medium italic">
              <p>"{product.description}"</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {product.specs && (
                <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                  <h4 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-gray-900 mb-6">
                    <ClipboardList size={20} className="text-[#D31219]" /> Ficha Técnica
                  </h4>
                  <ul className="space-y-3">
                    {product.specs.map((s, i) => (
                      <li key={i} className="text-[11px] font-bold text-gray-500 uppercase flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D31219] mt-1 shrink-0"></div>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {product.applications && (
                <div className="bg-[#1A1A1A] p-8 rounded-[2rem] text-white">
                  <h4 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#D31219] mb-6">
                    <Target size={20} /> Aplicações
                  </h4>
                  <ul className="space-y-3">
                    {product.applications.map((a, i) => (
                      <li key={i} className="text-[11px] font-bold text-gray-300 uppercase flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D31219] mt-1 shrink-0 shadow-[0_0_10px_rgba(211,18,25,1)]"></div>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-[#D31219] hover:bg-black text-white font-black py-6 rounded-2xl transition-all shadow-2xl uppercase tracking-widest text-xs animate-pulse text-center"
              >
                <MessageCircle size={24} />
                {ctaPhrase || 'Consultar Preço AGORA'}
              </a>
              <button 
                onClick={addToQuote}
                className={`flex items-center justify-center gap-3 font-black py-6 rounded-2xl transition-all border-2 uppercase tracking-widest text-xs ${isAdded ? 'bg-green-500 border-green-500 text-white' : 'border-gray-200 text-gray-800 hover:border-[#D31219] hover:text-[#D31219]'}`}
              >
                {isAdded ? <Check size={24} /> : <PlusCircle size={24} />}
                Adicionar à Cotação
              </button>
            </div>
            
            <a 
              href="https://wa.me/5541996457421?text=Olá, preciso de suporte técnico para o produto: "
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-black py-5 rounded-2xl transition-all uppercase tracking-widest text-[10px]"
            >
              <PhoneCall size={20} />
              Falar com Técnico de Plantão
            </a>

            <div className="grid grid-cols-2 gap-6 pt-12 border-t border-gray-100 mt-12">
              <div className="flex items-center gap-4">
                <Shield className="text-[#D31219]" size={32} />
                <p className="text-[10px] font-black uppercase tracking-widest leading-tight text-gray-500">Padrão<br/>Certificado</p>
              </div>
              <div className="flex items-center gap-4">
                <Truck className="text-[#D31219]" size={32} />
                <p className="text-[10px] font-black uppercase tracking-widest leading-tight text-gray-500">Logística<br/>Curitiba e RMC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="py-20 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Comunidade <span className="text-[#D31219]">Técnica</span></h3>
              <p className="text-gray-500 font-medium">Experiências de quem constrói com KY Drywall.</p>
            </div>
            <button 
              onClick={() => setIsReviewing(!isReviewing)}
              className="bg-[#003366] text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#D31219] transition-colors"
            >
              {isReviewing ? 'Cancelar' : 'Deixar Avaliação'}
            </button>
          </div>

          {isReviewing && (
            <div className="bg-gray-50 p-8 md:p-12 rounded-[3rem] mb-12 border border-gray-200 animate-in fade-in slide-in-from-top-4 duration-300">
              <form onSubmit={handleSubmitReview} className="max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Seu Nome / Empresa</label>
                    <input 
                      type="text" 
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#D31219]/20 font-medium"
                      placeholder="Ex: João Silva Construtora"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Nota da Experiência</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button 
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="p-1"
                        >
                          <Star size={24} className={star <= newRating ? "fill-[#D31219] text-[#D31219]" : "text-gray-300"} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-2 mb-8">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Seu Comentário Técnico</label>
                  <textarea 
                    required
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#D31219]/20 font-medium h-32 resize-none"
                    placeholder="Conte como foi utilizar este material em sua obra..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-[#D31219] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 shadow-xl hover:bg-black transition-colors group"
                >
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Publicar Avaliação
                </button>
              </form>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-black text-[#003366]">
                      {review.userName[0]}
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-tight">{review.userName}</h4>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < review.rating ? "fill-[#D31219] text-[#D31219]" : "text-gray-200"} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 font-medium italic leading-relaxed">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
