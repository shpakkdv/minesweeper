import cloneDeep from 'lodash/cloneDeep';

import { GameLevel } from 'constant';
import { Field, Mines } from 'models';
import { canOpenItem } from 'utils/canOpenItem';
import { createMines } from 'utils/createMines';
import { traverseField } from 'utils/traverseField';
import { Minesweeper } from '../Minesweeper';
import { updateGameField } from '../updateGameField';
import { tryToSolve } from './tryToSolve';

export async function solveUntilWin(
  minesweeper: Minesweeper,
  currentField: Field,
  currentMines: Mines,
  gameLevel: GameLevel,
  renderWhileSolving: boolean,
): Promise<never> {
  do {
    let field = currentField;
    let mines = cloneDeep(currentMines);

    while (true) {
      try {
        ({ field, mines } = await tryToSolve(minesweeper, field, mines, gameLevel, renderWhileSolving, true));
        field = await clickRandomItem(minesweeper, field, mines);
        renderWhileSolving && updateGameField(field);
      } catch (error) {
        console.warn('*********** error');
        console.warn(error);

        if (error.includes('You win')) {
          throw error;
        }

        field = await minesweeper.start(gameLevel);
        mines = createMines(field);
        renderWhileSolving && updateGameField(field, mines);
      } finally {
        // store.dispatch({ type: 'SET_FIELD', payload: { field } });
        // store.dispatch({ type: 'SET_MINES', payload: { mines } });
      }
    }
  } while (true);
}


// TODO move
async function clickRandomItem(minesweeper: Minesweeper, field: Field, mines: Mines): Promise<Field> {
  const [x, y] = traverseField(field, (item, x, y) => {
    if (canOpenItem(x, y, field, mines)) {
      return [x, y];
    }
  }, false);
  console.warn('RANDOM', x, y);

  return minesweeper.openItem(x, y);
}
