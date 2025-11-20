import { useEffect, useState } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect } from 'wagmi';

const WalletConnect = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <div className="flex justify-center mb-4">
      {isConnected ? (
        <div className="flex items-center space-x-4">
          <span className="text-pepeGreen font-comic">
            Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
          <button
            onClick={() => disconnect()}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-comic"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={() => open()}
          className="bg-pepeGreen text-white px-4 py-2 rounded hover:bg-pepeDark font-comic"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnect;
