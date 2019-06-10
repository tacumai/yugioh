import NormalMonster from "../../models/cards/monsters/normalMonster";
import { CardType } from "../../models/cards/cardType";
import { Position } from "../../models/cards/monsters/position";
import Monster from "../../models/cards/monsters/monster";

export module MonsterMapper {
  export function build(monster: Object): NormalMonster {
    console.log("==============");
    console.log(monster["name"]);
    console.log(monster["monsterType"]);
    console.log(monster["attribute"]);
    console.log(monster["detail"]);
    console.log(monster["attackScore"]);
    console.log("==============");
    const hoge = new NormalMonster(
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

    console.log(hoge.detail);
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
