import { Field, Mines } from 'models';

export function canOpenItem(x: number, y: number, field: Field, mines: Mines): boolean {
  return field[y][x] === -1 && !mines[y][x];
}
