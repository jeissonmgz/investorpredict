import { ChangeEvent, useEffect, useState } from "react";

const useStateSpy = jest.fn();
jest.mock("react", () => ({
  ChangeEvent: {},
  useEffect: (p1: any, p2: any) => {
    p1();
  },
  useState: (p: any) => [useStateSpy(p), () => {}],
}));

const CoinServiceSpy = jest.fn();
jest.mock("../../services", () => ({
  ICoin: {},
  CoinService: {
    getCoins: CoinServiceSpy,
  },
}));

import { ListPageLogic } from "./ListPage.logic";

describe("ListPageLogic", () => {
  it("should init when found filter", () => {
    useStateSpy
      .mockReturnValueOnce([{ name: "bitcoin" }])
      .mockReturnValueOnce([{ name: "bitcoin" }])
      .mockReturnValueOnce("");
    CoinServiceSpy.mockResolvedValue(true);
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
    CoinServiceSpy.mockResolvedValue(true);
    const { onChangeFilterHandler } = ListPageLogic();
    onChangeFilterHandler({
      target: { value: "" },
    } as ChangeEvent<HTMLInputElement>);
  });
});
