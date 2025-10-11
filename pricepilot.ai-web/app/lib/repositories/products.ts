import prisma from '@/app/lib/prisma';

export async function getAllProducts() {
  return prisma.product.findMany({
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
      clearanceEndDate: 'asc',
    },
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
      clearanceEndDate: {
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
