import AppController from "../controllers/app.controller";
import { ViewState } from "../interfaces/view-state.interface";
import { select, input } from '@inquirer/prompts';
import Account from "../models/account";
import LoginView from "./login.view";

export class MainMenuView implements ViewState {

    async execute(context: AppController): Promise<ViewState | null> {
        context.logger.log("=== MENU PRINCIPAL ===");

        const action = await select({
            message: "Escolha uma ação",
            choices: [
                {name: "Ver saldo", value: "viewBalance"},
                {name: "Ver histórico", value: "viewHistory"},
                {name: "Detalhes da conta", value: "accountDetails"},
                {name: "Transferir dinheiro", value: "transfer"},
                {name: "Sair", value: "exit"}
            ]
        })

        switch (action){
            case 'viewBalance':
                await this.viewBalance(context)
                break;
            case 'viewHistory':
                const transactions = context.database.getAllTransactions();
                console.log(JSON.stringify(transactions, null, 2));
                break;
            case 'accountDetails':
                context.logger.log(context.getUserSession()?.getAccountDetails() || "Nenhuma sessão de usuário encontrada.");
                break;
            case 'transfer':
                const transferSuccess = await this.transfer(context)
                if(transferSuccess) context.logger.log("Transferência realizada com sucesso.", "SUCCESS");
                break;
            default: return new LoginView()
        }

        await this.pause()

        return this
    }

    private async pause(): Promise<void> {
        console.log("\n");
        await input({ message: "Pressione [Enter] para continuar..." });
    }

    private async transfer(context: AppController): Promise<boolean> {
        const recipientId: string = await input({message: "Digite o id da conta do destinatário: "})
        const recepient: Account | undefined = context.database.getAccount(recipientId)

        if(!recepient){
            console.log("Conta do destinatário não encontrada.")
            return false
        }

        const amount: number = parseFloat(await input({message: "Digite o valor a ser transferido: "}))
        const userSession = context.getUserSession()
        if(userSession){
            await context.transfer(userSession, recepient, amount)
        }

        return true
    }

    private async viewBalance(context: AppController): Promise<void> {
        const userSession = context.getUserSession()
        if(userSession){
            console.log(`Seu saldo atual é: ${userSession.getBalance()}`)
        } else {
            console.log("Nenhuma sessão de usuário encontrada.")
        }
    }

}