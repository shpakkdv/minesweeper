import cloneDeep from 'lodash/cloneDeep';

import { detectAllMines } from './detectAllMines';
import { getItemsAround, getMines, getCanOpenItems } from './getItems';
import { validateField } from './validateField';

export function checkAssumptions(originalField: number[][], originalMines: boolean[][]): [number, number] | void {
  console.log('************ ASSUMPTIONS');
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
        console.log('x, y, item', x, y, item);

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
          console.warn('valid', isValidField);

          if (!isValidField) {
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

// function getAllCombinations(items: [number, number][]): [[number, number], [number, number]][] {
//   const result = [] as [[number, number], [number, number]][];

//   for (let i = 0, itemsLength = items.length; i < itemsLength; i++) {
//     const first = items[i];

//     for (let j = i + 1; j < itemsLength; j++) {
//       result.push([first, items[j]]);
//     }
//   }

//   return result;
// }

// function checkAllAssumptions() {
//   for (let i = 1; i < 3; i++) {

//   }
// }
