import { CombinedAnalysisResponse } from '@/app/types/combined';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function getCombinedClearanceAnalysis(): Promise<CombinedAnalysisResponse> {
  const response = await fetch(`${API_BASE_URL}/clearance`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY || '',
    },
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ detail: 'Unknown error' }));
    throw new Error(error.detail || `HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (!data.clearance_products || !data.campaign_analysis) {
    throw new Error(
      'Invalid API response: missing clearance_products or clearance_analysis',
    );
  }

  return data as CombinedAnalysisResponse;
}
