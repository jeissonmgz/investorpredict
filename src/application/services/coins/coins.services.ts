import { Coin, HistoryPrice } from "../../../core/models";
import { CoinRepository } from "../../../core/repositories";
import { environment } from "../../../environment/environment";
import { Http } from "../client/Http";
import { ICoinResponse, ICoinDetailResponse, ICoinDollarTimeResponse } from "../models/coins.models";

const getCoins = async (): Promise<Coin[]> => {
  const coinsResponse = Http.get<ICoinResponse[]>(`${environment.urlApi}/coins/list`);
  return (await coinsResponse).map(coinResponse=> coinResponse as Coin)
};

const getCoinValuesInUSD = async (idCoin: string): Promise<HistoryPrice[]> => {
  const coinDollarTime = await Http.get<ICoinDollarTimeResponse>(
    `${environment.urlApi}/coins/${idCoin}/market_chart?vs_currency=usd&days=90&interval=daily`
  );
  return coinDollarTime.prices.map(price => ({
    day: new Date(price[0]).toLocaleDateString(),
    value: price[1]
  }) as HistoryPrice);
};

const getCoinDetail = async (idCoin: string): Promise<Coin> => {
  const coinDetailResponse = await Http.get<ICoinDetailResponse>(
    `${environment.urlApi}/coins/${idCoin}?localization=true&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
  );
  return {
    id: coinDetailResponse.id,
    name: coinDetailResponse.name,
    symbol: coinDetailResponse.symbol,
    image: coinDetailResponse.image.large
  } as Coin;
};

export const CoinService: CoinRepository = {
  getCoins,
  getCoinDetail,
  getCoinValuesInUSD,
};
