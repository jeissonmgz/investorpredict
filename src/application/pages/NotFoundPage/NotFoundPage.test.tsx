import React from "react";
import { render, screen } from "@testing-library/react";

jest.mock("../../components", () => ({
  HyperLink: (props: any) => (
    <div data-testid="HyperLink">{props.children}</div>
  ),
}));

import NotFoundPage from "./NotFoundPage";
describe("<NotFoundPage />", () => {
  it("should initialize", () => {
    render(<NotFoundPage />);
    expect(screen.findByTestId("HyperLink")).toBeDefined();
  });
});
