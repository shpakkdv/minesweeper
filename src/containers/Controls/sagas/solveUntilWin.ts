import { call, select } from 'redux-saga/effects';

import * as gameFiledSelectors from 'containers/GameField/selectors';
import { getMinesweeper } from 'services/Minesweeper';
import { solveUntilWin as solve } from 'services/MinesweeperSolving/solveUntilWin';
import { Action } from '../models';
import * as controlsSelectors from '../selectors';

export function* solveUntilWin(action: Action.SolveUntilWin) {
  try {
    const confirmed = confirm('Are you sure you want to start solving until the win? This can take infinity...');
    if (!confirmed) {
      return;
    }

    const gameLevel: ReturnSagaType<typeof controlsSelectors.gameLevel> = yield select(controlsSelectors.gameLevel);
    const renderWhileSolving: ReturnSagaType<typeof controlsSelectors.renderWhileSolving> = yield select(controlsSelectors.renderWhileSolving);
    const field: ReturnSagaType<typeof gameFiledSelectors.field> = yield select(gameFiledSelectors.field);
    const mines: ReturnSagaType<typeof gameFiledSelectors.mines> = yield select(gameFiledSelectors.mines);

    const minesweeper = getMinesweeper();
    yield call(solve, minesweeper, field, mines, gameLevel, renderWhileSolving);

    // yield put(setField(result.field));
    // yield put(setMines(result.mines));
  } catch (error) {
    console.warn('Error occurred during solving until the win.', action, error);
    alert(error);
  }
}
