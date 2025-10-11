import { UrgencyLevel } from '@/app/types/product';

export const getUrgencyColor = (urgency: UrgencyLevel): string => {
  switch (urgency) {
    case 'critical':
      return 'bg-red-100 text-red-800 border-red-300';
    case 'moderate':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case 'low':
      return 'bg-green-100 text-green-800 border-green-300';
  }
};

export const getUrgencyBadge = (urgency: UrgencyLevel): string => {
  switch (urgency) {
    case 'critical':
      return 'URGENT';
    case 'moderate':
      return 'MODERATE';
    case 'low':
      return 'ON TRACK';
  }
};
