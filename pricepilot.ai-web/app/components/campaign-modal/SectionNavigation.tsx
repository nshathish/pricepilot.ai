import { getCategoryIcon } from '@/app/lib/utils/campaignUtils';

import type { ProductAnalysis } from '@/app/types/campaign';

interface SectionNavigationProps {
  activeSection: string;
  products: ProductAnalysis[];
  onNavigate: (sectionId: string) => void;
}

export default function SectionNavigation({
  activeSection,
  products,
  onNavigate,
}: SectionNavigationProps) {
  return (
    <div className="px-6 py-4 bg-blue-50 border-b border-blue-100">
      <p className="text-sm font-semibold text-gray-700 mb-3">
        Jump to Section:
      </p>
      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => onNavigate('overview')}
          className={`px-4 py-3 rounded-lg text-sm font-medium transition-all text-left ${
            activeSection === 'overview'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
          }`}
        >
          <span className="mr-2">📊</span> Overview
        </button>

        {products.map((product) => {
          const sectionId = product.name.toLowerCase().replace(' ', '-');
          const icon = getCategoryIcon(product.category);

          return (
            <button
              key={product.product_id}
              onClick={() => onNavigate(sectionId)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all text-left ${
                activeSection === sectionId
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              <span className="mr-2">{icon}</span> {product.name}
            </button>
          );
        })}

        <button
          onClick={() => onNavigate('campaign-plan')}
          className={`px-4 py-3 rounded-lg text-sm font-medium transition-all text-left ${
            activeSection === 'campaign-plan'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
          }`}
        >
          <span className="mr-2">🎯</span> Campaign Plan
        </button>

        <button
          onClick={() => onNavigate('success-metrics')}
          className={`px-4 py-3 rounded-lg text-sm font-medium transition-all text-left ${
            activeSection === 'success-metrics'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
          }`}
        >
          <span className="mr-2">📈</span> Success Metrics
        </button>
      </div>
    </div>
  );
}
