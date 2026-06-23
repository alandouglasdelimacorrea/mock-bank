import Database from "../database";
import Account from "../models/account";
import Ledger from "../models/ledger";
import User from "../models/user";
export default class LedgerService {
    private store;
    constructor(store: Database);
    save(user: User, type: string): string;
    private accountFactory;
    transfer(fromAccount: Account, toAccount: Account, amountInCents: number): Ledger;
}
//# sourceMappingURL=ledger.service.d.ts.map