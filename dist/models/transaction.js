"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transaction {
    constructor(amount, description, fromAccount, toAccount, type) {
        this.amount = amount;
        this.description = description;
        this.fromAccount = fromAccount;
        this.toAccount = toAccount;
        this.type = type;
        this.date = new Date().getDate();
    }
}
exports.default = Transaction;
//# sourceMappingURL=transaction.js.map