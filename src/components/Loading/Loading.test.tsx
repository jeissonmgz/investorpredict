import { render } from "@testing-library/react";
import { Loading } from "./Loading";

describe("<Card />", () => {
  it("should init", () => {
    render(<Loading />);
  });
});
