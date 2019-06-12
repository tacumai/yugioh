import NormalMonster from "../../models/cards/monsters/normalMonster";
import { CardType } from "../../models/cards/cardType";
import { Position } from "../../models/cards/monsters/position";
import Monster from "../../models/cards/monsters/monster";

export module MonsterMapper {
  export function build(monster: Object): NormalMonster {
    return new NormalMonster(
      monster["name"],
      CardType.MONSTER,
      monster["monsterType"],
      monster["attribute"],
      monster["detail"],
      monster["attackScore"],
      monster["deffenceScore"],
      Position.ATTACK,
      false
    );
  }
}
