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
    //fazer lógica de poder sacar usando o overdraftlimit
    updateOverdraftLimit(amount) {
        this.overdraftLimit -= amount;
    }
    withdraw(amount) {
        if (this.overdraftLimit < amount)
            return;
        this.balance -= amount;
        this.updateOverdraftLimit(amount);
    }
}
exports.default = CheckingsAccount;
//# sourceMappingURL=checkings-account.js.map