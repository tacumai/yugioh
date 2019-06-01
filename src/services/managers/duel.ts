import * as fs from "fs";
import TurnProcessor from "./turnProcessor";

// JSONファイル
import * as data from "json!../../../resources/monsterData.json";
import { dirname } from "path";

export default class Duel {
  firstPlayer: string;
  secondPlayer: string;
  currentPlayer: string;
  finalDecision: boolean;

  constructor(firstPlayer: string, secondPlayer: string) {
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;
    this.finalDecision = false;
    // this.firstPlayer.setUpDeck();
    // this.secondPlayer.setUpDeck();
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
