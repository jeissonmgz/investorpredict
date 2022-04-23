import React, { ChangeEvent, useEffect, useState } from "react";
import { useHref } from "react-router-dom";
import { CoinService, ICoin } from "../../services/coins.services";

const ListPage = (): JSX.Element => {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [coinsFiltered, setCoinsFiltered] = useState<ICoin[]>([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    CoinService.getCoins().then((result) => {
      setCoins(result);
      setCoinsFiltered(result);
    });
  }, []);

  const onChangeFilterHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    setFilter(value);
    setCoinsFiltered(
      coins.filter((coin) =>
        coin.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const href = useHref("");
  return (
    <div>
      ListPage
      <input
        type="text"
        name="name"
        onChange={onChangeFilterHandler}
        value={filter}
      />
      {coinsFiltered.map((coin) => (
        <React.Fragment key={coin.id}>
          <a href={`${href}${coin.id}`}>{coin.name}</a>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ListPage;
