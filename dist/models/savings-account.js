"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = __importDefault(require("./account"));
class SavingsAccount extends account_1.default {
    constructor() {
        super(...arguments);
        this.interestRate = 0.1;
    }
    applyInterestOverTime(months) {
        const amount = this.getBalance();
        const amountWithInterest = amount * Math.pow(1 + this.interestRate, months);
        this.deposit(amountWithInterest);
    }
}
exports.default = SavingsAccount;
//# sourceMappingURL=savings-account.js.map