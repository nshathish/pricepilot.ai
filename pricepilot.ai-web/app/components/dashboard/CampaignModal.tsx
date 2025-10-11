import { Zap } from 'lucide-react';

import { getUrgencyColor, getUrgencyBadge } from '@/app/lib/utils/formatters';
import { calculateNewPrice } from '@/app/lib/utils/calculations';

import type { Product } from '@/app/types/product';

interface CampaignModalProps {
  products: Product[];
  onClose: () => void;
  onExecute: () => void;
}

export default function CampaignModal({
  products,
  onClose,
  onExecute,
}: CampaignModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">
              Launch Sale Campaign
            </h3>
            <p className="text-sm text-slate-500">
              Review AI recommendations and execute markdown strategy
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-xl font-semibold"
          >
            ✕
          </button>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-blue-600" />
            <p className="font-semibold text-blue-900">AI Analysis Complete</p>
          </div>
          <p className="text-sm text-blue-700 leading-relaxed">
            Based on inventory levels, sales velocity, competitor pricing, and
            clearance deadlines, the AI has calculated optimal markdown
            percentages to maximize profit while ensuring sell-through.
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{product.name}</p>
                  <p className="text-xs text-slate-500">{product.sku}</p>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-medium ${getUrgencyColor(product.urgency)}`}
                >
                  {getUrgencyBadge(product.urgency)}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-slate-500 text-xs mb-1">Current Price</p>
                  <p className="font-medium text-slate-900">
                    ${product.currentPrice.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-1">Markdown</p>
                  <p className="font-bold text-orange-600">
                    {product.recommendedMarkdown}% off
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-1">New Price</p>
                  <p className="font-bold text-blue-600">
                    $
                    {calculateNewPrice(
                      product.currentPrice,
                      product.recommendedMarkdown,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-1">Stock / Days</p>
                  <p className="font-medium text-slate-900">
                    {product.stock} / {product.daysToClearing}d
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onExecute}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
          >
            Execute Campaign
          </button>
        </div>
      </div>
    </div>
  );
}
