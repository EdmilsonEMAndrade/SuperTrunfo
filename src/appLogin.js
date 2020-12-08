import DataBaseUser from "./class/dataBaseUser"
import User from "./class/dataUser";
import TelaLogin from "./class/telaLogin"
import { users } from "./user"
import AppGame from "./appGame";

export default class AppLogin {
    constructor() {
        this.gameTela = new AppGame();
        this.dataBaseUser = new DataBaseUser();
        this.initDataBase();
        this.telaLogin = new TelaLogin(this.dataBaseUser, this.gameTela);

        //Pegar todos elementos HTML
        this.elementHtml();
        //adicionando evento onClick()
        this.clickLogin();
    }
    initDataBase() {
        for (const user of users) {
            this.dataBaseUser.addUser(new User(user))
        }
    }
    elementHtml() {
        this.buttomEntrar = document.getElementById("entrar");
        this.buttomCadastrar = document.getElementById("cadastrarUser");
        this.buttomRecuperar = document.getElementById("recuperarSenha");
        this.buttomJanela = document.getElementById("abrirJanela");
        this.buttomSair = document.getElementById("logout");
        this.wordCadastro = document.getElementById("cadastrese");
        this.wordEsqueceu = document.getElementById("esqueceuSenha");
        this.buttomMostar = document.getElementById("show");
    }
    clickLogin() {

        this.buttomEntrar.onclick = () => this.telaLogin.login();
        this.buttomCadastrar.onclick = () => this.telaLogin.register();
        this.buttomRecuperar.onclick = () => this.telaLogin.recover();
        this.buttomJanela.onclick = () => this.telaLogin.openJanela();
        this.buttomSair.onclick = () => this.telaLogin.logout();
        this.wordCadastro.onclick = () => this.telaLogin.registerNewUser();
        this.buttomMostar.onclick = () => this.telaLogin.mudar();
        this.wordEsqueceu.onclick = () => this.telaLogin.recoverPassword();

    }
}