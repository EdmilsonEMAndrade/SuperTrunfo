
import Carta from "./class/carta";
import Baralho from "./class/baralho";
import Tela from "./class/tela";
import Jogador from "./class/jogador";
import Computador from "./class/computador";
import Game from "./class/game";
import { carros } from "./carros"


export default class AppGame {
    constructor() {

        this.baralho = new Baralho();
        this.addCartasBaralho()
        this.jogador = new Jogador();
        this.computador = new Computador(this.baralho);
        this.distribuirCartas()
        this.tela = new Tela(this.jogador, this.computador);
        this.tela.telaGame()
        this.game = new Game(this.jogador, this.computador, this.tela, this)
        this.tela.initEvent(this.game)
        this.buttonTutorial = document.getElementById("btnTutorial")
        this.escutarEvent()
        this.tutorial = false;
    }
    init() {
        this.computador = new Computador(this.baralho)

        this.jogador = new Jogador();


        this.baralho.embaralhar();
        this.distribuirCartas()
        this.tela = new Tela(this.jogador, this.computador);
        this.tela.telaGame()
        this.game = new Game(this.jogador, this.computador, this.tela, this)
        this.tela.initEvent(this.game)
        console.log(this.jogador.cartasNaMao)
    }
    addCartasBaralho() {
        for (const carro of carros) {
            let carta = new Carta(carro);
            this.baralho.addCarta(carta)
        }
        this.baralho.maiorValor();
        this.baralho.embaralhar();
    }
    distribuirCartas() {

        var novoArray = [];
        var i = 0;
        var tamanho = Math.trunc(this.baralho.cartas.length / 2);
        while (i < this.baralho.cartas.length) {
            novoArray.push(this.baralho.cartas.slice(i, i + tamanho));
            i += tamanho;
        }
        this.jogador.maoInicial(novoArray[0]);
        this.computador.maoInicial(novoArray[1]);

    }

    escutarEvent() {
        this.buttonTutorial.onclick = () => this.mostrarTelaTutorial();
    }
    mostrarTelaTutorial() {
        console.log(this.tutorial)
        console.log("entrou funcao")

        this.tutorial = !this.tutorial
        if (this.tutorial) {
            this.buttonTutorial.innerHTML = `VOLTAR PARA O JOGO`

            this.tela.divGame.innerHTML = `<div class="container tamanhoCarrosel h-100">
          <div id="carouselExampleIndicators" class="carousel slide tutorial" data-ride="carousel">
              <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
              </ol>
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img class="d-block w-100 img" src="./image/objetivo.png" alt="Objetivo">
      
                  </div>
                  <div class="carousel-item">
                      <img class="d-block w-100 img" src="./image/compare.png" alt="Compare">
      
                  </div>
      
                  <div class="carousel-item">
                      <img class="d-block w-100" src="./image/ganhador.png" alt="Quem Vence">
      
                  </div>
                  <div class="carousel-item">
                      <img class="d-block w-100" src="./image/quem_escolhe.png" alt="Quem joga">
      
                  </div>
              </div>
              <a class="carousel-control-prev bg-dark" href="#carouselExampleIndicators" role="button"
                  data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next bg-dark" href="#carouselExampleIndicators" role="button"
                  data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
              </a>
          </div>
      </div>`
        } else {
            this.buttonTutorial.innerHTML = `COMO JOGAR`
            this.tela.telaGame()
            this.tela.initEvent(this.game)

        }
    }

}

//new AppGame()
//console.log(game)

