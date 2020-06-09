import { Mines, Coordinates } from 'models';

/**
 * Mutates mines array
 * Returns whether any mine detected or not
 */
export function detectMinesAround(item: number, closedItemsAround: Coordinates[], mines: Mines): boolean {
  let detected = false;

  if (item === closedItemsAround.length) {
    closedItemsAround.forEach(([x, y]) => {
      if (!mines[y][x]) {
        console.log('MINE', x, y);
        detected = true;
        mines[y][x] = true;
      }
    })
  }

  return detected;
}
