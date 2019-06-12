import * as fs from "fs";
import * as data from "json!../../../resources/monsterData.json";
import { MonsterMapper } from "./services/managers/mappers/monsterMapper";
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

  private setUpDeck(): void {
    const monsters = [];

    data["result"].forEach(monster => {
      monsters.push(MonsterMapper.build(monster));
    });

    this.firstPlayer.deck;
  }
}
