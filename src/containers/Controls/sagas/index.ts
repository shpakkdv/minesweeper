import { takeLatest, Effect } from 'redux-saga/effects';

import { ActionType } from '../constants';
import { finishGame } from './finishGame';
import { solveUntilWin } from './solveUntilWin';
import { startOver } from './startOver';
import { tryToSolveAutomatically } from './tryToSolveAutomatically';

const effects: Effect[] = [
  takeLatest(ActionType.FINISH_GAME, finishGame),
  takeLatest(ActionType.TRY_TO_SOLVE_AUTOMATICALLY, tryToSolveAutomatically),
  takeLatest(ActionType.SOLVE_UNTIL_WIN, solveUntilWin),
  takeLatest(ActionType.START_OVER, startOver),
];

export default effects;
