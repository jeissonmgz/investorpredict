const linearSpy = ()=> ({ predict: () => [0, 1], r2:1 });
const exponentialSpy = ()=> ({ predict: () => [0, 1], r2:1 });
const logarithmicSpy = ()=> ({ predict: () => [0, 1], r2:1 });
const powerSpy = ()=> ({ predict: () => [0, 1], r2:1 });
const polynomialSpy = ()=> ({ predict: () => [0, 1], r2:1 });

jest.mock("regression", () => {
  return {
    linear: linearSpy,
    exponential: exponentialSpy,
    logarithmic: logarithmicSpy,
    power: powerSpy,
    polynomial: polynomialSpy,
    DataPoint: {},
    Result: {},
  };
});

const getNextDaysSpy = jest.fn();
jest.mock('./time', ()=> ({
  Time: {
    getNextDays: getNextDaysSpy
  }
}))

import { RegresionUtil } from "./regresion";

describe("util regresion", () => {

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("getDays", () => {
    const days = [1, 2, 3];
    getNextDaysSpy.mockReturnValue(days);
    const result = RegresionUtil.getDays(2);
    expect(result).toEqual(days);
    expect(getNextDaysSpy).toHaveBeenCalledWith(2);
  });

  it("getLinearPrediction", async () => {
    const result = await RegresionUtil.getLinearPrediction([''], [1]);
    expect(result).toEqual({"nameMethod": "lineal", "reliability": 100, "values": [1]});
  });

  it("getExponentialPrediction", async () => {
    const result = await RegresionUtil.getExponentialPrediction([''], [1]);
    expect(result).toEqual({"nameMethod": "exponencial", "reliability": 100, "values": [1]});
  });

  it("getLogarithmicPrediction", async () => {
    const result = await RegresionUtil.getLogarithmicPrediction([''], [1]);
    expect(result).toEqual({"nameMethod": "logaritmico", "reliability": 100, "values": [1]});
  });

  it("getPowerPrediction", async () => {
    const result = await RegresionUtil.getPowerPrediction([''], [1]);
    expect(result).toEqual({"nameMethod": "potencial", "reliability": 100, "values": [1]});
  });

  it("getPolynomialPrediction", async () => {
    const result = await RegresionUtil.getPolynomialPrediction([''], [1]);
    expect(result).toEqual({"nameMethod": "polinomial", "reliability": 100, "values": [1]});
  });
});
