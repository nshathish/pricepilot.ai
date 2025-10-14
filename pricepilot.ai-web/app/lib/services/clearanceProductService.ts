import { ClearanceAnalysisResponse } from '@/app/types/clearance';
import { CampaignAnalysis } from '@/app/types/campaign';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function findClearanceProducts(): Promise<ClearanceAnalysisResponse> {
  const response = await fetch(`${API_BASE_URL}/clearance/products`, {
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

  return response.json();
}

export async function viewClearanceAnalysis(): Promise<CampaignAnalysis> {
  const response = await fetch(`${API_BASE_URL}/clearance/analysis`, {
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

  const textData = await response.text();
  return JSON.parse(textData);
}
