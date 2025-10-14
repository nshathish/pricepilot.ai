import { Package, BarChart3 } from 'lucide-react';

import type { ProductAnalysis } from '@/app/types/campaign';

interface ProductStatsGridProps {
  product: ProductAnalysis;
}

export default function ProductStatsGrid({ product }: ProductStatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div className="bg-white bg-opacity-60 rounded-lg p-4 border border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <Package className="w-4 h-4 text-gray-600" />
          <h5 className="font-semibold text-gray-900 text-sm">
            Stock Situation
          </h5>
        </div>
        <p className="text-lg font-bold text-gray-900 mb-1">
          {product.stock_units} units in stock
        </p>
        {product.days_until_clearance && (
          <p className="text-sm text-gray-600">
            Only {product.days_until_clearance} days until clearance deadline
          </p>
        )}
      </div>

      <div className="bg-white bg-opacity-60 rounded-lg p-4 border border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 className="w-4 h-4 text-gray-600" />
          <h5 className="font-semibold text-gray-900 text-sm">
            Current Performance
          </h5>
        </div>
        <p className="text-lg font-bold text-gray-900 mb-1">
          {product.sales_rate} units/day sales rate
        </p>
        <p className="text-sm text-gray-600">
          Natural sellthrough: only {product.natural_sellthrough}% (
          {Math.round(
            (product.stock_units * product.natural_sellthrough) / 100,
          )}{' '}
          units)
        </p>
      </div>
    </div>
  );
}
