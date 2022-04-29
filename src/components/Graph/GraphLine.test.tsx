import { render } from "@testing-library/react";
import React from "react";
jest.mock("react", () => {
  const React = jest.requireActual("react");
  React.useEffect = (p1: any, p2: any) => {
    p1();
  };
  React.useState = (p1: any) => [{ data: p1 }, () => {}];
  return React;
});

jest.mock("chart.js", () => ({
  Chart: { register: () => {} },
  CategoryScale: {},
  LinearScale: {},
  PointElement: {},
  LineElement: {},
  Title: {},
  Tooltip: {},
  Legend: {},
  ChartData: {},
  ScatterDataPoint: {},
  BubbleDataPoint: {},
  ChartOptions: {},
}));

jest.mock("react-chartjs-2", () => ({
  Line: () => <div data-testid="Line" />,
}));

import { GraphLine } from "./GraphLine";
describe("<GraphLine />", () => {
  it("should render", () => {
    render(
      <GraphLine
        name="name"
        labels={["a"]}
        datasets={[
          {
            name: "name",
            backgroundColor: "black",
            borderColor: "black",
            values: [1, 2],
          },
        ]}
      />
    );
  });
});
