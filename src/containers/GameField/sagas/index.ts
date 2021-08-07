import { takeLatest, Effect } from 'redux-saga/effects';

import { ActionType } from '../constants';
import { startGame } from './startGame';

const effects: Effect[] = [
  takeLatest(ActionType.START_GAME, startGame),
];

export default effects;
