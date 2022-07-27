import regression, { DataPoint, Result } from "regression";

export interface IRegresion {
  name: string;
  values: number[];
  reliability: number;
}

const arrayToDataPoint = (array: number[][]): DataPoint[] =>
  array.map((a) => [a[0], a[1]]);

const linear = (values: number[][]) =>
  regression.linear(arrayToDataPoint(values));
const exponential = (values: number[][]) =>
  regression.exponential(arrayToDataPoint(values));
const logarithmic = (values: number[][]) =>
  regression.logarithmic(arrayToDataPoint(values));
const power = (values: number[][]) =>
  regression.power(arrayToDataPoint(values));
const polynomial = (values: number[][]) =>
  regression.polynomial(arrayToDataPoint(values));

const getRegresion = (
  name: string,
  result: Result,
  daysProgresion: number
): IRegresion => ({
  name: name,
  values: [
    result.predict(daysProgresion)[1],
    result.predict(daysProgresion + 1)[1],
    result.predict(daysProgresion + 2)[1],
    result.predict(daysProgresion + 3)[1],
    result.predict(daysProgresion + 4)[1],
    result.predict(daysProgresion + 5)[1],
    result.predict(daysProgresion + 6)[1],
  ],
  reliability: result.r2 * 100,
});

const getRegresions = (values: number[][]): IRegresion[] => {
  const linearMethod = linear(values);
  const exponentialMethod = exponential(values);
  const logarithmicMethod = logarithmic(values);
  const powerMethod = power(values);
  const polynomialMethod = polynomial(values);
  const days = values.length;
  return [
    getRegresion("Linear", linearMethod, days),
    getRegresion("Exponencial", exponentialMethod, days),
    getRegresion("Logaritmica", logarithmicMethod, days),
    getRegresion("Cuadratica", powerMethod, days),
    getRegresion("Polinomica", polynomialMethod, days),
  ];
};

export const Regresion = {
  linear,
  exponential,
  logarithmic,
  power,
  polynomial,
  getRegresions,
};
