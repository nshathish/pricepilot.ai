import { AlertCircle, TrendingUp, DollarSign } from 'lucide-react';

import StatCard from '@/app/components/campaign-modal/StatCard';

import type { CampaignAnalysis } from '@/app/types/campaign';

interface ExecutiveSummaryProps {
  summary: CampaignAnalysis['executive_summary'];
}

export default function ExecutiveSummary({ summary }: ExecutiveSummaryProps) {
  return (
    <div id="overview" className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Executive Summary
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          icon={<AlertCircle className="w-5 h-5" />}
          label="Urgent Action"
          value={summary.urgent_action_count}
          description={summary.urgent_products.join(', ')}
          bgColor="bg-red-50"
          borderColor="border-red-200"
          iconColor="text-red-600"
          valueColor="text-red-600"
          descColor="text-red-700"
        />

        <StatCard
          icon={<TrendingUp className="w-5 h-5" />}
          label="Moderate Priority"
          value={summary.moderate_priority_count}
          description={summary.moderate_products.join(', ')}
          bgColor="bg-yellow-50"
          borderColor="border-yellow-200"
          iconColor="text-yellow-600"
          valueColor="text-yellow-600"
          descColor="text-yellow-700"
        />

        <StatCard
          icon={<DollarSign className="w-5 h-5" />}
          label="Expected Profit Impact"
          value={`$${(summary.expected_profit_impact / 1000).toFixed(1)}K`}
          description="After discounts applied"
          bgColor="bg-green-50"
          borderColor="border-green-200"
          iconColor="text-green-600"
          valueColor="text-green-600"
          descColor="text-green-700"
        />
      </div>
    </div>
  );
}
