import { CoinService } from "src/app/services";
import { RegresionUtil } from "src/app/utils/regresion";
import { Repository } from "./repositories";
import { mountUseCases } from "./usecases";

export const repositories: Repository = {
    coinRepository: CoinService,
    predictionRepository: RegresionUtil
}


export const domain = mountUseCases(repositories);