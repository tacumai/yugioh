import Duel from "./services/managers/duel";
import Player from "./services/models/players/player";

const firstPlayer = new Player("たろう");
const secondPlayer = new Player("はなこ");
const duel = new Duel(firstPlayer, secondPlayer);

firstPlayer.draw(1);
console.log(firstPlayer.handCards);

// duel.start();
