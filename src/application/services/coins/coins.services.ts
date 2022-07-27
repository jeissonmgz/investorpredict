import { environment } from "../../../environment/environment";
import { Http } from "../client/Http";
import { ICoin, ICoinDetail, ICoinDollarTime } from "../models/coins.models";

const getCoins = (): Promise<ICoin[]> => {
  return Http.get<ICoin[]>(`${environment.urlApi}/coins/list`);
};

const getCoinValueTime = (idCoin: string) => {
  return Http.get<ICoinDollarTime>(
    `${environment.urlApi}/coins/${idCoin}/market_chart?vs_currency=usd&days=90&interval=daily`
  );
};

const getCoinDetail = (idCoin: string) => {
  return Http.get<ICoinDetail>(
    `${environment.urlApi}/coins/${idCoin}?localization=true&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
  );
};

export const CoinService = {
  getCoins,
  getCoinDetail,
  getCoinValueTime,
};
