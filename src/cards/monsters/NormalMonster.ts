import Monster from "./monster";

export default class NormalMonster extends Monster {
  constructor(
    name: string,
    type: string,
    race: string,
    detail: string,
    attackScore: Number,
    deffenceScore: Number,
    posture: string,
    reverse: boolean
  ) {
    super(
      name,
      type,
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
