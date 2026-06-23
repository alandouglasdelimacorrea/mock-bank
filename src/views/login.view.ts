import { select, input } from '@inquirer/prompts';
import AppController from "../controllers/app.controller";
import { ViewState } from "../interfaces/view-state.interface";
import { MainMenuView } from './main-menu.view';
import Account from '../models/account';
import User from '../models/user';
import { IUser } from '../interfaces/user.interface';
import CheckingsAccount from '../models/checkings-account';
import SavingsAccount from '../models/savings-account';

export default class LoginView implements ViewState {
    async execute(context: AppController): Promise<ViewState | null> {

        const action = await select({
            message: "Login",
            choices: [
                {name: "Fazer login", value: "login"},
                {name: "Criar uma conta", value: "sigin"},
                {name: "Sair", value: "exit"}

            ]
        })

        switch (action){
            case 'login':
                return this.login(context)
            case 'sigin':
                return this.signin(context);
            case 'exit':
                return null
        }

    }

    async login(context: AppController): Promise<ViewState>{
        const userId: string = await input({message: "Digite o id da sua conta: "})
        const isLogged: boolean = await context.login(userId)
        console.log(isLogged)
        if(isLogged) return new MainMenuView()
        
        return this
    }

    async signin(context: AppController): Promise<ViewState> {
        
        const name: string = await input({message: "Digite seu nome: "})
        const email: string = await input({message: "Digite seu email: "})
        const cpf: string = await input({message: "Digite seu cpf: "})
        const password: string = await input({message: "Digite sua senha: "})
        
        const userInterface: IUser = {
            name,
            email,
            cpf,
            password
        }

        const account: Account = await select<Account>({
            message: "Tipo de conta",
            choices: [
                {name: "Conta corrente", value: new CheckingsAccount(new User(userInterface))},
                {name: "Conta poupança", value: new SavingsAccount(new User(userInterface))}
            ]
        })

        const isLogged: boolean = await context.signin(account);

        if(isLogged) return new MainMenuView()

        return this
    }
}