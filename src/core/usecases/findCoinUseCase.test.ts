jest.mock("../models", () => ({
  Coin: {}
}));
jest.mock("../repositories", () => ({
  Repository: {}
}));

import { findCoinUseCase} from "./findCoinUseCase";
describe("services index", () => {
  it("should render", async () => {
    findCoinUseCase()('', [{name: ''} as any]);
  });
  it("should render", async () => {
    findCoinUseCase()('a', [{name: 'abc'} as any]);
  });
});
