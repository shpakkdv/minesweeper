import { createSelector } from 'reselect';

import { getAmountOfMines } from 'utils/getAmountOfCells';
import { State } from './models';

// TODO: types
export const gameField = (state): State => state.gameField;

export const field = (state) => gameField(state).field;
export const mines = (state) => gameField(state).mines;

export const minesFound = createSelector(
  mines,
  mines => getAmountOfMines(mines),
);
