import { useLayoutEffect, useMemo } from 'react';
import { useAmountContext } from '../context/amount-context';
import { useCurrencyContext } from '../context/currency-context';

const useCalculate = () => {
  const { currency1, currency2, currencyMap } = useCurrencyContext();
  const { amount1, setAmount2, setRatio } = useAmountContext();
  const price1 = useMemo(() => {
    if (!currencyMap[currency1]) return 1;
    return currencyMap[currency1].price;
  }, [currency1, currencyMap]);
  const price2 = useMemo(() => {
    if (!currencyMap[currency2]) return 1;
    return currencyMap[currency2].price;
  }, [currency2, currencyMap]);
  useLayoutEffect(() => {
    const ratio = price1 / price2;
    setRatio(ratio);
    const calculated = ratio * amount1;
    setAmount2(calculated);
  }, [amount1, currency1, currency2, price1, price2]);
};

export { useCalculate };
