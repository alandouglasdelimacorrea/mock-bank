import Account from "./account";
export default class Transaction {
    private amount;
    private date;
    private description;
    private fromAccount;
    private toAccount;
    private type;
    constructor(amount: number, description: string, fromAccount: Account, toAccount: Account | null, type: 'deposit' | 'withdraw' | 'transfer');
}
//# sourceMappingURL=transaction.d.ts.map