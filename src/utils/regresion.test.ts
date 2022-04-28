const linearSpy = jest.fn().mockReturnValue({ predict: () => [0, 1] });
const exponentialSpy = jest.fn().mockReturnValue({ predict: () => [0, 1] });
const logarithmicSpy = jest.fn().mockReturnValue({ predict: () => [0, 1] });
const powerSpy = jest.fn().mockReturnValue({ predict: () => [0, 1] });
const polynomialSpy = jest.fn().mockReturnValue({ predict: () => [0, 1] });

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

import { Regresion } from "./regresion";

describe("util regresion", () => {
  it("getRegresions", () => {
    Regresion.getRegresions([
      [0, 1],
      [2, 3],
      [4, 5],
    ]);
  });
});
