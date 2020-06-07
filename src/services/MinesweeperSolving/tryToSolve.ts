import cloneDeep from 'lodash/cloneDeep';

import { GameLevel } from 'constant';
import { Field, Mines } from 'models';
import { checkAssumptions } from 'utils/checkAssumptions';
import { Minesweeper } from '../Minesweeper';
import { updateGameField } from '../updateGameField';
import { runObviousSolving } from './runObviousSolving';
import { startToSolve } from './startToSolve';

interface TryToSolveResult {
  field: Field,
  mines: Mines,
}

export async function tryToSolve(
  minesweeper: Minesweeper,
  field: Field,
  mines: Mines,
  level: GameLevel,
  renderWhileSolving: boolean,
  nested: boolean,
): Promise<TryToSolveResult> {
  let resultField = field;
  let resultMines = nested ? mines : cloneDeep(mines);

  try {
    resultField = await startToSolve(minesweeper, resultField, level, renderWhileSolving);
    resultField = await runObviousSolving(minesweeper, resultField, resultMines, renderWhileSolving);


    let itemToOpen = checkAssumptions(resultField, resultMines);
    while (itemToOpen) {
      resultField = await minesweeper.openItem(...itemToOpen);
      renderWhileSolving && updateGameField(resultField);
      resultField = await runObviousSolving(minesweeper, resultField, resultMines, renderWhileSolving);

      itemToOpen = checkAssumptions(resultField, resultMines);
    }

    return {
      field: resultField,
      mines: resultMines,
    };
  } catch (error) {
    console.warn('Error occurred during trying to solve.', error);
    throw error;
  }
}
