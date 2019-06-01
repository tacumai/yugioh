import Player from "../models/players/player";

export default class TurnProcessor {
  player: Player;
  currentPhase: string;

  drawPhase: string;
  standbyPhase: string;
  firstMainPhase: string;
  battlePhase: string;
  secondMainPhase: string;
  endPhase: string;

  constructor(player: Player) {
    this.player = player;
    this.drawPhase = "ドローフェーズです.";
    this.standbyPhase = "スタンバイフェーズです.";
    this.firstMainPhase = "メインフェーズです.";
    this.battlePhase = "バトルフェーズです.";
    this.secondMainPhase = "メインフェーズ2です.";
    this.endPhase = "エンドフェーズです.";
  }

  public exec() {
    console.log(`${this.player.name}: ${this.drawPhase}`);
    console.log(`${this.player.name}: ${this.standbyPhase}`);
    console.log(`${this.player.name}: ${this.firstMainPhase}`);
    console.log(`${this.player.name}: ${this.battlePhase}`);
    console.log(`${this.player.name}: ${this.secondMainPhase}`);
    console.log(`${this.player.name}: ${this.endPhase}`);
  }
}
