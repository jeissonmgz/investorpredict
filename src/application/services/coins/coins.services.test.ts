jest.mock("../../../environment/environment", () => ({
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
    getSpy.mockResolvedValue([
      {
        day: '2022-03-01',
        value: [0, 1]
      }
    ]);
    const coins = await CoinService.getCoins();
    expect(getSpy).toBeCalledWith(`url/coins/list`);
    expect(coins).toEqual([{"day": "2022-03-01", "value": [0, 1]}]);
  });
  it("should get coins values in USD", async () => {
    getSpy.mockResolvedValue(
      {prices: [['2022-03-01', 1]]}
    );
    const coins = await CoinService.getCoinValuesInUSD("");
    expect(getSpy).toBeCalledWith(
      `url/coins//market_chart?vs_currency=usd&days=90&interval=daily`
    );
    expect(coins).toEqual([{"day": "28/2/2022", "value": 1}]);
  });
  it("should get coins details", async () => {
    getSpy.mockResolvedValue({
      id: '1',
      name: 'name',
      symbol: 'symbol',
      image: {
        large: 'img'
      }
    });
    const coins = await CoinService.getCoinDetail("");
    expect(getSpy).toBeCalledWith(
      `url/coins/?localization=true&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
    );
    expect(coins).toEqual({
      "id": "1",
      "image": "img",
      "name": "name",
      "symbol": "symbol"
    });
  });
});
