const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards
  }
  
  get numberOfCards() {
    return this.cards.length
  }

  pop() {
    return this.cards.shift() //use shift to take the top card; array data structures
  }

  push(card) {
    this.cards.push(card)
  }

  shuffle() {
    for (let x = this.numberOfCards - 1; x > 0; x--) {
      const newIndex = Math.floor(Math.random() * (x + 1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[x]
      this.cards[x] = oldValue
    }
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit
    this.value = value
  }

  get color() {
    return this.suit === '♣' || this.suit === '♥' ? 'black' : 'red'
  }

  getHTML() {
    const cardDiv = document.createElement('div')
    cardDiv.innerText = this.suit
    cardDiv.classList.add("card", this.color)
    cardDiv.dataset.value = `${this.value} ${this.suit}`
    return cardDiv
  }
}

function freshDeck() {
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return new Card(suit, value)
    })
  })
}