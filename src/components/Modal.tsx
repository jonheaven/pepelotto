import { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-yellow-400 text-black px-4 py-2 rounded mb-4 hover:bg-yellow-500 font-comic"
      >
        How It Works?
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-[90%] max-h-[80%] overflow-y-auto text-black font-comic">
            <h2 className="text-2xl mb-4">How Pepe69/420 Works - Much Fair!</h2>
            <p>Your 69 picks from 1-420 (manual or Quick Pick) don’t match a draw exactly—that’s impossible (1 in a gazillion, sad pepe!). Instead, they <strong>seed a unique position</strong> (e.g., 1-100 if 100 players):</p>
            <ul className="list-disc pl-5 mb-4">
              <li><strong>Picks Seed Your Spot:</strong> Hash your 69 numbers to a position, like #47. Odds: 1 in players for jackpot!</li>
              <li><strong>Draw:</strong> Block hash at midnight UTC picks a winner position (#23). Match = jackpot! Close = partials.</li>
              <li><strong>Rollovers:</strong> ~14% chance/draw, pot grows—epic hype!</li>
              <li><strong>Guaranteed Mode:</strong> Closest position wins—no empty paws!</li>
              <li><strong>Trustless:</strong> On-chain via Pepecoin. Verify with PepeScan!</li>
            </ul>
            <p>PepeFren 0-5% for a badge Pepinal and to fund indexer, bot, and upgrades—much generous! Join the PepeLotto moonshot! 🚀🐸</p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-pepeGreen text-white px-4 py-2 rounded mt-4 font-comic"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
