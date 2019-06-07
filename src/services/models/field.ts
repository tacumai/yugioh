import Monster from "./cards/monsters/monster";
import Card from "./cards/card";
import Deck from "./cards/deck";

export default class Field {
  deckZone: Deck;
  exDeckZone: Deck;
  mainMonsterZone: { [key: number]: Monster };
  // TODO: 魔法トラップカードの抽象クラスができたら型を変更
  spellAndTrapZone: { [key: number]: Card };
  fieldSpellZone: Card;
  Graveyard: Card[];
  banishmentZone: Card[];

  constructor(deck: Deck, exDeck: Deck) {
    this.deckZone = deck;
    this.exDeckZone = exDeck;
    this.mainMonsterZone = {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null
    };
    this.spellAndTrapZone = {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null
    };
  }
}
