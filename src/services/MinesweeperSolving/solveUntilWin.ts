import cloneDeep from 'lodash/cloneDeep';

import { GameLevel } from 'constant';
import { Field, Mines } from 'models';
import { createMines } from 'utils/createMines';
import { Minesweeper } from '../Minesweeper';
import { updateGameField } from '../updateGameField';
import { clickRandomItem } from './clickRandomItem';
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

    while (true) { // eslint-disable-line no-constant-condition
      try {
        ({ field, mines } = await tryToSolve(minesweeper, field, mines, gameLevel, renderWhileSolving, true));
        field = await clickRandomItem(minesweeper, field, mines);
        renderWhileSolving && updateGameField(field);
      } catch (error) {
        console.warn('Error', error);

        if (typeof error === 'string' && error.includes('You win')) {
          throw error; // eslint-disable-line @typescript-eslint/no-throw-literal
        }

        field = await minesweeper.start(gameLevel);
        mines = createMines(field);
        renderWhileSolving && updateGameField(field, mines);
      }
    }
  } while (true); // eslint-disable-line no-constant-condition
}
