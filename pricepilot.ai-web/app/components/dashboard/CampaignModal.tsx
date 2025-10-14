'use client';

import { useState } from 'react';

import type { CampaignAnalysis } from '@/app/types/campaign';
import {
  AlertCircle,
  BarChart3,
  Calendar,
  CheckCircle2,
  DollarSign,
  Globe,
  Instagram,
  Mail,
  MessageSquare,
  Package,
  TrendingUp,
  X,
} from 'lucide-react';

interface CampaignModalProps {
  insights: CampaignAnalysis;
  onClose: () => void;
  onExecute: () => void;
}

export default function CampaignModal({
  insights,
  onClose,
  onExecute,
}: CampaignModalProps) {
  const [activeSection, setActiveSection] = useState<string>('overview');

  const getUrgencyColor = (level: string) => {
    switch (level) {
      case 'URGENT':
        return 'bg-red-50 border-red-200';
      case 'MODERATE':
        return 'bg-yellow-50 border-yellow-200';
      case 'LOW':
        return 'bg-green-50 border-green-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getUrgencyBadgeColor = (level: string) => {
    switch (level) {
      case 'URGENT':
        return 'bg-red-500 text-white';
      case 'MODERATE':
        return 'bg-yellow-500 text-white';
      case 'LOW':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High Priority':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Medium Priority':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Low Priority':
        return 'bg-gray-100 text-gray-800 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

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

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Detailed Analysis Report
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              AI-powered markdown optimization strategy
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Navigation */}
        <div className="px-6 py-4 bg-blue-50 border-b border-blue-100">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-semibold text-gray-700 mr-2">
              Jump to Section:
            </span>
            {[
              'overview',
              ...insights.products.map((p) =>
                p.name.toLowerCase().replace(' ', '-'),
              ),
              'campaign-plan',
              'success-metrics',
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === section
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-blue-600 hover:bg-blue-100 border border-blue-200'
                }`}
              >
                {section === 'overview'
                  ? '📊 Overview'
                  : section === 'campaign-plan'
                    ? '🎯 Campaign Plan'
                    : section === 'success-metrics'
                      ? '📈 Success Metrics'
                      : insights.products.find(
                          (p) =>
                            p.name.toLowerCase().replace(' ', '-') === section,
                        )?.name || section}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {/* Executive Summary */}
          <div id="overview" className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Executive Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-sm font-semibold text-red-900">
                    Urgent Action
                  </span>
                </div>
                <div className="text-3xl font-bold text-red-600 mb-1">
                  {insights.executive_summary.urgent_action_count}
                </div>
                <p className="text-sm text-red-700">
                  {insights.executive_summary.urgent_products.join(', ')}
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-yellow-600" />
                  <span className="text-sm font-semibold text-yellow-900">
                    Moderate Priority
                  </span>
                </div>
                <div className="text-3xl font-bold text-yellow-600 mb-1">
                  {insights.executive_summary.moderate_priority_count}
                </div>
                <p className="text-sm text-yellow-700">
                  {insights.executive_summary.moderate_products.join(', ')}
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-semibold text-green-900">
                    Expected Profit Impact
                  </span>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-1">
                  $
                  {(
                    insights.executive_summary.expected_profit_impact / 1000
                  ).toFixed(1)}
                  K
                </div>
                <p className="text-sm text-green-700">
                  After discounts applied
                </p>
              </div>
            </div>
          </div>

          {/* Product Deep Dives */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Product Deep Dives
            </h3>
            <div className="space-y-6">
              {insights.products.map((product) => (
                <div
                  key={product.product_id}
                  id={product.name.toLowerCase().replace(' ', '-')}
                  className={`border-2 rounded-lg p-6 ${getUrgencyColor(product.urgency_level)}`}
                >
                  {/* Product Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">
                        {product.category === 'Accessories'
                          ? '🧢'
                          : product.category === 'Apparel'
                            ? '👕'
                            : product.category === 'Footwear'
                              ? '👟'
                              : '📦'}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xl font-bold text-gray-900">
                            {product.name}
                          </h4>
                          <span
                            className={`px-2 py-1 rounded text-xs font-bold ${getUrgencyBadgeColor(product.urgency_level)}`}
                          >
                            {product.urgency_level}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {product.sku} • {product.category}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Current Price</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${product.current_price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Product Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white bg-opacity-60 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Package className="w-4 h-4 text-gray-600" />
                        <h5 className="font-semibold text-gray-900 text-sm">
                          Stock Situation
                        </h5>
                      </div>
                      <p className="text-lg font-bold text-gray-900 mb-1">
                        {product.stock_units} units in stock
                      </p>
                      {product.days_until_clearance && (
                        <p className="text-sm text-gray-600">
                          Only {product.days_until_clearance} days until
                          clearance deadline
                        </p>
                      )}
                    </div>

                    <div className="bg-white bg-opacity-60 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="w-4 h-4 text-gray-600" />
                        <h5 className="font-semibold text-gray-900 text-sm">
                          Current Performance
                        </h5>
                      </div>
                      <p className="text-lg font-bold text-gray-900 mb-1">
                        {product.sales_rate} units/day sales rate
                      </p>
                      <p className="text-sm text-gray-600">
                        Natural sellthrough: only {product.natural_sellthrough}%
                        (
                        {Math.round(
                          (product.stock_units * product.natural_sellthrough) /
                            100,
                        )}{' '}
                        units)
                      </p>
                    </div>
                  </div>

                  {/* Recommended Action */}
                  <div
                    className={`rounded-lg p-5 border-2 ${
                      product.urgency_level === 'URGENT'
                        ? 'bg-red-100 border-red-400'
                        : 'bg-yellow-100 border-yellow-400'
                    }`}
                  >
                    <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Recommended Action
                    </h5>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-700 mb-1">Discount</p>
                        <p className="text-3xl font-bold text-gray-900">
                          {product.recommended_action.discount_percentage}% off
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-700 mb-1">New Price</p>
                        <p className="text-3xl font-bold text-gray-900">
                          ${product.recommended_action.new_price.toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-700 mb-1">
                          Expected Impact
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                          {product.recommended_action.expected_velocity_boost}
                        </p>
                        <p className="text-sm text-gray-600">
                          Target: {product.recommended_action.target_units_sold}
                          + units sold
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">
                          ▸ Why {product.recommended_action.discount_percentage}
                          %?
                        </p>
                        <p className="text-sm text-gray-700 pl-4">
                          {product.recommended_action.rationale}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">
                          ▸ Marketing Priority:
                        </p>
                        <p className="text-sm text-gray-700 pl-4">
                          {product.recommended_action.marketing_priority}
                        </p>
                      </div>

                      {product.recommended_action.risk_if_no_action && (
                        <div>
                          <p className="text-sm font-semibold text-red-900 mb-1">
                            ▸ Risk if no action:
                          </p>
                          <p className="text-sm text-red-800 pl-4">
                            {product.recommended_action.risk_if_no_action}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Campaign Plan */}
          <div id="campaign-plan" className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Campaign Plan
            </h3>
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
                    {insights.campaign_plan.duration_days} days
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
                    $
                    {(insights.campaign_plan.expected_uplift / 1000).toFixed(1)}
                    K
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
                    ${(insights.campaign_plan.total_discount / 1000).toFixed(1)}
                    K
                  </p>
                </div>
              </div>

              <h4 className="font-bold text-gray-900 mb-3">
                Marketing Channels
              </h4>
              <div className="space-y-3">
                {insights.marketing_channels.map((channel, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 border border-gray-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {getChannelIcon(channel.channel)}
                        <div>
                          <h5 className="font-bold text-gray-900">
                            {channel.channel}
                          </h5>
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
                        <p className="font-semibold text-gray-900">
                          {channel.reach}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Conversion</p>
                        <p className="font-semibold text-gray-900">
                          {channel.conversion}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Budget</p>
                        <p className="font-semibold text-gray-900">
                          {channel.budget}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Timing</p>
                        <p className="font-semibold text-gray-900">
                          {channel.timing}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div id="success-metrics" className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Success Metrics
            </h3>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Inventory Reduction
                    </p>
                    <p className="text-sm text-gray-700">
                      Target: 70%+ for priority items
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Sales Velocity
                    </p>
                    <p className="text-sm text-gray-700">
                      Target: 200%+ increase during flash period
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Margin Preservation
                    </p>
                    <p className="text-sm text-gray-700">
                      Stay above unit cost
                    </p>
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
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <p>Ready to execute this campaign?</p>
            <p className="text-xs text-gray-500">
              This will apply the recommended discounts and launch marketing
              channels
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Review Later
            </button>
            <button
              onClick={onExecute}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-medium shadow-lg"
            >
              Execute Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
