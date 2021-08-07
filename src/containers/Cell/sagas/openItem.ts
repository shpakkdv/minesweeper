import { call, put } from 'redux-saga/effects';

import { AppStatus } from 'constant';
import { setAppStatus } from 'containers/Controls/actions';
import { setField } from 'containers/GameField/actions';
import { getMinesweeper } from 'services/Minesweeper';
import { Action } from '../models';

export function* openItem(action: Action.OpenItem) {
  try {
    const { x, y } = action.payload;

    const minesweeper: ReturnSagaType<typeof getMinesweeper> = yield call(getMinesweeper);
    const field: ReturnSagaType<typeof minesweeper.openItem> = yield call([minesweeper, minesweeper.openItem], x, y);

    yield put(setField(field));
  } catch (error) {
    yield put(setAppStatus(AppStatus.FINISHED));

    console.warn('Error occurred during opening item', action, error);
    alert(error);
  }
}
