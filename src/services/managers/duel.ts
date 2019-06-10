import * as fs from "fs";
import TurnProcessor from "./turnProcessor";

// JSONファイル
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
  }
}
