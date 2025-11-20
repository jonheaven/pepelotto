import type { Ticket } from '../types';

interface ResultsProps {
  tickets: Ticket[];
}

const Results = ({ tickets }: ResultsProps) => {
  return (
    <div className="mt-4 bg-white bg-opacity-80 p-6 rounded-lg">
      <h2 className="text-2xl text-center font-comic text-pepeGreen mb-4">Your Minted Tickets</h2>
      {tickets.length === 0 ? (
        <p className="text-center font-comic">No tickets minted yet, pepe!</p>
      ) : (
        <ul className="space-y-2">
          {tickets.map((ticket, index) => (
            <li key={index} className="text-black font-comic">
              <strong>Lottery:</strong> {ticket.lotteryId} | <strong>Buyer:</strong> {ticket.buyer} |{' '}
              {ticket.picks ? <><strong>Picks:</strong> {ticket.picks.join(', ')}</> : <><strong>Ticket #:</strong> {ticket.ticketNumber}</>} |{' '}
              <strong>PepeFren:</strong> {ticket.pepeFrenPercent}%{ticket.pepeFrenBadge ? ' + Badge' : ''}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Results;
