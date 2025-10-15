import { Package, Calendar } from 'lucide-react';

import type { ProductListItem } from '@/app/types/product';

/*type ProductListItem = Pick<
  Product,
  | 'id'
  | 'sku'
  | 'name'
  | 'category'
  | 'currentPrice'
  | 'stock'
  | 'daysToClearing'
  | 'recentSalesRate'
> & {
  totalHoldingCost?: number;
  dailyHoldingCost?: number;
};*/

interface AllProductsTableProps {
  products: ProductListItem[];
}

export default function AllProductsTable({ products }: AllProductsTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <Package className="w-5 h-5" />
          Product Inventory
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Days Left
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Current Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Sales Rate
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Holding Cost
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {products.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-slate-50 transition-colors"
              >
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
                    <span className="font-medium text-slate-900">
                      {product.stock} units
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="font-medium text-slate-900">
                      {product.daysToClearing} days
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="font-medium text-slate-900">
                    ${product.currentPrice.toFixed(2)}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <span className="text-slate-900">
                    {product.recentSalesRate.toFixed(1)} units/day
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-semibold text-slate-900">
                      ${product.totalHoldingCost?.toFixed(2) || '0.00'}
                    </p>
                    <p className="text-xs text-slate-500">
                      ${product.dailyHoldingCost?.toFixed(2) || '0.00'}/day
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
