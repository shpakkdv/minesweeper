import { traverseField } from './traverseField';
import { getItemsAround, getMines, getCanOpenItems } from './getItems';

export function validateField(field: number[][], mines: boolean[][]): boolean {
  let isValid = true;

  traverseField<boolean>(field, (item, x, y, xLength, yLength) => {
    const itemsAround = getItemsAround(x, y, xLength, yLength);
    const minesAround = getMines(itemsAround, mines);
    const minesAroundLength = minesAround.length;
    const canOpenItems = getCanOpenItems(itemsAround, field, mines);
    const canOpenItemsLength = canOpenItems.length;
    // console.warn('VALIDATE - item, x, y', item, x, y);

    if (minesAroundLength > item || (canOpenItemsLength + minesAroundLength) < item) {
      isValid = false;

      return true;
    }
  });

  return isValid;
}
