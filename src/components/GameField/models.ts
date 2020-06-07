import { AppStatus, GameLevel } from 'constant';
import { Field } from 'models';
import { ActionCreator } from 'containers/GameField/models';

export interface GameFieldProps {
  field: Field;
  gameLevel: GameLevel;
  appStatus: AppStatus;
  startGame: ActionCreator.StartGame;
  cellSize: number;
}
