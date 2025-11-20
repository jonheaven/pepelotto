import { useState, useEffect } from 'react';
import Web3 from 'web3';

export const useWallet = () => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Stubbed Pepecoin RPC (replace with real RPC)
        const web3Instance = new Web3('https://rpc.pepecoin.io');
        setWeb3(web3Instance);

        // Request wallet connection
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAddress(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error('Wallet connection failed:', error);
        alert('Failed to connect wallet, pepe!');
      }
    } else {
      alert('Please install PepeWallet or MetaMask with Pepecoin RPC!');
    }
  };

  const disconnectWallet = () => {
    setAddress(null);
    setIsConnected(false);
    setWeb3(null);
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setAddress(accounts[0]);
          setIsConnected(true);
        } else {
          disconnectWallet();
        }
      });
    }
  }, []);

  return { web3, address, isConnected, connectWallet, disconnectWallet };
};
