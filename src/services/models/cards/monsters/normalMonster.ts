import Monster from "./monster";
import { Attribute } from "./attribute";

export default class NormalMonster extends Monster {
  constructor(
    name: string,
    type: string,
    race: string,
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
      race,
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
