import { Prisma, PrismaClient, ProductStatus } from '@/app/generated/prisma';

const prisma = new PrismaClient();

const D = (x: string | number) => new Prisma.Decimal(x);

// Deterministic pseudo-RNG
function rng(seed = 42) {
  let s = seed >>> 0;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return (s >>> 0) / 0xffffffff;
  };
}
const rand = rng(20251010);

function daysAgo(n: number) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  d.setHours(0, 0, 0, 0);
  return d;
}

function addDays(d: Date, n: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

async function main() {
  console.log('🧹 Clearing existing data...');

  await prisma.$transaction([prisma.elasticityEstimate.deleteMany()]);

  console.log('🌱 Seeding pricepilot.ai base data...');

  // ---------- Products ----------
  const productsData: Array<Prisma.ProductCreateInput> = [
    {
      sku: 'WIN-JKT-001',
      name: 'Winter Jacket',
      category: 'Apparel',
      brand: 'NordWear',
      unitCost: D('45.00'),
      basePrice: D('90.00'),
      currentPrice: D('90.00'),
      holdingCostPerUnitPerDay: D('0.25'),
      clearanceEndDate: new Date('2025-12-31'),
      status: ProductStatus.active,
    },
    {
      sku: 'SUM-TOP-002',
      name: 'Summer Top',
      category: 'Apparel',
      brand: 'BreezeLine',
      unitCost: D('15.00'),
      basePrice: D('35.00'),
      currentPrice: D('35.00'),
      holdingCostPerUnitPerDay: D('0.10'),
      clearanceEndDate: new Date('2025-10-30'),
      status: ProductStatus.active,
    },
    {
      sku: 'RUN-SHOE-003',
      name: 'Running Shoes',
      category: 'Footwear',
      brand: 'TrailEdge',
      unitCost: D('50.00'),
      basePrice: D('100.00'),
      currentPrice: D('100.00'),
      holdingCostPerUnitPerDay: D('0.20'),
      clearanceEndDate: new Date('2025-11-30'),
      status: ProductStatus.active,
    },
    {
      sku: 'BEAN-HAT-004',
      name: 'Beanie Hat',
      category: 'Accessories',
      brand: 'WarmCo',
      unitCost: D('4.50'),
      basePrice: D('12.00'),
      currentPrice: D('12.00'),
      holdingCostPerUnitPerDay: D('0.05'),
      clearanceEndDate: new Date('2025-10-20'),
      status: ProductStatus.active,
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
      clearanceEndDate: new Date('2026-03-31'),
      status: ProductStatus.active,
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
      clearanceEndDate: new Date('2026-02-28'),
      status: ProductStatus.active,
    },
  ];

  for (const p of productsData) {
    await prisma.product.upsert({
      where: { sku: p.sku },
      update: p,
      create: p,
    });
  }

  const productBySku = Object.fromEntries(
    (await prisma.product.findMany({ select: { id: true, sku: true } })).map(
      (p) => [p.sku, p.id],
    ),
  );

  // ---------- Inventory ----------
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
  for (const i of inventoryData) await prisma.inventory.upsert(i);

  // ---------- Competitors ----------
  const competitorsInput: Array<Prisma.CompetitorCreateInput> = [
    { name: 'Urban Outfit', url: 'https://urbanoutfit.example.com' },
    { name: 'Peak Sports', url: 'https://peaksports.example.com' },
    { name: 'Mall Central', url: 'https://mallcentral.example.com' },
  ];
  for (const c of competitorsInput) {
    await prisma.competitor.upsert({
      where: { name: c.name },
      update: c,
      create: c,
    });
  }
  const comp = await prisma.competitor.findMany();
  const compByName = Object.fromEntries(comp.map((c) => [c.name, c.id]));

  // ---------- Competitor Prices ----------
  const priceBaseBySku: Record<string, number> = {
    'WIN-JKT-001': 90,
    'SUM-TOP-002': 35,
    'RUN-SHOE-003': 100,
    'BEAN-HAT-004': 12,
    'TECH-HOOD-005': 65,
    'SPORT-CAP-006': 15,
  };
  const start = daysAgo(6);
  const competitorPriceRows: Prisma.CompetitorPriceCreateManyInput[] = [];

  for (let d = 0; d < 7; d++) {
    const date = addDays(start, d);
    for (const sku of Object.keys(priceBaseBySku)) {
      const productId = productBySku[sku];
      const base = priceBaseBySku[sku];
      const dayJitter = (rand() - 0.5) * 2;
      for (const cname of [
        'Urban Outfit',
        'Peak Sports',
        'Mall Central',
      ] as const) {
        const competitorId = compByName[cname];
        const compBias =
          sku === 'TECH-HOOD-005' || sku === 'SPORT-CAP-006'
            ? cname === 'Peak Sports'
              ? +1.5
              : cname === 'Urban Outfit'
                ? +0.5
                : 0.0
            : cname === 'Peak Sports'
              ? -2.5
              : cname === 'Urban Outfit'
                ? -1.0
                : 0.0;
        const priceNum = Math.max(
          1,
          base + compBias + Math.round(dayJitter * 3),
        );
        competitorPriceRows.push({
          competitorId,
          productId,
          priceDate: date,
          price: D(priceNum.toFixed(2)),
        });
      }
    }

    await prisma.competitorPrice.createMany({
      data: competitorPriceRows,
      skipDuplicates: true,
    });

    // ---------- Elasticity Estimates ----------
    // removed for brevity

    // ---------- SalesDaily (last 30 days) ----------
    const salesRows: Prisma.SalesDailyCreateManyInput[] = [];

    for (const [sku, basePrice] of Object.entries(priceBaseBySku)) {
      const productId = productBySku[sku];
      for (let i = 29; i >= 0; i--) {
        const saleDate = daysAgo(i);
        const dow = saleDate.getDay();
        const weekendBoost = dow === 6 || dow === 0 ? 1.2 : 1.0;
        const noise = 0.8 + rand() * 0.6;
        const volBase =
          sku === 'WIN-JKT-001'
            ? 6
            : sku === 'RUN-SHOE-003'
              ? 4
              : sku === 'SUM-TOP-002'
                ? 8
                : sku === 'BEAN-HAT-004'
                  ? 10
                  : sku === 'TECH-HOOD-005'
                    ? 10
                    : sku === 'SPORT-CAP-006'
                      ? 12
                      : 5;

        const units = Math.max(0, Math.round(volBase * weekendBoost * noise));
        const priceJitter = (rand() - 0.5) * 2;
        const avgPrice = Math.max(1, basePrice + Math.round(priceJitter * 2));
        const promoFlag = rand() < 0.12;

        salesRows.push({
          productId,
          saleDate,
          unitsSold: units,
          avgUnitPrice: D(avgPrice.toFixed(2)),
          promoFlag,
        });
      }
    }

    await prisma.salesDaily.createMany({
      data: salesRows,
      skipDuplicates: true,
    });

    await prisma.priceHistory.createMany({
      data: [
        // WIN-JKT-001: markdown candidate
        {
          productId: productBySku['WIN-JKT-001'],
          price: D('90.00'),
          markdownPct: D('0.00'),
          startedAt: daysAgo(60),
          endedAt: daysAgo(30),
        },
        {
          productId: productBySku['WIN-JKT-001'],
          price: D('81.00'),
          markdownPct: D('10.00'),
          startedAt: daysAgo(30),
          endedAt: daysAgo(10),
        },
        {
          productId: productBySku['WIN-JKT-001'],
          price: D('72.00'),
          markdownPct: D('20.00'),
          startedAt: daysAgo(10),
          endedAt: null,
        },

        // SUM-TOP-002: markdown candidate
        {
          productId: productBySku['SUM-TOP-002'],
          price: D('35.00'),
          markdownPct: D('0.00'),
          startedAt: daysAgo(45),
          endedAt: daysAgo(20),
        },
        {
          productId: productBySku['SUM-TOP-002'],
          price: D('31.50'),
          markdownPct: D('10.00'),
          startedAt: daysAgo(20),
          endedAt: daysAgo(5),
        },
        {
          productId: productBySku['SUM-TOP-002'],
          price: D('28.00'),
          markdownPct: D('20.00'),
          startedAt: daysAgo(5),
          endedAt: null,
        },

        // RUN-SHOE-003: markdown candidate
        {
          productId: productBySku['RUN-SHOE-003'],
          price: D('100.00'),
          markdownPct: D('0.00'),
          startedAt: daysAgo(50),
          endedAt: daysAgo(25),
        },
        {
          productId: productBySku['RUN-SHOE-003'],
          price: D('85.00'),
          markdownPct: D('15.00'),
          startedAt: daysAgo(25),
          endedAt: daysAgo(5),
        },
        {
          productId: productBySku['RUN-SHOE-003'],
          price: D('70.00'),
          markdownPct: D('30.00'),
          startedAt: daysAgo(5),
          endedAt: null,
        },

        // BEAN-HAT-004: markdown candidate
        {
          productId: productBySku['BEAN-HAT-004'],
          price: D('12.00'),
          markdownPct: D('0.00'),
          startedAt: daysAgo(40),
          endedAt: daysAgo(15),
        },
        {
          productId: productBySku['BEAN-HAT-004'],
          price: D('10.80'),
          markdownPct: D('10.00'),
          startedAt: daysAgo(15),
          endedAt: daysAgo(3),
        },
        {
          productId: productBySku['BEAN-HAT-004'],
          price: D('9.60'),
          markdownPct: D('20.00'),
          startedAt: daysAgo(3),
          endedAt: null,
        },

        // TECH-HOOD-005: healthy performer (no markdowns)
        {
          productId: productBySku['TECH-HOOD-005'],
          price: D('65.00'),
          markdownPct: D('0.00'),
          startedAt: daysAgo(60),
          endedAt: null,
        },

        // SPORT-CAP-006: healthy performer (no markdowns)
        {
          productId: productBySku['SPORT-CAP-006'],
          price: D('15.00'),
          markdownPct: D('0.00'),
          startedAt: daysAgo(60),
          endedAt: null,
        },
      ],
      skipDuplicates: true,
    });

    console.log('✅ Seed complete.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
