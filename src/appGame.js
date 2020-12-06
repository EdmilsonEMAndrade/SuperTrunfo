
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
    }
    init() {
        this.computador.classDesafiante = 0;
        this.addCartasBaralho()
        this.distribuirCartas()
        this.tela = new Tela(this.jogador, this.computador);
        this.tela.telaGame()
        this.game = new Game(this.jogador, this.computador, this.tela, this)
        this.tela.initEvent(this.game)
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
    // mostrarCartas() {
    //     this.tela.mostrarCartaComputador(this.computador.primeiraCarta())
    // }


}

//new AppGame()
//console.log(game)

