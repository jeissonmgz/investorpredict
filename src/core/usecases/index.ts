import { Repository } from "src/core/repositories";
import { findCoinUseCase } from "./findCoinUseCase";
import { getCoinPredictionInUSDUseCase } from "./getCoinPredictionUseCase";
import { getCoinsUseCase } from "./getCoinsUseCase";

export const mountUseCases = (repository: Repository)=> ({
    getCoinsUseCase: getCoinsUseCase(repository),
    getCoinPredictionInUSDUseCase: getCoinPredictionInUSDUseCase(repository),
    findCoinUseCase: findCoinUseCase()
})