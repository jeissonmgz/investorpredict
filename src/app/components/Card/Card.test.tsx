import React from 'react'
import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("<Card />", () => {
  it("should init", () => {
    render(
      <Card>
        <div></div>
      </Card>
    );
  });
  
  it("should init with className", () => {
    render(
      <Card className="className">
        <div></div>
      </Card>
    );
  });
});
