import { ActionType } from './constants';
import { ActionCreator } from './models';

export const finishGame: ActionCreator.FinishGame = () => ({
  type: ActionType.FINISH_GAME,
});

export const setGameLevel: ActionCreator.SetGameLevel = (gameLevel) => ({
  type: ActionType.SET_GAME_LEVEL,
  payload: {
    gameLevel,
  },
});

export const setGameLoading: ActionCreator.SetGameLoading = (loading) => ({
  type: ActionType.SET_GAME_LOADING,
  payload: {
    loading,
  },
});

export const setRenderWhileSolvingValue: ActionCreator.SetRenderWhileSolvingValue = (renderWhileSolving) => ({
  type: ActionType.SET_RENDER_WHILE_SOLVING_VALUE,
  payload: {
    renderWhileSolving,
  },
});

export const solveUntilWin: ActionCreator.SolveUntilWin = () => ({
  type: ActionType.SOLVE_UNTIL_WIN,
});

export const startOver: ActionCreator.StartOver = () => ({
  type: ActionType.START_OVER,
});

export const tryToSolveAutomatically: ActionCreator.TryToSolveAutomatically = () => ({
  type: ActionType.TRY_TO_SOLVE_AUTOMATICALLY,
});
