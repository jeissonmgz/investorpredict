const useStateSpy = jest.fn();

jest.mock("react", () => ({
  useCallback: (p1: any, p2: any) => p1,
  useEffect: (p1: any, p2: any) => p1(),
  useState: (p: any) => [useStateSpy(p), () => {}],
}));

const getCoinPredictionInUSDUseCaseSpy = jest.fn();
jest.mock("../../../core", () => ({
  domain: {
    getCoinPredictionInUSDUseCase: getCoinPredictionInUSDUseCaseSpy
  }
}));

jest.mock("react-router-dom", () => ({
  useNavigate: () => () => "",
  useParams: () => ({ coinId: "1" }),
}));

jest.mock("../../../environment/environment", () => ({
  environment: {
    urlBase: "",
  },
}));

import { CoinPageLogic } from "./CoinPage.logic";

describe("CoinPageLogic", () => {
  it("should init", async () => {
    getCoinPredictionInUSDUseCaseSpy.mockResolvedValue({})
    useStateSpy.mockReturnValue(undefined);
    CoinPageLogic();
    await new Promise(process.nextTick);
  });

  it("should init when coin exist and fail service", async () => {
    useStateSpy.mockReturnValueOnce({ id: "" });
    useStateSpy.mockReturnValueOnce(undefined);
    getCoinPredictionInUSDUseCaseSpy.mockRejectedValue(false);
    CoinPageLogic();
    await new Promise(process.nextTick);
  });
});
