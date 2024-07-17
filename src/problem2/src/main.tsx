import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import CurrencyContextProvider from './context/currency-context.tsx';
import AmountContextProvider from './context/amount-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CurrencyContextProvider>
      <AmountContextProvider>
        <App />
      </AmountContextProvider>
    </CurrencyContextProvider>
  </React.StrictMode>
);
