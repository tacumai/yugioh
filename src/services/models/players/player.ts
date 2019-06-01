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
}
