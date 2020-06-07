/**
 * Mutate mines array
 * Returs whether any mine detected or not
 */
export function detectMinesAround(item: number, closedItemsAround: [number, number][], mines: boolean[][]): boolean {
  let detected = false;

  if (item === closedItemsAround.length) {
    closedItemsAround.forEach(([x, y]) => {
      if (!mines[y][x]) {
        console.log('MINE', x, y);
        detected = true;
        mines[y][x] = true;
      }
    })
  }

  return detected;
}
