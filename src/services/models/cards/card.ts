export default abstract class Card {
  name: string;
  cardType: string;
  detail: string;

  constructor(name: string, type: string, detail: string) {
    this.name = name;
    this.cardType = type;
    this.detail = detail;
  }
}
