import Registry from "./registry";
import Transaction from "./transaction";

export default class Ledger {

    private globalHistory: Transaction[] = [];

    public transfer(originId: string, destinationId: string, value: number){
        
    }

    public calculateBalance(id: string): number{
        let balance: number = 0;
        this.globalHistory.forEach( tr => {
            const registries: Registry[] = tr.getRegistries();
        } )

        return balance
    }
}