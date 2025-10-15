'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AlertCircle } from 'lucide-react';

import { useClearance } from '@/app/contexts/ClearanceContext';

import { fetchSimulationData } from '@/app/lib/services/simulationService';

import ModalHeader from '@/app/components/campaign-modal/ModalHeader';
import SectionNavigation from '@/app/components/campaign-modal/SectionNavigation';
import ExecutiveSummary from '@/app/components/campaign-modal/ExecutiveSummary';
import ProductDeepDive from '@/app/components/campaign-modal/ProductDeepDive';
import CampaignPlan from '@/app/components/campaign-modal/CampaignPlan';
import ModalFooter from '@/app/components/campaign-modal/ModalFooter';
import SuccessMetrics from '@/app/components/campaign-modal/SuccessMetrics';

interface CampaignModalProps {
  onClose: () => void;
}

export default function CampaignModal({ onClose }: CampaignModalProps) {
  const router = useRouter();
  const { campaignAnalysis, setSimulationResult } = useClearance();

  const [activeSection, setActiveSection] = useState<string>('overview');
  const [error, setError] = useState<string | null>(null);
  const [isLoadingSimulation, setIsLoadingSimulation] = useState(false);

  const handleSimulation = async (): Promise<void> => {
    if (!campaignAnalysis) {
      setError(
        'No campaign analysis available. Please generate analysis first.',
      );
      return;
    }

    setIsLoadingSimulation(true);
    setError(null);

    try {
      const data = await fetchSimulationData(campaignAnalysis!);
      setSimulationResult(data);
      console.log('Simulation complete:', data);

      onClose();

      router.push('/simulation-summary');
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      console.error('Simulation error:', err);
    } finally {
      setIsLoadingSimulation(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!campaignAnalysis) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
          <div className="flex items-start gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1">
                No Analysis Data
              </h3>
              <p className="text-sm text-red-700">
                Campaign analysis data is not available. Please generate the
                analysis first.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <ModalHeader onClose={onClose} />

        <SectionNavigation
          activeSection={activeSection}
          products={campaignAnalysis.products}
          onNavigate={scrollToSection}
        />

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-red-900 mb-1">Error</h3>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          )}

          <ExecutiveSummary summary={campaignAnalysis.executive_summary} />

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Product Deep Dives
            </h3>
            <div className="space-y-6">
              {campaignAnalysis.products.map((product) => (
                <ProductDeepDive key={product.product_id} product={product} />
              ))}
            </div>
          </div>

          <CampaignPlan
            plan={campaignAnalysis.campaign_plan}
            channels={campaignAnalysis.marketing_channels}
          />

          <SuccessMetrics />
        </div>

        <ModalFooter
          onClose={onClose}
          onExecute={handleSimulation}
          isLoading={isLoadingSimulation}
        />
      </div>
    </div>
  );
}
