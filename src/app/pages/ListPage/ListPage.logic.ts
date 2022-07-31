import { ChangeEvent, useEffect, useState } from "react";
import { domain } from "src/core";
import { Coin } from "src/core/models";

interface IListPageLogic {
  onChangeFilterHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  filter: string;
  coinsFiltered: Coin[];
  coins: Coin[];
}

export const ListPageLogic = (): IListPageLogic => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [coinsFiltered, setCoinsFiltered] = useState<Coin[]>([]);
  const [filter, setFilter] = useState("");
  
  useEffect(() => {
    domain.getCoinsUseCase().then((result) => {
      setCoins(result);
    });
  }, []);

  const onChangeFilterHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    setFilter(value);
    setCoinsFiltered(domain.findCoinUseCase(value, coins));
  };

  return {
    onChangeFilterHandler,
    filter,
    coinsFiltered,
    coins,
  };
};
