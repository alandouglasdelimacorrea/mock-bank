"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LedgerController {
    constructor(store, ledgerService) {
        this.store = store;
        this.ledgerService = ledgerService;
    }
    createAccount(user, type) {
        return this.ledgerService.save(user, type);
    }
    transfer(fromAccountId, toAccountId, amountInCents) {
        if (amountInCents <= 0) {
            throw new Error("Quantidade da transferência deve ser maior que zero");
        }
        const fromAccount = this.store.getAccount(fromAccountId);
        const toAccount = this.store.getAccount(toAccountId);
        if (!fromAccount || !toAccount) {
            throw new Error("Uma ou ambas as contas não existem");
        }
        if (fromAccount.getBalance() < amountInCents) {
            throw new Error("Saldo insuficiente");
        }
        const ledger = this.ledgerService.transfer(fromAccount, toAccount, amountInCents);
        return ledger;
    }
}
exports.default = LedgerController;
//# sourceMappingURL=ledger.controller.js.map