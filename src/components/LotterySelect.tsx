import { useState } from 'react';
import type { Lottery } from '../types';

interface LotterySelectProps {
  onSelect: (lotteryId: string) => void;
}

const mockLotteries: Lottery[] = [
  {
    id: 'PepeMax_20250910',
    name: 'Main PepeMax #1',
    type: 'simple',
    ticketPrice: '2500000000',
    maxTickets: 100,
    minTickets: 5,
    seedStake: '5000000000',
    prizePool: '0',
    drawBlock: 1440,
    winnerStyle: 'guaranteed',
    rolloverKFactor: 0.86,
    partialsEnabled: true,
    creator: 'mock_addr',
    protocolFee: '0',
    protocolWallet: 'mock_wallet',
    charitySplit: 10
  },
  {
    id: 'Pepe69_420_20250910',
    name: 'Main Pepe69/420 #1',
    type: 'multi-pick',
    ticketPrice: '2500000000',
    maxTickets: 100,
    minTickets: 5,
    seedStake: '5000000000',
    prizePool: '0',
    drawBlock: 1440,
    winnerStyle: 'rollover',
    rolloverKFactor: 0.86,
    partialsEnabled: true,
    creator: 'mock_addr',
    protocolFee: '0',
    protocolWallet: 'mock_wallet',
    charitySplit: 10
  }
];

const LotterySelect = ({ onSelect }: LotterySelectProps) => {
  const [selected, setSelected] = useState<string>('');

  const handleSelect = (id: string) => {
    setSelected(id);
    onSelect(id);
  };

  return (
    <div className="mb-4 text-center">
      <label className="text-2xl font-comic text-yellow-400 mr-2">Choose Your Lotto:</label>
      <select
        value={selected}
        onChange={(e) => handleSelect(e.target.value)}
        className="border rounded px-2 py-1 bg-white text-black font-comic"
      >
        <option value="">Select a Lottery</option>
        {mockLotteries.map((lottery) => (
          <option key={lottery.id} value={lottery.id}>{lottery.name}</option>
        ))}
      </select>
    </div>
  );
};

export default LotterySelect;
