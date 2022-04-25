import React, { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { environment } from "../../environment/environment";
import { CoinService, ICoin } from "../../services/coins.services";

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
      {coinsFiltered.length=== 0 && coins.length!== 0 && filter !== "" && <div>No encontramos tu criptomoneda :(</div>}
      <div className="list">
        {coinsFiltered.map((coin) => (
          <React.Fragment key={coin.id}>
            <Link className="link" to={`/${environment.urlBase}${coin.id}`}>
              {coin.name}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ListPage;
