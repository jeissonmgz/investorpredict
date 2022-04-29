jest.mock("./environment.prod", () => ({
  environmentProd: { urlApi: "urlApi", urlBase: "urlBase" },
}));

import { environment } from "./environment";

describe("environment", () => {
  it("should init", () => {
    expect(environment).toBeDefined();
  });
});
