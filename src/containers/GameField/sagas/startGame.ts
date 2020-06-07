import { put, delay } from 'redux-saga/effects';

import { MINESWEEPER_URL } from 'constant';
import { Field } from 'models';
import { startMinesweeper, Minesweeper } from 'services/Minesweeper';
import { setGameLevel, setGameLoading } from 'containers/Controls/actions';
import { setField } from '../actions';
import { Action } from '../models';

export function* startGame(action: Action.StartGame) {
  try {
    yield put(setGameLoading(true));

    const { level } = action.payload;

    console.warn('SAGA', action)
    // TODO use call
    // TODO types
    const minesweeper: Minesweeper = yield startMinesweeper(MINESWEEPER_URL);
    const field: Field = yield minesweeper.start(level);

    // TODO batch action
    yield put(setField(field));
    yield put(setGameLevel(level));
    yield put(setGameLoading(false));
  } catch (error) {
    console.log('Error occurred during starting the game.', action, error);
  }
}
