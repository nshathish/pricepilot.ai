'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useClearance } from '@/app/contexts/ClearanceContext';

import { viewClearanceAnalysis } from '@/app/lib/services/clearanceProductService';

import DashboardHeader from '@/app/components/dashboard/DashboardHeader';
import ProductsTable from '@/app/components/dashboard/ProductsTable';
import CampaignAlert from '@/app/components/dashboard/CampaignAlert';
import CampaignModal from '@/app/components/campaign-modal/CampaignModal';
import LoadingScreen from '@/app/components/dashboard/LoadingScreen';

import type { CampaignAnalysisResponse } from '@/app/types/campaign';

export default function DashboardPage() {
  const router = useRouter();

  const { analysisData, setCampaignAnalysis } = useClearance();
  const [showModal, setShowModal] = useState(false);
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);
  const [, setInsights] = useState<CampaignAnalysisResponse | null>(null);

  useEffect(() => {
    if (!analysisData) {
      router.push('/');
    }
  }, [analysisData, router]);

  const handleGenerateDetailedAnalysis = async () => {
    setLoadingAnalysis(true);

    try {
      const analysisResponse = await viewClearanceAnalysis();
      setCampaignAnalysis(analysisResponse);
      setInsights(analysisResponse);
      setShowModal(true);
    } catch (error) {
      console.error('Failed to generate analysis:', error);
      // Optionally show an error message to the user
      alert('Failed to generate detailed analysis. Please try again.');
    } finally {
      setLoadingAnalysis(false);
    }
  };

  if (!analysisData) {
    return <LoadingScreen />;
  }

  const productsRequiringAction = analysisData.clearance_candidates.filter(
    (product) => product.ai_recommendation.action === 'discount',
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader
          totalProducts={analysisData.summary.total_products_analyzed}
          productsRequiringAction={
            analysisData.summary.products_requiring_action
          }
          potentialRevenue={analysisData.summary.total_potential_revenue_impact}
        />

        <ProductsTable products={analysisData.clearance_candidates} />

        {productsRequiringAction.length > 0 && (
          <CampaignAlert
            loadingAnalysis={loadingAnalysis}
            onGenerateDetailedAnalysis={handleGenerateDetailedAnalysis}
          />
        )}
      </div>

      {showModal && (
        <CampaignModal
          onClose={() => setShowModal(false)}
          onExecute={() => {
            // Handle campaign execution
            console.log(
              'Executing campaign for products:',
              productsRequiringAction,
            );
            setShowModal(false);
            // You might want to call an API here to execute the campaign
          }}
        />
      )}
    </div>
  );
}
