import { useState } from 'react';
import type { Lottery, Ticket } from '../types';

interface TicketFormProps {
  lottery: Lottery | null;
  address: string | undefined;
  onMint: (ticket: Ticket) => void;
}

const TicketForm = ({ lottery, address, onMint }: TicketFormProps) => {
  const [selectedNumbers, setSelectedNumbers] = useState<Set<number>>(new Set());
  const [pepeFrenPercent, setPepeFrenPercent] = useState<number>(0);
  const [pepeFrenBadge, setPepeFrenBadge] = useState<boolean>(false);

  if (!lottery) return <p className="text-center font-comic text-yellow-400">Select a lottery to mint a ticket!</p>;
  if (!address) return <p className="text-center font-comic text-yellow-400">Connect wallet to mint!</p>;

  const isMultiPick = lottery.type === 'multi-pick';
  const maxPicks = isMultiPick ? 69 : 0;
  const totalNumbers = isMultiPick ? 420 : 0;

  const toggleNumber = (num: number) => {
    if (selectedNumbers.has(num)) {
      selectedNumbers.delete(num);
      setSelectedNumbers(new Set(selectedNumbers));
    } else if (selectedNumbers.size < maxPicks) {
      selectedNumbers.add(num);
      setSelectedNumbers(new Set(selectedNumbers));
    } else {
      alert('Much picks! You already got 69 numbers, pepe!');
    }
  };

  const quickPick = () => {
    const numbers = Array.from({ length: totalNumbers }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    setSelectedNumbers(new Set(numbers.slice(0, maxPicks)));
  };

  const clearPicks = () => {
    setSelectedNumbers(new Set());
  };

  const mintTicket = async () => {
    if (isMultiPick && selectedNumbers.size !== maxPicks) {
      alert(`Need exactly ${maxPicks} numbers, pepe!`);
      return;
    }
    const ticket: Ticket = {
      lotteryId: lottery.id,
      buyer: address,
      ticketNumber: isMultiPick ? undefined : Math.floor(Math.random() * lottery.maxTickets) + 1,
      picks: isMultiPick ? Array.from(selectedNumbers).sort((a, b) => a - b) : undefined,
      pepeFrenPercent,
      pepeFrenBadge,
      protocolFeePaid: '50000000' // 0.5 PEPE
    };

    // Stubbed blockchain call
    const inscriptionData = JSON.stringify({
      p: 'prc-50',
      op: 'ticket',
      id: ticket.lotteryId,
      by: ticket.buyer,
      pk: ticket.picks?.join(','),
      dp: ticket.pepeFrenPercent,
      db: ticket.pepeFrenBadge,
      pf: ticket.protocolFeePaid,
      it: '0.01'
    });
    console.log('Mock Inscription:', inscriptionData);
    alert('Mock ticket minted! Check console for JSON.');

    onMint(ticket);
    clearPicks();
  };

  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-lg">
      <h2 className="text-2xl text-center font-comic text-pepeGreen mb-4">Mint Your {lottery.name} Ticket</h2>
      {isMultiPick && (
        <>
          <div className="grid grid-cols-20 gap-1 mb-4 max-h-96 overflow-y-auto">
            {Array.from({ length: totalNumbers }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => toggleNumber(num)}
                className={`p-2 rounded text-black font-comic text-sm ${selectedNumbers.has(num) ? 'bg-pepeGreen text-white' : 'bg-yellow-400'} hover:bg-pepeDark flex justify-center items-center min-h-[40px]`}
                style={{ userSelect: 'none' }}
              >
                {num}
              </button>
            ))}
          </div>
          <p className="text-center mb-4 font-comic">Selected: {selectedNumbers.size}/{maxPicks}</p>
          <div className="flex justify-center space-x-4 mb-4">
            <button onClick={quickPick} className="bg-pepeGreen text-white px-4 py-2 rounded hover:bg-pepeDark font-comic">Quick Pick 69!</button>
            <button onClick={clearPicks} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-comic">Clear Picks</button>
          </div>
        </>
      )}
      <div className="mb-4 text-center">
        <label className="mr-2 font-comic">PepeFren Donation (funds protocol dev!):</label>
        <select
          value={pepeFrenPercent}
          onChange={(e) => setPepeFrenPercent(Number(e.target.value))}
          className="border rounded px-2 py-1 bg-white text-black font-comic"
        >
          <option value={0}>0% - No Donation</option>
          <option value={1}>1% - Lil' Pepe Tip</option>
          <option value={2}>2% - Good Froggo</option>
          <option value={5}>5% - True PepeFren!</option>
        </select>
        <p className="text-sm italic mt-1 font-comic">Your % supports indexer, bot, and PepeLotto upgrades—much generous!</p>
        <label className="flex justify-center items-center mt-2">
          <input
            type="checkbox"
            checked={pepeFrenBadge}
            onChange={(e) => setPepeFrenBadge(e.target.checked)}
            className="mr-2"
          />
          <span className="font-comic">Mint PepeFren Badge Pepinal</span>
        </label>
      </div>
      <div className="text-center">
        <button
          onClick={mintTicket}
          className="bg-pepeGreen text-white px-4 py-2 rounded hover:bg-pepeDark font-comic"
        >
          Mint Ticket
        </button>
        <p className="text-sm italic mt-1 font-comic">~0.03 PEPE fee + 0.5 PEPE to protocol</p>
      </div>
    </div>
  );
};

export default TicketForm;
