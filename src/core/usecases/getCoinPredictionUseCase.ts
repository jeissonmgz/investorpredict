import { HistoryPrediction, NUMBER_DAYS_TO_PREDICT, Prediction } from "src/core/models";
import { Repository } from "src/core/repositories";

const filterPredictionsWithErrors = (predictions: Prediction[]) => 
predictions.filter(
    (r) => !isNaN(r.reliability)
);

export const getCoinPredictionInUSDUseCase= 
({coinRepository, predictionRepository}: Repository) =>
async (idCoin: string)=> {
    const coin = await coinRepository.getCoinDetail(idCoin);
    coin.pricesLastDaysInUSD = await coinRepository.getCoinValuesInUSD(idCoin);
    const valuesPricesLastDaysInUSD = coin.pricesLastDaysInUSD.map(price=> price.value);
    const days = predictionRepository.getDays(NUMBER_DAYS_TO_PREDICT)
    const predictions = await Promise.all([
        predictionRepository.getLinearPrediction(days, valuesPricesLastDaysInUSD),
        predictionRepository.getExponentialPrediction(days, valuesPricesLastDaysInUSD),
        predictionRepository.getLogarithmicPrediction(days, valuesPricesLastDaysInUSD),
        predictionRepository.getPowerPrediction(days, valuesPricesLastDaysInUSD),
        predictionRepository.getPolynomialPrediction(days, valuesPricesLastDaysInUSD)
    ]);

    coin.predictionsInUSD = {
        days,
        predictions: filterPredictionsWithErrors(predictions)
    } as HistoryPrediction;
    return coin;
}