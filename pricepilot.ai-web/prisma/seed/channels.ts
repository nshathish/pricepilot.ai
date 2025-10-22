import { PrismaClient, Prisma } from '@/app/generated/prisma';
import { D } from './utils.js';

export async function seedChannels(prisma: PrismaClient) {
  console.log('  📡 Seeding channels...');

  const channelsData: Array<Prisma.ChannelCreateInput> = [
    { name: 'email', averageConversionRate: D('12.5'), isActive: true },
    { name: 'instagram', averageConversionRate: D('8.3'), isActive: true },
    {
      name: 'website_banner',
      averageConversionRate: D('15.2'),
      isActive: true,
    },
    { name: 'sms', averageConversionRate: D('22.1'), isActive: true },
    {
      name: 'push_notification',
      averageConversionRate: D('6.8'),
      isActive: true,
    },
    { name: 'facebook', averageConversionRate: D('9.4'), isActive: true },
    { name: 'google_ads', averageConversionRate: D('11.7'), isActive: true },
  ];

  for (const c of channelsData) {
    await prisma.channel.upsert({
      where: { name: c.name },
      update: c,
      create: c,
    });
  }

  const channels = await prisma.channel.findMany();
  const channelByName: Record<string, bigint> = {};
  for (const channel of channels) {
    channelByName[channel.name] = channel.id;
  }

  return { channels, channelByName };
}
