/// <reference types="vite-plugin-svgr/client" />
import { useLayoutEffect } from 'react';
import { CurrencyMapType, TokenType } from './types';
import { useCurrencyContext } from './context/currency-context';
import { useCalculate } from './hook/useCaculate';
import { Card } from './components/Card';

const wait = async (t: number) => {
  return new Promise(resolve => setTimeout(resolve, t));
};

function App() {
  useCalculate();
  const { setCurrencyMap } = useCurrencyContext();
  useLayoutEffect(() => {
    wait(500)
      .then(() => fetch('https://interview.switcheo.com/prices.json'))
      .then(res => res.json())
      .then((data: TokenType[]) => {
        const map: CurrencyMapType = {};
        for (let token of data) {
          if (!map[token.currency] || new Date(map[token.currency].date) < new Date(token.date)) {
            map[token.currency] = { date: token.date, price: token.price };
          }
        }
        setCurrencyMap(map);
      })
      .catch(err => {
        console.log('Something went wrong!');
        console.log(err);
      });
  }, []);

  return (
    <div className='text-white bg-slate-950 w-screen h-screen flex justify-center items-center'>
      <Card />
    </div>
  );
}

export default App;
