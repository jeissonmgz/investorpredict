import { HistoryPrice } from "./HistoryPrice";
import { Prediction } from "./Prediction";

export interface HistoryPrediction {
    days: string[];
    predictions: Prediction[];
}

export interface Coin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    pricesLastDaysInUSD: HistoryPrice[];
    predictionsInUSD: HistoryPrediction;
}