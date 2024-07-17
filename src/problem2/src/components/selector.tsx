import { Spinner } from './spinner';
import AngleDown from '../assets/chevron-down.svg?react';
import { memo, useState } from 'react';
import { useCurrencyContext } from '../context/currency-context';
import { useClickOutside } from '../hook/useClickOutside';

const svgSrc = 'https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/';

type Props = {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
};

export const Selector = memo(({ currency, setCurrency }: Props) => {
  const { currencyMap } = useCurrencyContext();
  const currencies = Object.keys(currencyMap);
  const [selectIsOpen, setSelectIsOpen] = useState<boolean>(false);

  const ref = useClickOutside(() => setSelectIsOpen(false));

  return (
    <div className='w-auto bg-slate-800 rounded-2xl'>
      <button
        ref={ref}
        className='px-[0.625rem] py-1 w-full flex flex-row gap-x-1 justify-between items-center rounded-2xl bg-slate-900'
        onClick={() => setSelectIsOpen(pre => !pre)}>
        <div className='rounded-2xl flex flex-row gap-x-1 py-1 items-center'>
          <img
            src={svgSrc + currency + '.svg'}
            onError={(e: any) => {
              e.target.src = '/bitcoin.svg';
            }}
            className='w- h-7'></img>
          <p className='text-sm font-medium'>{currency}</p>
        </div>
        <AngleDown className={`${selectIsOpen ? 'rotate-180' : ''} duration-300 rounded-full w-5 h-5`} />
      </button>
      <div className='rounded-2xl'>
        <div className={`${selectIsOpen ? 'max-h-52 w-auto' : 'max-h-0 w-0'} duration-300 overflow-auto flex flex-col rounded-2xl`}>
          {currencies.length === 0 ? (
            <div className='w-full h-10 flex items-center justify-center'>
              <Spinner color='yellow-400' />
            </div>
          ) : (
            currencies.map((curr: string, idx: number) => (
              <button
                key={idx}
                className='px-[0.625rem] py-[0.375em] rounded-xl flex flex-row items-center gap-x-1 hover:text-yellow-400 hover:bg-slate-900'
                onClick={() => setCurrency(curr)}>
                <img
                  src={svgSrc + curr + '.svg'}
                  onError={(e: any) => {
                    e.target.src = '/bitcoin.svg';
                  }}
                  className='flex-shrink-0 w-7 h-7'></img>
                <p className='text-sm font-medium flex-shrink-0'>{curr}</p>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
});
