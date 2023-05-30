import DataBaseUser from "./dataBaseUser"
export default class TelaLogin {
    constructor(dataBaseUser, game) {
        // ID/Classes para carregar a página
        this.landPage = document.getElementById("landPage");
        this.registerPage = document.getElementsByClassName("register");
        this.recoverPage = document.getElementsByClassName("recover");
        this.loginPage = document.getElementsByClassName("login");
        this.span = document.getElementsByClassName("span")
        this.page = document.getElementById(`page`);
        //Botao Mostrar/Ocultar
        this.buttonShow = document.getElementById("show");
        this.fieldPassword = document.getElementById("password");
        //input
        this.userInput = document.getElementById(`userInput`)
        this.emailUser = document.getElementById("email");

        this.confirmPassword = document.getElementById(`confirmPassword`);

        //innerHtml Page
        this.pageH1 = document.getElementsByClassName(`nameUser`);
        this.janela = document.getElementById(`logout`);


        this.mostrar = true;
        this.showJanela = false
        //classes
        this.dataBaseUser = dataBaseUser;
        this.game = game;
        //Inicializando
        this.init();
    }
    mudar() {

        this.mostrar = !this.mostrar
        if (this.mostrar) {
            //Botao Ocultar => Mostrar
            this.buttonShow.innerHTML = "Mostrar";
            this.fieldPassword.setAttribute('type', 'password')
        }
        else {
            //Botao Mostrar => Ocultar
            this.buttonShow.innerHTML = "Ocultar";
            this.fieldPassword.setAttribute('type', 'text')
        };

    }
    hideRecover() {
        for (const site of this.recoverPage) {
            site.style.display = `none`;
        }
    }
    hideLogin() {

        for (const site of this.loginPage) {
            site.style.display = `none`;
        }
        for (const site of this.span) {
            site.style.display = `none`;
        }

    }
    hideRegister() {
        for (const site of this.registerPage) {
            site.style.display = `none`;
        }
    }
    registerNewUser() {
        this.hideRecover();
        this.hideLogin();
        for (const site of this.registerPage) {
            site.style.display = `flex`;
        };

    }
    recoverPassword() {
        this.hideRegister();
        this.hideLogin();
        for (const site of this.recoverPage) {
            site.style.display = `flex`;
        }
    }
    showLogin() {
        this.landPage.style.display = `flex`;
        this.hideRegister();
        this.hideRecover();
        for (const site of this.loginPage) {
            site.style.display = `flex`;
        }
        for (const site of this.span) {
            site.style.display = `block`;
        }

    }
    login() {

        for (let index = 0; index < this.dataBaseUser.lengthDataBase(); index++) {

            if (this.emailUser.value == this.dataBaseUser.dataBase[index].email && this.fieldPassword.value == this.dataBaseUser.dataBase[index].password) {
                this.inicializarAreaLogada(index)
                return
            }
        }
        alert(`Verifique seu e-mail ou senha.`)

    }
    init() {

        if (localStorage.getItem(`email`)) {
            for (let index = 0; index < this.dataBaseUser.lengthDataBase(); index++) {
                if (this.dataBaseUser.dataBase[index].email == localStorage.getItem(`email`)) {
                    this.inicializarAreaLogada(index)
                    return
                }
            }
        }else{
            this.inicializarAreaLogada(1)
        }
    }
    inicializarAreaLogada(index) {
        this.landPage.style.display = `none`;
        this.page.style.display = `flex`;
        this.inicializarPage(index)
        this.game.init()
    }
    inicializarPage(n) {
        localStorage.setItem("email", this.dataBaseUser.dataBase[n].email)
        this.pageH1[0].innerHTML = `Olá ${this.dataBaseUser.dataBase[n].user}`
    }
    openJanela() {
        this.showJanela = !this.showJanela;
        if (this.showJanela) {
            this.janela.style.display = `flex`
        } else {
            this.janela.style.display = `none`
        }
    }
    logout() {


        this.page.style.display = `none`
        localStorage.clear();
        this.openJanela();
        this.showLogin();
    }
    recover() {

        for (let index = 0; index < this.dataBaseUser.lengthDataBase(); index++) {
            if (this.dataBaseUser.dataBase[index].user == this.userInput.value && this.dataBaseUser.dataBase[index].email == this.emailUser.value) {
                alert(`A senha é ${this.dataBaseUser.dataBase[index].password}`)
                this.showLogin()
                return
            }


        }
        alert(`Usuário ou E-mail não cadastrado`)
    }

    register() {
        for (let index = 0; index < this.dataBaseUser.lengthDataBase(); index++) {
            if (this.dataBaseUser.dataBase[index].user === this.userInput.value) {
                alert(`Usuário ${this.userInput.value} já existente`)
                return
            }
            if (this.dataBaseUser.dataBase[index].email == this.emailUser.value) {
                alert(`E-mail ${this.emailUser.value} já cadastrado`)
                return
            }

        }

        if ((this.emailUser.value.indexOf(`@`) > -1) && ((this.fieldPassword.value === this.confirmPassword.value) && (this.fieldPassword.value != ""))
            && (this.userInput.value != "")) {
            alert(`Cadastro concluido!!\n Você receberá um e-mail de confirmação`)
            this.showLogin()
            this.dataBaseUser.addUser({ "user": this.userInput.value, "email": this.emailUser.value, "password": this.fieldPassword.value })
            //user.push({ "usuario": userInput.value, "email": emailUser.value, "password": fieldPassword.value })
            alert(`E-mail confirmado`)
        } else if (this.userInput.value == "") {
            alert(`Campo usuário obrigatório`)
        }
        else if (this.emailUser.value.indexOf(`@`) == -1) {
            alert(`E-mail inválido`)
            return
        }
        else {
            alert(`As senhas não são iguais`)
            return
        }

    }
}
