import { PrismaClient } from '@/app/generated/prisma';

import { seedSettings } from '@/prisma/seed/settings';
import { seedChannels } from '@/prisma/seed/channels';
import { seedProducts } from '@/prisma/seed/products';
import { seedInventory } from '@/prisma/seed/inventory';
import { seedCampaigns } from '@/prisma/seed/campaigns';
import { seedCompetitors } from '@/prisma/seed/competitors';
import { seedSales } from '@/prisma/seed/sales';
import { seedPriceHistory } from '@/prisma/seed/price-history';

const prisma = new PrismaClient();

async function clearDatabase() {
  console.log('🧹 Clearing existing data...');

  // Clear dependent tables first
  await prisma.$transaction([
    prisma.actionOutcome.deleteMany(),
    prisma.markdownActionLog.deleteMany(),
    prisma.markdownEvaluation.deleteMany(),
    prisma.competitorPrice.deleteMany(),
    prisma.salesDaily.deleteMany(),
    prisma.priceHistory.deleteMany(),
    prisma.inventory.deleteMany(),
    prisma.campaignChannel.deleteMany(),
    prisma.campaign.deleteMany(),
    prisma.channel.deleteMany(),
    prisma.competitor.deleteMany(),
    prisma.product.deleteMany(),
    prisma.setting.deleteMany(),
  ]);
}

async function main() {
  const shouldRunSeed = process.env.SHOULD_SEED ?? false;
  if (!shouldRunSeed) {
    return;
  }

  try {
    // await clearDatabase();

    console.log('🌱 Seeding Dynamic Markdown Manager data...');

    // 1. Seed base configuration
    await seedSettings(prisma);

    // 2. Seed channels (needed by campaigns and sales)
    const { channels, channelByName } = await seedChannels(prisma);

    // 3. Seed products (needed by everything else)
    const { productBySku } = await seedProducts(prisma);

    // 4. Seed inventory (depends on products)
    await seedInventory(prisma, productBySku);

    // 5. Seed campaigns (depends on channels)
    await seedCampaigns(prisma, channelByName);

    // 6. Seed competitors and their pricing (depends on products)
    await seedCompetitors(prisma, productBySku);

    // 7. Seed sales data (depends on products and channels)
    await seedSales(prisma, productBySku, channels);

    // 8. Seed price history (depends on products)
    await seedPriceHistory(prisma, productBySku);

    console.log('✅ Seed complete with enhanced schema data!');
    console.log('📊 Created:');
    console.log('  - 6 Products with seasonality and tags');
    console.log('  - 7 Marketing channels');
    console.log('  - 2 Campaigns with channel assignments');
    console.log('  - 3 Competitors with price history');
    console.log('  - 30 days of sales data with channel attribution');
    console.log('  - 6 System settings for AI configuration');
    console.log('  - Price history showing markdown progression');
  } catch (error) {
    console.error('❌ Seed failed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
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
