import { Package } from 'lucide-react';

import ProductRow from '@/app/components/dashboard/ProductsRow';

import type { ClearanceCandidate } from '@/app/types/clearance';

interface ProductsTableProps {
  products: ClearanceCandidate[];
}

export default function ProductsTable({ products }: ProductsTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <Package className="w-5 h-5" />
          Clearance Candidates
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Status
              </th>
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
                Projected Sell
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                AI Recommendation
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductRow key={product.product_id} product={product} />
              ))
            ) : (
              <tr>
                <td colSpan={8} className="px-6 py-12 text-center">
                  <Package className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-600">
                    No clearance candidates found
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
