"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkings_account_1 = __importDefault(require("../models/checkings-account"));
const transaction_1 = __importDefault(require("../models/transaction"));
const savings_account_1 = __importDefault(require("../models/savings-account"));
const ledger_1 = __importDefault(require("../models/ledger"));
const transfer_operation_error_1 = require("../errors/transfer-operation.error");
class LedgerService {
    constructor(store) {
        this.store = store;
    }
    save(user, type) {
        const account = this.accountFactory(type, user);
        this.store.saveAccount(account);
        return account.getId();
    }
    accountFactory(type, user) {
        if (type === "checkings")
            return new checkings_account_1.default(user);
        if (type === "savings")
            return new savings_account_1.default(user);
        throw new Error("Tipo de conta inválida");
    }
    transfer(fromAccount, toAccount, amountInCents) {
        const ledger = new ledger_1.default();
        const debit = new transaction_1.default(fromAccount.getId(), -amountInCents, "Transferindo de");
        const credit = new transaction_1.default(toAccount.getId(), amountInCents, "Transferindo para");
        ledger.addRegistry(debit);
        ledger.addRegistry(credit);
        if (!ledger.isValid()) {
            ledger.fail();
            this.store.saveLedger(ledger);
            throw new transfer_operation_error_1.TransferOperationError("Crédito e débito não igualam a zero. Abortando operação", "transfer - LedgerService");
        }
        fromAccount.debit(amountInCents);
        toAccount.credit(amountInCents);
        ledger.commit();
        this.store.saveAccount(fromAccount);
        this.store.saveAccount(toAccount);
        this.store.saveLedger(ledger);
        return ledger;
    }
}
exports.default = LedgerService;
//# sourceMappingURL=ledger.service.js.map