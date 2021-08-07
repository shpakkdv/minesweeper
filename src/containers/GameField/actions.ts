import { ActionType } from './constants';
import { ActionCreator } from './models';

export const setField: ActionCreator.SetField = (field) => ({
  type: ActionType.SET_FIELD,
  payload: {
    field,
  },
});

export const setMines: ActionCreator.SetMines = (mines) => ({
  type: ActionType.SET_MINES,
  payload: {
    mines,
  },
});

export const setMine: ActionCreator.SetMine = (x, y, value) => ({
  type: ActionType.SET_MINE,
  payload: {
    x,
    y,
    value,
  },
});

export const startGame: ActionCreator.StartGame = (level) => ({
  type: ActionType.START_GAME,
  payload: {
    level,
  },
});
