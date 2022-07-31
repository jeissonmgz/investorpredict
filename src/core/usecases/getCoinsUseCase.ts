import { Coin } from "src/core/models";
import { Repository } from "src/core/repositories";

export const getCoinsUseCase = ({coinRepository}: Repository)=> (): Promise<Coin[]> => {
    return coinRepository.getCoins();
}