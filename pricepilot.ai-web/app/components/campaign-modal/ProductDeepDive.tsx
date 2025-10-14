import { CheckCircle2 } from 'lucide-react';

import ProductStatsGrid from '@/app/components/campaign-modal/ProductsGrid';

import {
  getCategoryIcon,
  getUrgencyBadgeColor,
  getUrgencyColor,
} from '@/app/lib/utils/campaignUtils';

import type { ProductAnalysis } from '@/app/types/campaign';

interface ProductDeepDiveProps {
  product: ProductAnalysis;
}

export default function ProductDeepDive({ product }: ProductDeepDiveProps) {
  return (
    <div
      id={product.name.toLowerCase().replace(' ', '-')}
      className={`border-2 rounded-lg p-6 ${getUrgencyColor(product.urgency_level)}`}
    >
      {/* Product Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{getCategoryIcon(product.category)}</div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-xl font-bold text-gray-900">
                {product.name}
              </h4>
              <span
                className={`px-2 py-1 rounded text-xs font-bold ${getUrgencyBadgeColor(product.urgency_level)}`}
              >
                {product.urgency_level}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {product.sku} • {product.category}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Current Price</p>
          <p className="text-2xl font-bold text-gray-900">
            ${product.current_price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Product Stats */}
      <ProductStatsGrid product={product} />

      {/* Recommended Action */}
      <div
        className={`rounded-lg p-5 border-2 ${
          product.urgency_level === 'URGENT'
            ? 'bg-red-100 border-red-400'
            : 'bg-yellow-100 border-yellow-400'
        }`}
      >
        <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          Recommended Action
        </h5>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-700 mb-1">Discount</p>
            <p className="text-3xl font-bold text-gray-900">
              {product.recommended_action.discount_percentage}% off
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-700 mb-1">New Price</p>
            <p className="text-3xl font-bold text-gray-900">
              ${product.recommended_action.new_price.toFixed(2)}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-700 mb-1">Expected Impact</p>
            <p className="text-lg font-bold text-gray-900">
              {product.recommended_action.expected_velocity_boost}
            </p>
            <p className="text-sm text-gray-600">
              Target: {product.recommended_action.target_units_sold}+ units sold
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-3">
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-1">
              ▸ Why {product.recommended_action.discount_percentage}%?
            </p>
            <p className="text-sm text-gray-700 pl-4">
              {product.recommended_action.rationale}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900 mb-1">
              ▸ Marketing Priority:
            </p>
            <p className="text-sm text-gray-700 pl-4">
              {product.recommended_action.marketing_priority}
            </p>
          </div>

          {product.recommended_action.risk_if_no_action && (
            <div>
              <p className="text-sm font-semibold text-red-900 mb-1">
                ▸ Risk if no action:
              </p>
              <p className="text-sm text-red-800 pl-4">
                {product.recommended_action.risk_if_no_action}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
