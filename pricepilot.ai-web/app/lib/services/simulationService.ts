import type { CampaignAnalysisResponse } from '@/app/types/campaign';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function fetchSimulationData(
  campaignAnalysis: CampaignAnalysisResponse,
) {
  const response = await fetch(`${API_BASE_URL}/simulation/monte-carlo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY || '',
    },
    body: JSON.stringify(campaignAnalysis),
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ detail: 'Unknown error' }));
    throw new Error(error.detail || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function fetchAgentRunPlan(
  campaignAnalysis: CampaignAnalysisResponse,
) {
  const response = await fetch(`${API_BASE_URL}/simulation/agent-run-plan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY || '',
    },
    body: JSON.stringify(campaignAnalysis),
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ detail: 'Unknown error' }));
    throw new Error(error.detail || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}
