"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = __importDefault(require("./account"));
class SavingsAccount extends account_1.default {
    constructor(user) {
        super(user);
        this.interestRate = 0.1;
    }
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
        return `Conta Poupança - ID: ${this.id}, Saldo: ${this.balance}, Taxa de Juros: ${this.interestRate}, Nome: ${this.user.getName()}, Email: ${this.user.getEmail()}`;
    }
}
exports.default = SavingsAccount;
//# sourceMappingURL=savings-account.js.map