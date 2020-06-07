import { GameLevel } from 'constant';
import { IAction, IEmptyAction } from 'models';

export interface State {
  gameLevel: GameLevel;
  loading: boolean;
  renderWhileSolving: boolean;
}

export namespace Payload {
  export interface SetGameLevel {
    gameLevel: GameLevel;
  }
  export interface SetGameLoading {
    loading: boolean;
  }
  export interface SetRenderWhileSolvingValue {
    renderWhileSolving: boolean;
  }
}

export namespace Action {
  export type FinishGame = IEmptyAction;
  export type SetGameLevel = IAction<Payload.SetGameLevel>;
  export type SetGameLoading = IAction<Payload.SetGameLoading>;
  export type SetRenderWhileSolvingValue = IAction<Payload.SetRenderWhileSolvingValue>;
  export type SolveUntilWin = IEmptyAction;
  export type StartOver = IEmptyAction;
  export type TryToSolveAutomatically = IEmptyAction;
}

export namespace ActionCreator {
  export type FinishGame = () => Action.FinishGame;
  export type SetGameLevel = (gameLevel: GameLevel) => Action.SetGameLevel;
  export type SetGameLoading = (loading: boolean) => Action.SetGameLoading;
  export type SetRenderWhileSolvingValue = (renderWhileSolving: boolean) => Action.SetRenderWhileSolvingValue;
  export type SolveUntilWin = () => Action.SolveUntilWin;
  export type StartOver = () => Action.StartOver;
  export type TryToSolveAutomatically = () => Action.TryToSolveAutomatically;
}
