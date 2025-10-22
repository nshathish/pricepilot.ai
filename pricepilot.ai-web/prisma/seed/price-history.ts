import { PrismaClient } from '@/app/generated/prisma';
import { D } from './utils.js';

export async function seedPriceHistory(
  prisma: PrismaClient,
  productBySku: Record<string, bigint>,
) {
  console.log('  📈 Seeding price history...');

  await prisma.priceHistory.createMany({
    data: [
      // Product 1 (WIN-JKT-001) - Price progression: $90 -> $81 -> $72
      {
        productId: productBySku['WIN-JKT-001'],
        price: D('90.00'),
        markdownPct: D('0.00'),
        startedAt: new Date('2024-09-01T00:00:00Z'),
        endedAt: new Date('2024-09-30T23:59:59Z'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        price: D('81.00'),
        markdownPct: D('10.00'),
        startedAt: new Date('2024-10-01T00:00:00Z'),
        endedAt: new Date('2024-10-17T23:59:59Z'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        price: D('72.00'),
        markdownPct: D('20.00'),
        startedAt: new Date('2024-10-18T00:00:00Z'),
        endedAt: null,
      },

      // Product 2 (SUM-TOP-002) - Price progression: $35 -> $31.50 -> $28
      {
        productId: productBySku['SUM-TOP-002'],
        price: D('35.00'),
        markdownPct: D('0.00'),
        startedAt: new Date('2024-09-01T00:00:00Z'),
        endedAt: new Date('2024-09-30T23:59:59Z'),
      },
      {
        productId: productBySku['SUM-TOP-002'],
        price: D('31.50'),
        markdownPct: D('10.00'),
        startedAt: new Date('2024-10-01T00:00:00Z'),
        endedAt: new Date('2024-10-17T23:59:59Z'),
      },
      {
        productId: productBySku['SUM-TOP-002'],
        price: D('28.00'),
        markdownPct: D('20.00'),
        startedAt: new Date('2024-10-18T00:00:00Z'),
        endedAt: null,
      },

      // Product 3 (RUN-SHOE-003) - Price progression: $100 -> $90 -> $80
      {
        productId: productBySku['RUN-SHOE-003'],
        price: D('100.00'),
        markdownPct: D('0.00'),
        startedAt: new Date('2024-09-01T00:00:00Z'),
        endedAt: new Date('2024-09-30T23:59:59Z'),
      },
      {
        productId: productBySku['RUN-SHOE-003'],
        price: D('90.00'),
        markdownPct: D('10.00'),
        startedAt: new Date('2024-10-01T00:00:00Z'),
        endedAt: new Date('2024-10-17T23:59:59Z'),
      },
      {
        productId: productBySku['RUN-SHOE-003'],
        price: D('80.00'),
        markdownPct: D('20.00'),
        startedAt: new Date('2024-10-18T00:00:00Z'),
        endedAt: null,
      },

      // Product 4 (BEAN-HAT-004) - Price progression: $12 -> $10.80 -> $9.60
      {
        productId: productBySku['BEAN-HAT-004'],
        price: D('12.00'),
        markdownPct: D('0.00'),
        startedAt: new Date('2024-09-01T00:00:00Z'),
        endedAt: new Date('2024-09-30T23:59:59Z'),
      },
      {
        productId: productBySku['BEAN-HAT-004'],
        price: D('10.80'),
        markdownPct: D('10.00'),
        startedAt: new Date('2024-10-01T00:00:00Z'),
        endedAt: new Date('2024-10-17T23:59:59Z'),
      },
      {
        productId: productBySku['BEAN-HAT-004'],
        price: D('9.60'),
        markdownPct: D('20.00'),
        startedAt: new Date('2024-10-18T00:00:00Z'),
        endedAt: null,
      },

      // Product 5 (TECH-HOOD-005) - Price progression: $65 -> $58.50 -> $52
      {
        productId: productBySku['TECH-HOOD-005'],
        price: D('65.00'),
        markdownPct: D('0.00'),
        startedAt: new Date('2024-09-01T00:00:00Z'),
        endedAt: new Date('2024-09-30T23:59:59Z'),
      },
      {
        productId: productBySku['TECH-HOOD-005'],
        price: D('58.50'),
        markdownPct: D('10.00'),
        startedAt: new Date('2024-10-01T00:00:00Z'),
        endedAt: new Date('2024-10-17T23:59:59Z'),
      },
      {
        productId: productBySku['TECH-HOOD-005'],
        price: D('52.00'),
        markdownPct: D('20.00'),
        startedAt: new Date('2024-10-18T00:00:00Z'),
        endedAt: null,
      },

      // Product 6 (SPORT-CAP-006) - Price progression: $15 -> $13.50 -> $12
      {
        productId: productBySku['SPORT-CAP-006'],
        price: D('15.00'),
        markdownPct: D('0.00'),
        startedAt: new Date('2024-09-01T00:00:00Z'),
        endedAt: new Date('2024-09-30T23:59:59Z'),
      },
      {
        productId: productBySku['SPORT-CAP-006'],
        price: D('13.50'),
        markdownPct: D('10.00'),
        startedAt: new Date('2024-10-01T00:00:00Z'),
        endedAt: new Date('2024-10-17T23:59:59Z'),
      },
      {
        productId: productBySku['SPORT-CAP-006'],
        price: D('12.00'),
        markdownPct: D('20.00'),
        startedAt: new Date('2024-10-18T00:00:00Z'),
        endedAt: null,
      },
    ],
    skipDuplicates: true,
  });

  console.log('    ✅ Price history seeded with economic progression data');
}
