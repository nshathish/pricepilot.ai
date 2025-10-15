import { ClearanceAnalysisResponse } from '@/app/types/clearance';
import { CampaignAnalysisResponse } from '@/app/types/campaign';

export interface CombinedAnalysisResponse {
  clearance_products: ClearanceAnalysisResponse;
  campaign_analysis: CampaignAnalysisResponse;
}
