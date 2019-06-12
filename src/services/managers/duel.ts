import * as fs from "fs";
import * as data from "json!../../../resources/monsterData.json";
import { MonsterMapper } from "../managers/mappers/monsterMapper";
import Player from "../models/players/player";
import Card from "../models/cards/card";
import Deck from "../models/cards/deck";

export default class Duel {
  firstPlayer: Player;
  secondPlayer: Player;
  currentPlayer: Player;
  finalDecision: boolean;

  constructor(firstPlayer: Player, secondPlayer: Player) {
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;
    this.finalDecision = false;
    this.setUpDeck();
  }

  private setUpDeck(): void {
    const cards: Card[] = [];

    data["result"].forEach(card => {
      cards.push(MonsterMapper.build(card));
    });

    const deck = new Deck(cards);
    this.firstPlayer.deck = deck;
  }
}
