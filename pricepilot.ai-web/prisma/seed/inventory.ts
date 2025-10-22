import { PrismaClient, Prisma } from '@/app/generated/prisma';

export async function seedInventory(
  prisma: PrismaClient,
  productBySku: Record<string, bigint>,
) {
  console.log('  📊 Seeding inventory...');

  const inventoryData: Array<Prisma.InventoryUpsertArgs> = [
    {
      where: {
        productId_location: {
          productId: productBySku['WIN-JKT-001'],
          location: 'main',
        },
      },
      update: { stockOnHand: 120, reserved: 6 },
      create: {
        productId: productBySku['WIN-JKT-001'],
        location: 'main',
        stockOnHand: 120,
        reserved: 6,
      },
    },
    {
      where: {
        productId_location: {
          productId: productBySku['SUM-TOP-002'],
          location: 'main',
        },
      },
      update: { stockOnHand: 260, reserved: 10 },
      create: {
        productId: productBySku['SUM-TOP-002'],
        location: 'main',
        stockOnHand: 260,
        reserved: 10,
      },
    },
    {
      where: {
        productId_location: {
          productId: productBySku['RUN-SHOE-003'],
          location: 'warehouse-2',
        },
      },
      update: { stockOnHand: 80, reserved: 8 },
      create: {
        productId: productBySku['RUN-SHOE-003'],
        location: 'warehouse-2',
        stockOnHand: 80,
        reserved: 8,
      },
    },
    {
      where: {
        productId_location: {
          productId: productBySku['BEAN-HAT-004'],
          location: 'main',
        },
      },
      update: { stockOnHand: 400, reserved: 20 },
      create: {
        productId: productBySku['BEAN-HAT-004'],
        location: 'main',
        stockOnHand: 400,
        reserved: 20,
      },
    },
    {
      where: {
        productId_location: {
          productId: productBySku['TECH-HOOD-005'],
          location: 'main',
        },
      },
      update: { stockOnHand: 30, reserved: 2 },
      create: {
        productId: productBySku['TECH-HOOD-005'],
        location: 'main',
        stockOnHand: 30,
        reserved: 2,
      },
    },
    {
      where: {
        productId_location: {
          productId: productBySku['SPORT-CAP-006'],
          location: 'main',
        },
      },
      update: { stockOnHand: 40, reserved: 1 },
      create: {
        productId: productBySku['SPORT-CAP-006'],
        location: 'main',
        stockOnHand: 40,
        reserved: 1,
      },
    },
  ];

  for (const i of inventoryData) {
    await prisma.inventory.upsert(i);
  }
}
