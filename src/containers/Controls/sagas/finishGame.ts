import { call, put } from 'redux-saga/effects';

import { setGameLevel } from 'containers/Controls/actions';
import { setField, setMines } from 'containers/GameField/actions';
import { getMinesweeper } from 'services/Minesweeper';
import { Action } from '../models';

export function* finishGame(action: Action.StartOver) {
  try {
    const confirmed = confirm('Do you want to finish current game?');
    if (!confirmed) {
      return;
    }

    const minesweeper = getMinesweeper();
    yield call([minesweeper, minesweeper.finish]);

    yield put(setField([[]]));
    yield put(setMines([[]]));
    yield put(setGameLevel(null));
  } catch (error) {
    console.warn('Error occurred during finishing the game.', action, error);
    alert('Error occurred. Please reload the page.');
  }
}
