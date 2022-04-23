import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
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
    <div>
      <div className="title">
        <img className="title__image" src={coin?.image.large} alt="logo coin" />
        <h1 className="title__text">{coin?.name}</h1>
      </div>
      {coinTime && <GraphCoin coinTime={coinTime} />}
      {coinTime && <EstimationCoin coinTime={coinTime} />}
    </div>
  );
};

export default CoinPage;
