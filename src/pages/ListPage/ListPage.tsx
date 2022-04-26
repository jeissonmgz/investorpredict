import React, { ChangeEvent, useEffect, useState } from "react";
import { CoinService, ICoin } from "../../services";
import ScrollList from "./components/ScrollList";

const ListPage = (): JSX.Element => {
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
  return (
    <div className="list_page">
      <h1 className="coin__title">Investorpredict</h1>
      Conoce el valor de las criptomonedas para mañana ;)
      <input
        className="list_page__search"
        type="text"
        name="name"
        placeholder="Busca tu criptomoneda, ejemplo: bitcoin"
        onChange={onChangeFilterHandler}
        value={filter}
      />
      <br />
      {coinsFiltered.length === 0 && coins.length !== 0 && filter !== "" && (
        <div>No encontramos tu criptomoneda :(</div>
      )}
      {coinsFiltered.length > 0 && <ScrollList coins={coinsFiltered} />}
    </div>
  );
};

export default ListPage;
