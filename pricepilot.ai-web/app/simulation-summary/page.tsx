'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { useClearance } from '@/app/contexts/ClearanceContext';
import {
  Zap,
  BarChart3,
  Package,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import type { MonteCarloResponse } from '@/app/types/simulation';
import { fetchAgentRunPlan } from '@/app/lib/services/simulationService';

export default function SimulationSummaryPage() {
  const router = useRouter();
  const { simulationResult, campaignAnalysis, setAgentRunPlan } =
    useClearance();
  const [isExecuting, setIsExecuting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!simulationResult || !campaignAnalysis) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading results...</p>
        </div>
      </div>
    );
  }

  // Type assertion for better type safety
  const results = simulationResult as MonteCarloResponse;

  // Helper to format percentage
  const formatPercent = (value: number): string => {
    return `${(value * 100).toFixed(1)}%`;
  };

  const handleExecuteCampaign = async () => {
    setIsExecuting(true);
    setError(null);

    try {
      const response = await fetchAgentRunPlan(campaignAnalysis);

      if (!response) {
        setError('Failed to execute campaign');
      }

      setAgentRunPlan(response);
      router.push('/agent-run');
    } catch (err) {
      console.error('Error executing campaign:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsExecuting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                <BarChart3 className="w-10 h-10 text-purple-600" />
                Monte Carlo Simulation Results
              </h1>
              <p className="text-gray-600">
                Based on{' '}
                {results.simulation_results.simulation_summary.num_simulations.toLocaleString()}{' '}
                probabilistic scenarios
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-900 font-semibold">
                Simulation Complete
              </span>
            </div>
          </div>

          {/* Campaign Summary */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 bg-blue-50 rounded-xl">
            <div>
              <div className="text-blue-700 text-sm font-medium">Products</div>
              <div className="text-blue-900 text-2xl font-bold">
                {results.campaign_summary.products_count}
              </div>
            </div>
            <div>
              <div className="text-blue-700 text-sm font-medium">Duration</div>
              <div className="text-blue-900 text-2xl font-bold">
                {results.campaign_summary.duration_days} days
              </div>
            </div>
            <div>
              <div className="text-blue-700 text-sm font-medium">
                Target Revenue
              </div>
              <div className="text-blue-900 text-2xl font-bold">
                ${results.campaign_summary.target_revenue.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-blue-700 text-sm font-medium">
                Urgent Items
              </div>
              <div className="text-blue-900 text-2xl font-bold">
                {results.campaign_summary.urgent_items}
              </div>
            </div>
            <div>
              <div className="text-blue-700 text-sm font-medium">Channels</div>
              <div className="text-blue-900 text-2xl font-bold">
                {results.campaign_summary.channels_count}
              </div>
            </div>
          </div>
        </div>

        {/* Success Probability - Big Card */}
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-xl p-12 mb-8 text-center text-white">
          <div className="mb-4">
            <Zap className="w-16 h-16 mx-auto mb-4 opacity-90" />
          </div>
          <div className="text-lg font-semibold mb-2 opacity-90">
            Probability of Meeting Target Revenue
          </div>
          <div className="text-7xl font-bold mb-2">
            {results.interpretation.overall_success_rate}
          </div>
          <div className="text-lg opacity-90 mb-4">
            Based on{' '}
            {results.simulation_results.simulation_summary.num_simulations.toLocaleString()}{' '}
            Monte Carlo simulations
          </div>
          <div className="text-sm opacity-80">
            AI Estimate:{' '}
            {formatPercent(results.ai_insights.success_probability_estimate)}
          </div>
        </div>

        {/* Revenue Projections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-red-200">
            <div className="text-red-600 text-sm font-bold uppercase tracking-wide mb-2">
              Pessimistic Scenario
            </div>
            <div className="text-red-700 text-sm mb-2">10th Percentile</div>
            <div className="text-4xl font-bold text-red-900 mb-2">
              {results.interpretation.worst_case_10th}
            </div>
            <p className="text-sm text-red-700">
              Only 10% of simulations performed worse than this
            </p>
            <div className="mt-4 pt-4 border-t border-red-200">
              <div className="text-xs text-red-600 mb-1">Raw Value</div>
              <div className="text-lg font-semibold text-red-800">
                $
                {results.simulation_results.simulation_summary.revenue_10th_percentile.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-blue-200">
            <div className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-2">
              Expected Scenario
            </div>
            <div className="text-blue-700 text-sm mb-2">
              50th Percentile (Median)
            </div>
            <div className="text-4xl font-bold text-blue-900 mb-2">
              {results.interpretation.expected_revenue}
            </div>
            <p className="text-sm text-blue-700">
              Most likely outcome based on simulations
            </p>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <div className="text-xs text-blue-600 mb-1">Raw Value</div>
              <div className="text-lg font-semibold text-blue-800">
                $
                {results.simulation_results.simulation_summary.revenue_50th_percentile.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-green-200">
            <div className="text-green-600 text-sm font-bold uppercase tracking-wide mb-2">
              Optimistic Scenario
            </div>
            <div className="text-green-700 text-sm mb-2">90th Percentile</div>
            <div className="text-4xl font-bold text-green-900 mb-2">
              {results.interpretation.best_case_90th}
            </div>
            <p className="text-sm text-green-700">
              Only 10% of simulations performed better than this
            </p>
            <div className="mt-4 pt-4 border-t border-green-200">
              <div className="text-xs text-green-600 mb-1">Raw Value</div>
              <div className="text-lg font-semibold text-green-800">
                $
                {results.simulation_results.simulation_summary.revenue_90th_percentile.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Statistical Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Statistical Summary
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-gray-500 text-sm mb-1">Mean Revenue</div>
              <div className="text-2xl font-bold text-gray-900">
                $
                {results.simulation_results.simulation_summary.revenue_mean.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-1">
                Standard Deviation
              </div>
              <div className="text-2xl font-bold text-gray-900">
                ±$
                {results.simulation_results.simulation_summary.revenue_std.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-1">Revenue Range</div>
              <div className="text-lg font-bold text-gray-900">
                {results.interpretation.revenue_range}
              </div>
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-1">
                Target Achievement
              </div>
              <div className="text-2xl font-bold text-purple-600">
                {formatPercent(
                  results.simulation_results.simulation_summary
                    .probability_of_success,
                )}
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Critical Risks */}
          {results.ai_insights.critical_risks.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                Critical Risks
              </h3>
              <ul className="space-y-3">
                {results.ai_insights.critical_risks.map((risk, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200"
                  >
                    <span className="text-red-600 font-bold text-lg flex-shrink-0">
                      ⚠️
                    </span>
                    <span className="text-sm text-red-900">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommendations */}
          {results.ai_insights.recommendations.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-600" />
                AI Recommendations
              </h3>
              <ul className="space-y-3">
                {results.ai_insights.recommendations.map((rec, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200"
                  >
                    <span className="text-yellow-600 font-bold text-lg flex-shrink-0">
                      💡
                    </span>
                    <span className="text-sm text-yellow-900">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Product-Level Analysis */}
        {results.product_details &&
          Object.keys(results.product_details).length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Package className="w-7 h-7 text-blue-600" />
                Product-Level Analysis
              </h3>
              <div className="space-y-6">
                {Object.entries(results.product_details).map(
                  ([productName, details]) => {
                    const successRate =
                      details.probability_of_meeting_target * 100;
                    const sellthrough = details.sellthrough_percentage_mean;

                    return (
                      <div
                        key={productName}
                        className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-all"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-bold text-lg text-gray-900">
                            {productName}
                          </h4>
                          <div
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              successRate >= 70
                                ? 'bg-green-100 text-green-700'
                                : successRate >= 50
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-red-100 text-red-700'
                            }`}
                          >
                            {successRate.toFixed(0)}% Success Rate
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4">
                          <div>
                            <div className="text-gray-500 text-xs mb-1">
                              Current Stock
                            </div>
                            <div className="font-bold text-gray-900">
                              {details.current_stock} units
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-500 text-xs mb-1">
                              Target
                            </div>
                            <div className="font-bold text-gray-900">
                              {details.target_units} units
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-500 text-xs mb-1">
                              Expected (Mean)
                            </div>
                            <div className="font-bold text-blue-600">
                              {Math.round(details.units_sold_mean)} units
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-500 text-xs mb-1">
                              Pessimistic
                            </div>
                            <div className="font-bold text-red-600">
                              {Math.round(details.units_sold_10th)} units
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-500 text-xs mb-1">
                              Optimistic
                            </div>
                            <div className="font-bold text-green-600">
                              {Math.round(details.units_sold_90th)} units
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-500 text-xs mb-1">
                              Sellthrough
                            </div>
                            <div className="font-bold text-purple-600">
                              {sellthrough.toFixed(1)}%
                            </div>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>Sellthrough Progress</span>
                            <span>{sellthrough.toFixed(1)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                            <div
                              className={`h-4 rounded-full transition-all duration-500 ${
                                sellthrough >= 70
                                  ? 'bg-gradient-to-r from-green-500 to-green-600'
                                  : sellthrough >= 50
                                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600'
                                    : 'bg-gradient-to-r from-red-500 to-red-600'
                              }`}
                              style={{
                                width: `${Math.min(sellthrough, 100)}%`,
                              }}
                            />
                          </div>
                        </div>

                        {/* Urgency Indicator */}
                        {details.urgency_deadline <= 7 && (
                          <div className="mt-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                            <div className="flex items-center gap-2 text-sm text-orange-800">
                              <AlertTriangle className="w-4 h-4" />
                              <span className="font-semibold">
                                Urgent: Only {details.urgency_deadline} days to
                                clear
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          )}

        {/* Action Buttons */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* ADD ERROR DISPLAY HERE ⬇️ */}
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-900 font-semibold mb-1">
                  Error Executing Campaign
                </p>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </div>
          )}
          {/* ⬆️ ERROR DISPLAY ENDS HERE */}
          <div className="flex gap-4">
            <button
              onClick={() => router.push('/')}
              className="flex-1 px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition-all"
            >
              Start New Analysis
            </button>
            <button
              onClick={handleExecuteCampaign}
              disabled={isExecuting}
              className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isExecuting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Generating Campaign...
                </>
              ) : (
                'Generate Campaign'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
