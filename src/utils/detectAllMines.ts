import { Field, Mines } from 'models';
import { detectMinesAround } from './detectMinesAround';
import { getAmountOfClosedCells, getAmountOfMines } from './getAmountOfCells';
import { getClosedItems, getItemsAround, getMines, getCanOpenItems } from './getItems';
import { traverseField } from './traverseField';

export function detectAllMines(field: Field, mines: Mines): void {
  let amountOfClosedCells = getAmountOfClosedCells(field);
  let newAmountOfClosedCells: number = null;
  let amountOfMines = getAmountOfMines(mines);
  let newAmountOfMines: number = null;

  do {
    if (newAmountOfClosedCells) {
      amountOfClosedCells = newAmountOfClosedCells;
      newAmountOfClosedCells = null;
    }
    if (newAmountOfMines) {
      amountOfMines = newAmountOfMines;
      newAmountOfMines = null;
    }

    traverseField(field, (item, x, y, xLength, yLength) => {
      const itemsAround = getItemsAround(x, y, xLength, yLength);
      const closedItemsAround = getClosedItems(itemsAround, field);
      detectMinesAround(item, closedItemsAround, mines);

      // open items
      const minesAround = getMines(itemsAround, mines);
      if (minesAround.length === item) {
        const canOpenItems = getCanOpenItems(itemsAround, field, mines);
        canOpenItems.forEach(([x, y]) => {
          field[y][x] = 0;
        });
      }
    });

    newAmountOfClosedCells = getAmountOfClosedCells(field);
    newAmountOfMines = getAmountOfMines(mines);
  } while (newAmountOfClosedCells < amountOfClosedCells || newAmountOfMines > amountOfMines);
}
