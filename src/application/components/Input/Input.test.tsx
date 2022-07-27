import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("<Input />", () => {
  it("should init", () => {
    render(
      <Input
        type="text"
        placeholder="placeholder"
        onChange={() => {}}
        value="value"
      />
    );
    const input = screen.getByPlaceholderText("placeholder");
    fireEvent.change(input, { target: { value: "a" } });
  });
});
