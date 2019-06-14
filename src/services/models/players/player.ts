import Card from "../cards/card";
import Deck from "../cards/deck";
import * as data from "json!../../../resources/monsterData.json";
import { MonsterMapper } from "../../managers/mappers/monsterMapper";
import Monster from "../cards/monsters/monster";
import Field from "../field";

export default class Player {
  name: string;
  handCards: Card[];
  deck: Deck;
  field: Field;

  constructor(name: string) {
    this.name = name;
    this.handCards = [];
    this.field = new Field(this.setUpDeck());
    this.setUpDeck();
    this.draw(5);
  }

  private setUpDeck(): Deck {
    const cards: Card[] = [];

    data["result"].forEach(card => {
      cards.push(MonsterMapper.build(card));
    });

    return new Deck(cards);
  }

  public draw(count: number): void {
    for (let i = 0; i < count; i++) {
      this.handCards.push(this.deck.stock[0]);
      this.deck.stock.shift();
    }
  }

  public summon(card_idx: number): void {
    // TODO:
    // - フィールドをインスタンス化
    // -
    const monster = this.handCards[card_idx];
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
