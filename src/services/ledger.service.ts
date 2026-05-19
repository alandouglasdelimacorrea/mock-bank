import Database from "../database";
import Account from "../models/account";
import CheckingsAccount from "../models/checkings-account";
import Registry from "../models/registry";
import SavingsAccount from "../models/savings-account";
import Transaction from "../models/transaction";
import User from "../models/user";

export default class LedgerService {
    
    constructor(private store: Database){}
    
    public save(user: User, type: string): string{
        const account = this.accountFactory(type, user);
        this.store.saveAccount(account);
        return account.getId();
    }
    
    
    private accountFactory(type: string, user: User): Account {
        if(type === "checkings") return new CheckingsAccount(user);
        if(type === "savings") return new SavingsAccount(user);
        throw new Error("Tipo de conta inválida");
    }

    public transfer(fromAccount: Account, toAccount: Account, amountInCents: number): Transaction {
        const transaction = new Transaction();
        
        const debit = new Registry(fromAccount.getId(), -amountInCents, "Transferindo de");
        const credit = new Registry(toAccount.getId(), amountInCents, "Transferindo para");

        transaction.addRegistry(debit);
        transaction.addRegistry(credit);

        if (!transaction.isValid()) {
            transaction.fail();
            this.store.saveTransaction(transaction);
            throw new Error("Crédito e débito não igualam a zero. Abortando operação");
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