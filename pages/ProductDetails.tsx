
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
    <div className="bg-white py-12">
      <EnhancedSEO title={`${product.name} | KY Drywall`} description={product.description}
        canonical={`${BASE_URL}/produto/${product.id}`} ogImage={product.image} ogType="product"
        schema={{ '@type': 'Product', name: product.name, description: product.description,
          image: new URL(product.image, BASE_URL).href, url: `${BASE_URL}/produto/${product.id}` }} />
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400 mb-10 tracking-[0.2em]">
          <Link to="/" className="hover:text-[#D31219]">Home</Link>
          <ChevronRight size={12} />
          <Link to="/produtos" className="hover:text-[#D31219]">Produtos</Link>
          <ChevronRight size={12} />
          <span className="text-gray-900 truncate">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-slate-50 border border-slate-200">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-slate-50 p-4 rounded border border-slate-200 flex items-center justify-between">
               <div className="flex items-center gap-2.5">
                 <Shield size={18} className="text-[#D31219]" />
                 <span className="text-xs font-semibold text-slate-700">Conformidade e Laudo Técnico ABNT</span>
               </div>
               <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                 Pronta Entrega
               </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="mb-3">
                <span className="text-[#D31219] text-xs font-bold uppercase tracking-wider">
                  {product.category}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className={i < Math.round(product.rating) ? "text-[#D31219] fill-[#D31219]" : "text-slate-200"} />
                  ))}
                </div>
                <span className="text-xs text-slate-500 ml-1">({reviews.length} avaliações de montadores)</span>
              </div>

              <div className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                <p>{product.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {product.specs && (
                  <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                      <ClipboardList size={14} className="text-[#D31219]" />
                      Especificações
                    </h4>
                    <ul className="space-y-1.5">
                      {product.specs.map((s, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#D31219] mt-1.5 shrink-0"></span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {product.applications && (
                  <div className="bg-slate-900 p-4 rounded text-white border border-slate-800">
                    <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white mb-3">
                      <Target size={14} className="text-[#D31219]" />
                      Aplicações
                    </h4>
                    <ul className="space-y-1.5">
                      {product.applications.map((a, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#D31219] mt-1.5 shrink-0"></span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#D31219] hover:bg-red-700 text-white font-semibold py-3.5 px-4 rounded transition-colors text-xs uppercase tracking-wider text-center shadow-sm"
                >
                  <MessageCircle size={16} />
                  {ctaPhrase || 'Cotação Imediata no WhatsApp'}
                </a>
                <button 
                  onClick={addToQuote}
                  className={`flex items-center justify-center gap-2 font-semibold py-3.5 px-4 rounded transition-colors border text-xs uppercase tracking-wider ${
                    isAdded 
                      ? 'bg-emerald-600 border-emerald-600 text-white' 
                      : 'border-slate-300 text-slate-800 hover:border-slate-400 bg-white'
                  }`}
                >
                  {isAdded ? <Check size={16} /> : <PlusCircle size={16} />}
                  {isAdded ? 'Item Adicionado' : 'Adicionar à Cotação'}
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Shield className="text-slate-400" size={16} />
                  <span>Produto Homologado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="text-slate-400" size={16} />
                  <span>Entrega em Curitiba e RMC</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="py-12 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Avaliações Técnicas</h3>
              <p className="text-slate-500 text-xs mt-0.5">Opiniões de aplicadores e engenheiros sobre este material.</p>
            </div>
            <button 
              onClick={() => setIsReviewing(!isReviewing)}
              className="bg-slate-900 text-white px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors"
            >
              {isReviewing ? 'Fechar Formulário' : 'Avaliar Produto'}
            </button>
          </div>

          {isReviewing && (
            <div className="bg-slate-50 p-6 rounded-lg mb-8 border border-slate-200">
              <form onSubmit={handleSubmitReview} className="max-w-xl space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Seu Nome / Construtora</label>
                    <input 
                      type="text" 
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-xs focus:outline-none focus:border-slate-400"
                      placeholder="Ex: Carlos M. - Montador"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Classificação</label>
                    <div className="flex gap-1 pt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button 
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="p-1"
                        >
                          <Star size={18} className={star <= newRating ? "fill-[#D31219] text-[#D31219]" : "text-slate-300"} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Comentário Técnico</label>
                  <textarea 
                    required
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-xs focus:outline-none focus:border-slate-400 h-24 resize-none"
                    placeholder="Comente sobre facilidade de manuseio, resistência, encaixes ou acabamento..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-[#D31219] text-white px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-red-700 transition-colors"
                >
                  Publicar Avaliação
                </button>
              </form>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-5 rounded-lg border border-slate-200">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{review.userName}</h4>
                    <p className="text-[10px] text-slate-400">{review.date}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className={i < review.rating ? "fill-[#D31219] text-[#D31219]" : "text-slate-200"} />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
