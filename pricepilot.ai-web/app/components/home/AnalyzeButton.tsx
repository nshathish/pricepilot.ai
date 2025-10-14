'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles } from 'lucide-react';

import { useClearance } from '@/app/contexts/ClearanceContext';
import { analyzeClearanceProducts } from '@/app/lib/services/clearanceProductService';

interface AnalyzeButtonProps {
  disabled?: boolean;
}

export default function AnalyzeButton({
  disabled = false,
}: AnalyzeButtonProps) {
  const router = useRouter();

  const { setAnalysisData } = useClearance();

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setError(null);

    try {
      const result = await analyzeClearanceProducts();
      console.log('Analysis result:', result);
      setAnalysisData(result);

      router.push('/dashboard');
    } catch (err) {
      console.error('Analysis failed:', err);
      setError(
        err instanceof Error ? err.message : 'Failed to analyze products',
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <Sparkles className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Ready to Optimize Your Inventory?
        </h3>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          Our AI will analyze your products, assess market conditions,
          competitor pricing, and sales velocity to identify clearance
          opportunities and recommend optimal markdown strategies.
        </p>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <button
          onClick={handleAnalyze}
          disabled={disabled || isAnalyzing}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAnalyzing ? (
            <>
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Analyzing Products...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Analyze Clearance Products
            </>
          )}
        </button>
      </div>
    </div>
  );
}
