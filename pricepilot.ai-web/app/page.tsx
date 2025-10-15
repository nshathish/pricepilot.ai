import AllProductsTable from '@/app/components/home/AllProductsTable';
import AnalyzeButton from '@/app/components/home/AnalyzeButton';

import { getProductsForDisplay } from '@/app/lib/services/productService';

export default async function Home() {
  const products = await getProductsForDisplay();
  console.log(products);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Dynamic Markdown Manager
            </h1>
            <p className="text-slate-600">
              Manage your product inventory and optimize clearance pricing
            </p>
          </div>
        </div>

        {products.length > 0 ? (
          <AllProductsTable products={products} />
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-12 text-center">
            <p className="text-slate-500">No products found in inventory</p>
          </div>
        )}

        <AnalyzeButton disabled={products.length === 0} />
      </div>
    </div>
  );
}
