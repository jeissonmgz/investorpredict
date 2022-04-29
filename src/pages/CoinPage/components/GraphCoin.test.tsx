import { render } from "@testing-library/react";
import React from "react";

jest.mock("react", () => {
    const React = jest.requireActual("react");
    React.useEffect = (p1: any, p2: any) => {
      p1();
    };
    React.useState = (p1: any) => [{p: p1}, () => {}];
    return React;
  });

jest.mock("../../../services", ()=> ({
    ICoinDollarTime: {}
}))

jest.mock("../../../components/Graph/GraphLine", ()=> ({
    GraphLine: ()=> <div data-testid="GraphLine" />, IGraphLine: {}
}))

import GraphCoin from './GraphCoin';

describe('<GraphCoin />', () => { 
    it('should initialize', ()=> {
        render(<GraphCoin coinTime={{
            market_caps: [],
            prices: [[0, 0]],
            total_volumes: []
        }} />)
    })
 })