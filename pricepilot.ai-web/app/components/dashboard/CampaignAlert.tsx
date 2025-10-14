import { AlertCircle, Zap } from 'lucide-react';

interface CampaignAlertProps {
  productsRequiringAction: number;
  onLaunchCampaign: () => void;
}

export default function CampaignAlert({
  productsRequiringAction,
  onLaunchCampaign,
}: CampaignAlertProps) {
  return (
    <div className="mt-6 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <AlertCircle className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-orange-900 text-lg mb-1">
            📊 Ready to Review Detailed Analysis?
            </p>
            <p className="text-sm text-orange-700">
                Get comprehensive AI insights including flash sale strategy, marketing channel recommendations, category-specific analysis, and expected profit impact.
            </p>
          </div>
        </div>
        <button
          onClick={onLaunchCampaign}
          className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
        >
          <Zap className="w-5 h-5" />
        🔍 Generate Detailed Analysis
        </button>
      </div>
    </div>
  );
}
