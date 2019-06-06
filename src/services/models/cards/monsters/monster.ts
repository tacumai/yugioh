import Card from "../card";
import { Attribute } from "./attribute";
import { CardType } from "../cardType";
import { MonsterType } from "./monsterType";
import { Position } from "./position";

export default abstract class Monster extends Card {
  attribute: Attribute;
  monsterType: MonsterType;

  attackScore: Number;
  deffenceScore: Number;
  reverse: boolean;
  position: Position;

  constructor(
    name: string,
    cardType: CardType,
    attribute: Attribute,
    monsterType: MonsterType,
    detail: string,
    attackScore: Number,
    deffenceScore: Number,
    position: Position,
    reverse: boolean
  ) {
    super(name, cardType, detail);
    this.attribute = attribute;
    this.monsterType = monsterType;
    this.detail = detail;
    this.attackScore = attackScore;
    this.deffenceScore = deffenceScore;
    this.position = position;
    this.reverse = reverse;
  }

  abstract attack(monster: string): string;
}
