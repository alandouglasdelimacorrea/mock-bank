import Utils from "../shared/utils";
import PaymentAlias from "./payment-alias";
import User from "./user";

export default abstract class Account {
    protected readonly id: string;
    protected user: User;
    protected balance: number;
    protected paymentAlias: PaymentAlias[] = [];

    constructor(user: User){
        this.id = Utils.generateId();
        this.balance = 0;
        this.user = user;
    }

    abstract getId(): string;
    abstract getBalance(): number;
    abstract debit(amountInCents: number): void;
    abstract credit(amountInCents: number): void;
    abstract addPaymentAlias(alias: PaymentAlias): void;
    abstract getAccountDetails(): string;
}