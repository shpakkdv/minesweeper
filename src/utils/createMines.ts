export function createMines(field: number[][]): boolean[][] {
  return Array.from<boolean[]>({ length: field.length }).map(x => Array.from<boolean>({ length: field[0].length }).fill(false));
}
