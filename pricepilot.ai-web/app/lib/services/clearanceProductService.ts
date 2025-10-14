import { ClearanceAnalysisResponse } from '@/app/types/clearance';

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

export async function viewClearanceAnalysis(): Promise<string> {
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

  return response.text();
}
