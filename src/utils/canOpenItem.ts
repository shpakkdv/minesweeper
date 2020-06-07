export function canOpenItem(x: number, y: number, field: number[][], mines: boolean[][]): boolean {
  return field[y][x] === -1 && !mines[y][x];
}
