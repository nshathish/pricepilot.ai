import { Package, Calendar, TrendingDown } from 'lucide-react';

import { getUrgencyColor } from '@/app/lib/utils/formatters';

import type { ClearanceCandidate } from '@/app/types/clearance';

interface ProductRowProps {
  product: ClearanceCandidate;
}

export default function ProductRow({ product }: ProductRowProps) {
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      {/* Status */}
      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(product.status)}`}
        >
          {product.status}
        </span>
      </td>

      {/* Product */}
      <td className="px-6 py-4">
        <div>
          <p className="font-medium text-slate-900">{product.product_name}</p>
          <p className="text-sm text-slate-500">
            {product.sku} • {product.category}
          </p>
        </div>
      </td>

      {/* Stock */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-slate-400" />
          <span className="font-medium text-slate-900">{product.stock}</span>
        </div>
      </td>

      {/* Days Left */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-slate-400" />
          <span
            className={`font-medium ${product.days_left <= 7 ? 'text-red-600' : 'text-slate-900'}`}
          >
            {product.days_left}d
          </span>
        </div>
      </td>

      {/* Current Price */}
      <td className="px-6 py-4">
        <div>
          <p className="font-medium text-slate-900">
            ${product.current_price.toFixed(2)}
          </p>
          <p className="text-xs text-slate-500">
            Base: ${product.base_price.toFixed(2)}
          </p>
        </div>
      </td>

      {/* Sales Rate */}
      <td className="px-6 py-4">
        <span className="text-slate-900">
          {product.sales_rate.toFixed(1)} units/day
        </span>
      </td>

      {/* Projected Sell */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-slate-200 rounded-full h-2 max-w-[80px]">
            <div
              className={`h-2 rounded-full ${
                product.projected_sell_percentage >= 90
                  ? 'bg-green-500'
                  : product.projected_sell_percentage >= 60
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
              }`}
              style={{
                width: `${Math.min(product.projected_sell_percentage, 100)}%`,
              }}
            />
          </div>
          <span className="text-sm font-medium text-slate-900">
            {product.projected_sell_percentage.toFixed(0)}%
          </span>
        </div>
      </td>

      {/* AI Recommendation */}
      <td className="px-6 py-4">
        {product.ai_recommendation.action === 'discount' ? (
          <div className="flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-orange-500" />
            <span className="font-semibold text-slate-900">
              {product.ai_recommendation.discount_percentage.toFixed(0)}% off
            </span>
            <span className="text-sm text-slate-500">
              → ${product.ai_recommendation.new_price.toFixed(2)}
            </span>
          </div>
        ) : (
          <span className="text-sm text-green-600 font-medium flex items-center gap-1">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
            No action needed
          </span>
        )}
      </td>
    </tr>
  );
}
