'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles } from 'lucide-react';

interface AnalyzeButtonProps {
  disabled?: boolean;
}

export default function AnalyzeButton({
  disabled = false,
}: AnalyzeButtonProps) {
  const router = useRouter();
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);

    // Simulate AI analysis (2 second delay)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Navigate to dashboard
    router.push('/dashboard');
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
        <button
          onClick={handleAnalyze}
          disabled={disabled || isAnalyzing}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Sparkles className="w-5 h-5" />
          {isAnalyzing
            ? 'Analyzing Products...'
            : 'Analyze & Identify Clearance Products'}
        </button>
      </div>
    </div>
  );
}
