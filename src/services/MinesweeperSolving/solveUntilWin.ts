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

    while (true) {
      try {
        ({ field, mines } = await tryToSolve(minesweeper, field, mines, gameLevel, renderWhileSolving, true));
        field = await clickRandomItem(minesweeper, field, mines);
        renderWhileSolving && updateGameField(field);
      } catch (error) {
        console.warn('Error', error);

        if (typeof error === 'string' && error.includes('You win')) {
          throw error;
        }

        field = await minesweeper.start(gameLevel);
        mines = createMines(field);
        renderWhileSolving && updateGameField(field, mines);
      }
    }
  } while (true);
}
