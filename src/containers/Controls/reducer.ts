import { Reducer } from 'redux';

import { IAction } from 'models';
import { ActionType } from './constants';
import { State, Action } from './models';

const initialState: State = {
  gameLevel: null,
  renderWhileSolving: false,
  appStatus: null,
  cellSize: 40,
};

const reducer: Reducer<State, IAction> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GAME_LEVEL:
      return setGameLevel(state, action);
    case ActionType.SET_APP_STATUS:
      return setAppStatus(state, action);
    case ActionType.SET_CELL_SIZE:
      return setCellSize(state, action);
    case ActionType.SET_RENDER_WHILE_SOLVING_VALUE:
      return setRenderWhileSolvingValue(state, action);

    default:
      return state;
  }
};

export default reducer;

export const setGameLevel: Reducer<State, Action.SetGameLevel> = (state, { payload: { gameLevel } }) => ({
  ...state,
  gameLevel,
});

export const setRenderWhileSolvingValue: Reducer<State, Action.SetRenderWhileSolvingValue> = (state, { payload: { renderWhileSolving } }) => ({
  ...state,
  renderWhileSolving,
});

export const setAppStatus: Reducer<State, Action.SetAppStatus> = (state, { payload: { appStatus } }) => ({
  ...state,
  appStatus,
});

export const setCellSize: Reducer<State, Action.SetCellSize> = (state, { payload: { cellSize } }) => ({
  ...state,
  cellSize,
});
