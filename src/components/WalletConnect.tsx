
import { useWallet } from '../hooks/useWallet';

const WalletConnect = () => {
  const { address, isConnected, connectWallet, disconnectWallet } = useWallet();

  return (
    <div className="flex justify-center mb-4">
      {isConnected ? (
        <div className="flex items-center space-x-4">
          <span className="text-pepeGreen font-comic">
            Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
          <button
            onClick={disconnectWallet}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-comic"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-pepeGreen text-white px-4 py-2 rounded hover:bg-pepeDark font-comic"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnect;
