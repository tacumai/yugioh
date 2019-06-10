import Card from "./card";

// TODO: Objectを受け取る感じにしたので、Deck型を受け取るようになおす
export default class Deck {
  stock: Card[];
  constructor(cards: Card[]) {
    this.stock = cards || [];
  }

  public shuffle(): void {
    this.stock.sort(() => Math.random() - 0.5);
  }

  public insertToBottom(card: Card): void {
    this.stock.unshift!(card);
  }

  public insertToTop(card: Card): void {
    this.stock.push!(card);
  }
}
