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
});
