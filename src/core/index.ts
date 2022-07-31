import { CoinService } from "../application/services";
import { RegresionUtil } from "../application/utils/regresion";
import { Repository } from "./repositories";
import { mountUseCases } from "./usecases";

export const repositories: Repository = {
    coinRepository: CoinService,
    predictionRepository: RegresionUtil
}


export const domain = mountUseCases(repositories);