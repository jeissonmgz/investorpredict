import React from "react";
import { render } from "@testing-library/react";

jest.mock("../../../environment/environment", () => ({
  environment: {
    urlBase: "",
  },
}));

jest.mock("react-router-dom", () => ({
  Link: (props: any) => (
    <div data-testid="Link" {...props}>
      {props.children}
    </div>
  ),
}));

import { HyperLink } from "./HyperLink";

describe("<HyperLink />", () => {
  it("should render by default", () => {
    render(<HyperLink to="route">Texto</HyperLink>);
  });

  it("should render secundary", () => {
    render(
      <HyperLink type="secundary" to="route">
        Texto
      </HyperLink>
    );
  });
});
