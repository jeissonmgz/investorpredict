import React from "react";
import ScrollList from "./components/ScrollList";
import { ListPageLogic } from "./ListPage.logic";

const ListPage = (): JSX.Element => {
  const { onChangeFilterHandler, filter, coinsFiltered, coins } =
    ListPageLogic();
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
