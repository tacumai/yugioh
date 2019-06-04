import Monster from "./monster";
import { Attribute } from "./attribute";
import { MonsterType } from "./monsterType";

export default class NormalMonster extends Monster {
  constructor(
    name: string,
    type: string,
    monsterType: MonsterType,
    attribute: Attribute,
    detail: string,
    attackScore: Number,
    deffenceScore: Number,
    posture: string,
    reverse: boolean
  ) {
    super(
      name,
      type,
      attribute,
      monsterType,
      detail,
      attackScore,
      deffenceScore,
      posture,
      reverse
    );
  }

  public attack(): string {
    return "バトル!";
  }
}
