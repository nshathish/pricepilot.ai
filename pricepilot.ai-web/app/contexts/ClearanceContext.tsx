'use client';

import { ClearanceAnalysisResponse } from '@/app/types/clearance';
import { createContext, ReactNode, useContext, useState } from 'react';

interface ClearanceContextType {
  analysisData: ClearanceAnalysisResponse | null;
  setAnalysisData: (data: ClearanceAnalysisResponse | null) => void;
}

const ClearanceContext = createContext<ClearanceContextType | undefined>(
  undefined,
);

export function ClearanceProvider({ children }: { children: ReactNode }) {
  const [analysisData, setAnalysisData] =
    useState<ClearanceAnalysisResponse | null>(null);

  return (
    <ClearanceContext.Provider value={{ analysisData, setAnalysisData }}>
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
