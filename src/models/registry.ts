import { TransactionType } from "../enums/transaction-type.enum"
import { IRegistry } from "../interfaces/IRegistry"
import Utils from "../shared/utils"

export default class Registry {
    private registry: IRegistry

    constructor(registry: IRegistry){
        this.registry = registry
    }

    

}