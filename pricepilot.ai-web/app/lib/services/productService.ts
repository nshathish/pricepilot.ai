import { getAllProducts } from '@/app/lib/repositories/products';
import {
  calculateDaysToClearing,
  calculateSalesRate,
} from '@/app/lib/utils/calculations';

import type { Product } from '@/app/types/product';

export async function getProductsForDisplay(): Promise<Product[]> {
  const products = await getAllProducts();

  return products.map((product) => {
    const stock = product.inventories.reduce(
      (sum, inv) => sum + inv.stockOnHand,
      0,
    );
    const recentSalesRate = calculateSalesRate(product.sales);
    const daysToClearing = calculateDaysToClearing(product.clearanceEndDate);

    return {
      id: Number(product.id),
      sku: product.sku,
      name: product.name,
      category: product.category || '',
      currentPrice: Number(product.currentPrice),
      basePrice: Number(product.basePrice),
      stock,
      daysToClearing,
      recentSalesRate,
      urgency: determineUrgency(daysToClearing, stock, recentSalesRate),
      competitorPrice: product.competitorPrices[0]
        ? Number(product.competitorPrices[0].price)
        : null,
      projectedSellThrough: calculateProjectedSellThrough(
        stock,
        recentSalesRate,
        daysToClearing,
      ),
      recommendedMarkdown: 0, // Will be calculated by AI
    };
  });
}

function determineUrgency(
  daysToClearing: number,
  stock: number,
  salesRate: number,
): 'critical' | 'moderate' | 'low' {
  const projectedUnitsToSell = salesRate * daysToClearing;

  if (daysToClearing <= 7 || projectedUnitsToSell < stock * 0.5) {
    return 'critical';
  } else if (daysToClearing <= 20 || projectedUnitsToSell < stock * 0.8) {
    return 'moderate';
  }
  return 'low';
}

function calculateProjectedSellThrough(
  stock: number,
  salesRate: number,
  daysToClearing: number,
): number {
  if (stock === 0) return 100;
  const projectedSales = salesRate * daysToClearing;
  return Math.min(100, Math.round((projectedSales / stock) * 100));
}
