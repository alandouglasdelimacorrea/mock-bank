import Account from "./account";
import PaymentAlias from "./payment-alias";
import User from "./user";
export default class CheckingsAccount extends Account {
    private overdraftLimit;
    super(user: User): void;
    getId(): string;
    getBalance(): number;
    debit(amountInCents: number): void;
    credit(amountInCents: number): void;
    addPaymentAlias(alias: PaymentAlias): void;
    getAccountDetails(): string;
}
//# sourceMappingURL=checkings-account.d.ts.map