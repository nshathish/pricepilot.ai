export type UrgencyLevel = 'critical' | 'moderate' | 'low';

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
