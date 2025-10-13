import { UrgencyLevel } from '@/app/types/product';

export interface AIRecommendation {
  action: 'discount' | 'no_action';
  discount_percentage: number;
  new_price: number;
  reasoning: string;
}

export interface ClearanceCandidate {
  product_id: number;
  sku: string;
  product_name: string;
  category: string;
  status: UrgencyLevel;
  stock: number;
  days_left: number;
  current_price: number;
  base_price: number;
  sales_rate: number;
  projected_sell_percentage: number;
  ai_recommendation: AIRecommendation;
  urgency_score: number;
  risk_factors: string[];
}

export interface CampaignRecommendation {
  duration_days: number;
  expected_profit_uplift: number;
  success_metrics: string[];
}

export interface Insights {
  top_priorities: number[];
  category_analysis: string;
  campaign_recommendation: CampaignRecommendation;
}

export interface AnalysisSummary {
  total_products_analyzed: number;
  products_requiring_action: number;
  total_potential_revenue_impact: number;
  analysis_timestamp: string;
}

export interface ClearanceAnalysisResponse {
  summary: AnalysisSummary;
  clearance_candidates: ClearanceCandidate[];
  insights: Insights;
}
