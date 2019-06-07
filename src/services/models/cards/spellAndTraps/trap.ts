import Card from "../card";
import { CardType } from "../cardType";

export default class Trap extends Card {
  constructor(name: string, detail: string) {
    super(name, CardType.TRAP, detail);
  }
}
