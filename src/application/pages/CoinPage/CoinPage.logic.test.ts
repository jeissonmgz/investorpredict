const useStateSpy = jest.fn();
jest.mock("react", () => ({
  useCallback: (p1: any, p2: any) => p1,
  useEffect: (p1: any, p2: any) => p1(),
  useState: (p: any) => [useStateSpy(p), () => {}],
}));

const getCoinValueTimeSpy = jest.fn();
const getCoinDetailSpy = jest.fn();
jest.mock("../../services", () => ({
  CoinService: {
    getCoinValueTime: getCoinValueTimeSpy,
    getCoinDetail: getCoinDetailSpy,
  },
  ICoinDetail: {},
  ICoinDollarTime: {},
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
  it("should init", () => {
    useStateSpy.mockReturnValue(undefined);
    CoinPageLogic();
  });

  it("should init when coin exist and fail service", () => {
    useStateSpy.mockReturnValueOnce({ id: "" });
    useStateSpy.mockReturnValueOnce(undefined);
    getCoinValueTimeSpy.mockRejectedValue(false);
    CoinPageLogic();
  });
});
