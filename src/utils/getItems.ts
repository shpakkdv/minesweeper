import { Coordinates, Field, Mines } from 'models';
import { canOpenItem } from './canOpenItem';

export function getItemsAround(x: number, y: number, xLength: number, yLength: number): Coordinates[] {
  const itemsAround = [] as Coordinates[];

  // three items above
  const prevY = y - 1;
  if (y > 0) {
    if (x > 0) {
      itemsAround.push([x - 1, prevY]);
    }

    itemsAround.push([x, prevY]);

    if (x < xLength - 1) {
      itemsAround.push([x + 1, prevY]);
    }
  }

  // left item
  if (x > 0) {
    itemsAround.push([x - 1, y]);
  }

  // right item
  if (x < xLength - 1) {
    itemsAround.push([x + 1, y]);
  }

  // three items under
  const nextY = y + 1;
  if (nextY < yLength) {
    if (x > 0) {
      itemsAround.push([x - 1, nextY]);
    }

    itemsAround.push([x, nextY]);

    if (x < xLength - 1) {
      itemsAround.push([x + 1, nextY]);
    }
  }

  return itemsAround;
}

export function getClosedItems(items: Coordinates[], field: Field): Coordinates[] {
  return items.filter(([x, y]) => field[y][x] === -1);
}

export function getMines(items: Coordinates[], mines: Mines): Coordinates[] {
  return items.filter(([x, y]) => mines[y][x]);
}

export function getCanOpenItems(items: Coordinates[], field: Field, mines: Mines): Coordinates[] {
  return items.filter(([x, y]) => canOpenItem(x, y, field, mines));
}
