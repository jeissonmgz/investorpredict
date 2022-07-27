import React from "react";
import { Card, HyperLink } from "../../components";

import { CoinPageLogic } from "./CoinPage.logic";
import EstimationCoin from "./components/EstimationCoin";
import GraphCoin from "./components/GraphCoin";

const CoinPage = (): JSX.Element => {
  const { coin, coinTime } = CoinPageLogic();
  return (
    <div className="coin_page">
      <div className="coin_page__header_history">
        <header className="coin_page__header">
          <HyperLink type="secundary" to="">
            Volver
          </HyperLink>
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
          <Card>
            <>
              <h2 className="coin_page__subtitle">Historial</h2>
              El historial de los últimos 90 días es:
              {coinTime && <GraphCoin coinTime={coinTime} />}
            </>
          </Card>
        </section>
      </div>
      {coinTime && <EstimationCoin coinTime={coinTime} />}
      <footer className="coin_page__footer">
        <HyperLink type="secundary" to="">
          Busca más criptomonedas
        </HyperLink>
      </footer>
    </div>
  );
};

export default CoinPage;
