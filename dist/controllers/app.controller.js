"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const checkings_account_1 = __importDefault(require("../models/checkings-account"));
const user_1 = __importDefault(require("../models/user"));
const ledger_service_1 = __importDefault(require("../services/ledger.service"));
const terminal_logger_1 = require("../shared/terminal-logger");
class AppController {
    constructor(initialView) {
        this.database = new database_1.default();
        this.logger = new terminal_logger_1.TerminalLogger();
        this.currentView = initialView;
    }
    async start() {
        console.clear();
        console.log("=== BEM VINDO AO BANCO CLI ===\n");
        this.setUserTeste();
        while (this.currentView !== null) {
            this.currentView = await this.currentView.execute(this);
            console.clear();
        }
        console.log("Obrigado por usar o Banco CLI. Até logo!");
    }
    setUserTeste() {
        const userInterface = {
            name: "Teste",
            email: "teste@gmail.com",
            cpf: "12345678900",
            password: "123456"
        };
        const userInterface2 = {
            name: "Teste 2",
            email: "teste2@gmail.com",
            cpf: "123456789002",
            password: "1234562"
        };
        const account = new checkings_account_1.default(new user_1.default(userInterface));
        account.credit(100000);
        const account2 = new checkings_account_1.default(new user_1.default(userInterface2));
        console.log("Usuário de teste criado.", account.getId());
        console.log("Usuário de teste criado.", account2.getId());
        this.database.saveAccount(account);
        this.database.saveAccount(account2);
    }
    async login(userId) {
        const account = this.database.getAccount(userId);
        if (!account)
            return false;
        this.userSession = account;
        return true;
    }
    async signin(account) {
        this.database.saveAccount(account);
        const isLogged = await this.login(account.getId());
        return isLogged;
    }
    getUserSession() {
        return this.userSession;
    }
    transfer(fromAccount, toAccount, amountInCents) {
        const ledgerService = new ledger_service_1.default(this.database);
        ledgerService.transfer(fromAccount, toAccount, amountInCents);
    }
}
exports.default = AppController;
//# sourceMappingURL=app.controller.js.map