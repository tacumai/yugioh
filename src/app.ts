import Duel from "./services/managers/duel";
import Player from "./services/models/players/player";
import * as data from "json!../../../resources/monsterData.json";
import { MonsterMapper } from "./services/managers/mappers/monsterMapper";
import Monster from "./services/models/cards/monsters/monster";

const monster = MonsterMapper.build(data[0]);
console.log(monster);

const firstPlayer = new Player("たろう");
const secondPlayer = new Player("はなこ");
const duel = new Duel(firstPlayer, secondPlayer);

console.log(data[0]["attackScore"]);
console.log(typeof data[0]);
// firstPlayer.draw(1);
console.log(firstPlayer.handCards);

// duel.start();
