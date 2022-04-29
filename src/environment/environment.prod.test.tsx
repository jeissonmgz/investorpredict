import { environmentProd } from "./environment.prod";

describe("environment prod", () => {
  it("should init", () => {
    expect(environmentProd).toBeDefined();
  });
});
