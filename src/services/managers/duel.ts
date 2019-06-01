import * as fs from "fs";
import TurnProcessor from "./turnProcessor";

// JSONファイル
import * as data from "json!../../../resources/monsterData.json";
import { dirname } from "path";
import Player from "../models/players/player";

export default class Duel {
  firstPlayer: Player;
  secondPlayer: Player;
  currentPlayer: Player;
  finalDecision: boolean;

  constructor(firstPlayer: Player, secondPlayer: Player) {
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;
    this.finalDecision = false;
    this.firstPlayer.setUpDeck(data);
    this.secondPlayer.setUpDeck(data);
  }

  public start() {
    console.log(data[0].name);
    this.currentPlayer = this.firstPlayer;
    const turnProcessor = new TurnProcessor(this.currentPlayer);

    var count = 0;
    while (!this.finalDecision) {
      count++;
      console.log(
        `現在${count}ターン目で、${this.currentPlayer.name}さんのターンです。` +
          `デッキは ${this.currentPlayer.deck.stock[0]}`
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
