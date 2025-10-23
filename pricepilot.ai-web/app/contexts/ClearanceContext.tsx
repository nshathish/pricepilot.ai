'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

import type { ClearanceAnalysisResponse } from '@/app/types/clearance';
import type { CampaignAnalysisResponse } from '@/app/types/campaign';
import type { MonteCarloResponse } from '@/app/types/simulation';
import type { AgentRunPlan } from '@/app/agent-run/types';

interface ClearanceContextType {
  analysisData: ClearanceAnalysisResponse | null;
  setAnalysisData: (data: ClearanceAnalysisResponse | null) => void;
  clearAnalysisData: () => void;

  campaignAnalysis: CampaignAnalysisResponse | null;
  setCampaignAnalysis: (data: CampaignAnalysisResponse) => void;
  clearCampaignAnalysis: () => void;

  simulationResult: MonteCarloResponse | null;
  setSimulationResult: (data: MonteCarloResponse) => void;
  clearSimulationResult: () => void;

  agentRunPlan: AgentRunPlan | null;
  setAgentRunPlan: (data: AgentRunPlan | null) => void;
  clearAgentRunPlan: () => void;
}

const ClearanceContext = createContext<ClearanceContextType | undefined>(
  undefined,
);

export function ClearanceProvider({ children }: { children: ReactNode }) {
  const [analysisData, setAnalysisData] =
    useState<ClearanceAnalysisResponse | null>(null);
  const [campaignAnalysis, setCampaignAnalysis] =
    useState<CampaignAnalysisResponse | null>(null);
  const [simulationResult, setSimulationResult] =
    useState<MonteCarloResponse | null>(null);
  const [agentRunPlan, setAgentRunPlan] = useState<AgentRunPlan | null>(null);

  const clearSimulationResult = () => {
    setSimulationResult(null);
  };

  const clearCampaignAnalysis = () => {
    setCampaignAnalysis(null);
  };

  const clearAnalysisData = () => {
    setAnalysisData(null);
  };

  const clearAgentRunPlan = () => {
    setAgentRunPlan(null);
  };

  return (
    <ClearanceContext.Provider
      value={{
        analysisData,
        setAnalysisData,
        clearAnalysisData,
        campaignAnalysis,
        setCampaignAnalysis,
        clearCampaignAnalysis,
        simulationResult,
        setSimulationResult,
        clearSimulationResult,
        agentRunPlan,
        setAgentRunPlan,
        clearAgentRunPlan,
      }}
    >
      {children}
    </ClearanceContext.Provider>
  );
}

export function useClearance() {
  const context = useContext(ClearanceContext);
  if (context === undefined) {
    throw new Error('useClearance must be used within a ClearanceProvider');
  }
  return context;
}
