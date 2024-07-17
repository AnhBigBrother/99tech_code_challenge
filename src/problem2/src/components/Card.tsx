import Swapper from '../assets/swap.svg?react';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';

export const Card = () => {
  return (
    <div className='rounded-xl sm:rounded-2xl flex flex-col gap-5 bg-slate-900 p-8 justify-center items-center max-w-[32rem]'>
      <CardHeader />
      <div className='relative flex flex-col gap-5'>
        <CardContent type='input' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-slate-950 ring-4 ring-slate-900 w-10 h-10 rounded-full flex items-center justify-center text-yellow-400'>
          <Swapper />
        </div>
        <CardContent type='output' />
      </div>
      <CardFooter />
    </div>
  );
};
