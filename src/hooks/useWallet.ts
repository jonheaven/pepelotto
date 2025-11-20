import { createClient, http } from 'wagmi';
import { walletConnect, injected } from '@wagmi/connectors';

// Stubbed Pepecoin chain (replace with real RPC)
const pepeChain = {
  id: 123456,
  name: 'Pepecoin',
  network: 'pepecoin',
  nativeCurrency: { name: 'Pepecoin', symbol: 'PEPE', decimals: 8 },
  rpcUrls: { default: { http: ['https://rpc.pepecoin.io'] } },
  blockExplorers: { default: { name: 'PepeScan', url: 'https://explorer.pepecoin.io' } }
};

export const wagmiConfig = createClient({
  chains: [pepeChain],
  connectors: [
    walletConnect({ projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID }),
    injected({ target: 'metaMask' })
  ],
  transports: { [pepeChain.id]: http() }
});
