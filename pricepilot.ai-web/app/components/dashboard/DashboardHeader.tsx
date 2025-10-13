interface DashboardHeaderProps {
  totalProducts: number;
  productsRequiringAction: number;
  potentialRevenue: number;
}

export default function DashboardHeader({
  totalProducts,
  productsRequiringAction,
  potentialRevenue,
}: DashboardHeaderProps) {
  return (
    <div className="mb-8">
      <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Dynamic Markdown Manager
            </h1>
            <p className="text-slate-600">
              AI-powered clearance optimization for maximum profit
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-sm text-slate-500">Total Products Monitored</p>
              <p className="text-2xl font-bold text-slate-900">
                {totalProducts}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500">Requiring Action</p>
              <p className="text-2xl font-bold text-orange-600">
                {productsRequiringAction}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500">Potential Impact</p>
              <p className="text-2xl font-bold text-green-600">
                $
                {potentialRevenue.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
