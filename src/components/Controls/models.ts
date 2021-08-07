import { AppStatus, GameLevel } from 'constant';
import * as ControlsModels from 'containers/Controls/models';

export interface ControlsProps {
  appStatus: AppStatus;
  cellSize: number;
  gameLevel: GameLevel;
  minesFound: number;
  renderWhileSolving: boolean;
  finishGame: ControlsModels.ActionCreator.FinishGame;
  setCellSize: ControlsModels.ActionCreator.SetCellSize;
  setRenderWhileSolvingValue: ControlsModels.ActionCreator.SetRenderWhileSolvingValue;
  solveUntilWin: ControlsModels.ActionCreator.SolveUntilWin;
  startOver: ControlsModels.ActionCreator.StartOver;
  tryToSolveAutomatically: ControlsModels.ActionCreator.TryToSolveAutomatically;
}
