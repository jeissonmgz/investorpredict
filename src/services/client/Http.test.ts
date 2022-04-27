const fetchSpy = jest.fn();
global.fetch = (p) => fetchSpy(p);

import { Http } from "./Http";
describe("Http", () => {
  it("should resolved", async () => {
    fetchSpy.mockResolvedValue({ ok: true, json: () => "json" });
    const response = await Http.get("url");
    expect(response).toEqual("json");
    expect(fetchSpy).toHaveBeenCalledWith("url");
  });

  it("should reject", async () => {
    fetchSpy.mockResolvedValue({ ok: false, statusText: "error" });
    await expect(Http.get("url")).rejects.toThrow(Error);
  });
});
