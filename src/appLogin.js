import DataBaseUser from "./class/dataBaseUser"
import User from "./class/dataUser";
import TelaLogin from "./class/telaLogin"
import { users } from "./user"

export default class AppLogin {
    constructor(game) {
        this.gameTela = game
        this.dataBaseUser = new DataBaseUser();
        this.telaLogin = new TelaLogin(this.dataBaseUser);
        this.initDataBase();
        this.telaLogin.open();
        this.buttomEntrar = document.getElementById("entrar");
        this.buttomCadastrar = document.getElementById("cadastrarUser");
        this.buttomRecuperar = document.getElementById("recuperarSenha");
        this.buttomJanela = document.getElementById("abrirJanela");
        this.buttomSair = document.getElementById("logout");
        this.wordCadastro = document.getElementById("cadastrese");
        this.wordEsqueceu = document.getElementById("esqueceuSenha");
        this.buttomMostar = document.getElementById("show");
        this.clickLogin()
    }
    initDataBase() {
        for (const user of users) {
            this.dataBaseUser.addUser(new User(user))
        }
    }
    clickLogin() {

        this.buttomEntrar.onclick = () => this.telaLogin.login(this.gameTela);
        this.buttomCadastrar.onclick = () => this.telaLogin.register();
        this.buttomRecuperar.onclick = () => this.telaLogin.recover();
        this.buttomJanela.onclick = () => this.telaLogin.openJanela();
        this.buttomSair.onclick = () => this.telaLogin.logout(this.gameTela);
        this.wordCadastro.onclick = () => this.telaLogin.registerNewUser();
        this.buttomMostar.onclick = () => this.telaLogin.mudar();
        this.wordEsqueceu.onclick = () => this.telaLogin.recoverPassword();

    }
}