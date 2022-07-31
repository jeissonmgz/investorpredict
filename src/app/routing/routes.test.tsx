
import React from "react";

const importSpy = jest.fn();
jest.mock("react", () => {
  const React = jest.requireActual("react");
  React.lazy = (p: any) => {
    p().then((r: any) => importSpy(Object.keys(r)[0]));
    p();
  };
  return React;
});

jest.mock('src/app/components', ()=> ({
  Loading: ()=> {}
}))

import { routes } from "./routes";

describe("routes", () => {
  it("should init", () => {
    expect(routes).toBeDefined();
    expect(importSpy).toHaveBeenCalled();
  });
});
