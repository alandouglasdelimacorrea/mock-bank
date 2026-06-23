import Account from "./models/account";
import Ledger from "./models/ledger";
export default class Database {
    private accounts;
    private ledger;
    saveAccount(account: Account): void;
    getAccount(id: string): Account | undefined;
    getAccounts(): Account[] | undefined;
    saveLedger(ledger: Ledger): void;
    getAllTransactions(): Ledger[];
}
//# sourceMappingURL=database.d.ts.map