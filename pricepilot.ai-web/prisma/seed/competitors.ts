import { PrismaClient } from '@/app/generated/prisma';

import { D } from './utils.js';

export async function seedCompetitors(
  prisma: PrismaClient,
  productBySku: Record<string, bigint>,
) {
  console.log('  🏪 Seeding competitors...');

  // Create competitors with different pricing strategies
  const competitorsData = [
    { name: 'Urban Outfit', url: 'https://urbanoutfit.example.com' }, // Premium competitor
    { name: 'Peak Sports', url: 'https://peaksports.example.com' }, // Value competitor
    { name: 'Mall Central', url: 'https://mallcentral.example.com' }, // Market matcher
  ];

  for (const c of competitorsData) {
    await prisma.competitor.upsert({
      where: { name: c.name },
      update: c,
      create: c,
    });
  }

  const competitors = await prisma.competitor.findMany();
  const compByName: Record<string, bigint> = {};
  for (const competitor of competitors) {
    compByName[competitor.name] = competitor.id;
  }

  // Realistic competitor pricing data following our price progression patterns
  await prisma.competitorPrice.createMany({
    data: [
      // Product 1 (WIN-JKT-001) - Our prices: $90 -> $81 -> $72
      // September 2024 - Our price $90
      // Competitor 1 (Premium) - prices slightly higher
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Urban Outfit'],
        price: D('92.00'),
        priceDate: new Date('2024-09-01'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Urban Outfit'],
        price: D('93.00'),
        priceDate: new Date('2024-09-02'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Urban Outfit'],
        price: D('91.00'),
        priceDate: new Date('2024-09-03'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Urban Outfit'],
        price: D('94.00'),
        priceDate: new Date('2024-09-04'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Urban Outfit'],
        price: D('92.00'),
        priceDate: new Date('2024-09-05'),
      },

      // Competitor 2 (Value) - prices lower
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Peak Sports'],
        price: D('85.00'),
        priceDate: new Date('2024-09-01'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Peak Sports'],
        price: D('84.00'),
        priceDate: new Date('2024-09-02'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Peak Sports'],
        price: D('86.00'),
        priceDate: new Date('2024-09-03'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Peak Sports'],
        price: D('83.00'),
        priceDate: new Date('2024-09-04'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Peak Sports'],
        price: D('85.00'),
        priceDate: new Date('2024-09-05'),
      },

      // Competitor 3 (Matcher) - follows our prices closely
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Mall Central'],
        price: D('89.00'),
        priceDate: new Date('2024-09-01'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Mall Central'],
        price: D('90.00'),
        priceDate: new Date('2024-09-02'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Mall Central'],
        price: D('91.00'),
        priceDate: new Date('2024-09-03'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Mall Central'],
        price: D('89.00'),
        priceDate: new Date('2024-09-04'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Mall Central'],
        price: D('90.00'),
        priceDate: new Date('2024-09-05'),
      },

      // October 2024 - Our price $81
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Urban Outfit'],
        price: D('83.00'),
        priceDate: new Date('2024-10-01'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Urban Outfit'],
        price: D('84.00'),
        priceDate: new Date('2024-10-02'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Urban Outfit'],
        price: D('82.00'),
        priceDate: new Date('2024-10-03'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Peak Sports'],
        price: D('76.00'),
        priceDate: new Date('2024-10-01'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Peak Sports'],
        price: D('75.00'),
        priceDate: new Date('2024-10-02'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Peak Sports'],
        price: D('77.00'),
        priceDate: new Date('2024-10-03'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Mall Central'],
        price: D('80.00'),
        priceDate: new Date('2024-10-01'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Mall Central'],
        price: D('81.00'),
        priceDate: new Date('2024-10-02'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Mall Central'],
        price: D('82.00'),
        priceDate: new Date('2024-10-03'),
      },

      // Late October 2024 - Our price $72
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Urban Outfit'],
        price: D('74.00'),
        priceDate: new Date('2024-10-18'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Urban Outfit'],
        price: D('75.00'),
        priceDate: new Date('2024-10-19'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Peak Sports'],
        price: D('67.00'),
        priceDate: new Date('2024-10-18'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Peak Sports'],
        price: D('66.00'),
        priceDate: new Date('2024-10-19'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Mall Central'],
        price: D('71.00'),
        priceDate: new Date('2024-10-18'),
      },
      {
        productId: productBySku['WIN-JKT-001'],
        competitorId: compByName['Mall Central'],
        price: D('72.00'),
        priceDate: new Date('2024-10-19'),
      },

      // Product 2 (SUM-TOP-002) - Our prices: $35 -> $31.50 -> $28
      // September 2024 - Our price $35
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Urban Outfit'],
        price: D('36.00'),
        priceDate: new Date('2024-09-01'),
      },
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Urban Outfit'],
        price: D('37.00'),
        priceDate: new Date('2024-09-02'),
      },
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Urban Outfit'],
        price: D('35.50'),
        priceDate: new Date('2024-09-03'),
      },
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Peak Sports'],
        price: D('32.00'),
        priceDate: new Date('2024-09-01'),
      },
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Peak Sports'],
        price: D('31.00'),
        priceDate: new Date('2024-09-02'),
      },
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Peak Sports'],
        price: D('33.00'),
        priceDate: new Date('2024-09-03'),
      },
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Mall Central'],
        price: D('34.00'),
        priceDate: new Date('2024-09-01'),
      },
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Mall Central'],
        price: D('35.00'),
        priceDate: new Date('2024-09-02'),
      },
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Mall Central'],
        price: D('36.00'),
        priceDate: new Date('2024-09-03'),
      },

      // October 2024 - Our price $31.50
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Urban Outfit'],
        price: D('32.50'),
        priceDate: new Date('2024-10-01'),
      },
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Urban Outfit'],
        price: D('33.00'),
        priceDate: new Date('2024-10-02'),
      },
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Peak Sports'],
        price: D('28.50'),
        priceDate: new Date('2024-10-01'),
      },
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Peak Sports'],
        price: D('27.80'),
        priceDate: new Date('2024-10-02'),
      },
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Mall Central'],
        price: D('30.50'),
        priceDate: new Date('2024-10-01'),
      },
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Mall Central'],
        price: D('31.50'),
        priceDate: new Date('2024-10-02'),
      },

      // Late October 2024 - Our price $28
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Urban Outfit'],
        price: D('29.00'),
        priceDate: new Date('2024-10-18'),
      },
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Peak Sports'],
        price: D('25.50'),
        priceDate: new Date('2024-10-18'),
      },
      {
        productId: productBySku['SUM-TOP-002'],
        competitorId: compByName['Mall Central'],
        price: D('27.00'),
        priceDate: new Date('2024-10-18'),
      },

      // Product 3 (RUN-SHOE-003) - Our prices: $100 -> $90 -> $80
      // September 2024 - Our price $100
      {
        productId: productBySku['RUN-SHOE-003'],
        competitorId: compByName['Urban Outfit'],
        price: D('105.00'),
        priceDate: new Date('2024-09-01'),
      },
      {
        productId: productBySku['RUN-SHOE-003'],
        competitorId: compByName['Urban Outfit'],
        price: D('107.00'),
        priceDate: new Date('2024-09-02'),
      },
      {
        productId: productBySku['RUN-SHOE-003'],
        competitorId: compByName['Peak Sports'],
        price: D('92.00'),
        priceDate: new Date('2024-09-01'),
      },
      {
        productId: productBySku['RUN-SHOE-003'],
        competitorId: compByName['Peak Sports'],
        price: D('90.00'),
        priceDate: new Date('2024-09-02'),
      },
      {
        productId: productBySku['RUN-SHOE-003'],
        competitorId: compByName['Mall Central'],
        price: D('98.00'),
        priceDate: new Date('2024-09-01'),
      },
      {
        productId: productBySku['RUN-SHOE-003'],
        competitorId: compByName['Mall Central'],
        price: D('100.00'),
        priceDate: new Date('2024-09-02'),
      },

      // October 2024 - Our price $90
      {
        productId: productBySku['RUN-SHOE-003'],
        competitorId: compByName['Urban Outfit'],
        price: D('95.00'),
        priceDate: new Date('2024-10-01'),
      },
      {
        productId: productBySku['RUN-SHOE-003'],
        competitorId: compByName['Peak Sports'],
        price: D('82.00'),
        priceDate: new Date('2024-10-01'),
      },
      {
        productId: productBySku['RUN-SHOE-003'],
        competitorId: compByName['Mall Central'],
        price: D('88.00'),
        priceDate: new Date('2024-10-01'),
      },

      // Late October 2024 - Our price $80
      {
        productId: productBySku['RUN-SHOE-003'],
        competitorId: compByName['Urban Outfit'],
        price: D('84.00'),
        priceDate: new Date('2024-10-18'),
      },
      {
        productId: productBySku['RUN-SHOE-003'],
        competitorId: compByName['Peak Sports'],
        price: D('72.00'),
        priceDate: new Date('2024-10-18'),
      },
      {
        productId: productBySku['RUN-SHOE-003'],
        competitorId: compByName['Mall Central'],
        price: D('78.00'),
        priceDate: new Date('2024-10-18'),
      },

      // Product 4 (BEAN-HAT-004) - Our prices: $12 -> $10.80 -> $9.60
      // September 2024 - Our price $12
      {
        productId: productBySku['BEAN-HAT-004'],
        competitorId: compByName['Urban Outfit'],
        price: D('12.50'),
        priceDate: new Date('2024-09-01'),
      },
      {
        productId: productBySku['BEAN-HAT-004'],
        competitorId: compByName['Peak Sports'],
        price: D('10.80'),
        priceDate: new Date('2024-09-01'),
      },
      {
        productId: productBySku['BEAN-HAT-004'],
        competitorId: compByName['Mall Central'],
        price: D('11.50'),
        priceDate: new Date('2024-09-01'),
      },

      // October 2024 - Our price $10.80
      {
        productId: productBySku['BEAN-HAT-004'],
        competitorId: compByName['Urban Outfit'],
        price: D('11.50'),
        priceDate: new Date('2024-10-01'),
      },
      {
        productId: productBySku['BEAN-HAT-004'],
        competitorId: compByName['Peak Sports'],
        price: D('9.80'),
        priceDate: new Date('2024-10-01'),
      },
      {
        productId: productBySku['BEAN-HAT-004'],
        competitorId: compByName['Mall Central'],
        price: D('10.50'),
        priceDate: new Date('2024-10-01'),
      },

      // Late October 2024 - Our price $9.60
      {
        productId: productBySku['BEAN-HAT-004'],
        competitorId: compByName['Urban Outfit'],
        price: D('10.20'),
        priceDate: new Date('2024-10-18'),
      },
      {
        productId: productBySku['BEAN-HAT-004'],
        competitorId: compByName['Peak Sports'],
        price: D('8.80'),
        priceDate: new Date('2024-10-18'),
      },
      {
        productId: productBySku['BEAN-HAT-004'],
        competitorId: compByName['Mall Central'],
        price: D('9.40'),
        priceDate: new Date('2024-10-18'),
      },

      // Product 5 (TECH-HOOD-005) - Our prices: $65 -> $58.50 -> $52
      // September 2024 - Our price $65
      {
        productId: productBySku['TECH-HOOD-005'],
        competitorId: compByName['Urban Outfit'],
        price: D('68.00'),
        priceDate: new Date('2024-09-01'),
      },
      {
        productId: productBySku['TECH-HOOD-005'],
        competitorId: compByName['Peak Sports'],
        price: D('59.00'),
        priceDate: new Date('2024-09-01'),
      },
      {
        productId: productBySku['TECH-HOOD-005'],
        competitorId: compByName['Mall Central'],
        price: D('63.00'),
        priceDate: new Date('2024-09-01'),
      },

      // October 2024 - Our price $58.50
      {
        productId: productBySku['TECH-HOOD-005'],
        competitorId: compByName['Urban Outfit'],
        price: D('61.50'),
        priceDate: new Date('2024-10-01'),
      },
      {
        productId: productBySku['TECH-HOOD-005'],
        competitorId: compByName['Peak Sports'],
        price: D('53.00'),
        priceDate: new Date('2024-10-01'),
      },
      {
        productId: productBySku['TECH-HOOD-005'],
        competitorId: compByName['Mall Central'],
        price: D('57.00'),
        priceDate: new Date('2024-10-01'),
      },

      // Late October 2024 - Our price $52
      {
        productId: productBySku['TECH-HOOD-005'],
        competitorId: compByName['Urban Outfit'],
        price: D('55.00'),
        priceDate: new Date('2024-10-18'),
      },
      {
        productId: productBySku['TECH-HOOD-005'],
        competitorId: compByName['Peak Sports'],
        price: D('47.00'),
        priceDate: new Date('2024-10-18'),
      },
      {
        productId: productBySku['TECH-HOOD-005'],
        competitorId: compByName['Mall Central'],
        price: D('50.50'),
        priceDate: new Date('2024-10-18'),
      },

      // Product 6 (SPORT-CAP-006) - Our prices: $15 -> $13.50 -> $12
      // September 2024 - Our price $15
      {
        productId: productBySku['SPORT-CAP-006'],
        competitorId: compByName['Urban Outfit'],
        price: D('15.75'),
        priceDate: new Date('2024-09-01'),
      },
      {
        productId: productBySku['SPORT-CAP-006'],
        competitorId: compByName['Peak Sports'],
        price: D('13.50'),
        priceDate: new Date('2024-09-01'),
      },
      {
        productId: productBySku['SPORT-CAP-006'],
        competitorId: compByName['Mall Central'],
        price: D('14.50'),
        priceDate: new Date('2024-09-01'),
      },

      // October 2024 - Our price $13.50
      {
        productId: productBySku['SPORT-CAP-006'],
        competitorId: compByName['Urban Outfit'],
        price: D('14.25'),
        priceDate: new Date('2024-10-01'),
      },
      {
        productId: productBySku['SPORT-CAP-006'],
        competitorId: compByName['Peak Sports'],
        price: D('12.20'),
        priceDate: new Date('2024-10-01'),
      },
      {
        productId: productBySku['SPORT-CAP-006'],
        competitorId: compByName['Mall Central'],
        price: D('13.00'),
        priceDate: new Date('2024-10-01'),
      },

      // Late October 2024 - Our price $12
      {
        productId: productBySku['SPORT-CAP-006'],
        competitorId: compByName['Urban Outfit'],
        price: D('12.75'),
        priceDate: new Date('2024-10-18'),
      },
      {
        productId: productBySku['SPORT-CAP-006'],
        competitorId: compByName['Peak Sports'],
        price: D('10.80'),
        priceDate: new Date('2024-10-18'),
      },
      {
        productId: productBySku['SPORT-CAP-006'],
        competitorId: compByName['Mall Central'],
        price: D('11.60'),
        priceDate: new Date('2024-10-18'),
      },
    ],
    skipDuplicates: true,
  });

  console.log(
    '    ✅ Competitor pricing data seeded with strategic positioning patterns',
  );
}
