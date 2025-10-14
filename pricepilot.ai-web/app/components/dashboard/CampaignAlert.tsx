import { AlertCircle, Zap } from 'lucide-react';

interface CampaignAlertProps {
  onLaunchCampaign: () => void;
}

export default function CampaignAlert({
  onLaunchCampaign,
}: CampaignAlertProps) {
  return (
    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
      <div className="flex items-start gap-4">
        <svg
          className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">
            📊 Ready to Review Detailed Analysis?
          </h3>
          <p className="text-gray-600 mb-4">
            Get comprehensive AI insights including flash sale strategy,
            marketing channel recommendations, category-specific analysis, and
            expected profit impact.
          </p>
          <button
            onClick={onLaunchCampaign}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md"
          >
            🔍 Generate Detailed Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
