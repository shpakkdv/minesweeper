/**
 * Mutate mines array
 * Returs weither there is closed items or not
 */
export function detectMinesAround(item: number, closedItemsAround: [number, number][], mines: boolean[][]): void {
  if (item === closedItemsAround.length) {
    closedItemsAround.forEach(([x, y]) => {
      if (!mines[y][x]) {
        // console.warn('MINE', x, y);
        console.log('MINE', x, y);
        mines[y][x] = true;
      }
    })
  }
}
