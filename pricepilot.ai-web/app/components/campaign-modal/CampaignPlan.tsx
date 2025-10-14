import { Calendar, TrendingUp, DollarSign } from 'lucide-react';

import MarketingChannelCard from '@/app/components/campaign-modal/MarketingChannelCard';

import type { CampaignAnalysis, MarketingChannel } from '@/app/types/campaign';

interface CampaignPlanProps {
  plan: CampaignAnalysis['campaign_plan'];
  channels: MarketingChannel[];
}

export default function CampaignPlan({ plan, channels }: CampaignPlanProps) {
  return (
    <div id="campaign-plan" className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Campaign Plan</h3>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">
                Campaign Duration
              </span>
            </div>
            <p className="text-3xl font-bold text-blue-600">
              {plan.duration_days} days
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">
                Expected Uplift
              </span>
            </div>
            <p className="text-3xl font-bold text-green-600">
              ${(plan.expected_uplift / 1000).toFixed(1)}K
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-semibold text-gray-700">
                Total Discount
              </span>
            </div>
            <p className="text-3xl font-bold text-orange-600">
              ${(plan.total_discount / 1000).toFixed(1)}K
            </p>
          </div>
        </div>

        <h4 className="font-bold text-gray-900 mb-3">Marketing Channels</h4>
        <div className="space-y-3">
          {channels.map((channel, index) => (
            <MarketingChannelCard key={index} channel={channel} />
          ))}
        </div>
      </div>
    </div>
  );
}
