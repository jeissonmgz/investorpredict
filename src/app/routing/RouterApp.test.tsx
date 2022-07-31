import React from "react";
import { render, screen } from "@testing-library/react";

const importSpy = jest.fn();
jest.mock("react", () => {
  const React = jest.requireActual("react");
  React.lazy = (p: any) => {
    p().then((r: any) => importSpy(Object.keys(r)[0]));
    p();
    return () => <div />;
  };
  return React;
});

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
  Suspense: () => <div data-testid="Suspense"></div>,
}));

jest.mock("../../environment/environment", () => ({
  environment: {
    urlBase: "",
  },
}));
jest.mock("../components", () => ({
  Loading: (props: any) => <div data-testid="Loading">{props.children}</div>,
}));

jest.mock("./routes", () => ({
  routes: [
    {
      path: "",
      Element: () => <div />,
    },
  ],
}));

import RouterApp from "./RouterApp";

describe("< RouterApp/>", () => {
  it("should init", () => {
    render(<RouterApp />);
    expect(screen.getByTestId("BrowserRouter")).toBeDefined();
    expect(screen.getByTestId("Routes")).toBeDefined();
    expect(screen.getAllByTestId("Route")).toBeDefined();
  });
});
