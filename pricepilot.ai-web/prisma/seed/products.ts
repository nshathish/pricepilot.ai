import {
  PrismaClient,
  Prisma,
  ProductStatus,
  Seasonality,
} from '@/app/generated/prisma';
import { D } from './utils.js';

export async function seedProducts(prisma: PrismaClient) {
  console.log('  📦 Seeding products...');

  const productsData: Array<Prisma.ProductCreateInput> = [
    {
      sku: 'WIN-JKT-001',
      name: 'Winter Jacket',
      category: 'Apparel',
      brand: 'NordWear',
      unitCost: D('45.00'),
      basePrice: D('90.00'),
      currentPrice: D('72.00'), // Already marked down
      holdingCostPerUnitPerDay: D('0.25'),
      expiryDate: new Date('2025-12-31'),
      status: ProductStatus.active,
      seasonality: Seasonality.winter,
      tags: ['winter', 'outerwear', 'clearance'],
      minStockLevel: 20,
      maxStockLevel: 200,
    },
    {
      sku: 'SUM-TOP-002',
      name: 'Summer Top',
      category: 'Apparel',
      brand: 'BreezeLine',
      unitCost: D('15.00'),
      basePrice: D('35.00'),
      currentPrice: D('28.00'), // Already marked down
      holdingCostPerUnitPerDay: D('0.10'),
      expiryDate: new Date('2025-10-30'),
      status: ProductStatus.active,
      seasonality: Seasonality.summer,
      tags: ['summer', 'clearance', 'lightweight'],
      minStockLevel: 30,
      maxStockLevel: 300,
    },
    {
      sku: 'RUN-SHOE-003',
      name: 'Running Shoes',
      category: 'Footwear',
      brand: 'TrailEdge',
      unitCost: D('50.00'),
      basePrice: D('100.00'),
      currentPrice: D('70.00'), // Already marked down
      holdingCostPerUnitPerDay: D('0.20'),
      expiryDate: new Date('2025-11-30'),
      status: ProductStatus.active,
      seasonality: Seasonality.year_round,
      tags: ['athletic', 'footwear', 'clearance'],
      minStockLevel: 15,
      maxStockLevel: 100,
    },
    {
      sku: 'BEAN-HAT-004',
      name: 'Beanie Hat',
      category: 'Accessories',
      brand: 'WarmCo',
      unitCost: D('4.50'),
      basePrice: D('12.00'),
      currentPrice: D('9.60'), // Already marked down
      holdingCostPerUnitPerDay: D('0.05'),
      expiryDate: new Date('2025-10-20'),
      status: ProductStatus.active,
      seasonality: Seasonality.winter,
      tags: ['winter', 'accessories', 'clearance'],
      minStockLevel: 50,
      maxStockLevel: 500,
    },
    {
      sku: 'TECH-HOOD-005',
      name: 'Tech Hoodie',
      category: 'Apparel',
      brand: 'CoreLayer',
      unitCost: D('30.00'),
      basePrice: D('65.00'),
      currentPrice: D('65.00'),
      holdingCostPerUnitPerDay: D('0.08'),
      expiryDate: new Date('2026-03-31'),
      status: ProductStatus.active,
      seasonality: Seasonality.year_round,
      tags: ['tech', 'casual', 'premium'],
      minStockLevel: 10,
      maxStockLevel: 50,
    },
    {
      sku: 'SPORT-CAP-006',
      name: 'Sport Cap',
      category: 'Accessories',
      brand: 'Athletiq',
      unitCost: D('5.00'),
      basePrice: D('15.00'),
      currentPrice: D('15.00'),
      holdingCostPerUnitPerDay: D('0.02'),
      expiryDate: new Date('2026-02-28'),
      status: ProductStatus.active,
      seasonality: Seasonality.year_round,
      tags: ['athletic', 'accessories', 'casual'],
      minStockLevel: 25,
      maxStockLevel: 100,
    },
  ];

  for (const p of productsData) {
    await prisma.product.upsert({
      where: { sku: p.sku },
      update: p,
      create: p,
    });
  }

  const products = await prisma.product.findMany({
    select: { id: true, sku: true },
  });
  const productBySku: Record<string, bigint> = {};
  for (const product of products) {
    productBySku[product.sku] = product.id;
  }

  return { products, productBySku };
}
