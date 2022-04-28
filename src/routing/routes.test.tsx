import { routes } from "./routes";
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

describe("routes", () => {
  it("should init", () => {
    expect(routes).toBeDefined();
    expect(importSpy).toHaveBeenCalled();
  });
});
