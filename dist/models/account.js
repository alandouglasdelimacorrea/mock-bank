"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../shared/utils"));
class Account {
    constructor(user) {
        this.paymentAlias = [];
        this.id = utils_1.default.generateId();
        this.balance = 0;
        this.user = user;
    }
}
exports.default = Account;
//# sourceMappingURL=account.js.map