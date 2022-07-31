import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { environment } from "../../../environment/environment";
import { domain } from "../../../core";
import { Coin } from "../../../core/models";

interface ICoinPageLogic {
  coin: Coin | undefined;
}

export const CoinPageLogic = (): ICoinPageLogic => {
  const [coin, setCoin] = useState<Coin>();
  const { coinId } = useParams();
  const navigate = useNavigate();


  const loadCoin = useCallback(async () => {
    try {
      const coinDetails = await domain.getCoinPredictionInUSDUseCase(coinId as string);
      setCoin(coinDetails);
    } catch (e) {
      navigate(`/${environment.urlBase}no_encontrado`);
    }
  }, [navigate, coinId]);

  useEffect(() => {
    if (coinId !== undefined && coinId !== coin?.id) {
      loadCoin();
    }
  }, [coinId, coin?.id, loadCoin]);

  return {
    coin
  };
};
