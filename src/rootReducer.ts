import { combineReducers } from 'redux';

import controls from 'containers/Controls/reducer';
import gameField from 'containers/GameField/reducer';

const rootReducer = combineReducers({
  controls,
  gameField,
});

export default rootReducer;
