import { all, Effect } from 'redux-saga/effects';

import cellSagas from 'containers/Cell/sagas';
import controlsSagas from 'containers/Controls/sagas';
import gameFieldSagas from 'containers/GameField/sagas';

export default function* rootSaga() {
  const effects: Effect[] = [
    ...cellSagas,
    ...controlsSagas,
    ...gameFieldSagas,
  ];

  yield all(effects);
}
