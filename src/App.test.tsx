/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from "react";
import { render, screen } from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  BrowserRouter: (props: any) => (
    <div data-testid="BrowserRouter" {...props}>
      {props.children}
    </div>
  ),
  Routes: (props: any) => (
    <div data-testid="Routes" {...props}>
      {props.children}
    </div>
  ),
  Route: () => <div data-testid="Route"></div>,
}));

jest.mock("./environment/environment", () => ({
  environment: {
    urlBase: "",
  },
}));

jest.mock("./pages/CoinPage/CoinPage", () => (props: any) => (
  <div data-testid="CoinPage">{props.children}</div>
));

jest.mock("./pages/ListPage/ListPage", () => (props: any) => (
  <div data-testid="ListPage">{props.children}</div>
));

import App from "./App";
describe("<App />", () => {
  it("should routing when render", () => {
    render(<App />);
    expect(screen.getByTestId("BrowserRouter")).toBeDefined();
    expect(screen.getByTestId("Routes")).toBeDefined();
    expect(screen.getAllByTestId("Route").length).toBe(2);
  });
});
