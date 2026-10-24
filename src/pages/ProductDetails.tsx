
import React, { useMemo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, MessageCircle, Star, Shield, Truck, PhoneCall, Info, PlusCircle, Check, Share2, ClipboardList, Target, User, Send } from 'lucide-react';
import { PRODUCTS, getRandomCTA, BASE_URL } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import NotFound from './NotFound';
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
        setReviews(JSON.parse(stored).filter((review: Review) => !['1', '2'].includes(review.id)));
      } else {
        setReviews([]);
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

  if (!product) return <NotFound />;

  const whatsappUrl = `https://wa.me/5541996457421?text=${encodeURIComponent(`Olá, gostaria de um orçamento para o produto: ${product.name}`)}`;

  return (
    <div className="ky-section-white pt-24 pb-20">
      <EnhancedSEO 
        title={`${product.name} | Catálogo KY Drywall`} 
        description={product.description}
        canonical={`${BASE_URL}/produto/${product.id}`} 
        ogImage={product.image} 
        ogType="product"
        schema={{ 
          '@type': 'Product', 
          name: product.name, 
          description: product.description,
          image: new URL(product.image, BASE_URL).href, 
          url: `${BASE_URL}/produto/${product.id}` 
        }} 
      />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Breadcrumbs - Blueprint Style */}
        <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase text-slate-400 mb-12 tracking-widest overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
          <Link to="/" className="hover:text-[#D31219] transition-colors">Início</Link>
          <ChevronRight size={12} />
          <Link to="/produtos" className="hover:text-[#D31219] transition-colors">Catálogo</Link>
          <ChevronRight size={12} />
          <Link to={`/produtos?cat=${product.category}`} className="hover:text-[#D31219] transition-colors">{product.category}</Link>
          <ChevronRight size={12} />
          <span className="text-slate-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative group ky-card rounded-3xl aspect-square overflow-hidden flex items-center justify-center p-8">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x800?text=KY+DRYWALL';
                }}
              />
              {/* Badge Overlay */}
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-200 text-[10px] font-black text-slate-900 uppercase tracking-widest shadow-sm">
                  Código: KY-{product.id.substring(0, 4).toUpperCase()}
                </span>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
               <div className="ky-section-alt p-5 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-3">
                 <Shield size={24} className="text-[#D31219]" />
                 <div>
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Qualidade</div>
                   <div className="text-xs font-bold text-slate-800">Norma ABNT</div>
                 </div>
               </div>
               <div className="ky-section-alt p-5 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-3">
                 <Truck size={24} className="text-slate-900" />
                 <div>
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Logística</div>
                   <div className="text-xs font-bold text-slate-800">Pronta Entrega</div>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Column: Details & CTA */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 rounded text-[10px] font-mono font-bold text-[#D31219] uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D31219]"></span>
                {product.category}
              </div>
              <h1 className="ky-title-mark text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-3 mb-10 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < Math.round(product.rating) ? "text-[#D31219] fill-[#D31219]" : "text-slate-200"} />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  ({reviews.length || 0} Avaliações Técnicas)
                </span>
              </div>

              <div className="text-lg text-slate-600 leading-relaxed mb-10">
                {product.description}
              </div>

              {/* Technical Tabs (Specs/Applications) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {product.specs && (
                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900">
                      <ClipboardList size={16} className="text-[#D31219]" />
                      Especificações
                    </h4>
                    <ul className="space-y-2">
                      {product.specs.map((s, i) => (
                        <li key={i} className="text-sm text-slate-500 flex items-start gap-3 py-2 border-b border-slate-50">
                          <span className="font-bold text-[#D31219]">»</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {product.applications && (
                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900">
                      <Target size={16} className="text-[#D31219]" />
                      Onde Utilizar
                    </h4>
                    <ul className="space-y-2">
                      {product.applications.map((a, i) => (
                        <li key={i} className="text-sm text-slate-500 flex items-start gap-3 py-2 border-b border-slate-50">
                          <span className="font-bold text-slate-400">●</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Extended Technical Content - Industrial Showroom Style */}
              <div className="space-y-12 mt-12 border-t border-slate-100 pt-12">
                {product.whatIsIt && (
                  <div className="group">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D31219] mb-4 flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-red-100"></span>
                      O que é o produto
                    </h4>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {product.whatIsIt}
                    </p>
                  </div>
                )}

                {(product.selectionCriteria || product.compatibility) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {product.selectionCriteria && (
                      <div className="ky-section-alt p-6 rounded-2xl border border-slate-100">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-4">Critérios de Escolha</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {product.selectionCriteria}
                        </p>
                      </div>
                    )}
                    {product.compatibility && (
                      <div className="bg-red-50/30 p-6 rounded-2xl border border-red-100/50">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D31219] mb-4">Compatibilidade Técnica</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {product.compatibility}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {product.faq && product.faq.length > 0 && (
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6">Dúvidas Frequentes</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {product.faq.map((item, idx) => (
                        <div key={idx} className="ky-card p-5 rounded-2xl transition-colors">
                          <div className="text-xs font-black text-slate-800 mb-2 flex items-start gap-2">
                            <span className="text-[#D31219]">Q:</span>
                            {item.question}
                          </div>
                          <div className="text-xs text-slate-500 leading-relaxed flex items-start gap-2">
                            <span className="text-slate-300">A:</span>
                            {item.answer}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sticky/Bottom CTA Section */}
            <div className="mt-auto pt-8 border-t-2 border-slate-900/5 sticky bottom-0 bg-white/80 backdrop-blur-sm pb-4 lg:relative lg:bg-transparent lg:pb-0 z-10">
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 bg-[#D31219] hover:bg-red-700 text-white font-black py-5 px-6 rounded-2xl transition-all text-xs uppercase tracking-widest shadow-xl shadow-red-900/10 active:scale-95"
                >
                  <MessageCircle size={20} />
                  {ctaPhrase || 'Solicitar Orçamento'}
                </a>
                <button 
                  onClick={addToQuote}
                  className={`flex-1 flex items-center justify-center gap-3 font-black py-5 px-6 rounded-2xl transition-all border-2 text-xs uppercase tracking-widest active:scale-95 ${
                    isAdded 
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                      : 'border-slate-200 text-slate-900 hover:border-slate-900 bg-white'
                  }`}
                >
                  {isAdded ? <Check size={20} /> : <PlusCircle size={20} />}
                  {isAdded ? 'Item Adicionado' : 'Adicionar à Lista'}
                </button>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-6 justify-center sm:justify-start">
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <PhoneCall size={14} className="text-slate-300" />
                  <span>Televendas: (41) 3528-4232</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <User size={14} className="text-slate-300" />
                  <span>Consultoria Gratuita</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section - Engineering Style */}
        <section className="py-20 border-t border-slate-100">
          <div className="max-w-4xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
              <div>
                <div className="text-[11px] font-mono font-bold text-[#D31219] uppercase tracking-[0.2em] mb-2">Feedbacks</div>
                <h3 className="ky-title-mark text-3xl font-black text-slate-900 tracking-tight">Avaliações Técnicas</h3>
                <p className="text-slate-500 text-sm mt-2">A palavra de quem utiliza nossos materiais no dia a dia da obra.</p>
              </div>
              <button 
                onClick={() => setIsReviewing(!isReviewing)}
                className="bg-slate-900 text-white px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-lg"
              >
                {isReviewing ? 'Cancelar' : 'Avaliar Material'}
              </button>
            </div>

            {isReviewing && (
              <div className="ky-section-alt p-8 rounded-3xl mb-12 border border-slate-200 shadow-inner animate-in fade-in slide-in-from-top-4">
                <form onSubmit={handleSubmitReview} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Seu Nome / Construtora</label>
                      <input 
                        type="text" 
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#D31219] transition-all"
                        placeholder="Ex: Pedro — Montador"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Classificação Técnica</label>
                      <div className="flex gap-2 bg-white border-2 border-slate-200 rounded-xl px-4 py-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button 
                            key={star}
                            type="button"
                            onClick={() => setNewRating(star)}
                            className="transition-transform active:scale-125"
                          >
                            <Star size={20} className={star <= newRating ? "fill-[#D31219] text-[#D31219]" : "text-slate-200"} />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Comentário sobre o Insumo</label>
                    <textarea 
                      required
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-4 text-sm font-bold focus:outline-none focus:border-[#D31219] transition-all h-32 resize-none"
                      placeholder="Fale sobre a resistência, acabamento ou facilidade de instalação..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full sm:w-auto bg-[#D31219] text-white px-10 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-red-900/10"
                  >
                    Publicar Agora
                  </button>
                </form>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.length > 0 ? reviews.map((review) => (
                <div key={review.id} className="ky-card p-6 rounded-2xl transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-black text-sm text-slate-900 uppercase tracking-tight">{review.userName}</h4>
                      <p className="text-[10px] font-mono text-slate-400 mt-0.5">{review.date}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < review.rating ? "fill-[#D31219] text-[#D31219]" : "text-slate-200"} />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic">"{review.comment}"</p>
                </div>
              )) : (
                 <div className="col-span-2 py-10 text-center ky-section-alt rounded-2xl border-2 border-dashed border-slate-200">
                    <p className="text-slate-400 font-bold text-sm">Seja o primeiro a avaliar este material técnico.</p>
                 </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>

  );
};

export default ProductDetails;
