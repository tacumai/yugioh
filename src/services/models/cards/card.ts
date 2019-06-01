export default abstract class Card {
  name: string;
  type: string;
  detail: string;

  constructor(name: string, type: string, detail: string) {
    this.name = name;
    this.type = type;
    this.detail = detail;
  }
}
