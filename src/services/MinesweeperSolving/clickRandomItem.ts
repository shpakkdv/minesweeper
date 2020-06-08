import { Field, Mines } from 'models';
import { canOpenItem } from 'utils/canOpenItem';
import { traverseField } from 'utils/traverseField';
import { Minesweeper } from '../Minesweeper';

// TODO: improve the logic
export async function clickRandomItem(minesweeper: Minesweeper, field: Field, mines: Mines): Promise<Field> {
  const [x, y] = traverseField(field, (item, x, y) => {
    if (canOpenItem(x, y, field, mines)) {
      return [x, y];
    }
  }, false);
  console.warn('RANDOM', x, y);

  return minesweeper.openItem(x, y);
}
