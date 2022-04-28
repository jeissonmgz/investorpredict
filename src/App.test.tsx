/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from "react";

import { render, screen } from "@testing-library/react";

jest.mock("./routing/RouterApp", () => (props: any) => (
  <div data-testid="RouterApp">{props.children}</div>
));

import App from "./App";
describe("<App />", () => {
  it("should routing when render", () => {
    render(<App />);
    expect(screen.getByTestId("RouterApp")).toBeDefined();
  });
});
