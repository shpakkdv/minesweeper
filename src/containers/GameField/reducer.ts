import { Reducer } from 'redux';

import { createMines } from 'utils/createMines';
import { ActionType } from './constants';
import { State } from './models';

const initialState: State = {
  field: [[]],
  mines: [[]],
};

const reducer = (state = initialState, action) => {
  console.log('my ACTION', action);
  switch (action.type) {
    case ActionType.SET_FIELD:
      return setField(state, action);
    case ActionType.SET_MINES:
      return setMines(state, action);
    case ActionType.SET_MINE:
      return setMine(state, action);

    default:
      return state;
  }
};

export default reducer;

export const setField: Reducer<State> = (state, { payload: { field } }) => {
  let { mines } = state;

  if (mines[0].length === 0) {
    mines = createMines(field);
  }

  return {
    ...state,
    field,
    mines,
  };
};

export const setMines = (state, { payload: { mines } }) => {
  return {
    ...state,
    mines,
  };
};

export const setMine = (state, { payload: { x, y, value } }) => {
  return {
    ...state,
    mines: state.mines.map((row, rowIndex) => rowIndex === y ? row.map((cell, cellIndex) => cellIndex === x ? value : cell) : row),
  };
};
