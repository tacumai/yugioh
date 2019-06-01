import Duel from "./services/managers/duel";
import * as fs from "fs";

const cards = JSON.parse(
  fs.readFileSync("../../resources/monsterData.json", "utf-8")
);
console.log(cards);

const duel = new Duel("たろう", "はなこ");
duel.start();
