import { createContext, useContext, useState } from 'react';

type AmountContextType = {
  amount1: number;
  setAmount1: React.Dispatch<React.SetStateAction<number>>;
  amount2: number;
  setAmount2: React.Dispatch<React.SetStateAction<number>>;
  ratio: number;
  setRatio: React.Dispatch<React.SetStateAction<number>>;
} | null;

export const AmountContext = createContext<AmountContextType>(null);

export const useAmountContext = () => {
  const context = useContext(AmountContext);
  if (context === null) {
    throw new Error('useAmountContext must be used within an AmountContextProvider');
  }
  return context;
};

const AmountContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [amount1, setAmount1] = useState<number>(1);
  const [amount2, setAmount2] = useState<number>(0);
  const [ratio, setRatio] = useState<number>(1);
  return (
    <AmountContext.Provider
      value={{
        amount1,
        setAmount1,
        amount2,
        setAmount2,
        ratio,
        setRatio,
      }}>
      {children}
    </AmountContext.Provider>
  );
};

export default AmountContextProvider;
