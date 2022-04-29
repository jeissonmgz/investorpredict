import React from "react";

import { render } from "@testing-library/react";

jest.mock("react", () => {
  const React = jest.requireActual("react");
  React.useCallback = (p1: any, p2: any) => {
    return p1;
  };
  React.useEffect = (p1: any, p2: any) => {
    return p1();
  };
  React.useState = (p: any) => [
    p,
    (p1: any) => {
      if (typeof p1 === "function") {
        p1();
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
    render(<ScrollList coins={[]} />);
    jest.runAllTimers();
  });
});
