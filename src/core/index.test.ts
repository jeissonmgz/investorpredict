jest.mock("src/app/services", () => ({
  CoinService: {}
}));
jest.mock("src/app/utils/regresion", () => ({
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
