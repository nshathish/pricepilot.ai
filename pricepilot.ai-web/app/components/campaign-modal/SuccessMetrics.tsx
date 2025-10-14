import { CheckCircle2 } from 'lucide-react';

export default function SuccessMetrics() {
  return (
    <div id="success-metrics" className="mb-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Success Metrics</h3>
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">Inventory Reduction</p>
              <p className="text-sm text-gray-700">
                Target: 70%+ for priority items
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">Sales Velocity</p>
              <p className="text-sm text-gray-700">
                Target: 200%+ increase during flash period
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">Margin Preservation</p>
              <p className="text-sm text-gray-700">Stay above unit cost</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">
                Customer Acquisition
              </p>
              <p className="text-sm text-gray-700">
                Track new vs. returning buyers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
