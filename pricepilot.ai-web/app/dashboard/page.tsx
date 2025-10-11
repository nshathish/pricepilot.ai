'use client';

import { useState } from 'react';

import DashboardHeader from '@/app/components/dashboard/DashboardHeader';
import ProductsTable from '@/app/components/dashboard/ProductsTable';
import CampaignAlert from '@/app/components/dashboard/CampaignAlert';
import CampaignModal from '@/app/components/dashboard/CampaignModal';

import type { Product } from '@/app/types/product';

export default function DashboardPage() {
  const [showModal, setShowModal] = useState(false);

  // Mock data - Replace with API call
  const products: Product[] = [
    {
      id: 1,
      sku: 'ELEC-2024-001',
      name: 'Wireless Headphones Pro',
      category: 'Electronics',
      currentPrice: 89.99,
      basePrice: 129.99,
      stock: 200,
      daysToClearing: 5,
      recentSalesRate: 2.1,
      urgency: 'critical',
      competitorPrice: 79.99,
      projectedSellThrough: 10.5,
      recommendedMarkdown: 40,
    },
    {
      id: 2,
      sku: 'CLTH-2024-042',
      name: 'Summer Cotton T-Shirt',
      category: 'Clothing',
      currentPrice: 24.99,
      basePrice: 34.99,
      stock: 80,
      daysToClearing: 20,
      recentSalesRate: 4.2,
      urgency: 'moderate',
      competitorPrice: 22.99,
      projectedSellThrough: 84,
      recommendedMarkdown: 15,
    },
    {
      id: 3,
      sku: 'HOME-2024-089',
      name: 'Ceramic Coffee Mug Set',
      category: 'Home & Kitchen',
      currentPrice: 19.99,
      basePrice: 29.99,
      stock: 30,
      daysToClearing: 30,
      recentSalesRate: 3.1,
      urgency: 'low',
      competitorPrice: null,
      projectedSellThrough: 93,
      recommendedMarkdown: 0,
    },
    {
      id: 4,
      sku: 'SPRT-2024-156',
      name: 'Yoga Mat Premium',
      category: 'Sports',
      currentPrice: 49.99,
      basePrice: 69.99,
      stock: 100,
      daysToClearing: 15,
      recentSalesRate: 3.8,
      urgency: 'moderate',
      competitorPrice: 34.99,
      projectedSellThrough: 57,
      recommendedMarkdown: 25,
    },
  ];

  const productsRequiringAction = products.filter(
    (p) => p.recommendedMarkdown > 0,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader
          totalProducts={products.length}
          productsRequiringAction={productsRequiringAction.length}
        />

        <ProductsTable products={products} />

        <CampaignAlert
          productsRequiringAction={productsRequiringAction.length}
          onLaunchCampaign={() => setShowModal(true)}
        />
      </div>

      {showModal && (
        <CampaignModal
          products={productsRequiringAction}
          onClose={() => setShowModal(false)}
          onExecute={() => {
            // Handle campaign execution
            console.log('Executing campaign...');
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}
