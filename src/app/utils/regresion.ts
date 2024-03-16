import regression, { DataPoint, Result } from "regression";
import { Prediction } from "src/core/models";
import { PredictionRepository } from "src/core/repositories";
import { Time } from "./time";
  
const getDataPoint = (array: number[]): DataPoint[] =>
array.map((value, index) => [index, value]);

const getRegressionPromise = (name: string, numberDays:string[], listValues: number[], regressionMethod: (data: DataPoint[])=> Result): Promise<Prediction> => (
  new Promise((resolve) => {
    const resultRegresion = regressionMethod(getDataPoint(listValues));
    const prediction =  {
      nameMethod: name,
      values: numberDays.map((_, day) => resultRegresion.predict(day)).map(point=> point[1]),
      reliability: resultRegresion.r2 * 100

    } as Prediction;
    resolve(prediction);
  })
)

const getLinearPrediction = (numberDays:string[], listValues: number[]): Promise<Prediction> => 
  getRegressionPromise('lineal', numberDays, listValues, regression.linear);

const getExponentialPrediction = (numberDays:string[], listValues: number[]): Promise<Prediction> => 
  getRegressionPromise('exponencial', numberDays, listValues, regression.exponential);

const getLogarithmicPrediction = (numberDays:string[], listValues: number[]): Promise<Prediction> => 
  getRegressionPromise('logaritmico', numberDays, listValues, regression.logarithmic);

const getPowerPrediction = (numberDays:string[], listValues: number[]): Promise<Prediction> => 
  getRegressionPromise('potencial', numberDays, listValues, regression.power);

const getPolynomialPrediction = (numberDays:string[], listValues: number[]): Promise<Prediction> => 
  getRegressionPromise('polinomial', numberDays, listValues, regression.polynomial);

const getDays = Time.getNextDays;



export const RegresionUtil: PredictionRepository = {
  getDays,
  getLinearPrediction,
  getExponentialPrediction,
  getLogarithmicPrediction,
  getPowerPrediction,
  getPolynomialPrediction
};
