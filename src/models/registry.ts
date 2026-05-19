import Utils from "../shared/utils"

export default class Registry {
    private readonly id: string
    private readonly accountId: string
    private readonly value: number
    private description: string

    constructor(accountId: string, value: number, description: string){
        this.id = Utils.generateId();
        this.accountId = accountId;
        this.value = value;
        this.description = description;
    }

    public getValue(): number {
        return this.value;
    }

    
}