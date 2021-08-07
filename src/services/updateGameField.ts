import { batchActions } from 'redux-batched-actions';
import cloneDeep from 'lodash/cloneDeep';

import { IAction, Field, Mines } from 'models';
import { setField, setMines } from 'containers/GameField/actions';
// eslint-disable-next-line import/no-cycle
import store from 'store';

export const updateGameField = (field: Field, mines?: Mines): void => {
  const actions: IAction[] = [];
  field && actions.push(setField(field));
  mines && actions.push(setMines(cloneDeep(mines)));
  store.dispatch(batchActions(actions));
};
