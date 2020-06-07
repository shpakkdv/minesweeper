import { call, put, select } from 'redux-saga/effects';

import { setField, setMines } from 'containers/GameField/actions';
import * as gameFiledSelectors from 'containers/GameField/selectors';
import { getMinesweeper } from 'services/Minesweeper';
import { tryToSolve } from 'services/MinesweeperSolving/tryToSolve';
import { Action } from '../models';
import * as controlsSelectors from '../selectors';

export function* tryToSolveAutomatically(action: Action.TryToSolveAutomatically) {
  try {
    const confirmed = confirm('Are you sure you want to try solving? This can take a lot of time...');
    if (!confirmed) {
      return;
    }

    const gameLevel: ReturnSagaType<typeof controlsSelectors.gameLevel> = yield select(controlsSelectors.gameLevel);
    const renderWhileSolving: ReturnSagaType<typeof controlsSelectors.renderWhileSolving> = yield select(controlsSelectors.renderWhileSolving);
    const field: ReturnSagaType<typeof gameFiledSelectors.field> = yield select(gameFiledSelectors.field);
    const mines: ReturnSagaType<typeof gameFiledSelectors.mines> = yield select(gameFiledSelectors.mines);

    const minesweeper = getMinesweeper();
    const result: ReturnSagaType<typeof tryToSolve> = yield call(
      tryToSolve,
      minesweeper,
      field,
      mines,
      gameLevel,
      renderWhileSolving,
      false,
    );

    yield put(setField(result.field));
    yield put(setMines(result.mines));

    alert('Unable to continue. Please select the next item manually.');
  } catch (error) {
    if (typeof error === 'string' && error.includes('You win')) {
      return alert(error);
    }

    console.warn('Error occurred during opening item', action, error);
    alert('Error occurred. Please reload the page.');
  }
}
