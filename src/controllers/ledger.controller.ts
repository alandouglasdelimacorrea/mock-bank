import Database from "../database";
import Transaction from "../models/transaction";
import User from "../models/user";
import LedgerService from "../services/ledger.service";

export default class LedgerController {
    constructor(private store: Database, private ledgerService: LedgerService){}

    public createAccount(user: User, type: string): string {
        return this.ledgerService.save(user, type);
    }

    public transfer(fromAccountId: string, toAccountId: string, amountInCents: number): Transaction {
        if (amountInCents <= 0) {
            throw new Error("Quantidade da transferência deve ser maior que zero");
        }

        const fromAccount = this.store.getAccount(fromAccountId);
        const toAccount = this.store.getAccount(toAccountId);

        if (!fromAccount || !toAccount) {
            throw new Error("Uma ou ambas as contas não existem");
        }

        if (fromAccount.getBalance() < amountInCents) {
            throw new Error("Saldo insuficiente");
        }

        const transaction = this.ledgerService.transfer(fromAccount, toAccount, amountInCents);
        
        return transaction;
    }
}