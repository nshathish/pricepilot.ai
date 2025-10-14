'use client';

import { useState } from 'react';

import ModalHeader from '@/app/components/campaign-modal/ModalHeader';
import SectionNavigation from '@/app/components/campaign-modal/SectionNavigation';
import ExecutiveSummary from '@/app/components/campaign-modal/ExecutiveSummary';
import ProductDeepDive from '@/app/components/campaign-modal/ProductDeepDive';
import CampaignPlan from '@/app/components/campaign-modal/CampaignPlan';
import ModalFooter from '@/app/components/campaign-modal/ModalFooter';

import type { CampaignAnalysis } from '@/app/types/campaign';
import SuccessMetrics from '@/app/components/campaign-modal/SuccessMetrics';

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
        <ModalHeader onClose={onClose} />

        <SectionNavigation
          activeSection={activeSection}
          products={insights.products}
          onNavigate={scrollToSection}
        />

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <ExecutiveSummary summary={insights.executive_summary} />

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Product Deep Dives
            </h3>
            <div className="space-y-6">
              {insights.products.map((product) => (
                <ProductDeepDive key={product.product_id} product={product} />
              ))}
            </div>
          </div>

          <CampaignPlan
            plan={insights.campaign_plan}
            channels={insights.marketing_channels}
          />

          <SuccessMetrics />
        </div>

        <ModalFooter onClose={onClose} onExecute={onExecute} />
      </div>
    </div>
  );
}
