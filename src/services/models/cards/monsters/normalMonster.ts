import Monster from "./monster";
import { Attribute } from "./attribute";
import { CardType } from "../cardType";
import { MonsterType } from "./monsterType";
import { Position } from "./position";
import { JsonProperty } from "json-typescript-mapper";
import Card from "../card";

export default class NormalMonster extends Monster {
  name: string;

  monsterType: string;

  attribute: string;

  detail: string;

  attackScore: number;

  deffenceScore: number;

  constructor(
    name: string,
    cardType: CardType,
    monsterType: string,
    attribute: string,
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
    new (function() {})();
    return "バトル!";
  }
}
