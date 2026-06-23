"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        this.accounts = new Map();
        this.ledger = new Map();
    }
    saveAccount(account) {
        this.accounts.set(account.getId(), account);
    }
    getAccount(id) {
        return this.accounts.get(id);
    }
    getAccounts() {
        return Array.from(this.accounts.values());
    }
    saveLedger(ledger) {
        this.ledger.set(ledger.getId(), ledger);
    }
    getAllTransactions() {
        return Array.from(this.ledger.values());
    }
}
exports.default = Database;
//# sourceMappingURL=database.js.map