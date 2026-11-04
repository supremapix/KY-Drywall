import { QuoteItem } from '../types';
export function readQuote(): QuoteItem[] {
  try {
    const value = JSON.parse(localStorage.getItem('ky_quote_list') || '[]');
    return Array.isArray(value) ? value.filter(item => item && typeof item.productId === 'string' && typeof item.name === 'string' && Number.isFinite(item.quantity) && item.quantity > 0) : [];
  } catch { return []; }
}
