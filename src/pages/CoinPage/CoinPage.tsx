import React from "react";

import { Link } from "react-router-dom";
import { environment } from "../../environment/environment";
import { CoinPageLogic } from "./CoinPage.logic";
import EstimationCoin from "./components/EstimationCoin";
import GraphCoin from "./components/GraphCoin";

const CoinPage = (): JSX.Element => {
  const { coin, coinTime } = CoinPageLogic();
  return (
    <div className="coin_page">
      <div className="coin_page__header_history">
        <header className="coin_page__header">
          <Link className="link link--light" to={`/${environment.urlBase}`}>
            Volver
          </Link>
          <div className="coin_page__title">
            <img
              className="coin_page__title_image"
              src={coin?.image.large}
              alt="logo coin"
            />
            <h1 className="coin_page__title_text">{coin?.name}</h1>
          </div>
        </header>
        <section className="coin_page__history center_xy">
          <div className="card">
            <h2 className="coin_page__subtitle">Historial</h2>
            El historial de los últimos 90 días es:
            {coinTime && <GraphCoin coinTime={coinTime} />}
          </div>
        </section>
      </div>
      {coinTime && <EstimationCoin coinTime={coinTime} />}
      <footer className="coin_page__footer">
        <Link className="link link--light" to={`/${environment.urlBase}`}>
          Busca más criptomonedas
        </Link>
      </footer>
    </div>
  );
};

export default CoinPage;
