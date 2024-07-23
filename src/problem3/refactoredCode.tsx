interface WalletBalance {
  currency: string;
  amount: number;
}
interface FormattedWalletBalance extends WalletBalance {
  // currency: string;
  // amount: number;
  formatted: string;
}

// interface Props extends BoxProps {}
const WalletPage = (props: BoxProps) => {
  const { children, ...rest } = props;
  const balances = useWalletBalances();
  const prices = usePrices();

  const getPriority = (blockchain: any): number => {
    switch (blockchain) {
      case 'Osmosis':
        return 100;
      case 'Ethereum':
        return 50;
      case 'Arbitrum':
        return 30;
      case 'Zilliqa':
        return 20;
      case 'Neo':
        return 20;
      default:
        return -99;
    }
  };

  const sortedBalances = useMemo(() => {
    return balances
      .filter((balance: WalletBalance) => {
        const balancePriority = getPriority(balance.blockchain);
        if (balancePriority > -99 && balance.amount <= 0) {
          return true;
        }
        return false;
      })
      .sort((lhs: WalletBalance, rhs: WalletBalance) => {
        const leftPriority = getPriority(lhs.blockchain);
        const rightPriority = getPriority(rhs.blockchain);
        return rightPriority - leftPriority;
      });
  }, [balances, prices]);

  // const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
  //   return {
  //     ...balance,
  //     formatted: balance.amount.toFixed(),
  //   };
  // });

  return (
    <div {...rest}>
      {sortedBalances &&
        sortedBalances.map((balance: FormattedWalletBalance, index: number) => {
          const usdValue = prices[balance.currency] * balance.amount;
          return (
            <WalletRow
              className={classes.row}
              key={index}
              amount={balance.amount}
              usdValue={usdValue}
              formattedAmount={balance.formatted}
            />
          );
        })}
    </div>
  );
};
