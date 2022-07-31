import { Coin } from "../models";
import { Repository } from "../repositories";

export const getCoinsUseCase = ({coinRepository}: Repository)=> (): Promise<Coin[]> => {
    return coinRepository.getCoins();
}