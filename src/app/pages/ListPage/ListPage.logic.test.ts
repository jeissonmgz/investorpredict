import { ChangeEvent } from "react";

const useStateSpy = jest.fn();
jest.mock("react", () => ({
  ChangeEvent: {},
  useEffect: (p1: any, p2: any) => {
    p1();
  },
  useState: (p: any) => [useStateSpy(p), () => {}],
}));

const getCoinsUseCaseSpy = jest.fn();
const findCoinUseCaseSpy = jest.fn();
jest.mock("../../../core", () => ({
  domain: {
    getCoinsUseCase: getCoinsUseCaseSpy,
    findCoinUseCase: findCoinUseCaseSpy
  }
}));

import { ListPageLogic } from "./ListPage.logic";

describe("ListPageLogic", () => {
  it("should init when found filter", () => {
    useStateSpy
      .mockReturnValueOnce([{ name: "bitcoin" }])
      .mockReturnValueOnce([{ name: "bitcoin" }])
      .mockReturnValueOnce("");
      getCoinsUseCaseSpy.mockResolvedValue(true);
    const { onChangeFilterHandler } = ListPageLogic();
    onChangeFilterHandler({
      target: { value: "b" },
    } as ChangeEvent<HTMLInputElement>);
  });
  it("should set coins empty when filter is empty", () => {
    useStateSpy
      .mockReturnValueOnce([])
      .mockReturnValueOnce([])
      .mockReturnValueOnce("");
      getCoinsUseCaseSpy.mockResolvedValue(true);
    const { onChangeFilterHandler } = ListPageLogic();
    onChangeFilterHandler({
      target: { value: "" },
    } as ChangeEvent<HTMLInputElement>);
  });
});
