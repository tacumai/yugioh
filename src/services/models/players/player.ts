import Card from "../cards/card";
import Deck from "../cards/deck";

export default class Player {
  name: string;
  handCards: Card[];
  deck: Deck;

  constructor(name: string) {
    this.name = name;
  }

  public setUpDeck(cards: Object[]): Deck {
    this.deck = new Deck(cards);
    return this.deck;
  }

  public addCard(card: Card): void {
    this.handCards.push(card);
  }

  public discard(targetList: number[]): void {
    targetList.forEach(idx => {
      this.handCards.splice(idx, 1);
    });
  }
}
