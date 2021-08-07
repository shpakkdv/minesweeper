import { AppStatus, GameLevel } from 'constant';
import { IAction, IEmptyAction } from 'models';

export interface State {
  gameLevel: GameLevel;
  renderWhileSolving: boolean;
  appStatus: AppStatus;
  // from 5 till 100 px
  cellSize: number;
}

export namespace Payload {
  export interface SetAppStatus {
    appStatus: AppStatus;
  }
  export interface SetCellSize {
    cellSize: number;
  }
  export interface SetGameLevel {
    gameLevel: GameLevel;
  }
  export interface SetRenderWhileSolvingValue {
    renderWhileSolving: boolean;
  }
}

export namespace Action {
  export type FinishGame = IEmptyAction;
  export type SetAppStatus = IAction<Payload.SetAppStatus>;
  export type SetCellSize = IAction<Payload.SetCellSize>;
  export type SetGameLevel = IAction<Payload.SetGameLevel>;
  export type SetRenderWhileSolvingValue = IAction<Payload.SetRenderWhileSolvingValue>;
  export type SolveUntilWin = IEmptyAction;
  export type StartOver = IEmptyAction;
  export type TryToSolveAutomatically = IEmptyAction;
}

export namespace ActionCreator {
  export type FinishGame = () => Action.FinishGame;
  export type SetAppStatus = (appStatus: AppStatus) => Action.SetAppStatus;
  export type SetCellSize = (cellSize: number) => Action.SetCellSize;
  export type SetGameLevel = (gameLevel: GameLevel) => Action.SetGameLevel;
  export type SetRenderWhileSolvingValue = (renderWhileSolving: boolean) => Action.SetRenderWhileSolvingValue;
  export type SolveUntilWin = () => Action.SolveUntilWin;
  export type StartOver = () => Action.StartOver;
  export type TryToSolveAutomatically = () => Action.TryToSolveAutomatically;
}
