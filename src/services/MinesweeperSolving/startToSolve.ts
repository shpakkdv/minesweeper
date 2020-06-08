import { GameLevel } from 'constant';
import { Field } from 'models';
import { getAmountOfClosedCells } from 'utils/getAmountOfCells';
import { Minesweeper } from '../Minesweeper';
import { updateGameField } from '../updateGameField';

export async function startToSolve(minesweeper: Minesweeper, field: Field, level: GameLevel, renderWhileSolving: boolean): Promise<Field> {
  let amountOfClosedCells = getAmountOfClosedCells(field);
  let resultField = field;
  const yLength = resultField.length;
  const xLength = resultField[0].length;
  const itemsNumber = yLength * xLength;

  if (amountOfClosedCells !== itemsNumber) {
    return resultField;
  }

  let x = Math.floor(xLength / 2);
  const y = Math.floor(yLength / 2);

  let openedCellsCount = 0;

  try {
    do {
      resultField = await minesweeper.openItem(x, y);
      renderWhileSolving && updateGameField(resultField);
      amountOfClosedCells = getAmountOfClosedCells(resultField);
      openedCellsCount++;
      // TODO: improve next item logic
      x++;

      if (x >= xLength) {
        x = 0;
      }
      if (resultField[y][x] !== -1) {
        return resultField;
      }
    } while (itemsNumber - openedCellsCount === amountOfClosedCells);
  } catch (error) {
    resultField = await minesweeper.start(level);

    return startToSolve(minesweeper, resultField, level, renderWhileSolving);
  }

  return resultField;
}
