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
    this.draw(3);
  }

  public summon(handIdx: number, fieldIdx: number): void {
    const targetFieldPosition = this.field[fieldIdx];
    const card = this.handCards[handIdx];

    if (targetFieldPosition != null) {
      throw new Error("Monster is already summoned here.");
    }

    if (!this.inspectMonsterCard(card)) {
      throw new Error("this card is not Monster.");
    }

    this.field.mainMonsterZone[fieldIdx] = card as Monster;
    console.log(this.field);
  }

  public draw(count: number): void {
    for (let i = 0; i < count; i++) {
      this.handCards.push(this.field.deckZone.stock[i]);
      this.field.deckZone.stock.shift();
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

  private setUpDeck(): Deck {
    const cards: Card[] = [];

    data["result"].forEach(card => {
      cards.push(MonsterMapper.build(card));
    });

    return new Deck(cards);
  }

  private inspectMonsterCard(card: Card): boolean {
    return card instanceof Monster;
  }
}
