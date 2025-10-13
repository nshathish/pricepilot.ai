import { UrgencyLevel } from '@/app/types/product';

export const getUrgencyColor = (urgency: UrgencyLevel): string => {
  switch (urgency) {
    case 'URGENT':
      return 'bg-red-100 text-red-800 border-red-300';
    case 'MODERATE':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case 'ON TRACK':
      return 'bg-green-100 text-green-800 border-green-300';
  }
};
