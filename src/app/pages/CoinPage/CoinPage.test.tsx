import { render } from "@testing-library/react";
import React from "react";

jest.mock("../../components", () => ({
  Card: () => <div data-testid="Card" />,
  HyperLink: () => <div data-testid="HyperLink" />,
}));

const logicSpy = jest.fn();
jest.mock("./CoinPage.logic", () => ({
  CoinPageLogic: () => logicSpy(),
}));
jest.mock("./components/EstimationCoin", () => () => (
  <div data-testid="EstimationCoin" />
));
jest.mock("./components/GraphCoin", () => () => (
  <div data-testid="GraphCoin" />
));

import CoinPage from "./CoinPage";

describe("<CoinPage />", () => {
  it("should render", () => {
    logicSpy.mockReturnValue({
      coin: {
        name: "bitcoin",
        image: {
          large: "image",
        },
        predictionsInUSD: [],
        pricesLastDaysInUSD : [{value:2}]
      },
      coinTime: {},
    });
    render(<CoinPage />);
  });
  it("should render when coin is empty", () => {
    logicSpy.mockReturnValue({
      coin: undefined
    });
    render(<CoinPage />);
  });
});
