import * as CellFieldModels from 'containers/Cell/models';
import * as GameFieldModels from 'containers/GameField/models';
import { Mines } from 'models';

export interface CellProps {
  x: number;
  y: number;
  value: number;
  mines: Mines;
  setMine: GameFieldModels.ActionCreator.SetMine;
  openItem: CellFieldModels.ActionCreator.OpenItem;
}
