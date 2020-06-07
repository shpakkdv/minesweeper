import { ActionType } from './constants';
import { ActionCreator } from './models';

export const openItem: ActionCreator.OpenItem = (x, y) => ({
  type: ActionType.OPEN_ITEM,
  payload: {
    x,
    y,
  },
});
