export default class TurnProcessor {
  player: string;
  currentPhase: string;

  drawPhase: string;
  standbyPhase: string;
  firstMainPhase: string;
  battlePhase: string;
  secondMainPhase: string;
  endPhase: string;

  constructor(player: string) {
    this.player = player;
    this.drawPhase = "ドローフェーズです.";
    this.standbyPhase = "スタンバイフェーズです.";
    this.firstMainPhase = "メインフェーズです.";
    this.battlePhase = "バトルフェーズです.";
    this.secondMainPhase = "メインフェーズ2です.";
    this.endPhase = "エンドフェーズです.";
  }

  public exec() {
    console.log(`${this.player}: ${this.drawPhase}`);
    console.log(`${this.player}: ${this.standbyPhase}`);
    console.log(`${this.player}: ${this.firstMainPhase}`);
    console.log(`${this.player}: ${this.battlePhase}`);
    console.log(`${this.player}: ${this.secondMainPhase}`);
    console.log(`${this.player}: ${this.endPhase}`);
  }
}
