import { useEffect, useState } from "react";
import { CoinService, ICoinDetail, ICoinDollarTime } from "../../services";
import { useParams } from "react-router-dom";

interface ICoinPageLogic {
  coin: ICoinDetail | undefined;
  coinTime: ICoinDollarTime | undefined;
}

export const CoinPageLogic = (): ICoinPageLogic => {
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
  return {
    coin,
    coinTime,
  };
};
