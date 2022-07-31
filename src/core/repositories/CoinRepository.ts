import { Coin, HistoryPrice } from "src/core/models";

export interface CoinRepository {
    getCoins: ()=> Promise<Coin[]>;
    getCoinValuesInUSD: (idCoin: string)=> Promise<HistoryPrice[]>;
    getCoinDetail: (idCoin: string)=> Promise<Coin>;
    
}