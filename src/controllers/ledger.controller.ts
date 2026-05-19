import Database from "../database";
import Account from "../models/account";
import Registry from "../models/registry";
import Transaction from "../models/transaction";
import User from "../models/user";

export default class LedgerController {
    constructor(private store: Database){}

    public createAccount(user: User): string {
        const account = new Account(user);
        this.store.saveAccount(account);
        return account.getId();
    }

    public transfer(fromAccountId: string, toAccountId: string, amountInCents: number): Transaction {
        if (amountInCents <= 0) {
            throw new Error("Transfer amount must be greater than zero.");
        }

        const fromAccount = this.store.getAccount(fromAccountId);
        const toAccount = this.store.getAccount(toAccountId);

        if (!fromAccount || !toAccount) {
            throw new Error("One or both accounts do not exist.");
        }

        if (fromAccount.getBalance() < amountInCents) {
            throw new Error("Insufficient funds.");
        }

        const transaction = new Transaction();
        
        const debit = new Registry(fromAccountId, -amountInCents, "Transfer Out");
        const credit = new Registry(toAccountId, amountInCents, "Transfer In");

        transaction.addRegistry(debit);
        transaction.addRegistry(credit);

        if (!transaction.isValid()) {
            transaction.fail();
            this.store.saveTransaction(transaction);
            throw new Error("Transaction is imbalanced. Aborting.");
        }

        fromAccount.debit(amountInCents);
        toAccount.credit(amountInCents);
        
        transaction.commit();
        
        this.store.saveAccount(fromAccount);
        this.store.saveAccount(toAccount);
        this.store.saveTransaction(transaction);

        return transaction;
    }
}