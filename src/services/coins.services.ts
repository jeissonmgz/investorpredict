import { environment } from "../environment/environment";

export interface ICoin {
  id: string;
  symbol: string;
  name: string;
}

export interface ICoinDollarTime {
  market_caps: number[][];
  prices: number[][];
  total_volumes: number[][];
}

export interface ICoinDetail {
  id: string;
  symbol: string;
  name: string;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  genesis_date: string;
}

function api<T>(url: string): Promise<T> {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<T>;
  });
}

const getCoins = (): Promise<ICoin[]> => {
  return api<ICoin[]>(`${environment.urlApi}/coins/list`);
};

const getCoinValueTime = (idCoin: string) => {
  return api<ICoinDollarTime>(
    `${environment.urlApi}/coins/${idCoin}/market_chart?vs_currency=usd&days=90&interval=daily`
  );
};

const getCoinDetail = (idCoin: string) => {
  return api<ICoinDetail>(
    `${environment.urlApi}/coins/${idCoin}?localization=true&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
  );
};

export const CoinService = {
  getCoins,
  getCoinDetail,
  getCoinValueTime,
};
