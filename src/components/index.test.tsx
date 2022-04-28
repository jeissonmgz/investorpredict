describe("services index", () => {
  it("should render", async () => {
    jest.mock("./Card/Card", () => ({}));
    jest.mock("./Graph/GraphLine", () => ({}));
    jest.mock("./Input/Input", () => ({}));
    jest.mock("./Link/HyperLink", () => ({}));
    jest.mock("./Loading/Loading", () => ({}));
    await require("./index");
  });
});
