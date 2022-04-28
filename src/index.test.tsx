import React from "react";

const renderSpy = jest.fn();
jest.mock("react-dom/client", () => ({
  createRoot: () => ({
    render: (p: any) => renderSpy(p),
  }),
}));

jest.mock("./App", () => (props: any) => <div data-testid="App" />);

jest.mock("./index.css", () => {});

describe("root index", () => {
  it("should render app", async () => {
    await require("./index");
    expect(renderSpy).toHaveBeenCalled();
  });
});
