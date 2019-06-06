import Monster from "./monster";
import { Attribute } from "./attribute";
import { CardType } from "../cardType";
import { MonsterType } from "./monsterType";
import { Position } from "./position";

export default class NormalMonster extends Monster {
  constructor(
    name: string,
    cardType: CardType,
    monsterType: MonsterType,
    attribute: Attribute,
    detail: string,
    attackScore: Number,
    deffenceScore: Number,
    position: Position,
    reverse: boolean
  ) {
    super(
      name,
      cardType,
      attribute,
      monsterType,
      detail,
      attackScore,
      deffenceScore,
      position,
      reverse
    );
  }

  public attack(): string {
    return "バトル!";
  }
}
