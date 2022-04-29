import { render } from "@testing-library/react";
import React from "react";

const useStateSpy = jest.fn();
jest.mock("react", () => {
  const React = jest.requireActual("react");
  React.useEffect = (p1: any, p2: any) => {
    p1();
  };
  React.useState = (p1: any) => [useStateSpy(p1), () => {}];
  React.useMemo = (p1: any) => p1();
  return React;
});

jest.mock("../../../components", () => ({
  Card: () => <div data-testid="Card" />,
}));

jest.mock("../../../components/Graph/GraphLine", () => ({
  GraphLine: () => <div data-testid="GraphLine" />,
  IGraphLine: {},
}));

jest.mock("../../../services", () => ({
  ICoinDollarTime: {},
}));

jest.mock("../../../utils/regresion", () => ({
  IRegresion: {},
  Regresion: {
    getRegresions: () => [
      {
        reliability: 0,
        values: [],
      },
    ],
  },
}));

jest.mock("../../../utils/time", () => ({
  Time: {
    getNextDays: () => [""],
  },
}));

import EstimationCoin from "./EstimationCoin";

describe("<EstimationCoin />", () => {
  it("should render", () => {
    useStateSpy
      .mockReturnValueOnce([
        {
          name: "name",
          reliability: 0,
          values: [1, 2, 3],
        },
      ])
      .mockReturnValueOnce({});
    render(
      <EstimationCoin
        coinTime={{
          market_caps: [],
          prices: [[0, 0]],
          total_volumes: [],
        }}
      />
    );
  });
});
