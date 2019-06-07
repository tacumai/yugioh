import Card from "../card";
import { CardType } from "../cardType";

export default class Spell extends Card {
  constructor(name: string, detail: string) {
    super(name, CardType.SPELL, detail);
  }
}
