import * as fs from "fs";
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
    this.firstPlayer.setUpDeck();
    this.secondPlayer.setUpDeck();
  }

  public start() {
    const cards = JSON.parse(
      fs.readFileSync(__dirname + "/resources/monsterData.json", "utf-8")
    );
    console.log(cards[0].name);

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
