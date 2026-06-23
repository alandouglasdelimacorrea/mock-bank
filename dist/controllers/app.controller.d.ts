import Database from "../database";
import { ViewState } from "../interfaces/view-state.interface";
import Account from "../models/account";
import { TerminalLogger } from "../shared/terminal-logger";
export default class AppController {
    database: Database;
    private currentView;
    private userSession?;
    logger: TerminalLogger;
    constructor(initialView: ViewState);
    start(): Promise<void>;
    private setUserTeste;
    login(userId: string): Promise<boolean>;
    signin(account: Account): Promise<boolean>;
    getUserSession(): Account | undefined;
    transfer(fromAccount: Account, toAccount: Account, amountInCents: number): void;
}
//# sourceMappingURL=app.controller.d.ts.map