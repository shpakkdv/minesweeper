import { Field, Mines } from 'models';

export function createMines(field: Field): Mines {
  return Array.from<boolean[]>({ length: field.length }).map(() => Array.from<boolean>({ length: field[0].length }).fill(false));
}
