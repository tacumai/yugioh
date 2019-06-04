import { CardType } from "./cardType";

export default abstract class Card {
  name: string;
  cardType: CardType;
  detail: string;

  constructor(name: string, cardType: CardType, detail: string) {
    this.name = name;
    this.cardType = cardType;
    this.detail = detail;
  }
}
