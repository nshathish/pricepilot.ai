import { Zap, X } from 'lucide-react';

import { getUrgencyColor } from '@/app/lib/utils/formatters';
// import { calculateNewPrice } from '@/app/lib/utils/calculations';

import type { ClearanceCandidate, Insights } from '@/app/types/clearance';

interface CampaignModalProps {
  products: ClearanceCandidate[];
  insights: Insights;
  onClose: () => void;
  onExecute: () => void;
}

export default function CampaignModal({
  products,
  insights,
  onClose,
  onExecute,
}: CampaignModalProps) {
  // Calculate total discount value
  const totalDiscount = products.reduce(
    (sum, p) =>
      sum + (p.current_price - p.ai_recommendation.new_price) * p.stock,
    0,
  );

  // Calculate total potential revenue
  const totalRevenue = products.reduce(
    (sum, p) => sum + p.ai_recommendation.new_price * p.stock,
    0,
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                View AI Markdown Analysis
              </h3>
              <p className="text-sm text-slate-500">
                Review AI recommendations and execute markdown strategy
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* AI Analysis Summary */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-blue-600" />
              <p className="font-semibold text-blue-900">
                AI Analysis Complete
              </p>
            </div>
            <p className="text-sm text-blue-700 leading-relaxed mb-3">
              Based on inventory levels, sales velocity, competitor pricing, and
              clearance deadlines, the AI has calculated optimal markdown
              percentages to maximize profit while ensuring sell-through.
            </p>

            {/* Campaign Stats */}
            <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-blue-200">
              <div>
                <p className="text-xs text-blue-700 mb-1">Campaign Duration</p>
                <p className="font-bold text-blue-900">
                  {insights.campaign_recommendation.duration_days} days
                </p>
              </div>
              <div>
                <p className="text-xs text-blue-700 mb-1">Expected Uplift</p>
                <p className="font-bold text-green-700">
                  $
                  {insights.campaign_recommendation.expected_profit_uplift.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs text-blue-700 mb-1">Total Discount</p>
                <p className="font-bold text-orange-700">
                  $
                  {totalDiscount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Category Insights */}
          {insights.category_analysis && (
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-slate-900 mb-2 text-sm">
                Category Insights
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {insights.category_analysis}
              </p>
            </div>
          )}

          {/* Products List */}
          <div className="mb-6">
            <h4 className="font-semibold text-slate-900 mb-3">
              Products to Discount ({products.length})
            </h4>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {products.map((product) => (
                <div
                  key={product.product_id}
                  className="border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">
                        {product.product_name}
                      </p>
                      <p className="text-xs text-slate-500">{product.sku}</p>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium border ${product.status}`}
                    >
                      {product.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500 text-xs mb-1">
                        Current Price
                      </p>
                      <p className="font-medium text-slate-900">
                        ${product.current_price.toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Markdown</p>
                      <p className="font-bold text-orange-600">
                        {product.ai_recommendation.discount_percentage.toFixed(
                          0,
                        )}
                        % off
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-1">New Price</p>
                      <p className="font-bold text-blue-600">
                        ${product.ai_recommendation.new_price.toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-1">
                        Stock / Days
                      </p>
                      <p className="font-medium text-slate-900">
                        {product.stock} / {product.days_left}d
                      </p>
                    </div>
                  </div>

                  {/* AI Reasoning (optional, can be toggled) */}
                  {product.ai_recommendation.reasoning && (
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <p className="text-xs text-slate-600 italic">
                        💡 {product.ai_recommendation.reasoning}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          {insights.campaign_recommendation.success_metrics.length > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-green-900 mb-2 text-sm">
                Success Metrics to Track
              </h4>
              <ul className="text-sm text-green-700 space-y-1">
                {insights.campaign_recommendation.success_metrics.map(
                  (metric, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 bg-green-600 rounded-full" />
                      {metric}
                    </li>
                  ),
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-slate-200 p-6">
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onExecute}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" />
              Start Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
