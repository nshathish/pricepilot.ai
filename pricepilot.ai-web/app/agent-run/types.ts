export type Urgency = 'URGENT' | 'MODERATE' | 'ON TRACK';
export type Channel = 'email' | 'instagram' | 'sms' | 'website';

export type Product = {
  id: 'beanie' | 'summer' | 'shoes' | 'jacket';
  name: string;
  sku: string;
  category: string;
  urgency: Urgency;
  urgencyColor: 'red' | 'yellow' | 'green';
  initialStock: number;
  currentStock: number;
  soldUnits: number;
  basePrice: number;
  currentPrice: number;
  currentDiscount: number;
  daysLeft: number;
  holdingCostPerDay: number;
  targetSellThrough: number; // %
  currentSellThrough: number; // %
  salesVelocity: number;
  status: 'monitoring' | 'markdown_active';
  activeChannels: Channel[];
  totalRevenue: number;
  agentFocus: boolean;
};

export type LogType =
  | 'urgent'
  | 'action'
  | 'success'
  | 'warning'
  | 'channel'
  | 'analysis'
  | 'system'
  | 'alert'
  | 'info';

export type AgentLog = {
  day: number;
  time: string;
  productId: Product['id'] | 'all';
  message: string;
  type: LogType;
};

export type GlobalMetrics = {
  totalInventoryValue: number;
  projectedProfit: number;
  productsActioned: number;
  avgSellThrough: number;
  totalHoldingCostSaved: number;
};

export type ActionKind =
  | 'INITIAL_SCAN'
  | 'IDENTIFY_URGENT'
  | 'IDENTIFY_MODERATE'
  | 'APPLY_MARKDOWN'
  | 'INCREASE_MARKDOWN'
  | 'CHANNELS_ACTIVATED'
  | 'MONITOR'
  | 'SUCCESS'
  | 'FINAL_PUSH'
  | 'NEAR_COMPLETE'
  | 'PROGRESS'
  | 'COMPLETION'
  | 'FINAL';

export type SimulationEvent = {
  productId: Product['id'] | 'all';
  action: ActionKind;
  message: string;
  type?: LogType;
  discount?: number;
  channels?: Channel[];
};

export type SelectedProduct = 'all' | Product['id'];
