import { useState, useEffect } from 'react';
import { Zap, X } from 'lucide-react';
import type { ClearanceCandidate, Insights } from '@/app/types/clearance';

interface CampaignModalProps {
  products: ClearanceCandidate[];
  insights: Insights;
  onClose: () => void;
  onExecute: () => void;
}

export default function CampaignModal({
  products,
  insights,
  onClose,
  onExecute,
}: CampaignModalProps) {
  const [aiContent, setAiContent] = useState({ email: '', instagram: '' });
  const [selectedTemplate, setSelectedTemplate] = useState<'email' | 'instagram'>('email');
  const [loading, setLoading] = useState(false);

  // Helper to build business-specific prompt for the AI
  function getPrompt(scenario: 'email' | 'instagram') {
    const campaignSummary = `
Campaign Duration: ${insights.campaign_recommendation.duration_days} days
Expected Profit Uplift: $${insights.campaign_recommendation.expected_profit_uplift}
Clearance Deadline: ${products[0]?.clearance_end_date || 'N/A'}
Success Metrics: ${insights.campaign_recommendation.success_metrics.join(', ')}
    `.trim();

    if (scenario === 'email') {
      return `You are a retail markdown optimization agent. Compose an HTML business email summarizing the campaign for internal review.

Include:
- A summary of campaign duration, expected profit uplift, clearance deadline, and key metrics.
- For each product, list: Name, SKU, category, current price, new price, markdown percentage, units to sell, days left, holding cost per unit per day, and estimated net profit uplift.
- Table format preferred.
- End with a note about data sources (competitor pricing, elasticity, etc.).

Campaign Summary:
${campaignSummary}

Products:
${products.map(p =>
  `${p.product_name} (SKU: ${p.sku}, Category: ${p.category}): Current $${p.current_price}, Markdown ${p.ai_recommendation.discount_percentage}% → New $${p.ai_recommendation.new_price}, Stock: ${p.stock}, Days Left: ${p.days_left}, Holding Cost/Day: $${p.holding_cost_per_unit_per_day || 0}, Est. Uplift: $${((p.ai_recommendation.new_price - p.unit_cost) * p.stock + (p.holding_cost_per_unit_per_day || 0) * p.days_left * p.stock).toFixed(2)}`
).join('\n')}
`;
    } else {
      return `You are a retail marketing AI agent. Write a catchy Instagram post (as HTML) for our clearance event.

Include:
- Product names, percent off, and a call-to-action to shop before the deadline.
- Use hashtags for clearance, deals, urgency, and store branding.
- Make it visually appealing and concise.

Products:
${products.map(p =>
  `${p.product_name}: ${p.ai_recommendation.discount_percentage}% off (was $${p.current_price}, now $${p.ai_recommendation.new_price}), Only ${p.stock} left!`
).join('\n')}
Clearance ends on ${products[0]?.clearance_end_date || 'soon'}! Shop now! #Clearance #Deals #LastChance #${p.category.replace(/\s/g, '')}
`;
    }
  }

  async function generateCampaignContent(scenario: 'email' | 'instagram') {
    setLoading(true);
    try {
      const response = await fetch('/api/generate-campaign-content', {
        method: 'POST',
        body: JSON.stringify({
          prompt: getPrompt(scenario),
          scenario,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      setAiContent(prev => ({ ...prev, [scenario]: data.content }));
    } catch (e) {
      alert('Failed to generate campaign content. Please try again.');
    }
    setLoading(false);
  }

  useEffect(() => {
    if (!aiContent[selectedTemplate] && products.length > 0) {
      generateCampaignContent(selectedTemplate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTemplate]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                View AI Markdown Analysis
              </h3>
              <p className="text-sm text-slate-500">
                Review AI recommendations and execute markdown strategy
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex gap-2 mb-4">
            <button
              className={`px-4 py-2 rounded-lg border ${selectedTemplate === 'email' ? 'bg-blue-600 text-white' : 'bg-white'}`}
              onClick={() => setSelectedTemplate('email')}
            >
              Email
            </button>
            <button
              className={`px-4 py-2 rounded-lg border ${selectedTemplate === 'instagram' ? 'bg-purple-600 text-white' : 'bg-white'}`}
              onClick={() => setSelectedTemplate('instagram')}
            >
              Instagram Post
            </button>
          </div>
          {/* AI Campaign Output */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            {loading ? (
              <div className="text-gray-500 py-8 text-center">Generating {selectedTemplate} campaign content...</div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: aiContent[selectedTemplate] }} />
            )}
          </div>
          <div className="flex gap-2 mb-2">
            <button
              className="mr-2 px-4 py-2 bg-green-600 text-white rounded-lg"
              onClick={() => {
                const content = aiContent[selectedTemplate];
                const blob = new Blob([content], { type: 'text/html' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${selectedTemplate}-campaign.html`;
                a.click();
                URL.revokeObjectURL(url);
              }}
              disabled={!aiContent[selectedTemplate]}
            >
              Download
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={() => {
                navigator.clipboard.writeText(aiContent[selectedTemplate]);
                alert('Copied to clipboard!');
              }}
              disabled={!aiContent[selectedTemplate]}
            >
              Copy
            </button>
          </div>
          {selectedTemplate === 'instagram' && (
            <div className="text-xs mt-2 text-gray-600">
              Copy the post above and paste it into your Instagram app, or download the HTML to share as needed.
            </div>
          )}
          {selectedTemplate === 'email' && (
            <div className="text-xs mt-2 text-gray-600">
              Download the HTML and use it in your email campaign tool, or copy and paste into your email client.
            </div>
          )}
        </div>
        <div className="sticky bottom-0 bg-white border-t border-slate-200 p-6">
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                generateCampaignContent(selectedTemplate);
                onExecute();
              }}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              disabled={loading}
            >
              <Zap className="w-4 h-4" />
              Start Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
