import { createContext, useContext, useState } from 'react';
import { CurrencyMapType } from '../types';

type CurrencyContextType = {
  currency1: string;
  setCurrency1: React.Dispatch<React.SetStateAction<string>>;
  currency2: string;
  setCurrency2: React.Dispatch<React.SetStateAction<string>>;
  currencyMap: CurrencyMapType;
  setCurrencyMap: React.Dispatch<React.SetStateAction<CurrencyMapType>>;
} | null;

export const CurrencyContext = createContext<CurrencyContextType>(null);

export const useCurrencyContext = () => {
  const context = useContext(CurrencyContext);
  if (context === null) {
    throw new Error('useCurrencyContext must be used within an CurrencyContextProvider');
  }
  return context;
};

const CurrencyContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency1, setCurrency1] = useState<string>('ETH');
  const [currency2, setCurrency2] = useState<string>('USD');
  const [currencyMap, setCurrencyMap] = useState<CurrencyMapType>({});
  return (
    <CurrencyContext.Provider
      value={{
        currency1,
        setCurrency1,
        currency2,
        setCurrency2,
        currencyMap,
        setCurrencyMap,
      }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
