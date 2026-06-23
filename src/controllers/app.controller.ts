import Database from "../database";
import { IUser } from "../interfaces/user.interface";
import { ViewState } from "../interfaces/view-state.interface";
import Account from "../models/account";
import AppContext from "../models/app-context";
import CheckingsAccount from "../models/checkings-account";
import User from "../models/user";
import LedgerService from "../services/ledger.service";
import { TerminalLogger } from "../shared/terminal-logger";

export default class AppController {
    public database = new Database();
    private currentView: ViewState | null;
    private userSession?: Account
    public logger: TerminalLogger = new TerminalLogger();

    constructor(initialView: ViewState) {
        this.currentView = initialView;
    }

    public async start(): Promise<void> {
        console.clear();
        console.log("=== BEM VINDO AO BANCO CLI ===\n");

        this.setUserTeste()
        
        while (this.currentView !== null) {
            this.currentView = await this.currentView.execute(this);
            console.clear(); 
        }
        
        console.log("Obrigado por usar o Banco CLI. Até logo!");
    }

    private setUserTeste(): void {
        const userInterface: IUser = {
            name: "Teste",
            email: "teste@gmail.com",
            cpf: "12345678900",
            password: "123456"
        }

        const userInterface2: IUser = {
            name: "Teste 2",
            email: "teste2@gmail.com",
            cpf: "123456789002",
            password: "1234562"
        }

        const account: Account = new CheckingsAccount(new User(userInterface))
        account.credit(100000) 
        const account2: Account = new CheckingsAccount(new User(userInterface2))

        console.log("Usuário de teste criado.", account.getId())
        console.log("Usuário de teste criado.", account2.getId())


        this.database.saveAccount(account)
        this.database.saveAccount(account2)
    }

    public async login(userId: string): Promise<boolean>{
        const account = this.database.getAccount(userId)
        if(!account) return false
        this.userSession = account
        return true
    }

    public async signin(account: Account): Promise<boolean>{
        this.database.saveAccount(account)
        const isLogged: boolean = await this.login(account.getId())

        return isLogged
    }

    public getUserSession(): Account | undefined {
        return this.userSession
    }

    public transfer(fromAccount: Account, toAccount: Account, amountInCents: number): void {
        const ledgerService = new LedgerService(this.database);
        ledgerService.transfer(fromAccount, toAccount, amountInCents);
    }
}