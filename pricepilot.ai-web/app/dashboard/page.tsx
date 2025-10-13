'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useClearance } from '@/app/contexts/ClearanceContext';

import DashboardHeader from '@/app/components/dashboard/DashboardHeader';
import ProductsTable from '@/app/components/dashboard/ProductsTable';
import CampaignAlert from '@/app/components/dashboard/CampaignAlert';
import CampaignModal from '@/app/components/dashboard/CampaignModal';

export default function DashboardPage() {
  const router = useRouter();

  const { analysisData } = useClearance();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Redirect back if no data
    if (!analysisData) {
      router.push('/');
    }
  }, [analysisData, router]);

  if (!analysisData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <svg
                className="animate-spin h-12 w-12 text-blue-600 mx-auto mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <p className="text-slate-600">Loading analysis data...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Filter products requiring action (discount > 0)
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
            productsRequiringAction={productsRequiringAction.length}
            onLaunchCampaign={() => setShowModal(true)}
          />
        )}
      </div>

      {showModal && (
        <CampaignModal
          products={productsRequiringAction}
          insights={analysisData.insights}
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
