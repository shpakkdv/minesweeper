import { takeLatest, Effect } from 'redux-saga/effects';

import { ActionType } from '../constants';
import { openItem } from './openItem';

const effects: Effect[] = [
  takeLatest(ActionType.OPEN_ITEM, openItem),
];

export default effects;
