jest.mock("../../environment/environment", () => ({
  environment: {
    urlApi: "url",
  },
}));

const getSpy = jest.fn();
jest.mock("../client/Http", () => ({
  Http: {
    get: (params: string) => getSpy(params),
  },
}));

import { CoinService } from "./coins.services";

describe("Coins Service", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("should get coins", async () => {
    getSpy.mockResolvedValue({});
    const coins = await CoinService.getCoins();
    expect(getSpy).toBeCalledWith(`url/coins/list`);
    expect(coins).toEqual({});
  });
  it("should get coins value time", async () => {
    getSpy.mockResolvedValue({});
    const coins = await CoinService.getCoinValueTime("");
    expect(getSpy).toBeCalledWith(
      `url/coins//market_chart?vs_currency=usd&days=90&interval=daily`
    );
    expect(coins).toEqual({});
  });
  it("should get coins details", async () => {
    getSpy.mockResolvedValue({});
    const coins = await CoinService.getCoinDetail("");
    expect(getSpy).toBeCalledWith(
      `url/coins/?localization=true&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
    );
    expect(coins).toEqual({});
  });
});
