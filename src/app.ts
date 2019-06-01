import Duel from "./services/managers/duel";
import Player from "./services/models/players/player";

const firstPlayer = new Player("たろう");
const secondPlayer = new Player("はなこ");
const duel = new Duel(firstPlayer, secondPlayer);
duel.start();
