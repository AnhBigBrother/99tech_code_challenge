type TokenType = {
  currency: string;
  date: string;
  price: number;
};
type CurrencyType = { date: string; price: number };
type CurrencyMapType = { [keys: string]: CurrencyType };

export type { TokenType, CurrencyMapType, CurrencyType };
