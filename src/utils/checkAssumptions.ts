import cloneDeep from 'lodash/cloneDeep';

import { detectAllMines } from './detectAllMines';
import { getItemsAround, getMines, getCanOpenItems } from './getItems';
import { validateField } from './validateField';

export function checkAssumptions(originalField: number[][], originalMines: boolean[][]): [number, number] | void {
  const cache: Record<string, boolean> = {};

  for (let y = 0, yLength = originalField.length; y < yLength; y++) {
    const row = originalField[y];

    for (let x = 0, xLength = row.length; x < xLength; x++) {
      const item = row[x];

      const itemsAround = getItemsAround(x, y, xLength, yLength);
      const minesAround = getMines(itemsAround, originalMines);
      const canOpenItems = getCanOpenItems(itemsAround, originalField, originalMines);
      // amount of the rest of mines around current item to find
      const minesLeftNumber = item - minesAround.length;

      if (minesLeftNumber === 1) {
        while (canOpenItems.length > 0) {
          // item to mark as mine
          const [x, y] = canOpenItems.pop();

          const cacheKey = getCacheKey(x, y);
          const hasBeenProcessed = cache[cacheKey];
          if (hasBeenProcessed) {
            continue;
          } else {
            cache[cacheKey] = true;
          }

          const field = cloneDeep(originalField);
          const mines = cloneDeep(originalMines);
          mines[y][x] = true;

          detectAllMines(field, mines);
          const isValidField = validateField(field, mines);

          if (!isValidField) {
            console.warn('ASSUMPTION', x, y);

            return [x, y];
          }
        }
      }
    }
  }
}

function getCacheKey(...args: number[]): string {
  return args.join(',');
}
