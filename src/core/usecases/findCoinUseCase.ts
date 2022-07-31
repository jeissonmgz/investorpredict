import { Coin } from "../models"

export const findCoinUseCase = () => (coinName: string, coins: Coin[])=> {
    if (coinName.length > 0) {
        return coins.filter((coin) =>
            coin.name.toLowerCase().startsWith(coinName.toLowerCase())
        );
    }
    return [];
}