import { useAmountContext } from '../context/amount-context';
import { useCurrencyContext } from '../context/currency-context';
import { formatter } from '../lib/formatter';
import { Selector } from './selector';
import { Spinner } from './spinner';

type Props = {
  type: 'input' | 'output';
};

export const CardContent = ({ type }: Props) => {
  const { currency1, setCurrency1, currency2, setCurrency2, currencyMap } = useCurrencyContext();
  const { amount1, setAmount1, amount2 } = useAmountContext();
  return (
    <div className='bg-slate-950 rounded-xl sm:rounded-2xl p-5 flex flex-col'>
      <p>{type === 'input' ? 'You pay' : 'You receive'}</p>
      {type === 'input' ? (
        <div className='relative h-12 flex items-center z-10'>
          <input
            type='number'
            className='w-full text-xl font-medium mr-[9.5rem] border-b outline-none bg-inherit'
            onChange={e => setAmount1(Number(e.target.value))}
            value={amount1 === 0 ? '' : amount1}
            placeholder='0'></input>
          <div className='absolute right-0 top-0'>
            <Selector
              currency={currency1}
              setCurrency={setCurrency1}
            />
          </div>
        </div>
      ) : (
        <div className='relative h-12 flex items-center'>
          <div className='w-full h-full pr-36 text-xl font-medium border-none outline-none bg-inherit flex items-center truncate'>
            {Object.keys(currencyMap).length > 0 ? <p className='w-36 xs:w-full overflow-x-auto'>{formatter(amount2)}</p> : <Spinner color='white' />}
          </div>
          <div className='absolute right-0 top-0'>
            <Selector
              currency={currency2}
              setCurrency={setCurrency2}
            />
          </div>
        </div>
      )}
    </div>
  );
};
