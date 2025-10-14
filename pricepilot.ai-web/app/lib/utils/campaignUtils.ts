export const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Accessories':
      return '🧢';
    case 'Apparel':
      return '👕';
    case 'Footwear':
      return '👟';
    default:
      return '📦';
  }
};

export const getUrgencyColor = (level: string) => {
  switch (level) {
    case 'URGENT':
      return 'bg-red-50 border-red-200';
    case 'MODERATE':
      return 'bg-yellow-50 border-yellow-200';
    case 'LOW':
      return 'bg-green-50 border-green-200';
    default:
      return 'bg-gray-50 border-gray-200';
  }
};

export const getUrgencyBadgeColor = (level: string) => {
  switch (level) {
    case 'URGENT':
      return 'bg-red-500 text-white';
    case 'MODERATE':
      return 'bg-yellow-500 text-white';
    case 'LOW':
      return 'bg-green-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High Priority':
      return 'bg-green-100 text-green-800 border-green-300';
    case 'Medium Priority':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case 'Low Priority':
      return 'bg-gray-100 text-gray-800 border-gray-300';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};
