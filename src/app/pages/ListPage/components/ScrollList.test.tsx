import React from "react";

import { render } from "@testing-library/react";

const useStateSpy = jest.fn();

jest.mock("react", () => {
  const React = jest.requireActual("react");
  React.useCallback = (p1: any, p2: any) => {
    return p1;
  };
  React.useEffect = (p1: any, p2: any) => {
    return p1();
  };
  React.useState = (p: any) => [
    useStateSpy(),
    (p1: any) => {
      if (typeof p1 === "function") {
        p1(1);
      }
    },
  ];
  return React;
});
jest.mock("../../../services", () => ({
  ICoin: {},
}));
jest.mock("../../../components", () => ({
  HyperLink: () => <div data-testId="HyperLink" />,
  Loading: () => <div data-testId="Loading" />,
}));
jest.mock("react-infinite-scroll-component", () => {
  return () => <div data-testid="InfiniteScroll" />;
});
jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

import ScrollList from "./ScrollList";

describe("<ScrollList />", () => {
  it("should render", () => {
    useStateSpy
      .mockReturnValueOnce(1)
      .mockReturnValueOnce([
        { id: 1, name: "name" },
        { id: 2, name: "name" },
      ])
      .mockReturnValueOnce(false);
    render(<ScrollList coins={[]} />);
    jest.runAllTimers();
  });
  it("should render", () => {
    useStateSpy
      .mockReturnValueOnce(1)
      .mockReturnValueOnce([1])
      .mockReturnValueOnce(true);
    const coins = Array(245)
      .fill(0)
      .map((e, i) => ({ id: i + "1", name: "name", symbol: "" } as any));
    render(<ScrollList coins={coins} />);
    jest.runAllTimers();
  });
});
