import { batchActions } from 'redux-batched-actions';
import { call, put } from 'redux-saga/effects';

import { AppStatus, MINESWEEPER_URL } from 'constant';
import { startMinesweeper } from 'services/Minesweeper';
import { setAppStatus, setGameLevel } from 'containers/Controls/actions';
import { setField } from '../actions';
import { Action } from '../models';

export function* startGame(action: Action.StartGame) {
  try {
    yield put(setAppStatus(AppStatus.LOADING));

    const { level } = action.payload;

    const minesweeper: ReturnSagaType<typeof startMinesweeper> = yield call(startMinesweeper, MINESWEEPER_URL);
    const field: ReturnSagaType<typeof minesweeper.start> = yield call([minesweeper, minesweeper.start], level);

    yield put(batchActions([
      setField(field),
      setGameLevel(level),
      setAppStatus(null),
    ]));
  } catch (error) {
    console.log('Error occurred during starting the game.', action, error);
  }
}
