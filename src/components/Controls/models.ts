import { GameLevel } from 'constant';
import * as ControlsModels from 'containers/Controls/models';

export interface ControlsProps {
  gameLevel: GameLevel;
  renderWhileSolving: boolean;
  finishGame: ControlsModels.ActionCreator.FinishGame;
  setRenderWhileSolvingValue: ControlsModels.ActionCreator.SetRenderWhileSolvingValue;
  solveUntilWin: ControlsModels.ActionCreator.SolveUntilWin;
  startOver: ControlsModels.ActionCreator.StartOver;
  tryToSolveAutomatically: ControlsModels.ActionCreator.TryToSolveAutomatically;
}
