import { CoinRepository } from './CoinRepository';
import { PredictionRepository } from './PredictionRepository';

export {CoinRepository, PredictionRepository};

export interface Repository {
    coinRepository: CoinRepository;
    predictionRepository: PredictionRepository;
}