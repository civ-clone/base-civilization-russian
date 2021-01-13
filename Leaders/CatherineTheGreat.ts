import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Russian from '../Russian';

export class CatherineTheGreat extends Leader {
  static civilization(): typeof Civilization {
    return Russian;
  }

  name(): string {
    return 'Catherine the Great';
  }
}

export default CatherineTheGreat;
