import {
  PrismaClient,
  Prisma,
  CampaignType,
  CampaignStatus,
} from '@/app/generated/prisma';
import { D, daysAgo, addDays } from './utils.js';

export async function seedCampaigns(
  prisma: PrismaClient,
  channelByName: Record<string, bigint>,
) {
  console.log('  🎯 Seeding campaigns...');

  const campaignsData: Array<Prisma.CampaignCreateInput> = [
    {
      name: 'Winter Clearance Flash Sale',
      campaignType: CampaignType.flash_sale,
      startDate: daysAgo(2),
      endDate: addDays(new Date(), 1),
      targetAudience: 'All customers',
      budget: D('5000.00'),
      status: CampaignStatus.active,
    },
    {
      name: 'End of Summer Clearance',
      campaignType: CampaignType.clearance,
      startDate: daysAgo(20),
      endDate: daysAgo(5),
      targetAudience: 'Fashion-conscious customers',
      budget: D('3000.00'),
      status: CampaignStatus.completed,
    },
  ];

  for (const c of campaignsData) {
    const existing = await prisma.campaign.findFirst({
      where: { name: c.name },
    });

    if (existing) {
      await prisma.campaign.update({
        where: { id: existing.id },
        data: c,
      });
    } else {
      await prisma.campaign.create({
        data: c,
      });
    }
  }

  const campaigns = await prisma.campaign.findMany();
  let activeCampaign = null;
  for (const campaign of campaigns) {
    if (campaign.name === 'Winter Clearance Flash Sale') {
      activeCampaign = campaign;
      break;
    }
  }

  // Campaign Channels
  if (activeCampaign) {
    const campaignChannelsData: Array<Prisma.CampaignChannelCreateInput> = [
      {
        campaign: { connect: { id: activeCampaign.id } },
        channel: { connect: { id: channelByName['email'] } },
        channelBudget: D('2000.00'),
        priority: 1,
        customMessage: '❄️ Winter Clearance: 20-30% OFF Selected Items!',
      },
      {
        campaign: { connect: { id: activeCampaign.id } },
        channel: { connect: { id: channelByName['instagram'] } },
        channelBudget: D('2000.00'),
        priority: 2,
        customMessage:
          '❄️ Flash Sale Alert! Winter items up to 30% off! Link in bio 👆',
      },
      {
        campaign: { connect: { id: activeCampaign.id } },
        channel: { connect: { id: channelByName['website_banner'] } },
        channelBudget: D('1000.00'),
        priority: 3,
        customMessage: 'WINTER FLASH SALE: Up to 30% OFF - Limited Time!',
      },
    ];

    for (const cc of campaignChannelsData) {
      await prisma.campaignChannel.create({ data: cc });
    }
  }

  return { campaigns, activeCampaign };
}
