import { SalesDaily } from '@/app/generated/prisma';

export function calculateSalesRate(sales: SalesDaily[]): number {
  if (sales.length === 0) return 0;

  const totalUnits = sales.reduce((sum, sale) => sum + sale.unitsSold, 0);
  const daysWithSales = sales.length;

  return Number((totalUnits / daysWithSales).toFixed(1));
}

export function calculateDaysToClearing(clearanceDate: Date): number {
  const now = new Date();
  const timeDiff = clearanceDate.getTime() - now.getTime();
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}

export function calculateNewPrice(
  currentPrice: number,
  markdownPct: number,
): number {
  return Number((currentPrice * (1 - markdownPct / 100)).toFixed(2));
}
