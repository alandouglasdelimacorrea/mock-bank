"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenuView = void 0;
const prompts_1 = require("@inquirer/prompts");
const login_view_1 = __importDefault(require("./login.view"));
class MainMenuView {
    async execute(context) {
        var _a;
        context.logger.log("=== MENU PRINCIPAL ===");
        const action = await (0, prompts_1.select)({
            message: "Escolha uma ação",
            choices: [
                { name: "Ver saldo", value: "viewBalance" },
                { name: "Ver histórico", value: "viewHistory" },
                { name: "Detalhes da conta", value: "accountDetails" },
                { name: "Transferir dinheiro", value: "transfer" },
                { name: "Sair", value: "exit" }
            ]
        });
        switch (action) {
            case 'viewBalance':
                await this.viewBalance(context);
                break;
            case 'viewHistory':
                const transactions = context.database.getAllTransactions();
                console.log(JSON.stringify(transactions, null, 2));
                break;
            case 'accountDetails':
                context.logger.log(((_a = context.getUserSession()) === null || _a === void 0 ? void 0 : _a.getAccountDetails()) || "Nenhuma sessão de usuário encontrada.");
                break;
            case 'transfer':
                const transferSuccess = await this.transfer(context);
                if (transferSuccess)
                    context.logger.log("Transferência realizada com sucesso.", "SUCCESS");
                break;
            default: return new login_view_1.default();
        }
        await this.pause();
        return this;
    }
    async pause() {
        console.log("\n");
        await (0, prompts_1.input)({ message: "Pressione [Enter] para continuar..." });
    }
    async transfer(context) {
        const recipientId = await (0, prompts_1.input)({ message: "Digite o id da conta do destinatário: " });
        const recepient = context.database.getAccount(recipientId);
        if (!recepient) {
            console.log("Conta do destinatário não encontrada.");
            return false;
        }
        const amount = parseFloat(await (0, prompts_1.input)({ message: "Digite o valor a ser transferido: " }));
        const userSession = context.getUserSession();
        if (userSession) {
            await context.transfer(userSession, recepient, amount);
        }
        return true;
    }
    async viewBalance(context) {
        const userSession = context.getUserSession();
        if (userSession) {
            console.log(`Seu saldo atual é: ${userSession.getBalance()}`);
        }
        else {
            console.log("Nenhuma sessão de usuário encontrada.");
        }
    }
}
exports.MainMenuView = MainMenuView;
//# sourceMappingURL=main-menu.view.js.map