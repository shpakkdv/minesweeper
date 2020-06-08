import { batchActions } from 'redux-batched-actions';
import { call, put, select } from 'redux-saga/effects';

import { AppStatus, TimeToSolveByLevel } from 'constant';
import { setAppStatus } from 'containers/Controls/actions';
import { setField, setMines } from 'containers/GameField/actions';
import * as gameFiledSelectors from 'containers/GameField/selectors';
import { getMinesweeper } from 'services/Minesweeper';
import { tryToSolve } from 'services/MinesweeperSolving/tryToSolve';
import { Action } from '../models';
import * as controlsSelectors from '../selectors';

export function* tryToSolveAutomatically(action: Action.TryToSolveAutomatically) {
  try {
    const gameLevel: ReturnSagaType<typeof controlsSelectors.gameLevel> = yield select(controlsSelectors.gameLevel);
    const time = TimeToSolveByLevel[gameLevel];

    const confirmed = confirm(`Are you sure you want to try solving? This can take up to ${time}...`);
    if (!confirmed) {
      return;
    }

    yield put(setAppStatus(AppStatus.SOLVING));

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

    yield put(batchActions([
      setField(result.field),
      setMines(result.mines),
      setAppStatus(null),
    ]));

    alert('Unable to continue. Please select the next item manually.');
  } catch (error) {
    yield put(setAppStatus(AppStatus.FINISHED));

    if (typeof error === 'string' && (error.includes('You win') || error.includes('You lose'))) {
      return alert(error);
    }

    console.warn('Error occurred during opening item', action, error);
    alert('Error occurred. Please reload the page.');
  }
}
