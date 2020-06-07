import cloneDeep from 'lodash/cloneDeep';

import { setField, setMines } from 'containers/GameField/actions';
import store from 'store';
import { Field, Mines } from 'models';

export const updateGameField = (field: Field, mines?: Mines): void => {
  field && store.dispatch(setField(field));
  mines && store.dispatch(setMines(cloneDeep(mines)));
};
