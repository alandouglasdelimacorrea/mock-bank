"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../shared/utils"));
class Transaction {
    constructor(accountId, value, description) {
        this.id = utils_1.default.generateId();
        this.accountId = accountId;
        this.value = value;
        this.description = description;
    }
    getValue() {
        return this.value;
    }
}
exports.default = Transaction;
//# sourceMappingURL=transaction.js.map