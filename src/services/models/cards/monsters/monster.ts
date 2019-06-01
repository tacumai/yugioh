import Card from "../card";

export default abstract class Monster extends Card {
  monsterType: string;
  race: string;

  attackScore: Number;
  deffenceScore: Number;
  reverse: boolean;
  posture: string;

  constructor(
    name: string,
    type: string,
    monsterType: string,
    race: string,
    detail: string,
    attackScore: Number,
    deffenceScore: Number,
    posture: string,
    reverse: boolean
  ) {
    super(name, type, detail);
    this.monsterType = monsterType;
    this.race = race;
    this.detail = detail;
    this.attackScore = attackScore;
    this.deffenceScore = deffenceScore;
    this.posture = posture;
    this.reverse = reverse;
  }

  abstract attack(monster: string): string;
}
