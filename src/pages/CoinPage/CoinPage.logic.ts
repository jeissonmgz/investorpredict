import { useCallback, useEffect, useState } from "react";
import { CoinService, ICoinDetail, ICoinDollarTime } from "../../services";
import { useNavigate, useParams } from "react-router-dom";
import { environment } from "../../environment/environment";

interface ICoinPageLogic {
  coin: ICoinDetail | undefined;
  coinTime: ICoinDollarTime | undefined;
}

export const CoinPageLogic = (): ICoinPageLogic => {
  const [coin, setCoin] = useState<ICoinDetail>();
  const { coinId } = useParams();
  const [coinTime, setCoinTime] = useState<ICoinDollarTime>();
  const navigate = useNavigate();

  const loadCoinTime = useCallback(async () => {
    const response = await CoinService.getCoinValueTime(`${coinId}`);
    setCoinTime(response);
  }, [coinId]);

  const loadCoinDetail = useCallback(async () => {
    const response = await CoinService.getCoinDetail(`${coinId}`);
    setCoin(response);
  }, [coinId]);

  const loadCoin = useCallback(async () => {
    try {
      await loadCoinTime();
      await loadCoinDetail();
    } catch (e) {
      navigate(`/${environment.urlBase}no_encontrado`);
    }
  }, [loadCoinTime, loadCoinDetail, navigate]);

  useEffect(() => {
    if (coinId !== undefined && coinId !== coin?.id) {
      loadCoin();
    }
  }, [coinId, coin?.id, loadCoin]);

  return {
    coin,
    coinTime,
  };
};
