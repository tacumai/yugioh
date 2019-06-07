import Monster from "./cards/monsters/monster";
import Card from "./cards/card";
import Deck from "./cards/deck";

export default class Field {
  deckZone: Deck;
  exDeckZone: Deck;
  mainMonsterZone: Monster[];
  // TODO: 魔法トラップカードの抽象クラスができたら型を変更
  spellAndTrapZone: Card[];
  fieldSpellZone: Card;
  Graveyard: Card[];

  constructor() {}
}
