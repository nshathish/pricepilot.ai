import { AlertCircle, BarChart3, Info, Zap } from 'lucide-react';

interface CampaignAlertProps {
  onLaunchCampaign: () => void;
}

export default function CampaignAlert({
  onLaunchCampaign,
}: CampaignAlertProps) {
  return (
    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
      <div className="flex items-start gap-4">
        <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Ready to Review Detailed Analysis?
          </h3>
          <p className="text-gray-600 mb-4">
            Get comprehensive AI insights including flash sale strategy,
            marketing channel recommendations, category-specific analysis, and
            expected profit impact.
          </p>
          <button
            onClick={onLaunchCampaign}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <BarChart3 className="w-4 h-4" />
            Generate Detailed Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
