import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Russian from '../Russian';

export class JosephStalin extends Leader {
  static civilization(): typeof Civilization {
    return Russian;
  }

  name(): string {
    return 'Joseph Stalin';
  }
}

export default JosephStalin;
