import { canOpenItem } from './canOpenItem';

export function getItemsAround(x: number, y: number, xLength: number, yLength: number): [number, number][] {
  const itemsAround = [] as [number, number][];

  // three items above
  const prevY = y - 1;
  if (y > 0) {
    if (x > 0) {
      // console.log('#1', x - 1, prevY);
      itemsAround.push([x - 1, prevY]);
    }

    // console.log('#2', x, prevY);
    itemsAround.push([x, prevY]);

    if (x < xLength - 1) {
      // console.log('#3', x + 1, prevY);
      itemsAround.push([x + 1, prevY]);
    }
  }

  // left item
  if (x > 0) {
    // console.log('#4', x - 1, y);
    itemsAround.push([x - 1, y]);
  }

  // right item
  if (x < xLength - 1) {
    // console.log('#5', x + 1, y);
    itemsAround.push([x + 1, y]);
  }

  // three items under
  const nextY = y + 1;
  if (nextY < yLength) {
    if (x > 0) {
      // console.log('#6', x - 1, nextY);
      itemsAround.push([x - 1, nextY]);
    }

    // console.log('#7', x, nextY);
    itemsAround.push([x, nextY]);

    if (x < xLength - 1) {
      // console.log('#8', x + 1, nextY);
      itemsAround.push([x + 1, nextY]);
    }
  }

  return itemsAround;
}

export function getClosedItems(items: [number, number][], field: number[][]): [number, number][] {
  return items.filter(([x, y]) => field[y][x] === -1);
}

export function getMines(items: [number, number][], mines: boolean[][]): [number, number][] {
  return items.filter(([x, y]) => mines[y][x]);
}

export function getCanOpenItems(items: [number, number][], field: number[][], mines: boolean[][]): [number, number][] {
  return items.filter(([x, y]) => canOpenItem(x, y, field, mines));
}
