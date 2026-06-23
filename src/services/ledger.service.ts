import Database from "../database";
import Account from "../models/account";
import CheckingsAccount from "../models/checkings-account";
import Transaction from "../models/transaction";
import SavingsAccount from "../models/savings-account";
import Ledger from "../models/ledger";
import User from "../models/user";
import { TransferOperationError } from "../errors/transfer-operation.error";

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

    public transfer(fromAccount: Account, toAccount: Account, amountInCents: number): Ledger {
        const ledger = new Ledger();
        
        const debit = new Transaction(fromAccount.getId(), -amountInCents, "Transferindo de");
        const credit = new Transaction(toAccount.getId(), amountInCents, "Transferindo para");

        ledger.addRegistry(debit);
        ledger.addRegistry(credit);

        if (!ledger.isValid()) {
            ledger.fail();
            this.store.saveLedger(ledger);
            throw new TransferOperationError("Crédito e débito não igualam a zero. Abortando operação", "transfer - LedgerService");
        }

        fromAccount.debit(amountInCents);
        toAccount.credit(amountInCents);
        
        ledger.commit();
        
        this.store.saveAccount(fromAccount);
        this.store.saveAccount(toAccount);
        this.store.saveLedger(ledger);

        return ledger;
    }

        

}