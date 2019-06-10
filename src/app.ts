import Duel from "./services/managers/duel";
import Player from "./services/models/players/player";
import * as data from "json!../../../resources/monsterData.json";
import { MonsterMapper } from "./services/managers/mappers/monsterMapper";
import Monster from "./services/models/cards/monsters/monster";
import NormalMonster from "./services/models/cards/monsters/normalMonster";

const monsters = [];

data["result"].forEach(monster => {
  monsters.push(MonsterMapper.build(monster));
});

console.log(monsters);
const firstPlayer = new Player("たろう");
const secondPlayer = new Player("はなこ");
const duel = new Duel(firstPlayer, secondPlayer);

// firstPlayer.draw(1);
console.log(firstPlayer.handCards);

// duel.start();
