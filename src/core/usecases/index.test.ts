jest.mock("../repositories", () => ({
  Repository: {}
}));
jest.mock("./findCoinUseCase", () => ({
  findCoinUseCase: ()=> {}
}));
jest.mock("./getCoinPredictionUseCase", () => ({
  getCoinPredictionInUSDUseCase: ()=> {}
}));
jest.mock("./getCoinsUseCase", () => ({
  getCoinsUseCase: ()=> {}
}));

import { mountUseCases} from ".";
describe("services index", () => {
  it("should render", async () => {
    mountUseCases({} as any);
  });
});
