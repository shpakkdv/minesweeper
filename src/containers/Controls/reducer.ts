import { Reducer } from 'redux';

import { IAction } from 'models';
import { ActionType } from './constants';
import { State, Action } from './models';

const initialState: State = {
  gameLevel: null,
  loading: false,
  renderWhileSolving: false,
};

const reducer: Reducer<State, IAction> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GAME_LEVEL:
      return setGameLevel(state, action);
    case ActionType.SET_GAME_LOADING:
      return setGameLoading(state, action);
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

export const setGameLoading: Reducer<State, Action.SetGameLoading> = (state, { payload: { loading } }) => ({
  ...state,
  loading,
});

export const setRenderWhileSolvingValue: Reducer<State, Action.SetRenderWhileSolvingValue> = (state, { payload: { renderWhileSolving } }) => ({
  ...state,
  renderWhileSolving,
});
