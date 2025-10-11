import { Package, Calendar, TrendingDown } from 'lucide-react';

import { getUrgencyColor, getUrgencyBadge } from '@/app/lib/utils/formatters';
import { calculateNewPrice } from '@/app/lib/utils/calculations';

import type { Product } from '@/app/types/product';

interface ProductRowProps {
  product: Product;
}

export default function ProductRow({ product }: ProductRowProps) {
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(product.urgency)}`}
        >
          {getUrgencyBadge(product.urgency)}
        </span>
      </td>
      <td className="px-6 py-4">
        <div>
          <p className="font-medium text-slate-900">{product.name}</p>
          <p className="text-sm text-slate-500">
            {product.sku} • {product.category}
          </p>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-slate-400" />
          <span className="font-medium text-slate-900">{product.stock}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-slate-400" />
          <span
            className={`font-medium ${product.daysToClearing <= 7 ? 'text-red-600' : 'text-slate-900'}`}
          >
            {product.daysToClearing}d
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div>
          <p className="font-medium text-slate-900">
            ${product.currentPrice.toFixed(2)}
          </p>
          <p className="text-xs text-slate-500">
            Base: ${product.basePrice.toFixed(2)}
          </p>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="text-slate-900">
          {product.recentSalesRate.toFixed(1)} units/day
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-slate-200 rounded-full h-2 max-w-[80px]">
            <div
              className={`h-2 rounded-full ${
                product.projectedSellThrough >= 90
                  ? 'bg-green-500'
                  : product.projectedSellThrough >= 60
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
              }`}
              style={{
                width: `${Math.min(product.projectedSellThrough, 100)}%`,
              }}
            />
          </div>
          <span className="text-sm font-medium text-slate-900">
            {product.projectedSellThrough}%
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        {product.recommendedMarkdown > 0 ? (
          <div className="flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-orange-500" />
            <span className="font-semibold text-slate-900">
              {product.recommendedMarkdown}% off
            </span>
            <span className="text-sm text-slate-500">
              → $
              {calculateNewPrice(
                product.currentPrice,
                product.recommendedMarkdown,
              )}
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
