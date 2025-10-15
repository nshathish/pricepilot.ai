// app/types/simulation.ts

export interface Product {
  name: string;
  sku: string;
  product_id: number;
  current_stock: number;
  target_sellthrough: number;
  urgency_deadline: number;
  original_price: number;
  discounted_price: number;
  discount_percentage: number;
  baseline_velocity: number;
  velocity_multiplier_min: number;
  velocity_multiplier_max: number;
  priority: 'URGENT' | 'MODERATE' | 'LOW';
}

export interface Channel {
  reach_mean: number;
  reach_std: number;
  conversion_rate_mean: number;
  conversion_rate_std: number;
  budget: number;
  activation_days?: number[];
}

export interface DayMultiplier {
  mean: number;
  std: number;
}

export interface CampaignConfig {
  duration_days: number;
  target_revenue: number;
  num_simulations: number;
  products: Product[];
  channels: {
    email: Channel;
    social: Channel;
    sms: Channel;
    banner: Channel;
  };
  day_multipliers: {
    [day: string]: DayMultiplier;
  };
}

export interface Insights {
  critical_risks: string[];
  recommendations: string[];
  success_probability_estimate: number;
}

export interface ProductAnalysis {
  current_stock: number;
  target_units: number;
  units_sold_mean: number;
  units_sold_std: number;
  units_sold_10th: number;
  units_sold_50th: number;
  units_sold_90th: number;
  probability_of_meeting_target: number;
  sellthrough_percentage_mean: number;
  urgency_deadline: number;
}

export interface SimulationSummary {
  num_simulations: number;
  target_revenue: number;
  revenue_mean: number;
  revenue_std: number;
  revenue_10th_percentile: number;
  revenue_50th_percentile: number;
  revenue_90th_percentile: number;
  probability_of_success: number;
}

export interface CampaignSummary {
  products_count: number;
  channels_count: number;
  duration_days: number;
  target_revenue: number;
  urgent_items: number;
}

export interface Interpretation {
  overall_success_rate: string;
  expected_revenue: string;
  worst_case_10th: string;
  best_case_90th: string;
  revenue_range: string;
}

export interface MonteCarloResponse {
  success: boolean;
  timestamp: string;
  campaign_summary: CampaignSummary;
  ai_insights: Insights;
  monte_carlo_config: CampaignConfig;
  simulation_results: {
    simulation_summary: SimulationSummary;
    product_analysis: {
      [productName: string]: ProductAnalysis;
    };
  };
  interpretation: Interpretation;
  product_details: {
    [productName: string]: ProductAnalysis;
  };
}

// For the initial config response (before simulation runs)
export interface MonteCarloConfigResponse {
  campaign_config: CampaignConfig;
  insights: Insights;
}
