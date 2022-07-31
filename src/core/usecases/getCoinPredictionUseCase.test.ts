jest.mock("../models", () => ({
  Coin: {},
  NUMBER_DAYS_TO_PREDICT: 5,
  Prediction: {}
}));
jest.mock("../repositories", () => ({
  Repository: {
    getCoins: ()=> {}
  }
}));

import { getCoinPredictionInUSDUseCase} from "./getCoinPredictionUseCase";
describe("services index", () => {
  it("should render", async () => {
    getCoinPredictionInUSDUseCase({
      coinRepository: {
        getCoinDetail: ()=> Promise.resolve({id: 'p'} as any),
        getCoinValuesInUSD: ()=> Promise.resolve([{value:1}])
      },
      predictionRepository: {
        getDays: ()=> ({}),
        getLinearPrediction: () => Promise.resolve({r:1}),
        getExponentialPrediction: () => Promise.resolve({r:NaN}),
        getLogarithmicPrediction: () => Promise.resolve({r:1}),
        getPowerPrediction: () => Promise.resolve({r:1}),
        getPolynomialPrediction: () => Promise.resolve({r:1})
      }
    } as any)('');
  });
});
