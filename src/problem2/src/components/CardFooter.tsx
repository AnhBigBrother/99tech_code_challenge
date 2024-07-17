import { useCurrencyContext } from '../context/currency-context';
import { useAmountContext } from '../context/amount-context';
import Swapper from '../assets/swap.svg?react';
import { memo } from 'react';
import { Spinner } from './spinner';

export const CardFooter = memo(() => {
  const { currency1, setCurrency1, currency2, setCurrency2, currencyMap } = useCurrencyContext();
  const { ratio } = useAmountContext();
  const handleSwap = () => {
    const temp = currency1;
    setCurrency1(currency2);
    setCurrency2(temp);
  };
  return (
    <div className='w-full flex flex-col gap-y-3 items-center'>
      {currencyMap[currency1] && currencyMap[currency2] ? (
        <div className='flex flex-col'>
          <p className='text-center'>{`1 ${currency1} = ${ratio} ${currency2}`}</p>
          <p className='text-center text-sm text-slate-400'>
            {new Date(currencyMap[currency1].date) > new Date(currencyMap[currency2].date) ? new Date(currencyMap[currency1].date).toLocaleString() : new Date(currencyMap[currency2].date).toLocaleString()}
          </p>
        </div>
      ) : (
        <Spinner color='slate-400' />
      )}
      <button
        className='h-12 w-fit px-10 bg-yellow-400 hover:bg-yellow-500 rounded-xl text-slate-950 text-xl font-bold flex items-center justify-center gap-x-2'
        onClick={handleSwap}>
        <span>Swap</span>
        <Swapper className='rotate-90 w-5 h-5' />
      </button>
    </div>
  );
});
