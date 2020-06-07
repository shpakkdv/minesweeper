import { Field, Mines } from 'models';
import { canOpenItem } from 'utils/canOpenItem';
import { detectMinesAround } from 'utils/detectMinesAround';
import { getAmountOfClosedCells, getAmountOfMines } from 'utils/getAmountOfCells';
import { getClosedItems, getItemsAround, getMines, getCanOpenItems } from 'utils/getItems';
import { Minesweeper } from '../Minesweeper';
import { updateGameField } from '../updateGameField';

export async function runObviousSolving(minesweeper: Minesweeper, field: Field, mines: Mines, renderWhileSolving: boolean): Promise<Field> {
  let resultField = field;
  let resultMines = mines;
  let amountOfClosedCells = getAmountOfClosedCells(field);
  let newAmountOfClosedCells: number = null;
  let amountOfMines = getAmountOfMines(mines);
  let newAmountOfMines: number = null;

  try {
    do {
      if (newAmountOfClosedCells) {
        amountOfClosedCells = newAmountOfClosedCells;
        newAmountOfClosedCells = null;
      }
      if (newAmountOfMines) {
        amountOfMines = newAmountOfMines;
        newAmountOfMines = null;
      }

      for (let y = 0, length = resultField.length; y < length; y++) {
        const row = resultField[y];

        for (let x = 0, rowLength = row.length; x < rowLength; x++) {
          const item = row[x];

          if (item <= 0) {
            continue;
          }

          const itemsAround = getItemsAround(x, y, rowLength, length);
          const closedItemsAround = getClosedItems(itemsAround, resultField);
          const closedItemsAroundLength = closedItemsAround.length;

          if (closedItemsAroundLength === 0) {
            continue;
          }

          // FIRST detect mines
          const detected = detectMinesAround(item, closedItemsAround, resultMines);
          renderWhileSolving && detected && updateGameField(null, resultMines);

          // SECOND open cells without mines
          const minesAround = getMines(itemsAround, resultMines);
          const minesAroundLength = minesAround.length;

          if (minesAroundLength === closedItemsAroundLength) {
            continue;
          }

          if (item === minesAroundLength) {
            const itemsToOpenAround = getCanOpenItems(itemsAround, resultField, resultMines);

            for (let i = 0, itemsToOpenAroundLength = itemsToOpenAround.length; i < itemsToOpenAroundLength; i++) {
              const [x, y] = itemsToOpenAround[i];

              if (canOpenItem(x, y, resultField, resultMines)) {
                resultField = await minesweeper.openItem(x, y);
                renderWhileSolving && updateGameField(resultField);
              }
            }
          }
        }
      }

      newAmountOfClosedCells = getAmountOfClosedCells(resultField);
      newAmountOfMines = getAmountOfMines(resultMines);
    } while (newAmountOfClosedCells < amountOfClosedCells || newAmountOfMines > amountOfMines);
  } catch (error) {
    console.warn('Error occurred during obvious solving.', error);
    throw error;
  }

  return resultField;
}
