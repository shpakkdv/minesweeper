type TraverseCallback<T = void> = (
  item: number,
  x: number,
  y: number,
  xLength: number,
  yLength: number,
) => T;

export function traverseField<T = void>(field: number[][], callback: TraverseCallback<T>, skipUnusefulItems = true): T {
  for (let y = 0, yLength = field.length; y < yLength; y++) {
    const row = field[y];

    for (let x = 0, xLength = row.length; x < xLength; x++) {
      const item = row[x];

      if (skipUnusefulItems && item <= 0) {
        continue;
      }

      const stop = callback(item, x, y, xLength, yLength);

      if (stop) {
        return stop;
      }
    }
  }
}
