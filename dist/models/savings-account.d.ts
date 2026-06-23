import Account from "./account";
import PaymentAlias from "./payment-alias";
import User from "./user";
export default class SavingsAccount extends Account {
    private interestRate;
    constructor(user: User);
    getId(): string;
    getBalance(): number;
    debit(amountInCents: number): void;
    credit(amountInCents: number): void;
    addPaymentAlias(alias: PaymentAlias): void;
    getAccountDetails(): string;
}
//# sourceMappingURL=savings-account.d.ts.map