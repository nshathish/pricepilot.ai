export type UrgencyLevel = 'URGENT' | 'MODERATE' | 'ON TRACK';

export interface Product {
  id: number;
  sku: string;
  name: string;
  category: string;
  currentPrice: number;
  basePrice: number;
  stock: number;
  daysToClearing: number;
  recentSalesRate: number;
  urgency: UrgencyLevel;
  competitorPrice: number | null;
  projectedSellThrough: number;
  recommendedMarkdown: number;
}

export type ProductListItem = Pick<
  Product,
  | 'id'
  | 'sku'
  | 'name'
  | 'category'
  | 'currentPrice'
  | 'stock'
  | 'daysToClearing'
  | 'recentSalesRate'
> & {
  totalHoldingCost?: number;
  dailyHoldingCost?: number;
};
