import { render } from "@testing-library/react";
import React from "react";

jest.mock("../../components", () => ({
  Input: () => <div data-testid="Input" />,
}));
jest.mock("./components/ScrollList", () => () => (
  <div data-testid="ScrollList" />
));

let logic = {
  onChangeFilterHandler: () => {},
  filter: "filter",
  coinsFiltered: [],
  coins: [1],
};

jest.mock("./ListPage.logic", () => ({
  ListPageLogic: () => logic,
}));

import ListPage from "./ListPage";

describe("<ListPage/>", () => {
  it("should render", () => {
    render(<ListPage />);
  });

  it("should render", () => {
    logic = { ...logic, coinsFiltered: [1] as any };
    render(<ListPage />);
  });
});
