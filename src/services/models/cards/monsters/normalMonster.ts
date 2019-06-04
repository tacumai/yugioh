import Monster from "./monster";
import { Attribute } from "./attribute";
import { CardType } from "../cardType";

export default class NormalMonster extends Monster {
  constructor(
    name: string,
    cardType: CardType,
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
      cardType,
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
