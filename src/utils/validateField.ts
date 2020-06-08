import { Field, Mines } from 'models';
import { traverseField } from './traverseField';
import { getItemsAround, getMines, getCanOpenItems } from './getItems';

export function validateField(field: Field, mines: Mines): boolean {
  let isValid = true;

  traverseField<boolean>(field, (item, x, y, xLength, yLength) => {
    const itemsAround = getItemsAround(x, y, xLength, yLength);
    const minesAround = getMines(itemsAround, mines);
    const minesAroundLength = minesAround.length;
    const canOpenItems = getCanOpenItems(itemsAround, field, mines);
    const canOpenItemsLength = canOpenItems.length;

    if (minesAroundLength > item || (canOpenItemsLength + minesAroundLength) < item) {
      isValid = false;

      return true;
    }
  });

  return isValid;
}
