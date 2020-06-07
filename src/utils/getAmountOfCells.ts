export function getAmountOfClosedCells(field: number[][]): number {
  return getAmountOfParticularCells(field, (item) => item === -1);
}

export function getAmountOfMines(mines: boolean[][]): number {
  return getAmountOfParticularCells(mines, item => item);
}

function getAmountOfParticularCells(field: number[][], conditionCallback: (item: number, x: number, y: number) => boolean): number;
function getAmountOfParticularCells(mines: boolean[][], conditionCallback: (item: boolean, x: number, y: number) => boolean): number;
function getAmountOfParticularCells(field: any[][], conditionCallback: (item, x: number, y: number) => boolean): number {
  return field.reduce((sum, row, y) => sum + row.reduce((sum, item, x) => sum + (conditionCallback(item, x, y) ? 1 : 0), 0), 0);
}
