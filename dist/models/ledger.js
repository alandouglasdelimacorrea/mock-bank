"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_status_1 = require("../enums/transaction-status");
const utils_1 = __importDefault(require("../shared/utils"));
class Ledger {
    constructor() {
        this.registries = [];
        this.id = utils_1.default.generateId();
        this.date = new Date();
        this.status = transaction_status_1.TransactionStatus.PENDING;
    }
    addRegistry(registry) {
        if (this.status !== transaction_status_1.TransactionStatus.PENDING) {
            throw new Error("Apenas transações pendentes podem receber novos registros.");
        }
        this.registries.push(registry);
    }
    getId() {
        return this.id;
    }
    getRegistries() {
        return this.registries;
    }
    isValid() {
        if (this.registries.length < 2)
            return false;
        const sum = this.registries.reduce((acc, curr) => acc + curr.getValue(), 0);
        return sum === 0;
    }
    commit() {
        this.status = transaction_status_1.TransactionStatus.COMMITED;
    }
    fail() {
        this.status = transaction_status_1.TransactionStatus.FAILED;
    }
}
exports.default = Ledger;
//# sourceMappingURL=ledger.js.map