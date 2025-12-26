
export type Category = 
  | 'Diversos'
  | 'Drywall'
  | 'Ferragens'
  | 'Fitas' 
  | 'Lã (Isolamento)'
  | 'Massas' 
  | 'Parafusos' 
  | 'Perfis' 
  | 'Placas';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  image: string;
  rating: number;
  specs?: string[];
  applications?: string[];
  priceRef?: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

export interface QuoteItem {
  productId: string;
  name: string;
  quantity: number;
}

// Added BlogPost interface for consistency across Home and Blog pages
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  img: string;
  tag: string;
  date: string;
}
