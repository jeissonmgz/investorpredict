import { ChangeEvent, useEffect, useState } from "react";
import { CoinService, ICoin } from "../../services";

interface IListPageLogic {
  onChangeFilterHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  filter: string;
  coinsFiltered: ICoin[];
  coins: ICoin[];
}

export const ListPageLogic = (): IListPageLogic => {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [coinsFiltered, setCoinsFiltered] = useState<ICoin[]>([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    CoinService.getCoins().then((result) => {
      setCoins(result);
    });
  }, []);

  const onChangeFilterHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    setFilter(value);
    if (value.length > 0) {
      setCoinsFiltered(
        coins.filter((coin) =>
          coin.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setCoinsFiltered([]);
    }
  };
  return {
    onChangeFilterHandler,
    filter,
    coinsFiltered,
    coins,
  };
};
