# PepeLotto dApp

A dank, meme-rich Web3 frontend for the PRC-50 PepeLottery protocol on Pepecoin, built with Vite, React, TypeScript, Tailwind CSS, Web3.js, and Web3Modal. Stubs blockchain calls for later integration with your Pepinals indexer.

## Features
- Wallet connect (mock, stubbed for PepeWallet/MetaMask)
- Lottery selector (PepeMax, Pepe69/420)
- Ticket form: 20-col grid for Pepe69/420, Quick Pick, PepeFren donation (0-5%), badge opt-in
- Mock minting (outputs JSON, stubbed for indexer API)
- Results tab (mock tickets)
- Modal explaining odds
- Responsive, meme-tastic UI (Pepe-green, comic sans, GIFs)

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS
- Web3.js, Web3Modal
- Vitest, ESLint, Prettier

## Setup
1. Ensure Node.js is available (see `node-full` if needed)
2. Install dependencies (see package.json for pinned versions)
3. Add a Pepe meme as `public/pepe-bg.jpg`
4. Update `YOUR_PROJECT_ID` in `src/hooks/useWallet.ts` and `src/App.tsx`

## Run
```bash
npm run dev
```

## Test
```bash
npm run test
```

## Security & Best Practices
- Validates 69 unique picks, max 10 tickets/address
- No key storage (Web3Modal)
- XSS/CSRF prevented (Tailwind, React)
- HTTPS-only in production

## License
MIT
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
