import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHref } from "react-router-dom";
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
  return (
    <div>
      <h1 className="coin__title">Investorpredict</h1>
      Conoce el valor de las criptomonedas para mañana ;)
      <input
        className="coin__input"
        type="text"
        name="name"
        placeholder="Filtrar criptomoneda"
        onChange={onChangeFilterHandler}
        value={filter}
      />
      <br />
      <div className="list">
      {coinsFiltered.map((coin) => (
        <React.Fragment key={coin.id}>
          <Link to={`/investorpredict/${coin.id}`}>{coin.name}</Link>
          <br />
        </React.Fragment>
      ))}
      </div>
      
    </div>
  );
};

export default ListPage;
