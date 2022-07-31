jest.mock("../models", () => ({
  Coin: {}
}));
jest.mock("../repositories", () => ({
  Repository: {}
}));

import { getCoinsUseCase} from "./getCoinsUseCase";
describe("services index", () => {
  it("should render", async () => {
    getCoinsUseCase({
      coinRepository: {
      getCoins: ()=> {}}
    } as any)();
  });
});
