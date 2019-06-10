import Card from "../cards/card";
import Deck from "../cards/deck";

export default class Player {
  name: string;
  handCards: Card[];
  deck: Deck;

  constructor(name: string) {
    this.name = name;
    this.handCards = [];
  }

  public setUpDeck(cards: Card[]): Deck {
    this.deck = new Deck(cards);
    return this.deck;
  }

  // public draw(count: number): void {
  //   // デッキの先頭を取得
  //   this.handCards.push(this.deck.stock[0]);

  //   // デッキの先頭を削除
  //   this.deck.stock.shift();
  // }

  public addCard(card: Card): void {
    this.handCards.push(card);
  }

  public discard(targetList: number[]): void {
    targetList.forEach(idx => {
      this.handCards.splice(idx, 1);
    });
  }
}
