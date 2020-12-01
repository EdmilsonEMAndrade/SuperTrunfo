export class Card {
    constructor(data) {
        const { velMax, Peso, zerocem } = data
        this.velMax = velMax

    }
}


const card = { velMax: 100 }
const deck = new Card(card)
