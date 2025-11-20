import { useState } from 'react';
import WalletConnect from './components/WalletConnect';
import LotterySelect from './components/LotterySelect';
import TicketForm from './components/TicketForm';
import Results from './components/Results';
import Modal from './components/Modal';
import type { Lottery, Ticket } from './types';

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


const App = () => {
  const [selectedLotteryId, setSelectedLotteryId] = useState<string | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);

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

  const selectedLottery = mockLotteries.find(l => l.id === selectedLotteryId) || null;

  const handleMint = (ticket: Ticket) => {
    setTickets([...tickets, ticket]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-pepeDark bg-opacity-80 p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-4xl text-center font-comic text-yellow-400 mb-4">PepeLotto - Much Meme, Very Jackpot!</h1>
        <WalletConnect />
        <Modal />
        <LotterySelect onSelect={setSelectedLotteryId} />
        <TicketForm lottery={selectedLottery} onMint={handleMint} />
        <Results tickets={tickets} />
      </div>
    </div>
  );
};

export default App;
