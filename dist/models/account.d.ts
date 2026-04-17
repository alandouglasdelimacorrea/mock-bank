import PaymentAlias from "./payment-alias";
import User from "./user";
export default class Account {
    private accountNumber;
    protected balance: number;
    private user;
    private paymentAlias;
    constructor(user: User);
    deposit(amount: number): void;
    addPaymentAlias(alias: PaymentAlias): void;
    private generateAccountNumber;
    getBalance(): number;
    withdraw(amount: number): void;
}
//# sourceMappingURL=account.d.ts.map