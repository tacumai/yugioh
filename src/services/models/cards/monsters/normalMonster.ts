import Monster from "./monster";

export default class NormalMonster extends Monster {
  constructor(
    name: string,
    type: string,
    race: string,
    monsterType: string,
    detail: string,
    attackScore: Number,
    deffenceScore: Number,
    posture: string,
    reverse: boolean
  ) {
    super(
      name,
      type,
      monsterType,
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
