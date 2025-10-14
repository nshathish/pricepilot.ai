export interface ProductAnalysis {
  product_id: number;
  sku: string;
  name: string;
  category: string;
  current_price: number;
  stock_units: number;
  sales_rate: number;
  natural_sellthrough: number;
  days_until_clearance?: number | null;
  urgency_level: 'URGENT' | 'MODERATE' | 'LOW';
  recommended_action: {
    discount_percentage: number;
    new_price: number;
    expected_velocity_boost: string;
    target_units_sold: number;
    rationale: string;
    marketing_priority: string;
    risk_if_no_action?: string | null;
  };
}

export interface MarketingChannel {
  channel: string;
  priority: 'High Priority' | 'Medium Priority' | 'Low Priority';
  why: string;
  reach: string;
  conversion: string;
  budget: string;
  timing: string;
  products?: string[];
}

export interface CampaignPhase {
  phase: number;
  name: string;
  products: string[];
  duration: string;
}

export interface CampaignAnalysis {
  executive_summary: {
    urgent_action_count: number;
    urgent_products: string[];
    moderate_priority_count: number;
    moderate_products: string[];
    expected_profit_impact: number;
  };
  navigation_sections?: string[];
  products: ProductAnalysis[];
  campaign_plan: {
    duration_days: number;
    expected_uplift: number;
    total_discount: number;
    phases?: CampaignPhase[];
  };
  marketing_channels: MarketingChannel[];
  success_metrics?: {
    inventory_reduction_target: string;
    sales_velocity_increase: string;
    margin_preservation: string;
    customer_acquisition: string;
  };
}
