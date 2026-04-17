"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(user) {
        this.paymentAlias = [];
        this.accountNumber = this.generateAccountNumber();
        this.balance = 0;
        this.user = user;
    }
    deposit(amount) {
        this.balance += amount;
    }
    addPaymentAlias(alias) {
        this.paymentAlias.push(alias);
    }
    generateAccountNumber() {
        return Math.random().toString(36).substring(2, 11);
    }
    getBalance() {
        return this.balance;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
}
exports.default = Account;
//# sourceMappingURL=account.js.map