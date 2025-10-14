import { BarChart3, Globe, Instagram, Mail, MessageSquare } from 'lucide-react';

import { getPriorityColor } from '@/app/lib/utils/campaignUtils';

import type { MarketingChannel } from '@/app/types/campaign';

interface MarketingChannelCardProps {
  channel: MarketingChannel;
}

export default function MarketingChannelCard({
  channel,
}: MarketingChannelCardProps) {
  const getChannelIcon = (channel: string) => {
    if (channel.includes('Email')) return <Mail className="w-5 h-5" />;
    if (channel.includes('Instagram') || channel.includes('Social'))
      return <Instagram className="w-5 h-5" />;
    if (channel.includes('SMS') || channel.includes('Push'))
      return <MessageSquare className="w-5 h-5" />;
    if (channel.includes('Website') || channel.includes('Banner'))
      return <Globe className="w-5 h-5" />;
    return <BarChart3 className="w-5 h-5" />;
  };

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          {getChannelIcon(channel.channel)}
          <div>
            <h5 className="font-bold text-gray-900">{channel.channel}</h5>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(channel.priority)}`}
        >
          {channel.priority}
        </span>
      </div>

      <p className="text-sm text-gray-700 mb-3">
        <strong>Why:</strong> {channel.why}
      </p>

      <div className="grid grid-cols-4 gap-3 text-xs">
        <div>
          <p className="text-gray-600 mb-1">Reach</p>
          <p className="font-semibold text-gray-900">{channel.reach}</p>
        </div>
        <div>
          <p className="text-gray-600 mb-1">Conversion</p>
          <p className="font-semibold text-gray-900">{channel.conversion}</p>
        </div>
        <div>
          <p className="text-gray-600 mb-1">Budget</p>
          <p className="font-semibold text-gray-900">{channel.budget}</p>
        </div>
        <div>
          <p className="text-gray-600 mb-1">Timing</p>
          <p className="font-semibold text-gray-900">{channel.timing}</p>
        </div>
      </div>
    </div>
  );
}
