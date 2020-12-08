import Players from "./players"

export default class Computador extends Players {
    constructor(baralho) {
        super()
        this.baralho = baralho
        this.classDesafiante = 0;
    }

    decisao() {
        let comparacao = [];
        comparacao.push(this.primeiraCarta().velMax / this.baralho.maiorVelocidade)
        comparacao.push(this.baralho.menorPeso / this.primeiraCarta().peso)
        comparacao.push(this.baralho.menorAceleracao / this.primeiraCarta().aceleracao)
        comparacao.push(this.primeiraCarta().hp / this.baralho.maiorHP)
        comparacao.push(this.primeiraCarta().cilindro / this.baralho.maiorCilindros)
        let max = comparacao.reduce(function (a, b) {
            return Math.max(a, b);
        });

        return this.mostrarNomeDecisao(comparacao.indexOf(max))
    }
    mostrarNomeDecisao(number) {
        switch (number) {
            case 0:
                return "velMax"
            case 1:
                return "peso"
            case 2:
                return "aceleracao"
            case 3:
                return "hp"
            case 4:
                return "cilindro"
            default:
                console.log("error");
        }
    }
}