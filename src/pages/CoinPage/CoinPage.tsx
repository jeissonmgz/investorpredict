import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { environment } from "../../environment/environment";
import {
  CoinService,
  ICoinDetail,
  ICoinDollarTime,
} from "../../services/coins.services";
import EstimationCoin from "./components/EstimationCoin";
import GraphCoin from "./components/GraphCoin";

const CoinPage = (): JSX.Element => {
  const [coin, setCoin] = useState<ICoinDetail>();
  const { coinId } = useParams();
  const [coinTime, setCoinTime] = useState<ICoinDollarTime>();

  useEffect(() => {
    if (coinId !== undefined && coinId !== coin?.id) {
      CoinService.getCoinValueTime(`${coinId}`).then((result) => {
        setCoinTime(result);
      });

      CoinService.getCoinDetail(`${coinId}`).then((result) => {
        setCoin(result);
      });
    }
  }, [coinId, coin?.id]);

  return (
    <div className="coin_page">
      <div className="coin_page__header_history">
      <header className="coin_page__header">
        <Link className="link link--light" to={`/${environment.urlBase}`}>Volver</Link>
        <div className="coin_page__title">
          <img className="coin_page__title_image" src={coin?.image.large} alt="logo coin" />
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
        <Link className="link link--light" to={`/${environment.urlBase}`}>Busca más criptomonedas</Link>
      </footer>
    </div>
  );
};

export default CoinPage;
