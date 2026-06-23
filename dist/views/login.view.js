"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("@inquirer/prompts");
const main_menu_view_1 = require("./main-menu.view");
const user_1 = __importDefault(require("../models/user"));
const checkings_account_1 = __importDefault(require("../models/checkings-account"));
const savings_account_1 = __importDefault(require("../models/savings-account"));
class LoginView {
    async execute(context) {
        const action = await (0, prompts_1.select)({
            message: "Login",
            choices: [
                { name: "Fazer login", value: "login" },
                { name: "Criar uma conta", value: "sigin" },
                { name: "Sair", value: "exit" }
            ]
        });
        switch (action) {
            case 'login':
                return this.login(context);
            case 'sigin':
                return this.signin(context);
            case 'exit':
                return null;
        }
    }
    async login(context) {
        const userId = await (0, prompts_1.input)({ message: "Digite o id da sua conta: " });
        const isLogged = await context.login(userId);
        console.log(isLogged);
        if (isLogged)
            return new main_menu_view_1.MainMenuView();
        return this;
    }
    async signin(context) {
        const name = await (0, prompts_1.input)({ message: "Digite seu nome: " });
        const email = await (0, prompts_1.input)({ message: "Digite seu email: " });
        const cpf = await (0, prompts_1.input)({ message: "Digite seu cpf: " });
        const password = await (0, prompts_1.input)({ message: "Digite sua senha: " });
        const userInterface = {
            name,
            email,
            cpf,
            password
        };
        const account = await (0, prompts_1.select)({
            message: "Tipo de conta",
            choices: [
                { name: "Conta corrente", value: new checkings_account_1.default(new user_1.default(userInterface)) },
                { name: "Conta poupança", value: new savings_account_1.default(new user_1.default(userInterface)) }
            ]
        });
        const isLogged = await context.signin(account);
        if (isLogged)
            return new main_menu_view_1.MainMenuView();
        return this;
    }
}
exports.default = LoginView;
//# sourceMappingURL=login.view.js.map