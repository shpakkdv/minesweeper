import { batchActions } from 'redux-batched-actions';
import cloneDeep from 'lodash/cloneDeep';

import { IAction } from 'models';
import { setField, setMines } from 'containers/GameField/actions';
import store from 'store';
import { Field, Mines } from 'models';

export const updateGameField = (field: Field, mines?: Mines): void => {
  const actions: IAction[] = [];
  field && actions.push(setField(field));
  mines && actions.push(setMines(cloneDeep(mines)));
  store.dispatch(batchActions(actions));
};
