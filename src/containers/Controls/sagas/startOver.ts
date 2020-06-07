import { call, put, select } from 'redux-saga/effects';

import { setField, setMines } from 'containers/GameField/actions';
import { getMinesweeper } from 'services/Minesweeper';
import { createMines } from 'utils/createMines';
import { Action } from '../models';
import * as controlsSelectors from '../selectors';

export function* startOver(action: Action.StartOver) {
  try {
    const confirmed = confirm('Do you want to start over this level?');
    if (!confirmed) {
      return;
    }

    const gameLevel: ReturnSagaType<typeof controlsSelectors.gameLevel> = yield select(controlsSelectors.gameLevel);

    const minesweeper = getMinesweeper();
    const field: ReturnSagaType<typeof minesweeper.start> = yield call([minesweeper, minesweeper.start], gameLevel);

    yield put(setField(field));
    yield put(setMines(createMines(field)));
  } catch (error) {
    console.warn('Error occurred during starting over.', action, error);
    alert('Error occurred. Please reload the page.');
  }
}
