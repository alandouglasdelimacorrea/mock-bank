"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = __importDefault(require("./account"));
class CheckingsAccount extends account_1.default {
    constructor() {
        super(...arguments);
        this.overdraftLimit = 100;
    }
    super(user) { }
    ;
    //fazer lógica de poder sacar usando o overdraftlimit
    // private updateOverdraftLimit(amount: number): void{
    //    this.overdraftLimit -= amount;
    // }
    getId() {
        return this.id;
    }
    getBalance() {
        return this.balance;
    }
    debit(amountInCents) {
        if (amountInCents <= 0) {
            throw new Error("Debite um numero maior que zero.");
        }
        if (this.balance < amountInCents) {
            throw new Error("Saldo insuficiente");
        }
        this.balance -= amountInCents;
    }
    credit(amountInCents) {
        if (amountInCents <= 0) {
            throw new Error("Crédito deve ser maior que zero");
        }
        this.balance += amountInCents;
    }
    addPaymentAlias(alias) {
        this.paymentAlias.push(alias);
    }
    getAccountDetails() {
        return `Conta Corrente - ID: ${this.id}, Saldo: ${this.balance}, Limite de Cheque Especial: ${this.overdraftLimit}, Nome: ${this.user.getName()}, Email: ${this.user.getEmail()}`;
    }
}
exports.default = CheckingsAccount;
//# sourceMappingURL=checkings-account.js.map