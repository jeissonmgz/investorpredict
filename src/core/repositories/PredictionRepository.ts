import { Prediction } from "../models";

export interface PredictionRepository {
    getDays(numberDays: number): string[];
    getLinearPrediction(numberDays:string[], listValues: number[]): Promise<Prediction>;
    getExponentialPrediction(numberDays:string[], listValues: number[]): Promise<Prediction>;
    getLogarithmicPrediction(numberDays:string[], listValues: number[]): Promise<Prediction>;
    getPowerPrediction(numberDays:string[], listValues: number[]): Promise<Prediction>;
    getPolynomialPrediction(numberDays:string[], listValues: number[]): Promise<Prediction>;
}