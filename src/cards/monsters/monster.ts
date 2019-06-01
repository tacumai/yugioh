export default abstract class Monster {
  name: string;
  type: string;
  race: string;
  detail: string;

  attackScore: Number;
  deffenceScore: Number;
  reverse: boolean;
  posture: string;

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
    this.name = name;
    this.type = type;
    this.race = race;
    this.detail = detail;
    this.attackScore = attackScore;
    this.deffenceScore = deffenceScore;
    this.posture = posture;
    this.reverse = reverse;
  }

  abstract attack(monster: string): string;
}
