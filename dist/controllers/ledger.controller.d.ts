import Database from "../database";
import Ledger from "../models/ledger";
import User from "../models/user";
import LedgerService from "../services/ledger.service";
export default class LedgerController {
    private store;
    private ledgerService;
    constructor(store: Database, ledgerService: LedgerService);
    createAccount(user: User, type: string): string;
    transfer(fromAccountId: string, toAccountId: string, amountInCents: number): Ledger;
}
//# sourceMappingURL=ledger.controller.d.ts.map