import prisma from '@/app/lib/prisma';

export async function getAllProducts() {
  const products = await prisma.product.findMany({
    include: {
      inventories: true,
      sales: {
        orderBy: {
          saleDate: 'desc',
        },
        take: 30, // Last 30 days
      },
      competitorPrices: {
        orderBy: {
          priceDate: 'desc',
        },
        take: 1, // Latest competitor price
      },
    },
    orderBy: {
      expiryDate: 'asc',
    },
  });

  return products.map((product) => {
    const totalStock = product.inventories.reduce(
      (sum, inv) => sum + inv.stockOnHand,
      0,
    );

    const totalUnitsSold = product.sales.reduce(
      (sum, sale) => sum + sale.unitsSold,
      0,
    );

    const salesRate = totalUnitsSold / 30; // Average per day over last 30 days

    const now = new Date();
    const clearanceDate = new Date(product.expiryDate!);
    const daysLeft = Math.ceil(
      (clearanceDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
    );

    const holdingCostPerDay = Number(product.holdingCostPerUnitPerDay);
    const dailyHoldingCost = holdingCostPerDay * totalStock;
    const totalHoldingCost = dailyHoldingCost * Math.max(daysLeft, 0);

    return {
      ...product,
      totalStock,
      salesRate: Number(salesRate.toFixed(1)),
      daysLeft,
      holdingCostPerUnitPerDay: holdingCostPerDay,
      dailyHoldingCost: Number(dailyHoldingCost.toFixed(2)),
      totalHoldingCost: Number(totalHoldingCost.toFixed(2)),
    };
  });
}

export async function getProductById(id: number) {
  return prisma.product.findUnique({
    where: { id: BigInt(id) },
    include: {
      inventories: true,
      sales: true,
      competitorPrices: true,
      elasticityEstimate: true,
    },
  });
}

export async function getProductsNearingClearance(days: number = 30) {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + days);

  return prisma.product.findMany({
    where: {
      expiryDate: {
        lte: futureDate,
      },
      status: 'active',
    },
    include: {
      inventories: true,
      sales: true,
    },
  });
}
