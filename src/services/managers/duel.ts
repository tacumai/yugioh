import { truncate, realpathSync } from "fs";
import TurnProcessor from "./turnProcessor";

export default class Duel {
  firstPlayer: string;
  secondPlayer: string;
  currentPlayer: string;
  finalDecision: boolean;

  constructor(firstPlayer: string, secondPlayer: string) {
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;
    this.finalDecision = false;
  }

  public start() {
    this.currentPlayer = this.firstPlayer;
    const turnProcessor = new TurnProcessor(this.currentPlayer);

    var count = 0;
    while (!this.finalDecision) {
      count++;
      console.log(
        `現在${count}ターン目で、${this.currentPlayer}さんのターンです。`
      );
      console.log("ファイ！！！");
      const turnProcessor = new TurnProcessor(this.currentPlayer);
      turnProcessor.exec();

      if (this.currentPlayer == this.firstPlayer) {
        this.currentPlayer = this.secondPlayer;
      } else {
        this.currentPlayer = this.firstPlayer;
      }

      if (count > 10) {
        break;
      }
    }
  }
}
