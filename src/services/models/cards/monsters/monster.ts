import Card from "../card";
import { Attribute } from "./attribute";
import { CardType } from "../cardType";

export default abstract class Monster extends Card {
  attribute: Attribute;
  race: string;

  attackScore: Number;
  deffenceScore: Number;
  reverse: boolean;
  posture: string;

  constructor(
    name: string,
    cardType: CardType,
    attribute: Attribute,
    race: string,
    detail: string,
    attackScore: Number,
    deffenceScore: Number,
    posture: string,
    reverse: boolean
  ) {
    super(name, cardType, detail);
    this.attribute = attribute;
    this.race = race;
    this.detail = detail;
    this.attackScore = attackScore;
    this.deffenceScore = deffenceScore;
    this.posture = posture;
    this.reverse = reverse;
  }

  abstract attack(monster: string): string;
}
