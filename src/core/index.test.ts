jest.mock("../application/services", () => ({
  CoinService: {}
}));
jest.mock("../application/utils/regresion", () => ({
  RegresionUtil: {}
}));
jest.mock("./repositories", () => ({
  Repository: {}
}));
jest.mock("./usecases", () => ({
  mountUseCases: ()=> {}
}));

import { domain } from ".";
describe("services index", () => {
  it("should render", async () => {
    domain;
  });
});
