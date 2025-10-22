import { PrismaClient, Prisma } from '@/app/generated/prisma';

export async function seedSettings(prisma: PrismaClient) {
  console.log('  ⚙️ Seeding system settings...');

  const settingsData: Array<Prisma.SettingCreateInput> = [
    {
      key: 'max_auto_markdown_pct',
      value: 25,
      settingType: 'number',
      description: 'Maximum auto-approved markdown percentage',
    },
    {
      key: 'slow_inventory_threshold_days',
      value: 30,
      settingType: 'number',
      description: 'Days threshold for slow-moving inventory',
    },
    {
      key: 'critical_inventory_threshold_days',
      value: 60,
      settingType: 'number',
      description: 'Days threshold for critical inventory',
    },
    {
      key: 'ai_confidence_threshold',
      value: 0.75,
      settingType: 'number',
      description: 'Minimum AI confidence score for auto-execution',
    },
    {
      key: 'enable_ai_auto_execution',
      value: false,
      settingType: 'boolean',
      description: 'Enable AI to execute actions automatically',
    },
    {
      key: 'min_profit_margin_pct',
      value: 10,
      settingType: 'number',
      description: 'Minimum acceptable profit margin percentage',
    },
  ];

  for (const s of settingsData) {
    await prisma.setting.upsert({
      where: { key: s.key },
      update: s,
      create: s,
    });
  }
}
