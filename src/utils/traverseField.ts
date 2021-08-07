import { Field } from 'models';

type TraverseCallback<T = void> = (
  item: number,
  x: number,
  y: number,
  xLength: number,
  yLength: number,
) => T;

/**
 * Traverses Field by rows
 * @param field
 * @param callback - callback is invoked with every item of the field.
 * If callback returns any truly value, traversal will be stopped and this value will be returned
 * @param skipUselessItems - skip items which don't have mines around or are not opened yet. True by default
 */
export function traverseField<T = void>(field: Field, callback: TraverseCallback<T>, skipUselessItems = true): T {
  for (let y = 0, yLength = field.length; y < yLength; y++) {
    const row = field[y];

    for (let x = 0, xLength = row.length; x < xLength; x++) {
      const item = row[x];

      if (skipUselessItems && item <= 0) {
        continue;
      }

      const stop = callback(item, x, y, xLength, yLength);

      if (stop) {
        return stop;
      }
    }
  }
}
