import { environmentDev } from "./environment.dev";

describe("environment dev", () => {
  it("should init", () => {
    expect(environmentDev).toBeDefined();
  });
});
