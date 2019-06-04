import Card from "../card";
import { Attribute } from "./attribute";
import { CardType } from "../cardType";
import { MonsterType } from "./monsterType";

export default abstract class Monster extends Card {
  attribute: Attribute;
  monsterType: MonsterType;

  attackScore: Number;
  deffenceScore: Number;
  reverse: boolean;
  posture: string;

  constructor(
    name: string,
    cardType: CardType,
    attribute: Attribute,
    monsterType: MonsterType,
    detail: string,
    attackScore: Number,
    deffenceScore: Number,
    posture: string,
    reverse: boolean
  ) {
    super(name, cardType, detail);
    this.attribute = attribute;
    this.monsterType = monsterType;
    this.detail = detail;
    this.attackScore = attackScore;
    this.deffenceScore = deffenceScore;
    this.posture = posture;
    this.reverse = reverse;
  }

  abstract attack(monster: string): string;
}
