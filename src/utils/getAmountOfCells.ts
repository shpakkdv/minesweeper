import { Field, Mines } from 'models';

export function getAmountOfClosedCells(field: Field): number {
  return getAmountOfParticularCells(field, (item) => item === -1);
}

export function getAmountOfMines(mines: Mines): number {
  return getAmountOfParticularCells(mines, item => item);
}

function getAmountOfParticularCells(field: Field, conditionCallback: (item: number, x: number, y: number) => boolean): number;
function getAmountOfParticularCells(mines: Mines, conditionCallback: (item: boolean, x: number, y: number) => boolean): number;
function getAmountOfParticularCells(field: any[][], conditionCallback: (item, x: number, y: number) => boolean): number {
  return field.reduce((sum, row, y) => sum + row.reduce((rowSum, item, x) => rowSum + (conditionCallback(item, x, y) ? 1 : 0), 0), 0);
}
