export default class Players {
    constructor() {
        this.cartasNaMao = [];
    }
    maoInicial(cartas) {
        this.cartasNaMao = [];
        this.cartasNaMao = cartas;
    }
    perdeCarta() {
        this.cartasNaMao.shift();
    }
    tamanhoCartaMao() {
        return this.cartasNaMao.length
    }
    primeiraCarta() {
        return this.cartasNaMao[0];
    }
    ganhaRodada(oponente) {
        //ganha a carta do oponente
        this.cartasNaMao.push(oponente.cartasNaMao[0])
        //passa a primeira carta para tras
        this.cartasNaMao.push(this.cartasNaMao[0])
        //retira a carta da frente de cada player
        this.perdeCarta()
    }
}