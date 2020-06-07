import { GameLevel } from 'constant';
import { IAction, Field, Mines } from 'models';

export interface State {
  field: Field;
  mines: Mines;
}

export namespace Payload {
  export interface SetField {
    field: Field;
  }
  export interface SetMines {
    mines: Mines;
  }
  export interface SetMine {
    x: number;
    y: number;
    value: boolean;
  }
  export interface StartGame {
    level: GameLevel;
  }
}

export namespace Action {
  export type SetField = IAction<Payload.SetField>;
  export type SetMines = IAction<Payload.SetMines>;
  export type SetMine = IAction<Payload.SetMine>;
  export type StartGame = IAction<Payload.StartGame>;
}

export namespace ActionCreator {
  export type SetField = (field: Field) => Action.SetField;
  export type SetMines = (mines: Mines) => Action.SetMines;
  export type SetMine = (x: number, y: number, value: boolean) => Action.SetMine;
  export type StartGame = (level: GameLevel) => Action.StartGame;
}
