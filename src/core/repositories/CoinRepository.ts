import { Coin, HistoryPrice } from "../models";

export interface CoinRepository {
    getCoins: ()=> Promise<Coin[]>;
    getCoinValuesInUSD: (idCoin: string)=> Promise<HistoryPrice[]>;
    getCoinDetail: (idCoin: string)=> Promise<Coin>;
    
}