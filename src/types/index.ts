export interface Lottery {
  id: string;
  name: string;
  type: 'simple' | 'multi-pick';
  ticketPrice: string; // Shibes
  maxTickets: number;
  minTickets: number;
  seedStake: string;
  prizePool: string;
  drawBlock: number;
  winnerStyle: 'rollover' | 'guaranteed';
  rolloverKFactor: number;
  partialsEnabled: boolean;
  creator: string;
  protocolFee: string;
  protocolWallet: string;
  charitySplit: number;
}

export interface Ticket {
  lotteryId: string;
  buyer: string;
  ticketNumber?: number;
  picks?: number[];
  pepeFrenPercent: number;
  pepeFrenBadge: boolean;
  protocolFeePaid: string;
}
