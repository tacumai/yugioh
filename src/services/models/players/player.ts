import Card from "../cards/card";
import Deck from "../cards/deck";
import * as data from "json!../../../resources/monsterData.json";
import { MonsterMapper } from "../../managers/mappers/monsterMapper";

export default class Player {
  name: string;
  handCards: Card[];
  deck: Deck;

  constructor(name: string) {
    this.name = name;
    this.handCards = [];
    this.setUpDeck();
    this.draw(5);
  }

  private setUpDeck(): void {
    const cards: Card[] = [];

    data["result"].forEach(card => {
      cards.push(MonsterMapper.build(card));
    });

    const deck = new Deck(cards);
    this.deck = deck;
  }

  public draw(count: number): void {
    for (let i = 0; i < count; i++) {
      this.handCards.push(this.deck.stock[0]);
      this.deck.stock.shift();
    }
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
